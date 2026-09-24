// Browser MCP: adicionar à sacola e a tela de carrinho, em celular emulado de
// verdade (UA, toque, DPR e isMobile) e em desktop. Redimensionar a janela não
// serve: a origem entrega outro template para celulares e o clone segue isso.
async (page) => {
  const BASE = "http://localhost:4360";
  const PDP = "/papo-reto-mascara-270ml-ps-19629-211-p45949";
  const results = {};
  for (const device of [
    { name: "iphone", viewport: { width: 390, height: 844 }, userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1", deviceScaleFactor: 3, hasTouch: true, isMobile: true },
    { name: "android", viewport: { width: 412, height: 915 }, userAgent: "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36", deviceScaleFactor: 3, hasTouch: true, isMobile: true },
    { name: "desktop", viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, hasTouch: false, isMobile: false },
  ]) {
    const context = await page.context().browser().newContext({ ...device, screen: device.viewport });
    try {
      const p = await context.newPage();
      p.setDefaultTimeout(60000);
      p.setDefaultNavigationTimeout(60000);
      const tap = async (locator) => { await locator.scrollIntoViewIfNeeded(); if (device.hasTouch) await locator.tap(); else await locator.click(); };
      const r = {};

      // Página de produto: o botão vive em .product-buy-button-custom e o id sai
      // do input escondido que o formulário da origem postaria.
      await p.goto(BASE + PDP, { waitUntil: "domcontentloaded" });
      await p.waitForTimeout(1600);
      r.device = await p.evaluate(() => document.documentElement.dataset.lolaDevice);
      await tap(p.locator(".product-buy-button-custom .btn-buy").first());
      await p.waitForTimeout(700);
      r.produto = await p.evaluate(() => ({
        drawer: !!document.querySelector("dialog.lola-cart[open]"),
        badge: document.querySelector("#header .basket-size")?.textContent,
        itens: JSON.parse(localStorage.getItem("lola-demo-cart") || "[]").length,
      }));

      // Drawer -> tela de carrinho.
      await p.locator("dialog.lola-cart a.lola-checkout").click();
      await p.waitForURL("**/carrinho**");
      await p.waitForSelector(".lola-basket-row");
      r.carrinho = await p.evaluate(() => {
        const rows = [...document.querySelectorAll(".lola-basket-row")];
        const empty = document.querySelector(".basket-content .wd-checkout-basket > .empty");
        return {
          linhas: rows.length,
          nome: rows[0]?.querySelector("h2")?.textContent,
          total: document.querySelector(".lola-basket-grand strong")?.textContent,
          vazioEscondido: empty ? getComputedStyle(empty).display === "none" : null,
          imagemOk: rows[0]?.querySelector("img")?.naturalWidth > 0,
          overflow: document.documentElement.scrollWidth - window.innerWidth,
        };
      });

      // Quantidade na própria tela, e o contador do header acompanha.
      await tap(p.locator(".lola-basket-qty button").nth(1));
      await p.waitForTimeout(500);
      r.maisUm = await p.evaluate(() => ({
        qtd: document.querySelector(".lola-basket-qty span")?.textContent,
        total: document.querySelector(".lola-basket-grand strong")?.textContent,
        badge: document.querySelector("#header .basket-size")?.textContent,
      }));

      // Card de listagem: o card traz dois .btn-buy e só "Comprar" é visível.
      await p.evaluate(() => localStorage.removeItem("lola-demo-cart"));
      await p.goto(BASE + "/kits", { waitUntil: "domcontentloaded" });
      await p.waitForTimeout(1800);
      await tap(p.locator(".wd-product-line .btn-buy:visible").first());
      await p.waitForTimeout(800);
      r.listagem = await p.evaluate(() => {
        const [item] = JSON.parse(localStorage.getItem("lola-demo-cart") || "[]");
        return { drawer: !!document.querySelector("dialog.lola-cart[open]"), nome: item?.name, preco: item?.price };
      });

      await p.goto(BASE + "/carrinho", { waitUntil: "domcontentloaded" });
      await p.waitForSelector(".lola-basket-row");
      await p.screenshot({ path: `docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/cart-${device.name}.png` });

      // Esvaziar devolve o estado "vazio" capturado da origem.
      await tap(p.locator(".lola-basket-remove").first());
      await p.waitForTimeout(500);
      r.esvaziado = await p.evaluate(() => {
        const empty = document.querySelector(".basket-content .wd-checkout-basket > .empty");
        return { linhas: document.querySelectorAll(".lola-basket-row").length, vazioVisivel: empty ? getComputedStyle(empty).display !== "none" : null };
      });
      results[device.name] = r;
    } finally {
      await context.close();
    }
  }
  return results;
};
