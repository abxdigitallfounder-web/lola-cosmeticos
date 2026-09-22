# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/a-formula-primer-brilho-lamelar-200ml-ps-19629-300-p46339-59f380b7/ProductDetail.tsx
- Route: /a-formula-primer-brilho-lamelar-200ml-ps-19629-300-p46339 (product)
- Source: https://www.lolacosmetics.com.br/a-formula-primer-brilho-lamelar-200ml-ps-19629-300-p46339
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/a-formula-primer-brilho-lamelar-200ml-ps-19629-300-p46339-59f380b7/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46339 ts-theme-light" and #main class "context-product-46339",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46339_a-formula-primer-brilho-lamelar-200ml-ps-19629-300_m1_639071147610173817.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46339_a-formula-primer-brilho-lamelar-200ml-ps-19629-300_m6_639074373831336280.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46339_a-formula-primer-brilho-lamelar-200ml-ps-19629-300_m4_639074373717698153.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46339_a-formula-primer-brilho-lamelar-200ml-ps-19629-300_m2_639074373613493940.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46339_a-formula-primer-brilho-lamelar-200ml-ps-19629-300_m3_639074373672969350.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46339_a-formula-primer-brilho-lamelar-200ml-ps-19629-300_m9_639074379129048371.webp', index: 6, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46339_a-formula-primer-brilho-lamelar-200ml-ps-19629-300_m8_639074379056331340.webp', index: 7, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46339_a-formula-primer-brilho-lamelar-200ml-ps-19629-300_m7_639074373896350586.webp', index: 8, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46339_a-formula-primer-brilho-lamelar-200ml-ps-19629-300_m5_639074373767197570.webp', index: 9, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46339_a-formula-primer-brilho-lamelar-200ml-ps-19629-300_l1_639071147610173817.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46339_a-formula-primer-brilho-lamelar-200ml-ps-19629-300_l6_639074373831336280.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46339_a-formula-primer-brilho-lamelar-200ml-ps-19629-300_l4_639074373717698153.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46339_a-formula-primer-brilho-lamelar-200ml-ps-19629-300_l2_639074373613493940.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46339_a-formula-primer-brilho-lamelar-200ml-ps-19629-300_l3_639074373672969350.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46339_a-formula-primer-brilho-lamelar-200ml-ps-19629-300_l9_639074379129048371.webp', index: 6, variationPath:'/' } , { mediaPa

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
