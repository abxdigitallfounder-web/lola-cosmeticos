// Browser MCP capture of the home response delivered to a phone, including shadow widgets.
async (page) => {
  const device = { viewport: { width: 390, height: 844 }, screen: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true,
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1" };
  const context = await page.context().browser().newContext(device);
  try {
    await context.route("**/static/scripts/popup.min.js", r => r.abort());
    const mobile = await context.newPage();
    await mobile.goto("https://www.lolacosmetics.com.br/", { waitUntil: "load" });
    await mobile.waitForTimeout(1800);
    await mobile.evaluate(async () => {
      window.jQuery(".slick-slider").each(function () { window.jQuery(this).slick("slickPause"); });
      for (let y = 0; y < document.documentElement.scrollHeight; y += 550) { scrollTo(0, y); await new Promise(r => setTimeout(r, 180)); }
      scrollTo(0, 0);
      await document.fonts.ready;
    });
    await mobile.waitForTimeout(1200);
    const data = await mobile.evaluate(() => {
      const selectors = { Header: "#header", Hero: ".fullbanner", BenefitsBanner: ".banner-beneficios-mobile", Categories: ".navegue-categoria", ReasonsToLove: "#motivos-amar", Favorites: ".conteudo-home > .wrapper:nth-child(1)", HairTypes: "#tipos-cabelos", DailyDeals: ".conteudo-home > .wrapper:nth-child(4)", Benefits: ".nova-secao-bene", Launches: ".fundo-vitrine", Collector: ".conteudo-home > .wrapper:nth-child(7)", BeforeAfter: ".post-avaliacao", Affiliate: ".banners.condicoes", Blog: "#conteudo-lolistico", SocialLinks: "#redes-home", Reviews: "#trustvox-carousel-root", Footer: "#footer" };
      const box = el => { const r = el.getBoundingClientRect(); return { x: r.x, y: r.y + scrollY, width: r.width, height: r.height }; };
      const options = el => JSON.parse(JSON.stringify(window.jQuery(el).slick("getSlick").originalSettings, (k, v) => ["appendArrows", "appendDots"].includes(k) ? undefined : v));
      const image = im => ({ src: im.currentSrc || im.src, lazy: im.getAttribute("data-src"), poster: im.poster, width: im.naturalWidth, height: im.naturalHeight });
      const sections = Object.fromEntries(Object.entries(selectors).map(([name, selector]) => {
        const el = document.querySelector(selector);
        return [name, el ? { selector, html: el.outerHTML, rect: box(el), display: getComputedStyle(el).display,
          sliders: [...(el.matches(".slick-slider") ? [el] : []), ...el.querySelectorAll(".slick-slider")].map(slider => ({ options: options(slider) })),
          images: [...el.querySelectorAll("img")].map(image) } : null];
      }));
      const shadows = [...document.querySelectorAll("*")].filter(el => el.shadowRoot && /WIDDE-PRO-(HIGHLIGHTS|CAROUSEL)/.test(el.tagName)).map(el => ({ tag: el.tagName, html: el.shadowRoot.innerHTML, rect: box(el), images: [...el.shadowRoot.querySelectorAll("img,video")].map(image) }));
      return { url: location.href, bodyClass: document.body.className, html: document.documentElement.outerHTML, sections, shadows,
        images: [...document.images].map(image), resources: performance.getEntriesByType("resource").map(r => r.name),
        backgrounds: [...document.querySelectorAll("*")].map(el => getComputedStyle(el).backgroundImage).filter(v => v !== "none"),
        stylesheets: [...document.querySelectorAll('link[rel="stylesheet"]')].map(el => ({ url: el.href })),
        inlineStyles: [...document.querySelectorAll("style")].map(el => el.textContent),
        topology: [...document.querySelector("#content-wrapper").children].map(el => ({ tag: el.tagName, class: el.className, rect: box(el) })) };
    });
    const trackingLinks = await mobile.evaluate(() => [...new Set([...document.querySelectorAll('a[href*="/Shopping/Banner/Click"]')].map(a => a.href))]);
    data.linkDestinations = [];
    for (let i = 0; i < trackingLinks.length; i += 4) {
      const batch = await Promise.all(trackingLinks.slice(i, i + 4).map(async href => {
        const response = await context.request.get(href);
        return { href, url: response.url(), status: response.status() };
      }));
      data.linkDestinations.push(...batch);
    }
    await mobile.screenshot({ path: "docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/phone-home-source-full.png", fullPage: true, scale: "css" });
    return { device, ...data };
  } finally { await context.close(); }
}
