// Browser MCP: compare the actual phone template, not a resized desktop window.
async (page) => {
  const results = [];
  for (const device of [
    { name: "iphone", width: 390, height: 844, userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1" },
    { name: "android", width: 412, height: 915, userAgent: "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36" },
  ]) {
    const context = await page.context().browser().newContext({
      viewport: { width: device.width, height: device.height }, screen: { width: device.width, height: device.height },
      userAgent: device.userAgent, deviceScaleFactor: 3, hasTouch: true, isMobile: true,
    });
    try {
      await context.route("**/static/scripts/popup.min.js", r => r.abort());
      const mobile = await context.newPage();
      for (const path of ["/", "/kits", "/volumao-shampoo-250ml-ps-19629-321-p46389"]) {
        const pair = {};
        for (const [label, base] of [["source", "https://www.lolacosmetics.com.br"], ["clone", "http://localhost:4360"]]) {
          await mobile.goto(base + path, { waitUntil: "load" });
          await mobile.waitForTimeout(1000);
          pair[label] = await mobile.evaluate(() => {
            const selectors = ["#header", "#header .hamburguer > svg", "#header #logo", "#header .search-field", "#header .wd-search button", "#header .area-rastrear", "#header .icons-resume", "#header .basket"];
            return {
              overflow: document.documentElement.scrollWidth - innerWidth,
              elements: selectors.map(selector => {
                const e = document.querySelector(selector); const r = e.getBoundingClientRect();
                return { selector, x: r.x, y: r.y, width: r.width, height: r.height };
              }),
            };
          });
          const key = path === "/" ? "home" : path === "/kits" ? "kits" : "product";
          await mobile.screenshot({ path: `docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/header-phone-${device.name}-${key}-${label}.png`, clip: { x: 0, y: 0, width: device.width, height: 190 }, scale: "css" });
        }
        const maxDelta = Math.max(...pair.source.elements.flatMap((e, i) => ["x", "y", "width", "height"].map(k => Math.abs(e[k] - pair.clone.elements[i][k]))));
        results.push({ device: device.name, path, maxDelta, ...pair });
      }
      await mobile.goto("http://localhost:4360/", { waitUntil: "load" });
      await mobile.waitForTimeout(900);
      const consent = mobile.getByText("Concordo", { exact: true }).first();
      if (await consent.isVisible()) await consent.tap();
      await mobile.locator("#header .hamburguer > svg").tap();
      await mobile.waitForTimeout(400);
      const menuOpen = await mobile.locator("#header .dropdown-menu").evaluate(e => e.classList.contains("active-menu"));
      const toggle = mobile.locator("#header .dropdown-menu .accordion-trigger:visible").first();
      await toggle.tap();
      const expanded = await toggle.getAttribute("aria-expanded");
      await mobile.locator("#header .close-hamburguer").tap();
      await mobile.waitForTimeout(400);
      await mobile.locator("#header .search-field").fill("volumao");
      await mobile.locator("#header .suggestion-product").first().waitFor({ state: "visible" });
      const suggestions = await mobile.locator("#header .suggestion-product").count();
      const searchRect = await mobile.locator("#header .search-field").boundingBox();
      const suggestionRect = await mobile.locator("#header .suggestion-box").boundingBox();
      const suggestionsBelowInput = suggestionRect.y >= searchRect.y + searchRect.height;
      if (!suggestionsBelowInput) throw new Error("Search suggestions cover the mobile header");
      await mobile.locator("#header #logo a").tap();
      await mobile.waitForTimeout(800);
      await mobile.locator("#header .basket > a").tap();
      await mobile.locator("dialog.lola-cart").waitFor({ state: "visible" });
      const cart = await mobile.locator("dialog.lola-cart").isVisible();
      if (!menuOpen || expanded !== "true" || !suggestions || !cart) throw new Error(JSON.stringify({ device: device.name, menuOpen, expanded, suggestions, cart }));
      results.push({ device: device.name, interactions: { menuOpen, expanded, suggestions, suggestionsBelowInput, cart } });
    } finally { await context.close(); }
  }
  return results;
}
