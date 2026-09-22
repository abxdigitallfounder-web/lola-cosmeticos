// Grabs every stylesheet exactly as the browser received it on an interior route. The
// downloader fetches sheets with its own request, and at least one bundle comes back
// without the grid rules that way, which collapses the two-column category layout.
async (page) => {
  const sheets = [];
  const seen = new Set();
  page.on("response", async response => {
    const type = response.headers()["content-type"] || "";
    if (!type.includes("css")) return;
    const url = response.url();
    if (seen.has(url)) return;
    seen.add(url);
    try { sheets.push({ url, css: await response.text() }); } catch { /* body already consumed */ }
  });

  const report = [];
  for (const pathname of ["/tratamentos", "/volumao-shampoo-250ml-ps-19629-321-p46389", "/login", "/carrinho", "/"]) {
    await page.goto("https://www.lolacosmetics.com.br" + pathname, { waitUntil: "load", timeout: 90000 });
    await page.waitForTimeout(2500);
    report.push(`${pathname}: ${sheets.length} stylesheets so far`);
  }

  const withGrid = sheets.filter(s => /(^|[},])\s*\.row\s*(,[^{]*)?\{[^}]*display\s*:\s*-?\w*flex/.test(s.css));
  const payload = JSON.stringify({ sheets: sheets.map(s => ({ url: s.url, css: s.css })) });
  await page.evaluate(async ({ body }) => {
    await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://127.0.0.1:4599/?path=" + encodeURIComponent("docs/research/www-lolacosmetics-com-br-b005530a/browser-stylesheets.json"), true);
      xhr.onload = () => resolve();
      xhr.onerror = () => reject(new Error("upload failed"));
      xhr.send(body);
    });
  }, { body: payload });

  return [
    ...report,
    `total ${sheets.length} sheets, ${Math.round(payload.length / 1024)}kb`,
    `sheets defining a bare .row flex rule: ${withGrid.map(s => s.url.slice(0, 80)).join(" | ") || "none"}`,
  ].join("\n");
}
