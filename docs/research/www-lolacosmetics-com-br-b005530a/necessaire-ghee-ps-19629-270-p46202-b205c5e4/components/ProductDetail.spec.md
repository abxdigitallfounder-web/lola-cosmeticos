# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/necessaire-ghee-ps-19629-270-p46202-b205c5e4/ProductDetail.tsx
- Route: /necessaire-ghee-ps-19629-270-p46202 (product)
- Source: https://www.lolacosmetics.com.br/necessaire-ghee-ps-19629-270-p46202
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/necessaire-ghee-ps-19629-270-p46202-b205c5e4/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46202 ts-theme-light" and #main class "context-product-46202",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/20/46202_necessaire-ghee-ps-19629-270_m1_638792802565585102.webp', index: 1, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/20/46202_necessaire-ghee-ps-19629-270_l1_638792802565585102.webp', index: 1, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/20/46202_necessaire-ghee-ps-19629-270_z1_638792802565585102.webp', index: 1, variationPath:'/' } ]; Descrição Informações Descrição longa Selecione a visualização desejada: Lista Descrição longa Necessaire Ghee Ingredientes e Ativos Necessaire Ghee console.log("Trustvox rating | PDP:", 46202, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 46202); 4.4 de 5 (9) Ref: PS.19629.270 Vegano Cruelty Free Embalagem Reciclável R$ 39,90 1 x R$ 39,90 sem juros var variants = [ { sku: 'PS.19629.270', productID: '46202', name: 'Necessaire Ghee', isPromotion: 'false', price: '39,9', priceBase: '39,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&gt;R$ 39,90&lt;/span&gt;&lt;/strong&gt; &lt;dfn class=&#39;condition&#39;&gt;&lt;span class=&#39;parcels&#39;&gt;1 x &lt;/span&gt;&lt;span class=&#39;parcel-value&#39;&gt;R$ 39,90 &lt;/span&gt;&lt;span class=&quot;label&quot;&gt; sem juros&lt;/span&gt; &lt;/dfn&gt; ', isPurchasable: true, isInventoryAvailable: true, handlingDays: 0, MinimumQtyAllowed:'0', MaximumQtyAllowed:'0', availability: 'I', buyBox: {}, StockBalance:'488' , options: [ ] }, { sku: '19629.270', productID: '46203', name: 'Necessaire Ghee', isPromotion: 'false', price: '39,9', priceBase: '39,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&gt;R$ 39,90&lt;/span&gt;&lt;/strong&gt; &lt;dfn class=&#39;condition&#39;&gt;&lt;span class=&#39;parcels&#39;&gt;1 x &lt;/span&gt;&lt;span class=&#39;parcel-value&#39;&gt;R$ 39,90 &lt;/span&gt;&lt;span class=&quot;label&quot;&gt; sem juros&lt;/span&gt; &lt;/dfn&gt; ', isPurchasable: true, isInventoryAvailable: true, handlingDays: 0, MinimumQtyAllowed:'0', MaximumQtyAllowed:'0', availability: 'I', buyBox: {}, StockBalance:'488' , options: [ ] }, ]; - + Adicionar à sacola ou Compre com 1 click Saiba mais Através do One Click Buy você compra com muito mais facilidade e rapidez!Com um clique de botão a loja utiliza suas informações já configuradas para realizar a compra. Comprando... A compra com 1 click está desabilitada. Saiba mais Compre com 1 click para comprar com um clique Calcular frete e prazo de entrega OK Descrição Informações Descrição longa Selecione a visualização desejada: Lista Descrição longa Necessaire Ghee Ingredientes e Ativos Veja o que estão falando sobre este produto 9 avaliações de clientes 4.4 / 5 (9) 5 4 3 2 1 100% dos clientes recomendam este produto Avaliações confiáveis do Ordenar por: Mais recentes expand_more 5 EM Evelyn M. ✓ Compra Verifi

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
