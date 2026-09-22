// Turns each captured secondary page into a route: sanitized fragments, one wrapper per
// captured block, and a page.tsx that rebuilds the source's #main/#middle/#content shell.
// The home page keeps its own script because it carries the media widgets and the mobile
// header/hero variants; everything these two share lives in lib/lola-sanitize.mjs.
import fs from "node:fs";
import path from "node:path";
import { load } from "cheerio";
import { createSanitizer } from "./lib/lola-sanitize.mjs";

const siteKey = "www-lolacosmetics-com-br-b005530a";
const plan = JSON.parse(fs.readFileSync(`docs/research/${siteKey}/OUTPUT_PLAN.json`, "utf8"));
const manifest = JSON.parse(fs.readFileSync(`docs/research/${siteKey}/root-8a5edab2/asset-manifest.json`, "utf8"));
const shared = `@/components/sites/${siteKey}/shared`;

// The storefront tags <body> and #main with the browser and viewport it rendered for.
// Those say nothing about the page, so they are dropped and the semantic classes kept.
const meaningful = value => (value || "").split(/\s+/).filter(Boolean)
  .filter(c => !/^chrome\d*$/.test(c) && !/^r\d+$/.test(c) && c !== "chrome").join(" ");

const report = [];
// Every interior route is regenerated on each run; the home page has its own script.
for (const target of plan.targets.filter(t => t.pathname !== "/")) {
  const extraction = path.join(target.research, "loaded-extraction.json");
  if (!fs.existsSync(extraction)) { report.push(`${target.pathname}: no capture, skipped`); continue; }
  const d = JSON.parse(fs.readFileSync(extraction, "utf8"));

  // Each page gets its own sanitizer so slider options are consumed per document.
  const { clean } = createSanitizer(manifest);
  const $ = load(d.html);

  // The theme reaches into this markup with child combinators, so the whole #middle
  // subtree is replayed as one fragment instead of one component per block: any React
  // host element between #content-wrapper and .row would break `#content-wrapper>.row`.
  const middle = $("#middle").first();
  if (!middle.length) { report.push(`${target.pathname}: no #middle in capture, skipped`); continue; }
  const fragments = { PageContent: clean($.html(middle)) };

  fs.mkdirSync(target.components, { recursive: true });
  fs.writeFileSync(path.join(target.components, "fragments.json"), JSON.stringify(fragments, null, 2));
  fs.writeFileSync(path.join(target.components, "PageContent.tsx"),
    `import SourceSection from "../shared/SourceSection";\nimport fragments from "./fragments.json";\nexport default function PageContent() { return <SourceSection name="PageContent" html={fragments.PageContent} />; }\n`);

  const mainClass = meaningful(d.mainClass);
  const bodyClass = meaningful(d.bodyClass);
  const names = Object.keys(d.sections);

  const pageDir = path.dirname(target.routeFile);
  fs.mkdirSync(pageDir, { recursive: true });
  const rel = `@/components/sites/${siteKey}/${target.pageKey}`;
  const attr = (name, value) => (value ? ` ${name}="${value}"` : "");
  const page = `import type { Metadata } from "next";
import Header from "${shared}/Header";
import Footer from "${shared}/Footer";
import ShopInteractions from "${shared}/ShopInteractions";
import BodyClass from "${shared}/BodyClass";
import PageContent from "${rel}/PageContent";

export const metadata: Metadata = ${JSON.stringify({ title: d.title })};

// Captured ${target.template} page. Everything between the header and the footer is the
// source's own #middle subtree, replayed whole so the theme's selectors keep matching.
export default function Page() {
  return (
    <>
      <BodyClass value=${JSON.stringify(bodyClass)} />
      <section id="main"${attr("className", mainClass)}>
        <Header />
        <div id="bg-search" />
        <PageContent />
        <Footer />
        <ShopInteractions />
      </section>
    </>
  );
}
`;
  fs.writeFileSync(target.routeFile, page);

  const specDir = path.join(target.research, "components");
  fs.mkdirSync(specDir, { recursive: true });
  for (const name of names) {
    const specPath = path.join(specDir, `${name}.spec.md`);
    if (fs.existsSync(specPath)) continue;
    const text = load(d.sections[name].html).text().replace(/\s+/g, " ").trim();
    fs.writeFileSync(specPath, `# ${name} Specification

## Overview
- Target: ${target.components}${name}.tsx
- Route: ${target.pathname} (${target.template})
- Source: ${target.url}
- Screenshot: ${target.screenshots}desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for \`${d.sections[name].selector}\` is stored as fragments.${name}
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "${bodyClass}" and #main class "${mainClass}",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/${siteKey}/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
${text.slice(0, 4000)}

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
`);
  }

  report.push(`${target.pathname} -> ${target.routeFile} (${names.length} sections: ${names.join(", ")})`);
}
console.log(report.join("\n"));
