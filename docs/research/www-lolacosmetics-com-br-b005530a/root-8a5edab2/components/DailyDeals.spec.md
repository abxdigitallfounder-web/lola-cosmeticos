# DailyDeals Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/DailyDeals.tsx
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/desktop-loaded-1440.png and mobile-390.png
- Interaction: click/swipe carousel, 500ms ease

## DOM Structure
Exact sanitized source markup is provided as fragments.DailyDeals in fragments.json. All source class names and inline SVGs retained. Render as HTML with display:contents wrapper to preserve selectors. Original CSS is loaded globally from local source.css, including all descendant values. Do not approximate or override original styles.

## Computed Styles
- fontSize: 14px
- fontWeight: 400
- fontFamily: Lato, sans-serif
- lineHeight: normal
- letterSpacing: normal
- color: rgb(0, 0, 0)
- backgroundColor: rgba(0, 0, 0, 0)
- padding: 0px 20px
- margin: 0px 1.60938px 0px 1.59375px
- width: 1396.8px
- height: 750px
- maxWidth: 97%
- display: block
- flexDirection: row
- justifyContent: normal
- alignItems: normal
- gap: normal
- borderRadius: 0px
- border: 0px none rgb(0, 0, 0)
- boxShadow: none
- overflow: visible
- position: relative
- top: 0px
- zIndex: auto
- opacity: 1
- transform: none
- transition: all

## States & Behaviors
Native scrolling, fixed header remains 212px at 1440 before and after scroll; no Lenis. Desktop navigation hover reveals menus (block/grid/flex); mobile .dropdown-menu toggles .active-menu with left 0px and 0.3s transition. Hero starts at slide 0, auto advance every 5000ms, pauses on hover/focus, dots clickable. Product carousels: 4 desktop, 3 below 1250, 2 below 1024; paired promo/collector 2 throughout.

## Per-State Content
All carousel slide contents retained in fragments; source inline icons retained verbatim. No backend or authentication. Non-home destinations link to original site. Local demo purchase/wishlist are handled separately.

## Assets
All URLs in fragment are rewritten using asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/. Exact source imagery, fonts, SVGs, and videos locally hosted.

## Text Content (verbatim)
Todo dia uma promo babadeira✨ Ver mais Acaba em: 99dias:11horas:46min :52seg 60% OFF [] (3) SOL CARIOCA - MOUSSE 200ML 10% de cashback de R$ 69,90 por Por R$ 27,96 1 x R$ 27,96 sem juros - + Comprar ADICIONAR À SACOLA 60% OFF [] (3) CHAPADA QUE JÁ FOI MAR - SABONETE CREMOSO 280G 10% de cashback de R$ 74,90 por Por R$ 29,96 1 x R$ 29,96 sem juros - + Comprar ADICIONAR À SACOLA 60% OFF [] (4) BAHIA À VISTA MOUSSE 200ML 10% de cashback de R$ 69,90 por Por R$ 27,96 1 x R$ 27,96 sem juros - + Comprar ADICIONAR À SACOLA 60% OFF [] (3) SOL CARIOCA - MOUSSE 200ML 10% de cashback de R$ 69,90 por Por R$ 27,96 1 x R$ 27,96 sem juros - + Comprar ADICIONAR À SACOLA 60% OFF [] (3) CHAPADA QUE JÁ FOI MAR - SABONETE CREMOSO 280G 10% de cashback de R$ 74,90 por Por R$ 29,96 1 x R$ 29,96 sem juros - + Comprar ADICIONAR À SACOLA 60% OFF [] (4) BAHIA À VISTA MOUSSE 200ML 10% de cashback de R$ 69,90 por Por R$ 27,96 1 x R$ 27,96 sem juros - + Comprar ADICIONAR À SACOLA 60% OFF [] (3) SOL CARIOCA - MOUSSE 200ML 10% de cashback de R$ 69,90 por Por R$ 27,96 1 x R$ 27,96 sem juros - + Comprar ADICIONAR À SACOLA 60% OFF [] (3) CHAPADA QUE JÁ FOI MAR - SABONETE CREMOSO 280G 10% de cashback de R$ 74,90 por Por R$ 29,96 1 x R$ 29,96 sem juros - + Comprar ADICIONAR À SACOLA Ver mais

## Responsive Behavior
1440: original desktop layout. 768 and 390: source CSS media queries, header switches at 1100px. Matching mobile screenshot and mobile-specific hero/header fragments available. Product rails use breakpoints above.
