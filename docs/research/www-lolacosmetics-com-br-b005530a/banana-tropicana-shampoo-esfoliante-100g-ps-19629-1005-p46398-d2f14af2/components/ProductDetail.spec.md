# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005-p46398-d2f14af2/ProductDetail.tsx
- Route: /banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005-p46398 (product)
- Source: https://www.lolacosmetics.com.br/banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005-p46398
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005-p46398-d2f14af2/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46398 ts-theme-light" and #main class "context-product-46398",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/39/46398_banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005_m2_639241330456295979.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/39/46398_banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005_m4_639241330710382426.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/39/46398_banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005_m1_639241330273093312.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/39/46398_banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005_m6_639241331101856019.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/39/46398_banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005_m5_639241330918002762.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/39/46398_banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005_m7_639241331268184319.webp', index: 6, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/39/46398_banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005_m9_639241331633305750.webp', index: 7, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/39/46398_banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005_m8_639241331482189134.webp', index: 8, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/39/46398_banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005_l2_639241330456295979.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/39/46398_banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005_l4_639241330710382426.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/39/46398_banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005_l1_639241330273093312.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/39/46398_banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005_l6_639241331101856019.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/39/46398_banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005_l5_639241330918002762.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/39/46398_banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005_l7_639241331268184319.webp', index: 6, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/39/46398_banana-tropicana-shampoo-esfoliante-100g-ps-19629-1005_l9_6392413

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
