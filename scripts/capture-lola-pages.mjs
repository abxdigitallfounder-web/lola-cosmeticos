// Capture script for the Playwright MCP `browser_run_code_unsafe` entry point, which runs
// it in a sandbox holding nothing but `page`. The captured DOM is therefore POSTed to the
// loopback receiver (scripts/capture-receiver.mjs) instead of being written directly, and
// the target list is inlined rather than read from OUTPUT_PLAN.json.
async (page) => {
  const SINK = "http://127.0.0.1:4599/?path=";
  const site = "www-lolacosmetics-com-br-b005530a";
  const targets = [
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
  ];
  const report = [];

  for (const [pathname, pageKey] of targets) {
    await page.setViewportSize({ width: 1440, height: 900 });
    try {
      await page.goto("https://www.lolacosmetics.com.br" + pathname, { waitUntil: "load", timeout: 90000 });
    } catch (error) {
      report.push(`${pathname}: NAVIGATION FAILED ${error.message}`);
      continue;
    }
    await page.waitForTimeout(1500);

    const summary = await page.evaluate(async ({ sink, dest }) => {
      // Scroll the whole page so lazy rails, widgets and images commit to the DOM.
      for (let y = 0; y <= document.documentElement.scrollHeight; y += 700) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 90));
      }
      window.scrollTo(0, 0);
      await new Promise(r => setTimeout(r, 1800));

      const abs = u => { try { return u ? new URL(u, location.href).href : null; } catch { return null; } };
      // The storefront replaces window.fetch with a wrapper that throws here, so the upload
      // goes out over XHR, which its scripts leave alone.
      const post = (url, body) => new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.onload = () => resolve(xhr.status >= 200 && xhr.status < 300);
        xhr.onerror = () => reject(new Error("upload failed"));
        xhr.send(body);
      });
      // Section names come from the markup itself rather than a per-template list, so the
      // same capture serves category, product, login and cart pages alike.
      const pascal = raw => (raw || "").split(/[^a-zA-Z0-9]+/).filter(Boolean)
        .map(w => w[0].toUpperCase() + w.slice(1)).join("") || "Section";
      const sections = {};
      const record = (el, fallback) => {
        if (!el) return;
        const tag = el.tagName.toLowerCase();
        if (tag === "style" || tag === "script" || tag === "noscript") return;
        const cls = typeof el.className === "string" ? el.className.trim().split(/\s+/)[0] : "";
        const base = pascal(el.id || cls || fallback);
        let name = base;
        for (let n = 2; sections[name]; n++) name = `${base}${n}`;
        sections[name] = { selector: el.id ? `#${el.id}` : `.${cls || tag}`, html: el.outerHTML, tree: { styles: {} } };
      };
      record(document.querySelector("#content > nav.wd-browsing-breadcrumbs"), "breadcrumbs");
      const wrapper = document.querySelector("#content-wrapper") || document.querySelector("#content");
      if (wrapper) [...wrapper.children].forEach((el, i) => record(el, `block${i}`));

      const main = document.querySelector("#main");
      const data = {
        url: location.href,
        title: document.title,
        bodyClass: document.body.className,
        mainClass: main ? main.className : "",
        sections,
        html: document.documentElement.outerHTML,
        inlineStyles: [...document.querySelectorAll("style")].map(s => s.textContent),
        stylesheets: [...document.querySelectorAll("link[rel=stylesheet]")].map(l => ({ url: abs(l.href) })),
        images: [...document.querySelectorAll("img")].map(i => ({ src: abs(i.currentSrc || i.src), lazy: abs(i.dataset.src), poster: null })),
        videos: [...document.querySelectorAll("video")].map(v => ({ src: abs(v.src), poster: abs(v.poster) })),
        backgrounds: [...document.querySelectorAll("*")].map(e => getComputedStyle(e).backgroundImage).filter(b => b && b !== "none"),
        resources: performance.getEntriesByType("resource").map(r => r.name),
        shadows: [...document.querySelectorAll("*")].filter(e => e.shadowRoot).map(e => ({ tag: e.tagName, html: e.shadowRoot.innerHTML, images: [] })),
      };
      const ok = await post(sink + encodeURIComponent(dest), JSON.stringify(data));
      return { ok, sections: Object.keys(sections), kb: Math.round(data.html.length / 1024), images: data.images.length, body: data.bodyClass.trim(), main: data.mainClass.trim() };
    }, { sink: SINK, dest: `docs/research/${site}/${pageKey}/loaded-extraction.json` });

    // A mobile pass, for the same reason the home clone keeps mobile header and hero.
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(1200);
    await page.evaluate(async ({ sink, dest }) => {
      await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", sink + encodeURIComponent(dest), true);
        xhr.onload = () => resolve();
        xhr.onerror = () => reject(new Error("upload failed"));
        xhr.send(JSON.stringify({ bodyClass: document.body.className, html: document.documentElement.outerHTML }));
      });
    }, { sink: SINK, dest: `docs/research/${site}/${pageKey}/mobile-extraction.json` });

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(600);
    await page.screenshot({ path: `docs/design-references/${site}/${pageKey}/desktop-1440.png` });

    report.push(`${pathname}: saved=${summary.ok} ${summary.kb}kb ${summary.images}img main="${summary.main}" [${summary.sections.join(", ")}]`);
  }
  return report.join("\n");
}
