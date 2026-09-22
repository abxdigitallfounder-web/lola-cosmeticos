// Drives the mobile navigation on the clone with real taps: open the drawer, expand a
// category, follow a link, use the search, open the cart. Paid traffic lands on phones,
// so each of these has to end somewhere real rather than silently doing nothing.
async (page) => {
  const BASE = "http://127.0.0.1:4360";
  const shots = "docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2";
  const steps = [];
  const note = (name, detail) => steps.push(`${name}: ${detail}`);

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(BASE + "/", { waitUntil: "load", timeout: 60000 });
  await page.waitForTimeout(1800);

  // The cookie banner covers the lower half until it is accepted.
  const consent = page.locator("text=Concordo").first();
  if (await consent.count()) { await consent.click({ timeout: 5000 }).catch(() => {}); await page.waitForTimeout(400); }

  const drawerState = async () => page.evaluate(() => {
    const menu = document.querySelector("#header .dropdown-menu");
    if (!menu) return { present: false };
    const r = menu.getBoundingClientRect();
    return { present: true, open: menu.classList.contains("active-menu"), left: Math.round(r.x), width: Math.round(r.width) };
  });

  note("drawer before tap", JSON.stringify(await drawerState()));
  await page.locator("#header .hamburguer").first().click({ timeout: 8000 });
  await page.waitForTimeout(600);
  const afterOpen = await drawerState();
  note("drawer after tap", JSON.stringify(afterOpen));
  await page.screenshot({ path: `${shots}/qa-clone-mobile-drawer.png` });

  // Expand a top-level category inside the drawer.
  const toggle = await page.evaluate(() => {
    const menu = document.querySelector("#header .dropdown-menu");
    const candidates = [...menu.querySelectorAll("li")].filter(li => li.querySelector(".accordion-trigger") && li.getBoundingClientRect().height > 0);
    if (!candidates.length) return null;
    const li = candidates[0];
    const label = (li.querySelector("a, span")?.textContent || "").replace(/\s+/g, " ").trim().slice(0, 24);
    li.setAttribute("data-qa-target", "1");
    return { label, total: candidates.length };
  });
  note("expandable items in drawer", toggle ? `${toggle.total} (first: "${toggle.label}")` : "none found");

  if (toggle) {
    const before = await page.evaluate(() => {
      const li = document.querySelector('[data-qa-target="1"]');
      const btn = li.querySelector(".accordion-trigger");
      const panel = btn ? document.getElementById(btn.getAttribute("aria-controls")) : null;
      return { cls: li.className, panelH: panel ? Math.round(panel.getBoundingClientRect().height) : 0 };
    });
    await page.locator('[data-qa-target="1"] .accordion-trigger, [data-qa-target="1"] > a').first().click({ timeout: 8000 }).catch(() => {});
    await page.waitForTimeout(700);
    const after = await page.evaluate(() => {
      const li = document.querySelector('[data-qa-target="1"]');
      const btn = li.querySelector(".accordion-trigger");
      const panel = btn ? document.getElementById(btn.getAttribute("aria-controls")) : null;
      return { cls: li.className, panelH: panel ? Math.round(panel.getBoundingClientRect().height) : 0 };
    });
    note("accordion panel height", `${before.panelH} -> ${after.panelH}`);
    note("accordion class", `"${before.cls}" -> "${after.cls}"`);
    await page.screenshot({ path: `${shots}/qa-clone-mobile-drawer-open.png` });
  }

  // Follow a category link from the drawer.
  const link = await page.evaluate(() => {
    const menu = document.querySelector("#header .dropdown-menu");
    const open = menu.querySelector("li.is-open");
    const scope = open || menu;
    const a = [...scope.querySelectorAll("a[href^='/']")].find(a => a.getBoundingClientRect().height > 0 && /^\/[a-z]/.test(a.getAttribute("href")));
    if (!a) return null;
    a.setAttribute("data-qa-link", "1");
    return { href: a.getAttribute("href"), text: (a.textContent || "").trim().slice(0, 24) };
  });
  if (link) {
    await page.locator('[data-qa-link="1"]').first().click({ timeout: 8000 }).catch(() => {});
    await page.waitForTimeout(1600);
    note("drawer link followed", `${link.href} -> ${page.url().replace(BASE, "")}`);
    await page.screenshot({ path: `${shots}/qa-clone-mobile-category.png` });
  } else note("drawer link", "no local link found");

  // Search from the mobile header.
  await page.goto(BASE + "/", { waitUntil: "load", timeout: 60000 });
  await page.waitForTimeout(1200);
  const search = page.locator("#header .search-field").first();
  if (await search.count()) {
    await search.click({ timeout: 8000 }).catch(() => {});
    await search.fill("volumao").catch(() => {});
    await page.waitForTimeout(900);
    const suggestions = await page.evaluate(() => {
      const box = document.querySelector("#header .suggestion-box");
      return { present: !!box, visible: box ? box.getBoundingClientRect().height > 0 : false, items: box ? box.querySelectorAll("a").length : 0 };
    });
    note("search suggestions", JSON.stringify(suggestions));
    await page.screenshot({ path: `${shots}/qa-clone-mobile-search.png` });
  } else note("search", "field not found");

  // Tap a product from the home rails.
  await page.evaluate(() => {
    const a = [...document.querySelectorAll("a[href*='-p4']")].find(a => a.getBoundingClientRect().height > 0);
    if (a) a.setAttribute("data-qa-product", "1");
  });
  const product = page.locator('[data-qa-product="1"]').first();
  if (await product.count()) {
    await product.scrollIntoViewIfNeeded().catch(() => {});
    await product.click({ timeout: 8000 }).catch(() => {});
    await page.waitForTimeout(1600);
    note("product tap", page.url().replace(BASE, ""));
    await page.screenshot({ path: `${shots}/qa-clone-mobile-product.png` });
  } else note("product tap", "no product link visible");

  const overflow = await page.evaluate(() => Math.round(document.documentElement.scrollWidth) - Math.round(document.documentElement.clientWidth));
  note("horizontal overflow on product page", `${overflow}px`);

  return steps.join("\n");
}
