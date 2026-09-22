# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/purple-acid-250ml-ps-19629-1002-p46194-e91b6cc1/ProductDetail.tsx
- Route: /purple-acid-250ml-ps-19629-1002-p46194 (product)
- Source: https://www.lolacosmetics.com.br/purple-acid-250ml-ps-19629-1002-p46194
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/purple-acid-250ml-ps-19629-1002-p46194-e91b6cc1/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46194 ts-theme-light" and #main class "context-product-46194",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46194_purple-acid-250ml-ps-19629-1002_m1_638791097248126376.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46194_purple-acid-250ml-ps-19629-1002_m2_638796178819706160.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46194_purple-acid-250ml-ps-19629-1002_m3_638799901515021534.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46194_purple-acid-250ml-ps-19629-1002_m4_638907810168417529.webp', index: 4, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46194_purple-acid-250ml-ps-19629-1002_l1_638791097248126376.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46194_purple-acid-250ml-ps-19629-1002_l2_638796178819706160.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46194_purple-acid-250ml-ps-19629-1002_l3_638799901515021534.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46194_purple-acid-250ml-ps-19629-1002_l4_638907810168417529.webp', index: 4, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46194_purple-acid-250ml-ps-19629-1002_z1_638791097248126376.webp', index: 1, variationPath:'/' } , ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Após lavar os cabelos, aplique no comprimento e pontas. Deixe agir por aproximadamente 5 minutos e enxágue completamente. Descrição longa O Purple Acidificante Corretor de Porosidade restaura o equilíbrio do pH dos cabelos loiros, ajudando a corrigir a porosidade, selar as cutículas e reduzir a perda proteica. Os fios ficam mais alinhados, resistentes e luminosos. Benefícios: • Corrige a porosidade; • Equilibra o pH dos fios; • Ajuda a selar as cutículas; • Intensifica o brilho; • Auxilia na proteção da cor; • Reduz a aspereza e o frizz. Dicas da Lola Utilize antes da Máscara Reparadora Purple para potencializar a absorção dos ativos e deixar os fios ainda mais alinhados. Como usar Após lavar os cabelos, aplique no comprimento e pontas. Deixe agir por aproximadamente 5 minutos e enxágue completamente. Ingredientes e Ativos Purple Acid 250ml console.log("Trustvox rating | PDP:", 46194, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 46194); 4.3 de 5 (12) Ref: PS.19629.1002 Reconstrução Vegano Cruelty Free Embalagem Reciclável R$ 54,90 1 x R$ 54,90 sem juros var variants = [ { sku: 'PS.19629.1002', productID: '46194', name: 'Purple Acid 250ml', isPromotion: 'false', price: '54,9', priceBase: '54,9', priceDescription: ' &lt;s

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
