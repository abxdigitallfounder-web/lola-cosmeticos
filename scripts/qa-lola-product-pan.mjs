// Full phone emulation: validate visual viewport panning, not only scrollWidth.
async (page) => {
  const results = [];
  for (const width of [390, 412, 430, 440, 480]) {
    const context = await page.context().browser().newContext({
      viewport: { width, height: 956 }, screen: { width, height: 956 },
      isMobile: true, hasTouch: true, deviceScaleFactor: 3,
      userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 Version/18.5 Mobile/15E148 Safari/604.1",
    });
    try {
      const p = await context.newPage();
      await p.goto("http://localhost:4360/kit-feira-cronolola-ps-19629-250-p46131");
      await p.locator(".wd-product-media-selector2.slick-initialized").waitFor();
      await p.waitForTimeout(300);
      const consent = p.getByText("Concordo", { exact: true }).first();
      if (await consent.isVisible()) await consent.tap();
      const cdp = await context.newCDPSession(p);
      const measure = () => p.evaluate(() => ({
        inner: innerWidth, document: document.documentElement.scrollWidth,
        scrollX, visualWidth: visualViewport.width,
        offset: visualViewport.offsetLeft, scale: visualViewport.scale,
      }));
      const before = await measure();
      // Drag on product information, outside the gallery's intentional swipe area.
      await p.evaluate(() => scrollTo(0, 500));
      for (const direction of [-1, 1]) {
        const start = direction < 0 ? width - 50 : 50;
        await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: start, y: 500 }] });
        for (let i = 1; i <= 8; i++) {
          await cdp.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ x: start + direction * i * 30, y: 500 }] });
        }
        await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
      }
      await p.waitForTimeout(200);
      const after = await measure();
      await p.evaluate(() => scrollTo(0, 0));
      const dots = p.locator(".wd-product-media-selector2 .slick-dots button");
      await dots.nth(1).tap();
      await p.waitForTimeout(650);
      const active = await p.locator(".wd-product-media-selector2").evaluate(el => el.slick.currentSlide);
      results.push({ width, before, after, active });
      if (before.document !== width || after.document !== width || after.offset !== 0 || after.scrollX !== 0 || after.scale !== 1 || active !== 1) {
        throw new Error(JSON.stringify(results));
      }
      if (width === 440) await p.screenshot({ path: "docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/product-pan-fixed-440.png" });
    } finally { await context.close(); }
  }
  return results;
}
