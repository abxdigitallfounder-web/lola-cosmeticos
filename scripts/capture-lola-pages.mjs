// Capture script for the Playwright MCP `browser_run_code_unsafe` entry point, which runs
// it in a sandbox holding nothing but `page`. The captured DOM is therefore POSTed to the
// loopback receiver (scripts/capture-receiver.mjs) instead of being written directly, and
// the target list is inlined rather than read from OUTPUT_PLAN.json.
async (page) => {
  const SINK = "http://127.0.0.1:4599/?path=";
  const site = "www-lolacosmetics-com-br-b005530a";
  const targets = [
    ["/cadastro", "cadastro-66a75834"],
    ["/colecoes/a-formula", "colecoes-a-formula-ed58c223"],
    ["/colecoes/argan-oil", "colecoes-argan-oil-699f3134"],
    ["/colecoes/babados-da-lola/lola-book", "colecoes-babados-da-lola-lola-book-4e0a7663"],
    ["/colecoes/babados-da-lola/necessaire", "colecoes-babados-da-lola-necessaire-79acff60"],
    ["/colecoes/babados-da-lola/sacola-de-rafia", "colecoes-babados-da-lola-sacola-de-rafia-fe6b38d7"],
    ["/colecoes/babados-do-brasil", "colecoes-babados-do-brasil-a51491b9"],
    ["/colecoes/banana-tropicana", "colecoes-banana-tropicana-dc2b32b0"],
    ["/colecoes/basicao", "colecoes-basicao-85218c83"],
    ["/colecoes/be-m-dita-ghee", "colecoes-be-m-dita-ghee-dac46a89"],
    ["/colecoes/be-m-dita-praia", "colecoes-be-m-dita-praia-e753c58f"],
    ["/colecoes/bossa", "colecoes-bossa-b0f3c53a"],
    ["/colecoes/brancos-e-grisalhos", "colecoes-brancos-e-grisalhos-27e50955"],
    ["/colecoes/camomila", "colecoes-camomila-18ffd776"],
    ["/colecoes/cereal-killer", "colecoes-cereal-killer-a1bfe5af"],
    ["/colecoes/comigo-ninguem-pode", "colecoes-comigo-ninguem-pode-bfdbb33c"],
    ["/colecoes/cuca-fresca", "colecoes-cuca-fresca-4a416ea6"],
    ["/colecoes/danos-vorazes", "colecoes-danos-vorazes-fb1f336e"],
    ["/colecoes/densidade", "colecoes-densidade-cab231e4"],
    ["/colecoes/drama-queen", "colecoes-drama-queen-feefc38a"],
    ["/colecoes/dream-cream", "colecoes-dream-cream-a912830e"],
    ["/colecoes/ela-e-carioca", "colecoes-ela-e-carioca-85dc5383"],
    ["/colecoes/eu-sei-o-que-voce-fez-na-quimica-passada", "colecoes-eu-sei-o-que-voce-fez-na-quimica-passada-a621e479"],
    ["/colecoes/exterminador-de-frizz", "colecoes-exterminador-de-frizz-503229ec"],
    ["/colecoes/kit-celebridades", "colecoes-kit-celebridades-c371a0c5"],
    ["/colecoes/liso-leve-e-and-solto", "colecoes-liso-leve-e-and-solto-735ed75e"],
    ["/colecoes/loira-de-farmacia", "colecoes-loira-de-farmacia-e91e4bf2"],
    ["/colecoes/lola-kids", "colecoes-lola-kids-52c1a934"],
    ["/colecoes/lola-vintage-girls", "colecoes-lola-vintage-girls-161e70ce"],
    ["/colecoes/lolaterapia", "colecoes-lolaterapia-bece2b34"],
    ["/colecoes/meu-cacho-minha-vida", "colecoes-meu-cacho-minha-vida-b69609e9"],
    ["/colecoes/milagre", "colecoes-milagre-4719adcb"],
    ["/colecoes/morte-subita", "colecoes-morte-subita-e7dc380d"],
    ["/colecoes/papo-reto", "colecoes-papo-reto-62180617"],
    ["/colecoes/pinga", "colecoes-pinga-0c185c60"],
    ["/colecoes/plot-twist", "colecoes-plot-twist-eeb1c647"],
    ["/colecoes/purple", "colecoes-purple-7653269c"],
    ["/colecoes/rapunzel", "colecoes-rapunzel-43540d81"],
    ["/colecoes/tannic-acid", "colecoes-tannic-acid-8308867a"],
    ["/colecoes/tarja-preta", "colecoes-tarja-preta-d2cf1eb8"],
    ["/colecoes/transicao", "colecoes-transicao-91418a2c"],
    ["/colecoes/umectacao", "colecoes-umectacao-4604aba3"],
    ["/colecoes/volumao", "colecoes-volumao-6c8fd626"],
    ["/colecoes/xapadinha", "colecoes-xapadinha-24b582c6"],
    ["/conteudo/ajuda", "conteudo-ajuda-e91731db"],
    ["/conteudo/ajuda/cashback", "conteudo-ajuda-cashback-c06d08f5"],
    ["/conteudo/ajuda/como-rastrear-pedidos", "conteudo-ajuda-como-rastrear-pedidos-010ffef8"],
    ["/conteudo/ajuda/entrega-e-envios", "conteudo-ajuda-entrega-e-envios-b1e2c938"],
    ["/conteudo/ajuda/pagamento", "conteudo-ajuda-pagamento-54c5116a"],
    ["/conteudo/ajuda/perguntas-frequentes", "conteudo-ajuda-perguntas-frequentes-6778f232"],
    ["/conteudo/ajuda/prazos-de-atendimento", "conteudo-ajuda-prazos-de-atendimento-e67e9c11"],
    ["/conteudo/ajuda/regulamento-promocional", "conteudo-ajuda-regulamento-promocional-9553f65d"],
    ["/conteudo/ajuda/trocas-e-devolucoes", "conteudo-ajuda-trocas-e-devolucoes-60a83a67"],
    ["/conteudo/sobre", "conteudo-sobre-5dc886aa"],
    ["/conteudo/sobre/afiliados", "conteudo-sobre-afiliados-23d1f719"],
    ["/conteudo/sobre/este-site-e-seguro", "conteudo-sobre-este-site-e-seguro-1f782c2a"],
    ["/conteudo/sobre/lola-lab", "conteudo-sobre-lola-lab-e5a948e2"],
    ["/conteudo/sobre/politica-de-cookies", "conteudo-sobre-politica-de-cookies-2c2b8782"],
    ["/conteudo/sobre/politica-de-privacidade", "conteudo-sobre-politica-de-privacidade-8bde9fa3"],
    ["/conteudo/sobre/quem-somos", "conteudo-sobre-quem-somos-2f2b2ab4"],
    ["/conteudo/sobre/revenda", "conteudo-sobre-revenda-7255390b"],
    ["/lancamentos/a-formula", "lancamentos-a-formula-dc3e0f11"],
    ["/lancamentos/banana-tropicana", "lancamentos-banana-tropicana-5d791379"],
    ["/lancamentos/basicao", "lancamentos-basicao-91056a68"],
    ["/lancamentos/bossa", "lancamentos-bossa-81b465be"],
    ["/lancamentos/cuca-fresca", "lancamentos-cuca-fresca-7735c6c5"],
    ["/lancamentos/embaixadoras", "lancamentos-embaixadoras-e73def54"],
    ["/lancamentos/ghee-acai", "lancamentos-ghee-acai-6c03e1fc"],
    ["/lancamentos/kits-de-presente", "lancamentos-kits-de-presente-570541da"],
    ["/lancamentos/tannic-acid", "lancamentos-tannic-acid-ae66004a"],
    ["/lancamentos/volumao", "lancamentos-volumao-03b55985"],
    ["/onde-encontrar", "onde-encontrar-c3073c3f"],
    ["/painel-do-cliente", "painel-do-cliente-eb8ed7d4"],
    ["/painel-do-cliente/alcada-credito", "painel-do-cliente-alcada-credito-0fa06f63"],
    ["/painel-do-cliente/dados-cadastrais", "painel-do-cliente-dados-cadastrais-ad0f6dff"],
    ["/painel-do-cliente/pedidos", "painel-do-cliente-pedidos-16a05753"],
    ["/promocao/achadinhos", "promocao-achadinhos-8b7a0d30"],
    ["/promocao/semana-da-lolete", "promocao-semana-da-lolete-ed806967"],
    ["/tipos-de-cabelo/cacheado", "tipos-de-cabelo-cacheado-f3e994aa"],
    ["/tipos-de-cabelo/liso", "tipos-de-cabelo-liso-253abfbe"],
    ["/tipos-de-cabelo/todos-os-tipos", "tipos-de-cabelo-todos-os-tipos-2e9d24a6"],
    ["/trabalhe-conosco", "trabalhe-conosco-af4132c0"],
    ["/tratamentos/brilho", "tratamentos-brilho-1b5f1082"],
    ["/tratamentos/cronograma-capilar/hidratacao", "tratamentos-cronograma-capilar-hidratacao-405d5e24"],
    ["/tratamentos/cronograma-capilar/nutricao", "tratamentos-cronograma-capilar-nutricao-052372af"],
    ["/tratamentos/cronograma-capilar/reconstrucao", "tratamentos-cronograma-capilar-reconstrucao-3ad35ae5"],
    ["/tratamentos/cuidados-especificos", "tratamentos-cuidados-especificos-551f29fb"],
    ["/tratamentos/cuidados-especificos/anticaspa", "tratamentos-cuidados-especificos-anticaspa-d883a9ae"],
    ["/tratamentos/cuidados-especificos/oleosidade", "tratamentos-cuidados-especificos-oleosidade-7e79392a"],
    ["/tratamentos/finalizacao", "tratamentos-finalizacao-28972c03"],
    ["/tratamentos/finalizacao/creme-de-pentear", "tratamentos-finalizacao-creme-de-pentear-2475a395"],
    ["/tratamentos/finalizacao/leave-in", "tratamentos-finalizacao-leave-in-749f2eb8"],
    ["/tratamentos/finalizacao/oleo", "tratamentos-finalizacao-oleo-688522b5"],
    ["/tratamentos/fortalecimento", "tratamentos-fortalecimento-8b46e069"],
    ["/tratamentos/sos-reparacao", "tratamentos-sos-reparacao-bddeccb5"],
    ["/tratamentos/uso-diario", "tratamentos-uso-diario-55480637"],
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
