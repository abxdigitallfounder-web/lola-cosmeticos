# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/plot-twist-nut-gel-230g-ps-19629-256-p46172-f96d7407/ProductDetail.tsx
- Route: /plot-twist-nut-gel-230g-ps-19629-256-p46172 (product)
- Source: https://www.lolacosmetics.com.br/plot-twist-nut-gel-230g-ps-19629-256-p46172
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/plot-twist-nut-gel-230g-ps-19629-256-p46172-f96d7407/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46172 ts-theme-light" and #main class "context-product-46172",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46172_plot-twist-nut-gel-230g-ps-19629-256_m1_638724491777338120.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46172_plot-twist-nut-gel-230g-ps-19629-256_m2_638907804424212009.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46172_plot-twist-nut-gel-230g-ps-19629-256_m3_638907804466113625.webp', index: 3, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46172_plot-twist-nut-gel-230g-ps-19629-256_l1_638724491777338120.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46172_plot-twist-nut-gel-230g-ps-19629-256_l2_638907804424212009.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46172_plot-twist-nut-gel-230g-ps-19629-256_l3_638907804466113625.webp', index: 3, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46172_plot-twist-nut-gel-230g-ps-19629-256_z1_638724491777338120.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/17/46172_plot-twist-nut-gel-230g-ps-19629-256_z2_638907804424212009.webp', index: 2, variationPath:'/' } , ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Aplique sobre os cabelos úmidos ou secos para modelar penteados e definir os fios. Descrição longa Plot Twist Nut Gel proporciona alta fixação para estilizações e penteados, mantendo definição duradoura e controle do frizz. Benefícios: • Alta fixação; • Longa duração; • Controle do frizz; • Brilho; • Não resseca. Dicas da Lola Perfeito para baby hairs e penteados presos. Como usar Aplique sobre os cabelos úmidos ou secos para modelar penteados e definir os fios. Ingredientes e Ativos Plot Twist Nut Gel 230g console.log("Trustvox rating | PDP:", 46172, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 46172); 4.1 de 5 (7) Ref: PS.19629.256 Proteção Térmica Anti-frizz Finalizador Vegano Cruelty Free Embalagem Reciclável R$ 69,90 2 x R$ 34,95 sem juros var variants = [ { sku: 'PS.19629.256', productID: '46172', name: 'Plot Twist Nut Gel 230g', isPromotion: 'false', price: '69,9', priceBase: '69,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&gt;R$ 69,90&lt;/span&gt;&lt;/strong&gt; &lt;dfn class=&#39;condition&#39;&gt;&lt;span class=&#39;parcels&#39;&gt;2 x &lt;/span&gt;&lt;span class=&#39;parcel-value&#39;&gt;R$ 34,95 &lt;/span&gt;&lt;span class=&quot;label&quot;&gt; sem juros&lt;/span&gt; &lt;/dfn&gt; ', isPurchasable: true, isInventoryAvailable: true, handlingDays: 0, MinimumQtyAllowed:'0', MaximumQtyAllowed:'0', 

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
