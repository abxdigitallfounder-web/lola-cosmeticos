# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/kit-xapadinha-liso-perfeito-disciplina-anti-frizz-e-anti-quebra-p45750-590cddf6/ProductDetail.tsx
- Route: /kit-xapadinha-liso-perfeito-disciplina-anti-frizz-e-anti-quebra-p45750 (product)
- Source: https://www.lolacosmetics.com.br/kit-xapadinha-liso-perfeito-disciplina-anti-frizz-e-anti-quebra-p45750
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/kit-xapadinha-liso-perfeito-disciplina-anti-frizz-e-anti-quebra-p45750-590cddf6/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45750 ts-theme-light" and #main class "context-product-45750",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd23_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadinha-com-mascara-de-450g_m7_638632879878801479.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadinha-com-mascara-de-450g_m7_638632879872343246.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadinha-com-mascara-de-450g_m8_638632879948796176.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadinha-com-mascara-de-450g_m5_638629537768066587.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadinha-com-mascara-de-450g_m6_638629537781192917.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadinha-com-mascara-de-450g_m5_638629537764973213.webp', index: 6, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadinha-com-mascara-de-450g_m6_638629537784438509.webp', index: 7, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadinha-com-mascara-de-450g_l7_638632879878801549.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadinha-com-mascara-de-450g_l7_638632879872343322.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadinha-com-mascara-de-450g_l8_638632879948796320.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadinha-com-mascara-de-450g_l5_638629537768066660.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadinha-com-mascara-de-450g_l6_638629537781192977.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadinha-com-mascara-de-450g_l5_638629537764973271.webp', index: 6, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadinha-com-mascara-de-450g_l6_638629537784438584.webp', index: 7, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadinha-com-mascara-de-450g_z7_638632879878801611.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/75/45750_kit-completo-xapadin

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
