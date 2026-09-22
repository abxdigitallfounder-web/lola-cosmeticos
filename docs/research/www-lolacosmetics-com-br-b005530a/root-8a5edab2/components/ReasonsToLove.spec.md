# ReasonsToLove Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/ReasonsToLove.tsx
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/desktop-loaded-1440.png and mobile-390.png
- Interaction: links, hover and local UI controls

## DOM Structure
Exact sanitized source markup is provided as fragments.ReasonsToLove in fragments.json. All source class names and inline SVGs retained. Render as HTML with display:contents wrapper to preserve selectors. Original CSS is loaded globally from local source.css, including all descendant values. Do not approximate or override original styles.

## Computed Styles
No computed capture for this section; the original declarations in source.css apply unchanged.

## States & Behaviors
Native scrolling, fixed header remains 212px at 1440 before and after scroll; no Lenis. Desktop navigation hover reveals menus (block/grid/flex); mobile .dropdown-menu toggles .active-menu with left 0px and 0.3s transition. Hero starts at slide 0, auto advance every 5000ms, pauses on hover/focus, dots clickable. Product carousels: 4 desktop, 3 below 1250, 2 below 1024; paired promo/collector 2 throughout.

## Per-State Content
All carousel slide contents retained in fragments; source inline icons retained verbatim. No backend or authentication. Non-home destinations link to original site. Local demo purchase/wishlist are handled separately.

## Assets
All URLs in fragment are rewritten using asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/. Exact source imagery, fonts, SVGs, and videos locally hosted.

## Text Content (verbatim)
Motivos para amar a Lola Vegano Livre de ingredientes de origem animal e derivados Cruelty Free Livre de testes em animais. Fórmulas + Naturais Ativos naturais de alta eficácia. Embalagens recicláveis Porque não há plano B para o meio ambiente, não é, Lolete?

## Responsive Behavior
1440: original desktop layout. 768 and 390: source CSS media queries, header switches at 1100px. Matching mobile screenshot and mobile-specific hero/header fragments available. Product rails use breakpoints above.
