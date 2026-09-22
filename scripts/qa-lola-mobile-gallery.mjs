// Run with Playwright MCP browser_run_code_unsafe. A narrow desktop viewport is
// deliberately NOT sufficient: the origin serves a different template by device.
async (page) => {
  const browser = page.context().browser();
  const devices = [
    { name: "iphone", width: 390, height: 844, userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1" },
    { name: "android", width: 412, height: 915, userAgent: "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36" },
  ];
  const paths = ["/volumao-shampoo-250ml-ps-19629-321-p46389", "/kit-rapunzel-colecao-completa-p46395"];
  const results = [];
  for (const device of devices) {
    const context = await browser.newContext({
      viewport: { width: device.width, height: device.height },
      screen: { width: device.width, height: device.height },
      deviceScaleFactor: 3, isMobile: true, hasTouch: true, userAgent: device.userAgent,
    });
    try {
      // The timed marketing popup can intercept a swipe halfway through the test.
      // Suppress only that third-party popup script; storefront assets remain live.
      await context.route("**/static/scripts/popup.min.js", route => route.abort());
      const mobile = await context.newPage();
      for (const path of paths) {
        const pair = {};
        for (const [label, base] of [["source", "https://www.lolacosmetics.com.br"], ["clone", "http://localhost:4360"]]) {
          await mobile.goto(base + path, { waitUntil: "load" });
          await mobile.waitForTimeout(1500);
          const close = mobile.getByRole("link", { name: "Fechar", exact: true });
          if (await close.count()) await close.click({ timeout: 2000 }).catch(() => {});
          const consent = mobile.getByText("Concordo", { exact: true }).first();
          if (await consent.isVisible()) await consent.tap({ timeout: 2000 }).catch(() => {});
          const gallery = mobile.locator(".wd-product-media-selector2");
          await gallery.waitFor();
          const probe = () => {
            const gallery = document.querySelector(".wd-product-media-selector2");
            const box = el => { const r = el.getBoundingClientRect(); return { x: r.x, y: r.y + scrollY, width: r.width, height: r.height }; };
            return {
              touch: navigator.maxTouchPoints, mobileUA: /iPhone|Android/.test(navigator.userAgent),
              gallery: box(gallery), image: box(gallery.querySelector(".slick-current img")),
              index: Number(gallery.querySelector(".slick-current").getAttribute("data-slick-index")),
              dots: gallery.querySelectorAll(".slick-dots li").length,
              desktopGallery: document.querySelectorAll("figure.wd-product-medias").length,
              broken: [...gallery.querySelectorAll("img")].filter(i => i.complete && !i.naturalWidth).length,
              overflow: document.documentElement.scrollWidth - innerWidth,
            };
          };
          const initial = await mobile.evaluate(probe);
          const key = path.includes("rapunzel") ? "rapunzel" : "volumao";
          await gallery.screenshot({ path: `docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/mobile-gallery-${device.name}-${key}-${label}.png`, scale: "css" });
          await gallery.locator(".slick-dots li button").nth(2).tap();
          await mobile.waitForTimeout(600);
          const afterDot = await mobile.evaluate(probe);
          const bounds = await gallery.locator(".slick-list").boundingBox();
          const session = await context.newCDPSession(mobile);
          const y = bounds.y + bounds.height / 2;
          await session.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: bounds.x + bounds.width * .8, y }] });
          await mobile.waitForTimeout(80);
          for (const ratio of [.65, .5, .35, .2]) {
            await session.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ x: bounds.x + bounds.width * ratio, y }] });
            await mobile.waitForTimeout(80);
          }
          await session.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
          await mobile.waitForTimeout(650);
          await session.detach();
          const afterSwipe = await mobile.evaluate(probe);
          if (initial.desktopGallery || initial.broken || initial.overflow || afterDot.index !== 2 || afterSwipe.index !== (3 % initial.dots)) {
            await mobile.screenshot({ path: `docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/mobile-gallery-failed-${device.name}-${label}.png`, scale: "css" });
            throw new Error(JSON.stringify({ device: device.name, path, label, initial, afterDot, afterSwipe }));
          }
          pair[label] = { initial, afterDot: afterDot.index, afterSwipe: afterSwipe.index };
        }
        results.push({ device: device.name, path, ...pair });
      }
    } finally { await context.close(); }
  }
  return results;
}
