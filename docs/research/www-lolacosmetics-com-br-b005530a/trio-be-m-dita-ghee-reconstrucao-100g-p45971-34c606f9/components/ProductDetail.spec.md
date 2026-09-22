# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/trio-be-m-dita-ghee-reconstrucao-100g-p45971-34c606f9/ProductDetail.tsx
- Route: /trio-be-m-dita-ghee-reconstrucao-100g-p45971 (product)
- Source: https://www.lolacosmetics.com.br/trio-be-m-dita-ghee-reconstrucao-100g-p45971
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/trio-be-m-dita-ghee-reconstrucao-100g-p45971-34c606f9/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45971 ts-theme-light" and #main class "context-product-45971",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_m1_638636469021742498.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_m2_638636469140395450.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_m5_638636469524393932.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_m4_638636469459132999.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_m3_638636469381922325.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_m5_638636469524393932.webp', index: 6, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_m4_638636469459132999.webp', index: 7, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_m3_638636469381922325.webp', index: 8, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_l1_638636469021742544.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_l2_638636469140395502.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_l5_638636469524394004.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_l4_638636469459133053.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_l3_638636469381922378.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_l5_638636469524394004.webp', index: 6, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_l4_638636469459133053.webp', index: 7, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45971_trio-be-m-dita-ghee-reconstrucao-100g_l3_638636469381922378.webp', index: 8, variationPath:'/' } ]; var MediaZoomDS 

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
