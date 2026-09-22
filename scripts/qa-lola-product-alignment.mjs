// Run through browser_run_code_unsafe. Compare actual image geometry with the source.
async (page) => {
  const results = [];
  const paths = ["/", "/kits", "/volumao-shampoo-250ml-ps-19629-321-p46389"];
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of paths) {
      const pair = {};
      for (const [label, base] of [["source", "https://www.lolacosmetics.com.br"], ["clone", "http://localhost:4360"]]) {
        await page.goto(base + path, { waitUntil: "load" });
        await page.waitForTimeout(1600);
        pair[label] = await page.evaluate(() => {
          const box = e => { const r = e.getBoundingClientRect(); return { x: r.x, y: r.y + scrollY, width: r.width, height: r.height }; };
          const selector = location.pathname === "/" ? ".conteudo-home .wd-product-line img" : location.pathname === "/kits" ? ".wd-product-line img" : ".wd-product-medias img";
          return {
            overflow: document.documentElement.scrollWidth - innerWidth,
            images: [...document.querySelectorAll(selector)].filter(e => e.getBoundingClientRect().width > 0).slice(0, 4).map(box),
          };
        });
        await page.evaluate(() => {
          const e = document.querySelector(location.pathname === "/" ? ".conteudo-home .wd-product-line" : location.pathname === "/kits" ? ".wd-product-line" : ".wd-product-medias");
          if (e) window.scrollTo(0, e.getBoundingClientRect().top + scrollY - 150);
        });
        await page.waitForTimeout(1000); // source product photos load when scrolled into view
        const key = path === "/" ? "home" : path === "/kits" ? "kits" : "pdp";
        await page.screenshot({ path: `docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/alignment-${label}-${key}-${width}-after.png` });
      }
      const maxDelta = Math.max(...pair.source.images.flatMap((a, i) => Object.keys(a).map(k => Math.abs(a[k] - (pair.clone.images[i]?.[k] ?? Infinity)))));
      results.push({ path, width, maxDelta, ...pair });
    }
  }
  return results;
}
