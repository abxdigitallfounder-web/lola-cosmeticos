// Side-by-side check of one cloned route against its source: the same measurements taken
// on both, plus a screenshot pair saved under the page's design references.
async (page) => {
  const path = "/volumao-shampoo-250ml-ps-19629-321-p46389";
  const key = "volumao-shampoo-250ml-ps-19629-321-p46389-68be359d";
  const shots = `docs/design-references/www-lolacosmetics-com-br-b005530a/${key}`;

  const probe = () => {
    const pick = sel => document.querySelector(sel);
    const box = el => { if (!el) return null; const r = el.getBoundingClientRect(); return { x: Math.round(r.x), y: Math.round(r.y + window.scrollY), w: Math.round(r.width), h: Math.round(r.height) }; };
    const text = sel => (pick(sel)?.textContent || "").replace(/\s+/g, " ").trim().slice(0, 70);
    return {
      doc: Math.round(document.documentElement.scrollHeight),
      title: text("h1, .product-detail .head .information .wd-title, .product-name"),
      price: text(".price-for, .wd-product-price .for, .product-detail .price"),
      gallery: box(pick(".product-detail .head .medias, .wd-product-medias, .product-medias")),
      buy: box(pick("button.buy, .buy-button, .wd-product-buy button, button[class*='buy']")),
      images: document.images.length,
      broken: [...document.images].filter(i => i.complete && i.naturalWidth === 0).length,
      related: document.querySelectorAll('li[class*="product-"]').length,
      tabs: document.querySelectorAll(".product-detail .tabs li, .wd-product-tabs li").length,
    };
  };

  const out = {};
  for (const [label, url] of [["clone", "http://127.0.0.1:4352" + path], ["source", "https://www.lolacosmetics.com.br" + path]]) {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(url, { waitUntil: "load", timeout: 90000 });
    await page.evaluate(async () => {
      for (let y = 0; y <= document.documentElement.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 80)); }
      window.scrollTo(0, 0);
      await new Promise(r => setTimeout(r, 1500));
    });
    out[label] = await page.evaluate(probe);
    await page.screenshot({ path: `${shots}/qa-${label}-top.png` });
    await page.evaluate(() => window.scrollTo(0, 900));
    await page.waitForTimeout(700);
    await page.screenshot({ path: `${shots}/qa-${label}-mid.png` });
  }

  const lines = ["field".padEnd(10) + "clone".padEnd(34) + "source"];
  for (const field of Object.keys(out.clone)) {
    const a = JSON.stringify(out.clone[field]);
    const b = JSON.stringify(out.source[field]);
    lines.push(`${field.padEnd(10)}${a.padEnd(34)}${b}${a === b ? "" : "   <-- differs"}`);
  }
  return lines.join("\n");
}
