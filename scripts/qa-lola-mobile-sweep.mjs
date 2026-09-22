// Mobile health sweep at 390px across the funnel paid traffic will actually walk.
// Horizontal overflow matters most here: it is what makes a phone page feel broken.
async (page) => {
  const BASE = "http://127.0.0.1:4360";
  const routes = [
    "/", "/kits", "/tratamentos", "/tipos-de-cabelo/liso", "/tratamentos/finalizacao",
    "/colecoes/rapunzel", "/lancamentos/embaixadoras", "/promocao/achadinhos",
    "/volumao-shampoo-250ml-ps-19629-321-p46389", "/kit-rapunzel-colecao-completa-p46395",
    "/conteudo/ajuda/entrega-e-envios", "/login", "/carrinho",
  ];
  const rows = [];
  for (const route of routes) {
    const errors = [];
    const failed = [];
    const onConsole = m => { if (m.type() === "error") errors.push(m.text().slice(0, 90)); };
    const onResponse = r => { if (r.status() >= 400) failed.push(`${r.status()} ${r.url().replace(BASE, "").slice(0, 60)}`); };
    page.on("console", onConsole);
    page.on("response", onResponse);

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(BASE + route, { waitUntil: "load", timeout: 60000 });
    await page.waitForTimeout(1800);

    const s = await page.evaluate(() => {
      const doc = document.documentElement;
      // Anything wider than the viewport is what causes the sideways drift on a phone.
      const offenders = [...document.querySelectorAll("body *")]
        .filter(el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.right > doc.clientWidth + 2; })
        .slice(0, 3)
        .map(el => `${el.tagName.toLowerCase()}.${(el.className || "").toString().split(/\s+/)[0]}`.slice(0, 34));
      return {
        overflow: Math.round(doc.scrollWidth) - Math.round(doc.clientWidth),
        offenders,
        headerH: Math.round(document.querySelector("#header")?.getBoundingClientRect().height ?? 0),
        hamburger: !!document.querySelector("#header .hamburguer"),
        broken: [...document.images].filter(i => i.complete && i.naturalWidth === 0).length,
        images: document.images.length,
        doc: Math.round(doc.scrollHeight),
      };
    });

    page.off("console", onConsole);
    page.off("response", onResponse);
    rows.push(`${route.padEnd(44)} h=${String(s.headerH).padStart(3)} burger=${s.hamburger ? "y" : "N"} overflow=${String(s.overflow).padStart(4)}px broken=${s.broken}/${s.images} errs=${errors.length} 4xx=${failed.length}${s.overflow > 2 ? " <- " + s.offenders.join(", ") : ""}`);
  }
  return rows.join("\n");
}
