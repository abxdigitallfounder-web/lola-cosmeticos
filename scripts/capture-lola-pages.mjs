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
    ["/a-formula-100g-ps-19629-291-p46291", "a-formula-100g-ps-19629-291-p46291-adcb92cf"],
    ["/a-formula-450g-ps-19629-1004-p46293", "a-formula-450g-ps-19629-1004-p46293-bfdd4031"],
    ["/a-formula-brilho-lamelar-shampoo-250ml-ps-19629-299-p46337", "a-formula-brilho-lamelar-shampoo-250ml-ps-19629-299-p46337-6ea1f249"],
    ["/a-formula-primer-brilho-lamelar-200ml-ps-19629-300-p46339", "a-formula-primer-brilho-lamelar-200ml-ps-19629-300-p46339-59f380b7"],
    ["/bahia-a-vista-mousse-200ml-ps-19629-90-p45529", "bahia-a-vista-mousse-200ml-ps-19629-90-p45529-1cc327de"],
    ["/banana-tropicana-condicionador-250g-ps-19629-1007-p46402", "banana-tropicana-condicionador-250g-ps-19629-1007-p46402-9b736e8f"],
    ["/banana-tropicana-leave-in-chantilly-160ml-ps-19629-1008-p46404", "banana-tropicana-leave-in-chantilly-160ml-ps-19629-1008-p46404-428e84d9"],
    ["/banana-tropicana-mascara-230g-ps-19629-1009-p46406", "banana-tropicana-mascara-230g-ps-19629-1009-p46406-f033f1f7"],
    ["/banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005-p46398", "banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005-p46398-d2f14af2"],
    ["/banana-tropicana-shampoo-nutritivo-250ml-ps-19629-1006-p46400", "banana-tropicana-shampoo-nutritivo-250ml-ps-19629-1006-p46400-49389350"],
    ["/be-m-dita-ghee-acai-no-pote-100g-ps-19629-302-p46343", "be-m-dita-ghee-acai-no-pote-100g-ps-19629-302-p46343-16315176"],
    ["/be-m-dita-ghee-cronograma-100g-p46049", "be-m-dita-ghee-cronograma-100g-p46049-2eb145fb"],
    ["/bossa-creme-modelador-1kg-ps-19629-284-p46279", "bossa-creme-modelador-1kg-ps-19629-284-p46279-07c892d5"],
    ["/bossa-creme-modelador-500g-ps-19629-283-p46277", "bossa-creme-modelador-500g-ps-19629-283-p46277-ef1bd023"],
    ["/bossa-gelatina-modeladora-500g-ps-19629-285-p46281", "bossa-gelatina-modeladora-500g-ps-19629-285-p46281-841c434e"],
    ["/bossa-mascara-450g-ps-19629-282-p46275", "bossa-mascara-450g-ps-19629-282-p46275-d3cc3d87"],
    ["/bossa-mousse-150ml-ps-19629-323-p46396", "bossa-mousse-150ml-ps-19629-323-p46396-490d676e"],
    ["/bossa-shampoo-500ml-ps-19629-281-p46273", "bossa-shampoo-500ml-ps-19629-281-p46273-eecb8732"],
    ["/chapada-sabonete-cremoso-280g-ps-19629-110-p45637", "chapada-sabonete-cremoso-280g-ps-19629-110-p45637-3455c616"],
    ["/cuca-fresca-condicionador-reequilibrante-250g-ps-19629-297-p46330", "cuca-fresca-condicionador-reequilibrante-250g-ps-19629-297-p46330-e3cb8e7a"],
    ["/kit-be-m-dita-praia-geleia-e-bronze-p46241", "kit-be-m-dita-praia-geleia-e-bronze-p46241-38a490ce"],
    ["/kit-bossa-crespos-cachos-ps-19629-303-p46348", "kit-bossa-crespos-cachos-ps-19629-303-p46348-24adca76"],
    ["/kit-bossa-linha-completa-500g-p46297", "kit-bossa-linha-completa-500g-p46297-a4ca6626"],
    ["/kit-celebridades-ps-19629-316-p46377", "kit-celebridades-ps-19629-316-p46377-98174e3a"],
    ["/kit-completo-banana-tropicana-p46408", "kit-completo-banana-tropicana-p46408-8dd69bc3"],
    ["/kit-cuca-fresca-anticaspa-p46335", "kit-cuca-fresca-anticaspa-p46335-41963d52"],
    ["/kit-cuca-fresca-controle-de-oleosidade-p46336", "kit-cuca-fresca-controle-de-oleosidade-p46336-f21bd0d9"],
    ["/kit-feira-cronolola-ps-19629-250-p46131", "kit-feira-cronolola-ps-19629-250-p46131-ca1686e4"],
    ["/kit-loira-de-farmacia-linha-completa-100g-p46380", "kit-loira-de-farmacia-linha-completa-100g-p46380-48ef8a8f"],
    ["/kit-morte-subita-trio-ps-19629-308-p46358", "kit-morte-subita-trio-ps-19629-308-p46358-57b004e2"],
    ["/kit-pinga-p46133", "kit-pinga-p46133-28ab1990"],
    ["/kit-purple-linha-completa-p46314", "kit-purple-linha-completa-p46314-7638e4a6"],
    ["/kit-rapunzel-colecao-completa-p46395", "kit-rapunzel-colecao-completa-p46395-73b5c8ee"],
    ["/kit-tannic-acid-linha-completa-p46347", "kit-tannic-acid-linha-completa-p46347-600411e9"],
    ["/kit-volumao-linha-completa-p46393", "kit-volumao-linha-completa-p46393-45cb702f"],
    ["/kit-xapadinha-liso-perfeito-disciplina-anti-frizz-e-anti-quebra-p45750", "kit-xapadinha-liso-perfeito-disciplina-anti-frizz-e-anti-quebra-p45750-590cddf6"],
    ["/loira-de-farmacia-mascara-100g-ps-19629-311-p46367", "loira-de-farmacia-mascara-100g-ps-19629-311-p46367-c7b890b4"],
    ["/lolabook-basicao-ps-19629-280-p46269", "lolabook-basicao-ps-19629-280-p46269-fe56d4b6"],
    ["/lolabook-papo-reto-ps-19629-224-p45984", "lolabook-papo-reto-ps-19629-224-p45984-01ed17e2"],
    ["/meu-cacho-minha-vida-condicionador-500g-ps-19629-21-p45542", "meu-cacho-minha-vida-condicionador-500g-ps-19629-21-p45542-ff55437e"],
    ["/meu-cacho-minha-vida-creme-pentear-500g-ps-19629-73-p45409", "meu-cacho-minha-vida-creme-pentear-500g-ps-19629-73-p45409-3930531f"],
    ["/meu-cacho-minha-vida-jelly-gel-500g-ps-19629-13-p45474", "meu-cacho-minha-vida-jelly-gel-500g-ps-19629-13-p45474-7aee1b48"],
    ["/meu-cacho-minha-vida-mascara-450g-ps-19629-71-p45712", "meu-cacho-minha-vida-mascara-450g-ps-19629-71-p45712-ab9c8cf0"],
    ["/meu-cacho-minha-vida-shampoo-500ml-ps-19629-30-p45499", "meu-cacho-minha-vida-shampoo-500ml-ps-19629-30-p45499-76c5fc5e"],
    ["/morte-subita-oleo-50ml-ps-19629-315-p46375", "morte-subita-oleo-50ml-ps-19629-315-p46375-15a60cc4"],
    ["/necessaire-doce-vida-ps-19629-293-p46295", "necessaire-doce-vida-ps-19629-293-p46295-104ba1de"],
    ["/necessaire-ghee-ps-19629-270-p46202", "necessaire-ghee-ps-19629-270-p46202-b205c5e4"],
    ["/ondulados-creme-texturizador-450g-ps-19629-312-p46369", "ondulados-creme-texturizador-450g-ps-19629-312-p46369-30522404"],
    ["/ondulados-lola-inc-condicionador-500g-ps-19629-31-p45398", "ondulados-lola-inc-condicionador-500g-ps-19629-31-p45398-5ad80e46"],
    ["/ondulados-lola-inc-shampoo-500ml-ps-19629-36-p45550", "ondulados-lola-inc-shampoo-500ml-ps-19629-36-p45550-6f779e1e"],
    ["/papo-reto-condicionador-270ml-ps-19629-210-p45950", "papo-reto-condicionador-270ml-ps-19629-210-p45950-322d2442"],
    ["/papo-reto-mascara-270ml-ps-19629-211-p45949", "papo-reto-mascara-270ml-ps-19629-211-p45949-73c1e4ac"],
    ["/plot-twist-bio-nut-oil-90ml-ps-19629-258-p46176", "plot-twist-bio-nut-oil-90ml-ps-19629-258-p46176-d1fc2d7e"],
    ["/plot-twist-buriti-creme-ativador-480g-ps-19629-257-p46174", "plot-twist-buriti-creme-ativador-480g-ps-19629-257-p46174-d26f94f5"],
    ["/plot-twist-buriti-pudding-ps-19629-254-p46166", "plot-twist-buriti-pudding-ps-19629-254-p46166-b80cf964"],
    ["/plot-twist-guava-butter-gel-480g-ps-19629-146-p45431", "plot-twist-guava-butter-gel-480g-ps-19629-146-p45431-4b04f0ef"],
    ["/plot-twist-guava-cream-480g-ps-19629-147-p45666", "plot-twist-guava-cream-480g-ps-19629-147-p45666-ec19ab2b"],
    ["/plot-twist-guava-misturinha-ps-19629-243-p46078", "plot-twist-guava-misturinha-ps-19629-243-p46078-bc0b3a02"],
    ["/plot-twist-guava-mousse-150-ml-ps-19629-149-p45527", "plot-twist-guava-mousse-150-ml-ps-19629-149-p45527-8eb8352e"],
    ["/plot-twist-guava-oil-90-ml-ps-19629-151-p45413", "plot-twist-guava-oil-90-ml-ps-19629-151-p45413-45c5209d"],
    ["/plot-twist-nut-butter-cream-480g-ps-19629-148-p45399", "plot-twist-nut-butter-cream-480g-ps-19629-148-p45399-bc47d4d3"],
    ["/plot-twist-nut-gel-230g-ps-19629-256-p46172", "plot-twist-nut-gel-230g-ps-19629-256-p46172-f96d7407"],
    ["/plot-twist-shampoo-sem-enxague-200ml-ps-19629-255-p46170", "plot-twist-shampoo-sem-enxague-200ml-ps-19629-255-p46170-10f6bff7"],
    ["/purple-acid-250ml-ps-19629-1002-p46194", "purple-acid-250ml-ps-19629-1002-p46194-e91b6cc1"],
    ["/purple-mask-100g-ps-19629-286-p46283", "purple-mask-100g-ps-19629-286-p46283-1ccba691"],
    ["/purple-oil-50ml-ps-19629-265-p46196", "purple-oil-50ml-ps-19629-265-p46196-6f384cfb"],
    ["/purple-shampoo-250ml-ps-19629-266-p46192", "purple-shampoo-250ml-ps-19629-266-p46192-e091a131"],
    ["/sacola-rafia-lola-chica-capeto-ps-19629-279-p46271", "sacola-rafia-lola-chica-capeto-ps-19629-279-p46271-cc9c0d92"],
    ["/sol-carioca-mousse-200ml-ps-19629-40-p45410", "sol-carioca-mousse-200ml-ps-19629-40-p45410-09433740"],
    ["/tannic-acid-leave-in-protetor-100ml-ps-19629-301-p46341", "tannic-acid-leave-in-protetor-100ml-ps-19629-301-p46341-2e57ea83"],
    ["/tannic-mascara-450g-ps-19629-290-p46289", "tannic-mascara-450g-ps-19629-290-p46289-bc31c554"],
    ["/touca-turbante-ps-19629-268-p46204", "touca-turbante-ps-19629-268-p46204-c1e162f4"],
    ["/trio-be-m-dita-ghee-nutricao-100g-p45970", "trio-be-m-dita-ghee-nutricao-100g-p45970-29b7f577"],
    ["/trio-be-m-dita-ghee-reconstrucao-100g-p45971", "trio-be-m-dita-ghee-reconstrucao-100g-p45971-34c606f9"],
    ["/trio-be-m-dita-ghee-reconstrucao-350g-p46048", "trio-be-m-dita-ghee-reconstrucao-350g-p46048-f1be6c56"],
    ["/volumao-mascara-450g-ps-19629-320-p46387", "volumao-mascara-450g-ps-19629-320-p46387-18997a9d"],
    ["/volumao-spray-250ml-ps-19629-322-p46391", "volumao-spray-250ml-ps-19629-322-p46391-94a21422"],
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
        sections[name] = { selector: el.id ? `#${el.id}` : `.${cls || tag}`, text: (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 4000) };
      };
      record(document.querySelector("#content > nav.wd-browsing-breadcrumbs"), "breadcrumbs");
      const wrapper = document.querySelector("#content-wrapper") || document.querySelector("#content");
      if (wrapper) [...wrapper.children].forEach((el, i) => record(el, `block${i}`));

      // The sanitizer de-slicks each carousel and re-initializes it from these options.
      // They are read in #middle's document order because that is the order it walks, and
      // an empty fallback turns a vertical thumbnail rail into a horizontal one.
      const middle = document.querySelector("#middle");
      // slick keeps jQuery objects on its options (appendArrows, the arrow markup), and those
      // are circular, so only plain values are carried over.
      const plain = value => {
        if (value === null) return null;
        const kind = typeof value;
        if (kind === "boolean" || kind === "number" || kind === "string") return value;
        if (Array.isArray(value)) return value.map(plain).filter(v => v !== undefined);
        if (kind === "object" && (value.constructor === Object || !value.constructor)) {
          const out = {};
          for (const [k, v] of Object.entries(value)) {
            const p = plain(v);
            if (p !== undefined) out[k] = p;
          }
          return out;
        }
        return undefined;
      };
      const sliderOptions = [...(middle ? middle.querySelectorAll(".slick-slider") : [])].map(el => {
        let options = {};
        try { options = window.jQuery(el).slick("getSlick").options || {}; } catch { options = {}; }
        return { class: (el.className || "").toString(), options: plain(options) || {} };
      });

      const main = document.querySelector("#main");
      const data = {
        url: location.href,
        title: document.title,
        bodyClass: document.body.className,
        mainClass: main ? main.className : "",
        sections,
        middleHtml: middle ? middle.outerHTML : "",
        sliderOptions,
        inlineStyles: [...document.querySelectorAll("style")].map(s => s.textContent),
        stylesheets: [...document.querySelectorAll("link[rel=stylesheet]")].map(l => ({ url: abs(l.href) })),
        images: [...document.querySelectorAll("img")].map(i => ({ src: abs(i.currentSrc || i.src), lazy: abs(i.dataset.src), poster: null })),
        videos: [...document.querySelectorAll("video")].map(v => ({ src: abs(v.src), poster: abs(v.poster) })),
        backgrounds: [...document.querySelectorAll("*")].map(e => getComputedStyle(e).backgroundImage).filter(b => b && b !== "none"),
        resources: performance.getEntriesByType("resource").map(r => r.name),
        shadows: [...document.querySelectorAll("*")].filter(e => e.shadowRoot).map(e => ({ tag: e.tagName, html: e.shadowRoot.innerHTML, images: [] })),
      };
      const ok = await post(sink + encodeURIComponent(dest), JSON.stringify(data));
      return { ok, sliders: sliderOptions.length, sections: Object.keys(sections), kb: Math.round(data.middleHtml.length / 1024), images: data.images.length, body: data.bodyClass.trim(), main: data.mainClass.trim() };
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
        const middle = document.querySelector("#middle");
        xhr.send(JSON.stringify({ bodyClass: document.body.className, middleHtml: middle ? middle.outerHTML : "" }));
      });
    }, { sink: SINK, dest: `docs/research/${site}/${pageKey}/mobile-extraction.json` });

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(600);
    await page.screenshot({ path: `docs/design-references/${site}/${pageKey}/desktop-1440.png` });

    report.push(`${pathname}: ${summary.ok ? "ok" : "SAVE FAILED"} ${summary.kb}kb ${summary.images}img sliders=${summary.sliders}`);
  }
  return report.join("\n");
}
