# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/chapada-sabonete-cremoso-280g-ps-19629-110-p45637-3455c616/ProductDetail.tsx
- Route: /chapada-sabonete-cremoso-280g-ps-19629-110-p45637 (product)
- Source: https://www.lolacosmetics.com.br/chapada-sabonete-cremoso-280g-ps-19629-110-p45637
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/chapada-sabonete-cremoso-280g-ps-19629-110-p45637-3455c616/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45637 ts-theme-light" and #main class "context-product-45637",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/63/45637_chapada-sabonete-cremoso-280g-ps-19629-110_m3_638621808151955730.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/63/45637_chapada-sabonete-cremoso-280g-ps-19629-110_m4_638630414100868314.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/63/45637_chapada-sabonete-cremoso-280g-ps-19629-110_m5_638669427163914262.webp', index: 3, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/63/45637_chapada-sabonete-cremoso-280g-ps-19629-110_l3_638621808151955730.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/63/45637_chapada-sabonete-cremoso-280g-ps-19629-110_l4_638630414100868367.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/63/45637_chapada-sabonete-cremoso-280g-ps-19629-110_l5_638669427163914262.webp', index: 3, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/63/45637_chapada-sabonete-cremoso-280g-ps-19629-110_z3_638621808151955730.webp', index: 1, variationPath:'/' } , ]; Descrição Informações Como usar Descrição Curta Descrição longa Selecione a visualização desejada: Lista Como usar Aplique nas mãos molhadas. Emulsione e sinta o sensorial incrível. Enxágue bem após o uso. Descrição Curta Sabonete para uma limpeza delicada, com uma combinação surpreendente, cremosa, perfumada e pouco ortodoxa. Descrição longa Com Ácido Hialurônico, Manteiga de Tucumã, Extratos de Açaí, Urucum e Pedra-pomes finamente triturada para limpar e esfoliar suavemente. Sensorial único que deixa as mãos macias, purificadas e super hidratadas. Ajudo a proteger e reparar a aparência de ressecamento das mãos causadas por trabalho manual ou exposição a elementos agressivos. Proporciono um verdadeiro concentrado de conforto e limpeza. Como usar Aplique nas mãos molhadas. Emulsione e sinta o sensorial incrível. Enxágue bem após o uso. Ingredientes e Ativos CHAPADA QUE JÁ FOI MAR - SABONETE CREMOSO 280G console.log("Trustvox rating | PDP:", 45637, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 45637); 5 de 5 (3) Ref: PS.19629.110 Corpo Lolaterapia Sabonete Vegano Cruelty Free Embalagem Reciclável R$ 74,90 2 x R$ 37,45 sem juros var variants = [ { sku: 'PS.19629.110', productID: '45637', name: 'CHAPADA QUE J&#193; FOI MAR - SABONETE CREMOSO 280G', isPromotion: 'false', price: '74,9', priceBase: '74,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&gt;R$ 74,90&lt;/span&gt;&lt;/strong&gt; &lt;dfn class=&#39;condition&#39;&gt;&lt;span class=&#39;parcels&#39;&gt;2 x &lt;/span&gt;&lt;span class=&#39;parcel-value&#39;&gt;R$ 37,45 &lt;/span&gt;&lt;span class

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
