// Walks every cloned route in the local build, recording console errors, failed requests
// and a few layout signals, then screenshots each one next to its captured reference.
async (page) => {
  const BASE = "http://127.0.0.1:4351";
  const routes = [
    ["/", "root-8a5edab2"],
    ["/kits", "kits-05782adf"],
    ["/tratamentos", "tratamentos-8a17264f"],
    ["/tipos-de-cabelo", "tipos-de-cabelo-c8d37892"],
    ["/colecoes", "colecoes-b8394c56"],
    ["/lancamentos", "lancamentos-11622ffd"],
    ["/promocao", "promocao-8e631b9a"],
    ["/tratamentos/cronograma-capilar", "tratamentos-cronograma-capilar-e590e43e"],
    ["/colecoes/babados-da-lola", "colecoes-babados-da-lola-39f96520"],
    ["/volumao-shampoo-250ml-ps-19629-321-p46389", "volumao-shampoo-250ml-ps-19629-321-p46389-68be359d"],
    ["/kit-a-formula-lamelar-p46345", "kit-a-formula-lamelar-p46345-dcfe78d8"],
    ["/login", "login-7e93fba0"],
    ["/carrinho", "carrinho-1bc30c37"],
    ["/kit-rapunzel-colecao-completa-p46395", "kit-rapunzel-colecao-completa-p46395-73b5c8ee"],
    ["/plot-twist-guava-oil-90-ml-ps-19629-151-p45413", "plot-twist-guava-oil-90-ml-ps-19629-151-p45413-45c5209d"],
    ["/touca-turbante-ps-19629-268-p46204", "touca-turbante-ps-19629-268-p46204-c1e162f4"],
    ["/kit-feira-cronolola-ps-19629-250-p46131", "kit-feira-cronolola-ps-19629-250-p46131-ca1686e4"],
    ["/uma-rota-que-nao-foi-clonada", null],
  ];

  const rows = [];
  for (const [route, key] of routes) {
    const errors = [];
    const failed = [];
    const onConsole = m => { if (m.type() === "error") errors.push(m.text().slice(0, 110)); };
    const onFailed = r => failed.push(r.url().replace(BASE, "").slice(0, 90));
    const onResponse = r => { if (r.status() >= 400) failed.push(`${r.status()} ${r.url().replace(BASE, "").slice(0, 80)}`); };
    page.on("console", onConsole);
    page.on("requestfailed", onFailed);
    page.on("response", onResponse);

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(BASE + route, { waitUntil: "load", timeout: 60000 });
    await page.waitForTimeout(2200);

    const signals = await page.evaluate(() => ({
      body: document.body.className,
      header: !!document.querySelector("#header"),
      footer: !!document.querySelector("#footer"),
      sliders: document.querySelectorAll("[data-lola-slider]").length,
      slickReady: document.querySelectorAll(".slick-initialized").length,
      products: document.querySelectorAll('li[class*="product-"]').length,
      doc: Math.round(document.documentElement.scrollHeight),
      brokenImages: [...document.images].filter(i => i.complete && i.naturalWidth === 0).length,
      images: document.images.length,
    }));

    if (key) await page.screenshot({ path: `docs/design-references/www-lolacosmetics-com-br-b005530a/${key}/qa-clone-desktop.png` });

    page.off("console", onConsole);
    page.off("requestfailed", onFailed);
    page.off("response", onResponse);

    rows.push(`${route}
    body="${signals.body}" doc=${signals.doc}px imgs=${signals.images} broken=${signals.brokenImages} sliders=${signals.slickReady}/${signals.sliders} products=${signals.products} header=${signals.header} footer=${signals.footer}
    consoleErrors=${errors.length}${errors.length ? " -> " + errors.slice(0, 2).join(" | ") : ""}
    failedRequests=${failed.length}${failed.length ? " -> " + [...new Set(failed)].slice(0, 3).join(" | ") : ""}`);
  }
  return rows.join("\n");
}
