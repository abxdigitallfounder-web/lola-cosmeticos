# Header Specification
## Overview
Target: src/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/Header.tsx.
Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/desktop-top.png and mobile-top.png.
Interaction model: hover desktop nav; click mobile nav/search/bag.
## DOM Structure
Render exact pre-sanitized fragments.Header from ./fragments.json, using display:contents wrapper. Source CSS loaded by root layout; retain original classes, inline SVGs and assets. No new foundation edits.
## Computed Styles
Header: fixed; top:0px; z-index:999; desktop height:212px; width:1440px; padding:0px; margin:0px; background:transparent; border:0; font:Lato 14px 400; opacity:1; transform:none. Main bar and nav white. Exact descendant CSS already loaded by source.css.
## States & Behaviors
Scroll at 0..7148 leaves header fixed with same size.
Desktop hover reveals original sub-section menus, block/grid/flex per CSS.
Below1100px hamburger opens .dropdown-menu.active-menu: left 0px, transition0.3s. Close button/Escape closes. Mobile accordion buttons show submenu; back returns to parent.
Search: local demo product suggestions/results derived from on-page .wd-product-line, with product name/image; filter case-insensitive, Enter selects or displays no results. Never submit to backend.
Cart trigger dispatch window CustomEvent('lola:open-cart'); parent implements local cart.
Login/account and tracking remain original external links.
## Per-State Content
All nav items and menu content in fragment retained verbatim, including KITS, TIPOS DE CABELO, TRATAMENTOS, COLEÇÕES, LANÇAMENTOS, PROMOÇÃO. Placeholder O que você procura? Rastrear pedido. No authentication backend.
## Assets
Local /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2 assets in fragment and CSS; icons embedded SVG. Do not replace assets.
## Text Content
Preserve every source fragment text node. Search empty state may say Nenhum produto encontrado.
## Responsive Behavior
1440: full desktop nav. 768/390: hamburger and original mobile styles. Actual source mobile has cramped search; preserve structure but ensure controls operable. Use exact1100px breakpoint.

