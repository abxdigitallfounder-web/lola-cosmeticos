// Browser MCP: passo Entrega do /checkout/easy, em celular emulado de verdade
// (UA, toque, DPR, isMobile) e desktop. É um checkout de demonstração: nada de
// endereço ou pagamento é enviado a lugar nenhum.
async (page) => {
  const BASE = "http://localhost:4360";
  const seed = [{ id: "46377", name: "Kit Feira Cronolola", image: "/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/46377_kit-celebridades-ps-19629-316_s1_639219551674436362-fb3283622f.webp", price: 99.9, quantity: 1 }];
  const results = {};
  for (const device of [
    { name: "iphone", viewport: { width: 390, height: 844 }, userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1", deviceScaleFactor: 3, hasTouch: true, isMobile: true },
    { name: "desktop", viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, hasTouch: false, isMobile: false },
  ]) {
    const context = await page.context().browser().newContext({ ...device, screen: device.viewport });
    try {
      const p = await context.newPage();
      p.setDefaultTimeout(60000); p.setDefaultNavigationTimeout(60000);
      const tap = async (loc) => { await loc.scrollIntoViewIfNeeded(); if (device.hasTouch) await loc.tap(); else await loc.click(); };
      const r = {};

      // A tela de carrinho leva ao checkout.
      await p.goto(BASE + "/carrinho", { waitUntil: "domcontentloaded" });
      await p.evaluate((s) => localStorage.setItem("lola-demo-cart", JSON.stringify(s)), seed);
      await p.reload({ waitUntil: "domcontentloaded" });
      await p.waitForSelector(".lola-basket-checkout");
      r.linkParaCheckout = (await p.getAttribute(".lola-basket-checkout", "href"))?.includes("/checkout/easy");
      await tap(p.locator(".lola-basket-checkout"));
      await p.waitForURL("**/checkout/easy**");
      await p.waitForSelector(".co-body");
      await p.waitForTimeout(500);

      r.entrega = await p.evaluate(() => ({
        device: document.documentElement.dataset.lolaDevice,
        h1: document.querySelector(".co-h1")?.textContent,
        passoAtivo: document.querySelector(".co-step.active")?.textContent,
        produto: document.querySelector(".co-card-item .co-item-name")?.textContent,
        total: document.querySelector(".co-total")?.textContent,
        overflow: document.documentElement.scrollWidth - window.innerWidth,
        logoOk: document.querySelector(".co-logo img")?.naturalWidth > 0,
        miniOk: document.querySelector(".co-card-item img")?.naturalWidth > 0,
      }));

      // Formulário de endereço (demonstração).
      await tap(p.locator(".co-addr-btn"));
      await p.waitForTimeout(300);
      r.formAbre = await p.evaluate(() => !!document.querySelector(".co-form"));
      await tap(p.locator(".co-btn-save"));
      await p.waitForTimeout(300);
      r.aposSalvar = await p.evaluate(() => !!document.querySelector(".co-confirm"));

      // Continuar mostra o aviso de demonstração.
      await tap(p.locator(".co-continue"));
      await p.waitForTimeout(300);
      r.avisoDemo = await p.evaluate(() => !!document.querySelector(".co-demo-notice"));

      await p.screenshot({ path: `docs/design-references/www-lolacosmetics-com-br-b005530a/checkout-easy-819da193/checkout-${device.name}.png`, fullPage: true });
      results[device.name] = r;
    } finally {
      await context.close();
    }
  }
  return results;
};
