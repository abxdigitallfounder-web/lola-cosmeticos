# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/plot-twist-buriti-pudding-ps-19629-254-p46166-b80cf964/ProductDetail.tsx
- Route: /plot-twist-buriti-pudding-ps-19629-254-p46166 (product)
- Source: https://www.lolacosmetics.com.br/plot-twist-buriti-pudding-ps-19629-254-p46166
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/plot-twist-buriti-pudding-ps-19629-254-p46166-b80cf964/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46166 ts-theme-light" and #main class "context-product-46166",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/16/46166_plot-twist-buriti-pudding-ps-19629-254_m1_638724490517964310.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/16/46166_plot-twist-buriti-pudding-ps-19629-254_m2_638907803327844977.webp', index: 2, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/16/46166_plot-twist-buriti-pudding-ps-19629-254_l1_638724490517964310.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/16/46166_plot-twist-buriti-pudding-ps-19629-254_l2_638907803327844977.webp', index: 2, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/16/46166_plot-twist-buriti-pudding-ps-19629-254_z1_638724490517964310.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/16/46166_plot-twist-buriti-pudding-ps-19629-254_z2_638907803327844977.webp', index: 2, variationPath:'/' } ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Aplique nos cabelos úmidos ou secos e modele conforme desejar. Descrição longa A Manteiga Modeladora Plot Twist Buriti Pudding oferece alta definição e controle do volume, mantendo os fios nutridos, protegidos e com toque macio. Benefícios: • Alta definição; • Nutrição intensa; • Controle do volume; • Redução do frizz; • Toque macio. Dicas da Lola Ideal para cabelos crespos ou de maior densidade. Como usar Aplique nos cabelos úmidos ou secos e modele conforme desejar. Ingredientes e Ativos Plot Twist Buriti Pudding 480g console.log("Trustvox rating | PDP:", 46166, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 46166); 4.1 de 5 (7) Ref: PS.19629.254 Nutrição Anti-frizz Finalizador Vegano Cruelty Free Embalagem Reciclável R$ 69,90 2 x R$ 34,95 sem juros var variants = [ { sku: 'PS.19629.254', productID: '46166', name: 'Plot Twist Buriti Pudding 480g', isPromotion: 'false', price: '69,9', priceBase: '69,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&gt;R$ 69,90&lt;/span&gt;&lt;/strong&gt; &lt;dfn class=&#39;condition&#39;&gt;&lt;span class=&#39;parcels&#39;&gt;2 x &lt;/span&gt;&lt;span class=&#39;parcel-value&#39;&gt;R$ 34,95 &lt;/span&gt;&lt;span class=&quot;label&quot;&gt; sem juros&lt;/span&gt; &lt;/dfn&gt; ', isPurchasable: true, isInventoryAvailable: true, handlingDays: 0, MinimumQtyAllowed:'0', MaximumQtyAllowed:'0', availability: 'I', buyBox: {}, StockBalance:'211' , options: [ ] }, { sku: '19629.254', productID: '46167', name: 'Plot Twist Buriti Pudding 480g', isPromotion: 'false', price: '69,9', priceBase: '69,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&gt;R$ 69,90&lt;/span&gt;&lt;/strong&gt; &lt;dfn cla

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
