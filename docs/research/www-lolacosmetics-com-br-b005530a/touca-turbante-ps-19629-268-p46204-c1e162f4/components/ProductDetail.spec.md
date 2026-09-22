# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/touca-turbante-ps-19629-268-p46204-c1e162f4/ProductDetail.tsx
- Route: /touca-turbante-ps-19629-268-p46204 (product)
- Source: https://www.lolacosmetics.com.br/touca-turbante-ps-19629-268-p46204
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/touca-turbante-ps-19629-268-p46204-c1e162f4/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46204 ts-theme-light" and #main class "context-product-46204",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/20/46204_touca-turbante-ps-19629-268_m1_638796197893931168.webp', index: 1, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/20/46204_touca-turbante-ps-19629-268_l1_638796197893931168.webp', index: 1, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/20/46204_touca-turbante-ps-19629-268_z1_638796197893931168.webp', index: 1, variationPath:'/' } ]; Descrição Informações Descrição longa Selecione a visualização desejada: Lista Descrição longa Touca Turbante Ingredientes e Ativos Touca Turbante console.log("Trustvox rating | PDP:", 46204, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 46204); 0 de 5 (0) Ref: PS.19629.268 Vegano Cruelty Free Embalagem Reciclável R$ 29,90 1 x R$ 29,90 sem juros var variants = [ { sku: 'PS.19629.268', productID: '46204', name: 'Touca Turbante', isPromotion: 'false', price: '29,9', priceBase: '29,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&gt;R$ 29,90&lt;/span&gt;&lt;/strong&gt; &lt;dfn class=&#39;condition&#39;&gt;&lt;span class=&#39;parcels&#39;&gt;1 x &lt;/span&gt;&lt;span class=&#39;parcel-value&#39;&gt;R$ 29,90 &lt;/span&gt;&lt;span class=&quot;label&quot;&gt; sem juros&lt;/span&gt; &lt;/dfn&gt; ', isPurchasable: true, isInventoryAvailable: true, handlingDays: 0, MinimumQtyAllowed:'0', MaximumQtyAllowed:'0', availability: 'I', buyBox: {}, StockBalance:'55' , options: [ ] }, { sku: '19629.268', productID: '46205', name: 'Touca Turbante', isPromotion: 'false', price: '29,9', priceBase: '29,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&gt;R$ 29,90&lt;/span&gt;&lt;/strong&gt; &lt;dfn class=&#39;condition&#39;&gt;&lt;span class=&#39;parcels&#39;&gt;1 x &lt;/span&gt;&lt;span class=&#39;parcel-value&#39;&gt;R$ 29,90 &lt;/span&gt;&lt;span class=&quot;label&quot;&gt; sem juros&lt;/span&gt; &lt;/dfn&gt; ', isPurchasable: true, isInventoryAvailable: true, handlingDays: 0, MinimumQtyAllowed:'0', MaximumQtyAllowed:'0', availability: 'I', buyBox: {}, StockBalance:'55' , options: [ ] }, ]; - + Adicionar à sacola ou Compre com 1 click Saiba mais Através do One Click Buy você compra com muito mais facilidade e rapidez!Com um clique de botão a loja utiliza suas informações já configuradas para realizar a compra. Comprando... A compra com 1 click está desabilitada. Saiba mais Compre com 1 click para comprar com um clique Calcular frete e prazo de entrega OK Descrição Informações Descrição longa Selecione a visualização desejada: Lista Descrição longa Touca Turbante Ingredientes e Ativos Enquanto este produto aguarda avaliações, aproveite para conferir a nota da loja:Lola Cosmetic 4.7 / 5 (254) 5 4 3 2 1 Com base em avaliações dos últimos 6 meses. Avaliações confiáveis do console.log( "Trustvox PDP | product:", 46204, "| t

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
