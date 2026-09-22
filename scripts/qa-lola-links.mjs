// Audits where the clone's links actually go: nothing that belongs to the storefront may
// point back at the live site, and every local target has to resolve to a real response.
async (page) => {
  const BASE = "http://127.0.0.1:4350";
  const routes = ["/", "/kits", "/tratamentos", "/colecoes", "/volumao-shampoo-250ml-ps-19629-321-p46389", "/login", "/carrinho"];

  const escaping = new Map();
  const localTargets = new Set();
  const external = new Set();

  for (const route of routes) {
    await page.goto(BASE + route, { waitUntil: "load", timeout: 60000 });
    await page.waitForTimeout(1200);
    const links = await page.evaluate(() => [...document.querySelectorAll("a[href]")].map(a => a.getAttribute("href")));
    for (const href of links) {
      if (!href || href.startsWith("#") || /^(mailto:|tel:|javascript:)/i.test(href)) continue;
      if (/^https?:\/\//i.test(href)) {
        const host = (href.match(/^https?:\/\/([^/?#]+)/i) || [, ""])[1].toLowerCase();
        if (/(^|\.)lolacosmetics\.com\.br$/i.test(host) && host !== "rastrear.lolacosmetics.com.br") {
          escaping.set(href, (escaping.get(href) || 0) + 1);
        } else external.add(host);
        continue;
      }
      localTargets.add(href.split("#")[0]);
    }
  }

  // Every distinct local target must answer; a cloned route renders, the rest fall through.
  const paths = [...localTargets].filter(p => p.startsWith("/")).sort();
  // The sandbox has no fetch, so the probes run inside the page, which is same-origin.
  const bad = await page.evaluate(async list => {
    const check = path => new Promise(resolve => {
      const xhr = new XMLHttpRequest();
      xhr.open("HEAD", path, true);
      xhr.onload = () => resolve([path, xhr.status]);
      xhr.onerror = () => resolve([path, "ERR"]);
      xhr.send();
    });
    const out = [];
    for (let i = 0; i < list.length; i += 10) {
      const results = await Promise.all(list.slice(i, i + 10).map(check));
      out.push(...results.filter(([, s]) => s !== 200));
    }
    return out;
  }, paths);

  return [
    `routes audited: ${routes.length}`,
    `distinct local link targets: ${paths.length}`,
    `targets not answering 200: ${bad.length}${bad.length ? " -> " + bad.slice(0, 8).map(b => b.join(" ")).join(" | ") : ""}`,
    `links still escaping to the live storefront: ${escaping.size}${escaping.size ? " -> " + [...escaping.keys()].slice(0, 5).join(" | ") : ""}`,
    `external hosts kept (expected): ${[...external].sort().join(", ")}`,
  ].join("\n");
}
