// Cold navigation with mobile UA, screen, touch and delayed hydration chunks.
async (page) => {
  const results = [];
  for (const width of [390, 412]) {
    const context = await page.context().browser().newContext({
      viewport: { width, height: 844 }, screen: { width, height: 844 },
      isMobile: true, hasTouch: true, deviceScaleFactor: 3,
      userAgent: width === 390
        ? "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 Version/18.5 Mobile/15E148 Safari/604.1"
        : "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 Chrome/140.0.0.0 Mobile Safari/537.36",
    });
    try {
      await context.route("**/_next/**/*.js", async route => {
        await context.pages()[0].waitForTimeout(2000);
        await route.continue();
      });
      for (const path of ["/necessaire-doce-vida-ps-19629-293-p46295", "/kit-completo-banana-tropicana-p46408"]) {
        const p = await context.newPage();
        const errors = [];
        p.on("pageerror", error => errors.push(error.message));
        await p.addInitScript(() => {
          window.galleryFrames = [];
          function sample() {
            const img = document.querySelector(".wd-product-media-selector2 img,figure.wd-product-medias .zoom img");
            if (img) {
              const r = img.getBoundingClientRect();
              window.galleryFrames.push({ t: Math.round(performance.now()), width: r.width, height: r.height, x: r.x, y: r.y, phone: !!img.closest(".wd-product-media-selector2") });
            }
            requestAnimationFrame(sample);
          }
          requestAnimationFrame(sample);
        });
        await p.goto("http://localhost:4360" + path);
        await p.locator(".wd-product-media-selector2.slick-initialized").waitFor({ timeout: 25000 });
        await p.waitForTimeout(500);
        const result = await p.evaluate(() => {
          const frames = window.galleryFrames.filter(f => f.width > 0);
          return { first: frames[0], last: frames.at(-1), maxWidth: Math.max(...frames.map(f => f.width)), minWidth: Math.min(...frames.map(f => f.width)), overflow: document.documentElement.scrollWidth - innerWidth, initialized: !!document.querySelector(".wd-product-media-selector2.slick-initialized") };
        });
        results.push({ width, path, ...result, errors });
        if (!result.initialized || result.maxWidth - result.minWidth > 1 || result.overflow > 0 || errors.length) throw new Error(JSON.stringify(results));
        await p.close();
      }
    } finally { await context.unrouteAll({ behavior: "ignoreErrors" }); await context.close(); }
  }
  return results;
}
