# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/plot-twist-shampoo-sem-enxague-200ml-ps-19629-255-p46170-10f6bff7/ProductDetail.tsx
- Route: /plot-twist-shampoo-sem-enxague-200ml-ps-19629-255-p46170 (product)
- Source: https://www.lolacosmetics.com.br/plot-twist-shampoo-sem-enxague-200ml-ps-19629-255-p46170
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/plot-twist-shampoo-sem-enxague-200ml-ps-19629-255-p46170-10f6bff7/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46170 ts-theme-light" and #main class "context-product-46170",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46170_plot-twist-shampoo-sem-enxague-200ml-ps-19629-255_m1_638724489395148844.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46170_plot-twist-shampoo-sem-enxague-200ml-ps-19629-255_m2_638907804970942878.webp', index: 2, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46170_plot-twist-shampoo-sem-enxague-200ml-ps-19629-255_l1_638724489395148844.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46170_plot-twist-shampoo-sem-enxague-200ml-ps-19629-255_l2_638907804970942878.webp', index: 2, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46170_plot-twist-shampoo-sem-enxague-200ml-ps-19629-255_z1_638724489395148844.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46170_plot-twist-shampoo-sem-enxague-200ml-ps-19629-255_z2_638907804970942878.webp', index: 2, variationPath:'/' } ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Aplique diretamente no couro cabeludo, massageie suavemente e retire o excesso com uma toalha, sem necessidade de enxágue. Descrição longa O Shampoo Sem Enxágue para Tranças Plot Twist limpa delicadamente o couro cabeludo entre as lavagens, reduzindo odores, excesso de oleosidade e sensação de coceira sem desfazer o penteado. Benefícios: • Limpeza sem enxágue; • Sensação refrescante; • Auxilia na redução da coceira; • Mantém as tranças limpas por mais tempo; • Não compromete o penteado. Dicas da Lola Ideal para manter tranças, twists e estilos protetores limpos e confortáveis entre as lavagens. Como usar Aplique diretamente no couro cabeludo, massageie suavemente e retire o excesso com uma toalha, sem necessidade de enxágue. Ingredientes e Ativos Plot Twist Shampoo Sem Enxágue 200ml console.log("Trustvox rating | PDP:", 46170, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 46170); 4.3 de 5 (3) Ref: PS.19629.255 Shampoo Uso diário Vegano Cruelty Free Embalagem Reciclável R$ 59,90 1 x R$ 59,90 sem juros var variants = [ { sku: 'PS.19629.255', productID: '46170', name: 'Plot Twist Shampoo Sem Enx&#225;gue 200ml', isPromotion: 'false', price: '59,9', priceBase: '59,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&gt;R$ 59,90&lt;/span&gt;&lt;/strong&gt; &lt;dfn class=&#39;condition&#39;&gt;&lt;span class=&#39;parcels&#39;&gt;1 x &lt;/span&gt;&lt;span class=&#39;parcel-value&#39;&gt;R$ 59,90 &lt;/span&gt;&lt;span class=&quot;label&quot;&gt; sem juros&lt;/span&gt; &lt;/dfn&gt; ', isPurchasable: true, isInventoryAvailable: true, handlingDays: 0, MinimumQtyAllowed:'0', MaximumQtyAllowed:'0', availability: 'I',

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
