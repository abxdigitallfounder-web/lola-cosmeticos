# WdBrowsingBreadcrumbs Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/tannic-acid-leave-in-protetor-100ml-ps-19629-301-p46341-2e57ea83/WdBrowsingBreadcrumbs.tsx
- Route: /tannic-acid-leave-in-protetor-100ml-ps-19629-301-p46341 (product)
- Source: https://www.lolacosmetics.com.br/tannic-acid-leave-in-protetor-100ml-ps-19629-301-p46341
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/tannic-acid-leave-in-protetor-100ml-ps-19629-301-p46341-2e57ea83/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.wd-browsing-breadcrumbs` is stored as fragments.WdBrowsingBreadcrumbs
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46341 ts-theme-light" and #main class "context-product-46341",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Você está em: Página Inicial TANNIC FINALIZADOR Tannic Acid Leave-In Protetor 100ml Página Inicial

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
