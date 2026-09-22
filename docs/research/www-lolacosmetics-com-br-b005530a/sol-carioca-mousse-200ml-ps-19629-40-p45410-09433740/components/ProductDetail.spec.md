# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/sol-carioca-mousse-200ml-ps-19629-40-p45410-09433740/ProductDetail.tsx
- Route: /sol-carioca-mousse-200ml-ps-19629-40-p45410 (product)
- Source: https://www.lolacosmetics.com.br/sol-carioca-mousse-200ml-ps-19629-40-p45410
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/sol-carioca-mousse-200ml-ps-19629-40-p45410-09433740/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45410 ts-theme-light" and #main class "context-product-45410",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/41/45410_sol-carioca-mousse-200ml-ps-19629-40_m4_638621807452983422.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/41/45410_sol-carioca-mousse-200ml-ps-19629-40_m5_638621808529345879.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/41/45410_sol-carioca-mousse-200ml-ps-19629-40_m6_638621809845351770.webp', index: 3, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/41/45410_sol-carioca-mousse-200ml-ps-19629-40_l4_638621807452983422.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/41/45410_sol-carioca-mousse-200ml-ps-19629-40_l5_638621808529345879.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/41/45410_sol-carioca-mousse-200ml-ps-19629-40_l6_638621809845351770.webp', index: 3, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/41/45410_sol-carioca-mousse-200ml-ps-19629-40_z4_638621807452983422.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/41/45410_sol-carioca-mousse-200ml-ps-19629-40_z5_638621808529345879.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/41/45410_sol-carioca-mousse-200ml-ps-19629-40_z6_638621809845351770.webp', index: 3, variationPath:'/' } ]; Descrição Informações Como usar Descrição Curta Descrição longa Selecione a visualização desejada: Lista Como usar Aplique no corpo úmido com auxílio de uma bucha ou com as mãos e enxágue. Repita se necessário. Siga seu ritual de autocuidado com a coleção Sol Carioca. Descrição Curta Espuma de banho ultra cremosa. Limpo suavemente e meus surfactantes são dermicamente compatíveis, enquanto meus óleos vegetais, o Mate e a Água de Coco garantem a textura inovadora e o sensorial super agradável na pele. Descrição longa Espuma de banho ultra cremosa. Limpo suavemente e meus surfactantes são dermicamente compatíveis, enquanto meus óleos vegetais, o Mate e a Água de Coco garantem a textura inovadora e o sensorial super agradável na pele. Como usar Aplique no corpo úmido com auxílio de uma bucha ou com as mãos e enxágue. Repita se necessário. Siga seu ritual de autocuidado com a coleção Sol Carioca. Ingredientes e Ativos SOL CARIOCA - MOUSSE 200ML console.log("Trustvox rating | PDP:", 45410, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 45410); 5 de 5 (3) Ref: PS.19629.40 Corpo Lolaterapia Vegano Cruelty Free Embalagem Reciclável R$ 69,90 2 x R$ 34,95 sem juros var variants = [ { sku: 'PS.19629.40', productID: '45410', name: 'SOL CARIOCA - MOUSSE 200ML', isPromotion: 'false', price: 

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
