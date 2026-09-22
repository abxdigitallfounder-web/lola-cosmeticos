# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/kit-be-m-dita-praia-geleia-e-bronze-p46241-38a490ce/ProductDetail.tsx
- Route: /kit-be-m-dita-praia-geleia-e-bronze-p46241 (product)
- Source: https://www.lolacosmetics.com.br/kit-be-m-dita-praia-geleia-e-bronze-p46241
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/kit-be-m-dita-praia-geleia-e-bronze-p46241-38a490ce/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46241 ts-theme-light" and #main class "context-product-46241",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/24/46241_kit-be-m-dita-praia-geleia-e-bronze_m2_638868818045311114.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/24/46241_kit-be-m-dita-praia-geleia-e-bronze_m1_638868817902398373.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/24/46241_kit-be-m-dita-praia-geleia-e-bronze_m1_638868817926293037.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/24/46241_kit-be-m-dita-praia-geleia-e-bronze_m1_638868817926293037.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/24/46241_kit-be-m-dita-praia-geleia-e-bronze_m1_638868817902398373.webp', index: 5, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/24/46241_kit-be-m-dita-praia-geleia-e-bronze_l2_638868818045311114.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/24/46241_kit-be-m-dita-praia-geleia-e-bronze_l1_638868817902398373.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/24/46241_kit-be-m-dita-praia-geleia-e-bronze_l1_638868817926293037.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/24/46241_kit-be-m-dita-praia-geleia-e-bronze_l1_638868817926293037.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/24/46241_kit-be-m-dita-praia-geleia-e-bronze_l1_638868817902398373.webp', index: 5, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/24/46241_kit-be-m-dita-praia-geleia-e-bronze_z2_638868818045311114.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/24/46241_kit-be-m-dita-praia-geleia-e-bronze_z1_638868817902398373.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/24/46241_kit-be-m-dita-praia-geleia-e-bronze_z1_638868817926293037.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/24/46241_kit-be-m-dita-praia-geleia-e-bronze_z1_638868817926293037.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/24/46241_kit-be-m-dita-praia-geleia-e-bronze_z1_638868817902398373.webp', index: 5, variationPath:'/' } ]; Descrição Informações Selecione a visualização desejada: Lista Ingredientes e Ativos Kit Be(m)dita Praia - Geleia e Bronze console.log("Trustvox rating | PDP:", 46241, "tipo:", 7); console.log("Trustvox rating | 

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
