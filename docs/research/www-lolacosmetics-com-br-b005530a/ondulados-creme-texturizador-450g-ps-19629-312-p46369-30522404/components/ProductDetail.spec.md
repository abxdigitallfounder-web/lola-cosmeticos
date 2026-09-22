# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/ondulados-creme-texturizador-450g-ps-19629-312-p46369-30522404/ProductDetail.tsx
- Route: /ondulados-creme-texturizador-450g-ps-19629-312-p46369 (product)
- Source: https://www.lolacosmetics.com.br/ondulados-creme-texturizador-450g-ps-19629-312-p46369
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/ondulados-creme-texturizador-450g-ps-19629-312-p46369-30522404/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46369 ts-theme-light" and #main class "context-product-46369",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/36/46369_ondulados-creme-texturizador-450g-ps-19629-312_m2_639173054826619184.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/36/46369_ondulados-creme-texturizador-450g-ps-19629-312_m1_639173054762986039.webp', index: 2, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/36/46369_ondulados-creme-texturizador-450g-ps-19629-312_l2_639173054826619184.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/36/46369_ondulados-creme-texturizador-450g-ps-19629-312_l1_639173054762986039.webp', index: 2, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/36/46369_ondulados-creme-texturizador-450g-ps-19629-312_z2_639173054826619184.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/36/46369_ondulados-creme-texturizador-450g-ps-19629-312_z1_639173054762986039.webp', index: 2, variationPath:'/' } ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Aplique no comprimento e pontas dos cabelos limpos e úmidos. Finalize como de costume, amassando as mechas para estimular a formação das ondas. Descrição longa O Creme Texturizador Ondulados é um finalizador com proteção térmica que ajuda a definir a curvatura natural dos cabelos, reduzindo o frizz e proporcionando hidratação leve, brilho e movimento sem pesar os fios. Benefícios: • Define as ondas; • Controle do frizz; • Hidratação leve; • Proteção térmica; • Intensifica o brilho; • Mantém o movimento natural dos fios. Dicas da Lola Para uma definição ainda maior, aplique o produto nos cabelos bem úmidos utilizando a técnica de fitagem ou "scrunch". Como usar Aplique no comprimento e pontas dos cabelos limpos e úmidos. Finalize como de costume, amassando as mechas para estimular a formação das ondas. Ingredientes e Ativos ONDULADOS CREME TEXTURIZADOR 450G console.log("Trustvox rating | PDP:", 46369, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 46369); 4.9 de 5 (16) Ref: PS.19629.312 Frequência de uso: Uso semanal Vegano Cruelty Free Embalagem Reciclável R$ 64,90 2 x R$ 32,45 sem juros var variants = [ { sku: 'PS.19629.312', productID: '46369', name: 'ONDULADOS CREME TEXTURIZADOR 450G', isPromotion: 'false', price: '64,9', priceBase: '64,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&gt;R$ 64,90&lt;/span&gt;&lt;/strong&gt; &lt;dfn class=&#39;condition&#39;&gt;&lt;span class=&#39;parcels&#39;&gt;2 x &lt;/span&gt;&lt;span class=&#39;parcel-value&#39;&gt;R$ 32,45 &lt;/span&gt;&lt;span class=&quot;label&quot;&gt; sem juros&lt;/span&gt; &lt;/dfn&gt; ', isPurchasable: true, isInventoryAvailable: true, handlingDays: 0, Mi

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
