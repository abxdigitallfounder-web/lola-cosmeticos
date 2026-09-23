import fs from "node:fs";
import { load } from "cheerio";
import { createSanitizer } from "./lib/lola-sanitize.mjs";

const site = "www-lolacosmetics-com-br-b005530a/root-8a5edab2";
const root = `docs/research/${site}`;
const out = `src/components/sites/${site}`;
const phone = JSON.parse(fs.readFileSync(`${root}/phone-home-extraction.json`));
const desktop = JSON.parse(fs.readFileSync(`${root}/desktop-extraction.json`));
const loaded = JSON.parse(fs.readFileSync(`${root}/loaded-extraction.json`));
const manifest = JSON.parse(fs.readFileSync(`${root}/asset-manifest.json`));
const { rewrite, local } = createSanitizer(manifest);
const fragments = {};
// The original banner hrefs are click-tracking endpoints, not catalogue pages.
// Resolve captured redirects, then use the corresponding existing local collections
// for source aliases and discontinued campaign slugs that were never separate routes.
const aliases = {
  "/banana-tropicana": "/colecoes/banana-tropicana", "/bossa": "/colecoes/bossa",
  "/liso": "/tipos-de-cabelo/liso", "/cabelos-com-curvatura": "/tipos-de-cabelo/cacheado",
  "/cabelos": "/tipos-de-cabelo", "/linhas": "/colecoes",
};
const destinations = new Map((phone.linkDestinations || []).map(d => [d.href, d.url]));
for (const [name, section] of Object.entries(phone.sections)) {
  const $ = load(section?.html || "", {}, false);
  $("a[href]").each((_, el) => {
    const href = new URL($(el).attr("href"), phone.url).href;
    const target = destinations.get(href);
    if (!target) return;
    const url = new URL(target);
    const path = aliases[url.pathname] || (/^\/LISTAS\/SEMANA-DO-CONSUMIDOR-/i.test(url.pathname) ? "/promocao/semana-da-lolete" : url.pathname);
    $(el).attr("href", path + url.search + url.hash);
  });
  fragments[name] = section ? createSanitizer(manifest, section.sliders).clean($.html()) : "";
}
fs.writeFileSync(`${out}/phone-fragments.json`, JSON.stringify(fragments, null, 2));
fs.writeFileSync(`${out}/phone-media-data.json`, JSON.stringify(phone.shadows.map(s => ({
  tag: s.tag, html: rewrite(s.html), images: s.images.map(i => ({ ...i, src: local(i.src), poster: local(i.poster) })),
})), null, 2));
const commonSheets = new Set(desktop.stylesheets.map(s => s.url));
const commonInline = new Set(loaded.inlineStyles);
const css = [
  ...phone.stylesheets.filter(s => !commonSheets.has(s.url)).map(s => fs.readFileSync("public" + manifest[s.url], "utf8")),
  ...phone.inlineStyles.filter(s => s && !commonInline.has(s)),
].join("\n");
fs.writeFileSync(`public/sites/${site}/phone-home.css`, `@scope (html[data-lola-device="phone"][data-lola-path="/"]) {\n${rewrite(css).replace(/@import\s+[^;]+;/g, "").replace(/@charset\s+[^;]+;/g, "")}\n}\n`);
console.log(`Prepared ${Object.keys(fragments).length} phone home fragments and ${phone.shadows.length} video widgets`);
