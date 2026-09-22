# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/plot-twist-bio-nut-oil-90ml-ps-19629-258-p46176-d1fc2d7e/ProductDetail.tsx
- Route: /plot-twist-bio-nut-oil-90ml-ps-19629-258-p46176 (product)
- Source: https://www.lolacosmetics.com.br/plot-twist-bio-nut-oil-90ml-ps-19629-258-p46176
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/plot-twist-bio-nut-oil-90ml-ps-19629-258-p46176-d1fc2d7e/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46176 ts-theme-light" and #main class "context-product-46176",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46176_plot-twist-bio-nut-oil-90ml-ps-19629-258_m1_638724488140409063.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46176_plot-twist-bio-nut-oil-90ml-ps-19629-258_m2_638907805151438228.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46176_plot-twist-bio-nut-oil-90ml-ps-19629-258_m3_638907805191401350.webp', index: 3, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46176_plot-twist-bio-nut-oil-90ml-ps-19629-258_l1_638724488140409063.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46176_plot-twist-bio-nut-oil-90ml-ps-19629-258_l2_638907805151438228.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46176_plot-twist-bio-nut-oil-90ml-ps-19629-258_l3_638907805191401350.webp', index: 3, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46176_plot-twist-bio-nut-oil-90ml-ps-19629-258_z1_638724488140409063.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46176_plot-twist-bio-nut-oil-90ml-ps-19629-258_z2_638907805151438228.webp', index: 2, variationPath:'/' } , ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Aplique poucas gotas no comprimento e pontas dos cabelos secos ou úmidos. Descrição longa O Óleo Plot Twist promove nutrição, proteção térmica e oleoterapia, deixando os fios macios, protegidos e com brilho saudável. Benefícios: • Nutrição intensa; • Proteção térmica; • Brilho; • Toque sedoso; • Auxilia na proteção contra agressões externas. Dicas da Lola Também pode ser utilizado como tratamento noturno ou umectação leve. Como usar Aplique poucas gotas no comprimento e pontas dos cabelos secos ou úmidos. Ingredientes e Ativos Plot Twist Bio Nut Oil 90ml console.log("Trustvox rating | PDP:", 46176, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 46176); 4.7 de 5 (19) Ref: PS.19629.258 Anti-frizz Proteção Térmica Nutrição Finalizador Vegano Cruelty Free Embalagem Reciclável R$ 59,90 1 x R$ 59,90 sem juros var variants = [ { sku: 'PS.19629.258', productID: '46176', name: 'Plot Twist Bio Nut Oil 90ml', isPromotion: 'false', price: '59,9', priceBase: '59,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&gt;R$ 59,90&lt;/span&gt;&lt;/strong&gt; &lt;dfn class=&#39;condition&#39;&gt;&lt;span class=&#39;parcels&#39;&gt;1 x &lt;/span&gt;&lt;span class=&#39;parcel-value&#39;&gt;R$ 59,90 &lt;/span&gt;&lt;span class=&quot;label&quot;&gt; sem juros&lt;/span&gt; &lt;/dfn&gt; ', isPurchasable: tru

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
