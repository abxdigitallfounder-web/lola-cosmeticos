# WdBrowsingBreadcrumbs Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/lancamentos-kits-de-presente-570541da/WdBrowsingBreadcrumbs.tsx
- Route: /lancamentos/kits-de-presente (category)
- Source: https://www.lolacosmetics.com.br/lancamentos/kits-de-presente
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/lancamentos-kits-de-presente-570541da/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.wd-browsing-breadcrumbs` is stored as fragments.WdBrowsingBreadcrumbs
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-category-1681 grid-products" and #main class "context-category-1681 grid-products",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Você está em: Página Inicial LANÇAMENTOS Kits de presente Página Inicial

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
