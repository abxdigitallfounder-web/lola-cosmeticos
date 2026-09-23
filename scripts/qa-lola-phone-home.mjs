// Compare all home sections using full device contexts, not desktop resize emulation.
async (page) => {
  const results = [];
  for (const device of [
    { name: "iphone", width: 390, height: 844, userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1" },
    { name: "android", width: 412, height: 915, userAgent: "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36" },
  ]) {
    const context = await page.context().browser().newContext({ viewport: { width: device.width, height: device.height }, screen: { width: device.width, height: device.height }, userAgent: device.userAgent, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
    try {
      await context.route("**/static/scripts/popup.min.js", r => r.abort());
      const mobile = await context.newPage();
      const pair = {};
      for (const [label, base] of [["source", "https://www.lolacosmetics.com.br"], ["clone", "http://localhost:4360"]]) {
        await mobile.goto(base + "/", { waitUntil: "load" });
        await mobile.waitForTimeout(1600);
        const consent = mobile.getByText("Concordo", { exact: true }).first();
        if (await consent.isVisible()) await consent.tap();
        await mobile.evaluate(async () => {
          for (const slider of document.querySelectorAll(".slick-slider")) slider.slick?.slickPause();
          for (let y = 0; y < document.documentElement.scrollHeight; y += 550) { scrollTo(0, y); await new Promise(r => setTimeout(r, 150)); }
          await document.fonts.ready;
          for (const slider of document.querySelectorAll(".slick-slider")) slider.slick?.slickGoTo(0, true);
          scrollTo(0, 0);
        });
        await mobile.waitForTimeout(800);
        pair[label] = await mobile.evaluate(label => {
          const source = label === "source";
          const selectors = {
            Header: "#header", Search: "#header .search-field", Hero: ".fullbanner",
            Highlights: source ? "widde-pro-highlights" : '[data-media-stories="highlights"]',
            Categories: ".navegue-categoria", Favorites: source ? ".conteudo-home > .wrapper:nth-child(1)" : '[data-section="Favorites"] > .wrapper',
            HairTypes: "#tipos-cabelos", Videos: source ? "widde-pro-carousel" : '[data-media-stories="carousel"]',
            DailyDeals: source ? ".conteudo-home > .wrapper:nth-child(4)" : '[data-section="DailyDeals"] > .wrapper',
            Launches: ".fundo-vitrine", Collector: source ? ".conteudo-home > .wrapper:nth-child(7)" : '[data-section="Collector"] > .wrapper',
            BeforeAfter: ".post-avaliacao", Affiliate: ".banners.condicoes", Blog: "#conteudo-lolistico", Reviews: "#trustvox-carousel-root", Footer: "#footer",
          };
          const box = e => { if (!e) return null; const r = e.getBoundingClientRect(); return { x: r.x, y: r.y + scrollY, width: r.width, height: r.height }; };
          return {
            sections: Object.fromEntries(Object.entries(selectors).map(([name, selector]) => [name, box(document.querySelector(selector))])),
            docHeight: document.documentElement.scrollHeight, overflow: document.documentElement.scrollWidth - innerWidth,
            broken: [...document.images].filter(i => i.complete && !i.naturalWidth).map(i => i.getAttribute("src")),
            sliders: [...document.querySelectorAll(".slick-slider")].map(e => ({ slides: e.slick?.slideCount, visible: e.slick?.options.slidesToShow })),
          };
        }, label);
        await mobile.screenshot({ path: `docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/phone-home-${device.name}-${label}-full.png`, fullPage: true, scale: "css" });
        for (const [key, selector] of [["top", ".fullbanner"], ["products", ".navegue-categoria"], ["deals", sourceSelector(label)], ["bottom", "#conteudo-lolistico"]]) {
          await mobile.evaluate(selector => { const el = document.querySelector(selector); if (el) scrollTo(0, Math.max(0, el.getBoundingClientRect().top + scrollY - 185)); }, selector);
          await mobile.waitForTimeout(250);
          await mobile.screenshot({ path: `docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/phone-home-${device.name}-${label}-${key}.png`, scale: "css" });
        }
      }
      const maxDelta = Math.max(...Object.entries(pair.source.sections).flatMap(([name, source]) =>
        Object.keys(source).map(key => Math.abs(source[key] - pair.clone.sections[name][key]))));
      if (maxDelta > 1 || pair.clone.overflow || pair.clone.broken.length || JSON.stringify(pair.source.sliders) !== JSON.stringify(pair.clone.sliders)) {
        throw new Error(JSON.stringify({ device: device.name, maxDelta, source: pair.source, clone: pair.clone }));
      }
      results.push({ device: device.name, ...pair });
    } finally { await context.close(); }
  }
  function sourceSelector(label) { return label === "source" ? ".conteudo-home > .wrapper:nth-child(4)" : '[data-section="DailyDeals"] > .wrapper'; }
  return results;
}
