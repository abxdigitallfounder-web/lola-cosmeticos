// Measures the mobile header and its navigation on the clone and on the source, then
// exercises the menu: paid traffic lands here, so the hamburger, the drawer, its
// accordions and the search all have to behave the same on both.
async (page) => {
  const BASE = "http://127.0.0.1:4360";

  const probe = async () => {
    const measure = () => {
      const box = sel => { const el = document.querySelector(sel); if (!el) return null; const r = el.getBoundingClientRect(); return { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) }; };
      const seen = sel => { const el = document.querySelector(sel); if (!el) return false; const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.display !== "none"; };
      return {
        headerH: box("#header")?.h ?? null,
        logo: box("#logo, .logo-menu, #header .logo"),
        hamburger: box("#header .hamburguer"),
        search: box("#header .search-field"),
        searchBtn: box("#header .wd-search button"),
        cart: box("#header .cart, #header .minicart, #header [class*='carrinho']"),
        menuOpen: seen("#header .dropdown-menu.active-menu"),
        overflowX: Math.round(document.documentElement.scrollWidth) - Math.round(document.documentElement.clientWidth),
      };
    };
    const before = await page.evaluate(measure);

    // Open the drawer the way a visitor would.
    const opened = await page.evaluate(() => {
      const trigger = document.querySelector("#header .hamburguer svg, #header .hamburguer");
      if (!trigger) return false;
      trigger.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      return true;
    });
    await page.waitForTimeout(700);
    const afterOpen = await page.evaluate(() => {
      const menu = document.querySelector("#header .dropdown-menu");
      const r = menu ? menu.getBoundingClientRect() : null;
      const cs = menu ? getComputedStyle(menu) : null;
      return {
        opened: !!menu && menu.classList.contains("active-menu"),
        left: cs ? cs.left : null,
        width: r ? Math.round(r.width) : null,
        visibleLinks: menu ? [...menu.querySelectorAll("a")].filter(a => a.getBoundingClientRect().width > 0).length : 0,
        firstItems: menu ? [...menu.querySelectorAll("a")].filter(a => a.getBoundingClientRect().width > 0).slice(0, 5).map(a => (a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 18)) : [],
      };
    });

    // Expand the first accordion inside the drawer.
    const accordion = await page.evaluate(() => {
      const menu = document.querySelector("#header .dropdown-menu");
      if (!menu) return null;
      const toggle = menu.querySelector("li.has-children > a, li > a.has-children, .menu-item-has-children > a, li:has(ul) > a");
      if (!toggle) return "no toggle found";
      const li = toggle.closest("li");
      const before = li ? li.className : "";
      toggle.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
      return { before, after: li ? li.className : "", panelVisible: li && li.querySelector("ul") ? li.querySelector("ul").getBoundingClientRect().height > 0 : false };
    });
    await page.waitForTimeout(500);
    const accordionAfter = await page.evaluate(() => {
      const menu = document.querySelector("#header .dropdown-menu");
      const li = menu ? menu.querySelector("li.is-open, li.active") : null;
      const panel = li ? li.querySelector("ul") : null;
      return { openItem: li ? (li.querySelector("a")?.textContent || "").trim().slice(0, 20) : null, panelH: panel ? Math.round(panel.getBoundingClientRect().height) : 0 };
    });

    return { before, opened, afterOpen, accordion, accordionAfter };
  };

  const out = {};
  for (const [label, url] of [["clone", BASE + "/"], ["source", "https://www.lolacosmetics.com.br/"]]) {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(url, { waitUntil: "load", timeout: 90000 });
    await page.waitForTimeout(2000);
    out[label] = await probe();
    await page.screenshot({ path: `docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/qa-${label}-mobile-menu.png` });
  }
  return JSON.stringify(out, null, 1);
}
