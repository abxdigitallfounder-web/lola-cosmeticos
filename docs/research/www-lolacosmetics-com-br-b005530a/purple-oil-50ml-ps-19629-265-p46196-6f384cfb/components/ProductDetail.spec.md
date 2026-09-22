# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/purple-oil-50ml-ps-19629-265-p46196-6f384cfb/ProductDetail.tsx
- Route: /purple-oil-50ml-ps-19629-265-p46196 (product)
- Source: https://www.lolacosmetics.com.br/purple-oil-50ml-ps-19629-265-p46196
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/purple-oil-50ml-ps-19629-265-p46196-6f384cfb/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46196 ts-theme-light" and #main class "context-product-46196",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46196_purple-oil-50ml-ps-19629-265_m1_638791105690445479.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46196_purple-oil-50ml-ps-19629-265_m2_638796180062018249.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46196_purple-oil-50ml-ps-19629-265_m3_638796180089790801.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46196_purple-oil-50ml-ps-19629-265_m4_638907810203196437.webp', index: 4, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46196_purple-oil-50ml-ps-19629-265_l1_638791105690445479.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46196_purple-oil-50ml-ps-19629-265_l2_638796180062018249.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46196_purple-oil-50ml-ps-19629-265_l3_638796180089790801.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46196_purple-oil-50ml-ps-19629-265_l4_638907810203196437.webp', index: 4, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46196_purple-oil-50ml-ps-19629-265_z1_638791105690445479.webp', index: 1, variationPath:'/' } , ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Aplique uma pequena quantidade nas mãos e distribua pelo comprimento e pontas dos cabelos secos ou úmidos. Finalize como desejar. Descrição longa O Purple Óleo Iluminador é um finalizador multifuncional que proporciona brilho intenso, proteção térmica e controle do frizz. Sua textura leve ajuda a proteger os fios do calor e deixa os cabelos loiros mais luminosos e macios. Benefícios: • Proteção térmica; • Brilho intenso; • Controle do frizz; • Ajuda a selar as pontas; • Toque sedoso; • Não pesa os fios. Dicas da Lola Use antes do secador ou da chapinha para ajudar a proteger os fios e intensificar o brilho do loiro. Como usar Aplique uma pequena quantidade nas mãos e distribua pelo comprimento e pontas dos cabelos secos ou úmidos. Finalize como desejar. Ingredientes e Ativos Purple Oil 50ml console.log("Trustvox rating | PDP:", 46196, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 46196); 5 de 5 (3) Ref: PS.19629.265 Anti-frizz Proteção Térmica Vegano Cruelty Free Embalagem Reciclável R$ 44,90 1 x R$ 44,90 sem juros var variants = [ { sku: 'PS.19629.265', productID: '46196', name: 'Purple Oil 50ml', isPromotion: 'false', price: '44,9', priceBase: '44,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
