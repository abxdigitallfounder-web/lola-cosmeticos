# ProductMediasZoom Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/necessaire-doce-vida-ps-19629-293-p46295-104ba1de/ProductMediasZoom.tsx
- Route: /necessaire-doce-vida-ps-19629-293-p46295 (product)
- Source: https://www.lolacosmetics.com.br/necessaire-doce-vida-ps-19629-293-p46295
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/necessaire-doce-vida-ps-19629-293-p46295-104ba1de/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `#product-medias-zoom` is stored as fragments.ProductMediasZoom
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46295 ts-theme-light" and #main class "context-product-46295",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)


## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
