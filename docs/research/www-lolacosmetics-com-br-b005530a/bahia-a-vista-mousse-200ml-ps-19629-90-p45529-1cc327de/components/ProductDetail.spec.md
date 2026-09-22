# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/bahia-a-vista-mousse-200ml-ps-19629-90-p45529-1cc327de/ProductDetail.tsx
- Route: /bahia-a-vista-mousse-200ml-ps-19629-90-p45529 (product)
- Source: https://www.lolacosmetics.com.br/bahia-a-vista-mousse-200ml-ps-19629-90-p45529
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/bahia-a-vista-mousse-200ml-ps-19629-90-p45529-1cc327de/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45529 ts-theme-light" and #main class "context-product-45529",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd23_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/52/45529_bahia-a-vista-mousse-200ml-ps-19629-90_m4_638621807906051491.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/52/45529_bahia-a-vista-mousse-200ml-ps-19629-90_m5_638621808987261636.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/52/45529_bahia-a-vista-mousse-200ml-ps-19629-90_m5_638621808991426018.webp', index: 3, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/52/45529_bahia-a-vista-mousse-200ml-ps-19629-90_l4_638621807906051491.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/52/45529_bahia-a-vista-mousse-200ml-ps-19629-90_l5_638621808987261636.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/52/45529_bahia-a-vista-mousse-200ml-ps-19629-90_l5_638621808991426018.webp', index: 3, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/52/45529_bahia-a-vista-mousse-200ml-ps-19629-90_z4_638621807906051491.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/52/45529_bahia-a-vista-mousse-200ml-ps-19629-90_z5_638621808987261636.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/52/45529_bahia-a-vista-mousse-200ml-ps-19629-90_z5_638621808991426018.webp', index: 3, variationPath:'/' } ]; Descrição Informações Como usar Descrição Curta Descrição longa Selecione a visualização desejada: Lista Como usar Aplique no corpo úmido com auxílio de uma bucha ou com as mãos e enxágue. Repita se necessário. Siga seu ritual de autocuidado. Descrição Curta Espuma de banho ultra cremosa, limpo suavemente e meus surfactantes são dermicamente compatíveis. Descrição longa Meus óleos vegetais, a manteiga de Cacau e o extrato de Banana, garantem a textura inovadora e o sensorial super agradável na pele. Indicada para todos os tipos de pele, mesmo as mais sensíveis. Como usar Aplique no corpo úmido com auxílio de uma bucha ou com as mãos e enxágue. Repita se necessário. Siga seu ritual de autocuidado. Ingredientes e Ativos BAHIA À VISTA MOUSSE 200ML console.log("Trustvox rating | PDP:", 45529, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 45529); 4.5 de 5 (4) Ref: PS.19629.90 Corpo Lolaterapia Vegano Cruelty Free Embalagem Reciclável R$ 69,90 2 x R$ 34,95 sem juros var variants = [ { sku: 'PS.19629.90', productID: '45529', name: 'BAHIA &#192; VISTA MOUSSE 200ML', isPromotion: 'false', price: '69,9', priceBase: '69,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&gt;R$ 69,90&lt;/span&gt;&lt;/strong&gt; &lt;dfn clas

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
