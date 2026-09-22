# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/purple-mask-100g-ps-19629-286-p46283-1ccba691/ProductDetail.tsx
- Route: /purple-mask-100g-ps-19629-286-p46283 (product)
- Source: https://www.lolacosmetics.com.br/purple-mask-100g-ps-19629-286-p46283
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/purple-mask-100g-ps-19629-286-p46283-1ccba691/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46283 ts-theme-light" and #main class "context-product-46283",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/28/46283_purple-mask-100g-ps-19629-286_m1_638938069561996796.webp', index: 1, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/28/46283_purple-mask-100g-ps-19629-286_l1_638938069561996796.webp', index: 1, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/28/46283_purple-mask-100g-ps-19629-286_z1_638938069561996796.webp', index: 1, variationPath:'/' } ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Após o shampoo ou acidificante, aplique no comprimento e pontas dos fios limpos e úmidos. Deixe agir entre 3 e 5 minutos e enxágue. Descrição longa A Máscara Reparadora Purple promove tratamento intensivo para cabelos loiros danificados, ajudando a fortalecer a fibra capilar, proteger a cor e devolver brilho, resistência e maciez aos fios. Benefícios: • Repara os danos da fibra capilar; • Ajuda a preservar a cor; • Fortalece os fios; • Reduz a quebra; • Controla o frizz; • Promove brilho intenso e maciez. Dicas da Lola Para cabelos muito sensibilizados, utilize após o Acidificante Purple para potencializar a reparação. Como usar Após o shampoo ou acidificante, aplique no comprimento e pontas dos fios limpos e úmidos. Deixe agir entre 3 e 5 minutos e enxágue. Ingredientes e Ativos PURPLE MASK 100G console.log("Trustvox rating | PDP:", 46283, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 46283); 5 de 5 (5) Ref: PS.19629.286 Vegano Cruelty Free Embalagem Reciclável R$ 34,90 1 x R$ 34,90 sem juros var variants = [ { sku: 'PS.19629.286', productID: '46283', name: 'PURPLE MASK 100G', isPromotion: 'false', price: '34,9', priceBase: '34,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&gt;R$ 34,90&lt;/span&gt;&lt;/strong&gt; &lt;dfn class=&#39;condition&#39;&gt;&lt;span class=&#39;parcels&#39;&gt;1 x &lt;/span&gt;&lt;span class=&#39;parcel-value&#39;&gt;R$ 34,90 &lt;/span&gt;&lt;span class=&quot;label&quot;&gt; sem juros&lt;/span&gt; &lt;/dfn&gt; ', isPurchasable: true, isInventoryAvailable: true, handlingDays: 0, MinimumQtyAllowed:'0', MaximumQtyAllowed:'0', availability: 'I', buyBox: {}, StockBalance:'111' , options: [ ] }, { sku: '19629.286', productID: '46284', name: 'PURPLE MASK 100G', isPromotion: 'false', price: '34,9', priceBase: '34,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&gt;R$ 34,90&lt;/span&gt;&lt;/strong&gt; &lt;dfn class=&#39;condition&#39;&gt;&lt;span class=&#39;parcels&#39;&gt;1 x &lt;/span&gt;&lt;span class=&#39;parcel-value&#39;&gt;R$ 34,90 &lt;/span&gt;&lt;span class=&quot;label&quot;&gt; sem juros&lt;/span&gt; &lt;/dfn&gt; ', isPurchasable: true, isInventoryAvailable: true, handlingDays: 0, MinimumQtyAllowed:'0', MaximumQtyAllowed:'0', availability: 'I', buyBox: {}, StockBalan

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
