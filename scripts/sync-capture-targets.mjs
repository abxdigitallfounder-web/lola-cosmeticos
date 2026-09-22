// The Playwright MCP runs capture-lola-pages.mjs in a sandbox with no filesystem, so its
// target list has to be inlined. This writes the list from OUTPUT_PLAN into that file.
import fs from "node:fs";

const siteKey = "www-lolacosmetics-com-br-b005530a";
const plan = JSON.parse(fs.readFileSync(`docs/research/${siteKey}/OUTPUT_PLAN.json`, "utf8"));
const only = process.argv[2]; // optional: "todo" to skip targets already captured

const targets = plan.targets
  .filter(t => t.pathname !== "/")
  .filter(t => (only === "todo" ? t.status === "todo" : true))
  .map(t => `    [${JSON.stringify(t.pathname)}, ${JSON.stringify(t.pageKey)}],`)
  .join("\n");

const file = "scripts/capture-lola-pages.mjs";
const source = fs.readFileSync(file, "utf8");
const next = source.replace(/  const targets = \[[\s\S]*?\n  \];/, `  const targets = [\n${targets}\n  ];`);
if (next === source) throw new Error("target list not found in capture script");
fs.writeFileSync(file, next);
console.log(`inlined ${targets.split("\n").length} targets into ${file}`);
