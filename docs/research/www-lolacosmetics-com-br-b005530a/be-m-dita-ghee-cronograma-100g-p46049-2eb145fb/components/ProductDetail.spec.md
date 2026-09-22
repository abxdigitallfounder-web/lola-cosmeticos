# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/be-m-dita-ghee-cronograma-100g-p46049-2eb145fb/ProductDetail.tsx
- Route: /be-m-dita-ghee-cronograma-100g-p46049 (product)
- Source: https://www.lolacosmetics.com.br/be-m-dita-ghee-cronograma-100g-p46049
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/be-m-dita-ghee-cronograma-100g-p46049-2eb145fb/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46049 ts-theme-light" and #main class "context-product-46049",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd23_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46049_be-m-dita-ghee-cronograma-100g_m1_638654564301393782.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46049_be-m-dita-ghee-cronograma-100g_m2_638654565458723143.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46049_be-m-dita-ghee-cronograma-100g_m2_638654565463678164.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46049_be-m-dita-ghee-cronograma-100g_m3_638654565480223939.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46049_be-m-dita-ghee-cronograma-100g_m2_638654565463678164.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46049_be-m-dita-ghee-cronograma-100g_m2_638654565458723143.webp', index: 6, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46049_be-m-dita-ghee-cronograma-100g_m3_638654565480223939.webp', index: 7, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46049_be-m-dita-ghee-cronograma-100g_l1_638654564301393829.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46049_be-m-dita-ghee-cronograma-100g_l2_638654565458723240.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46049_be-m-dita-ghee-cronograma-100g_l2_638654565463678226.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46049_be-m-dita-ghee-cronograma-100g_l3_638654565480224006.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46049_be-m-dita-ghee-cronograma-100g_l2_638654565463678226.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46049_be-m-dita-ghee-cronograma-100g_l2_638654565458723240.webp', index: 6, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46049_be-m-dita-ghee-cronograma-100g_l3_638654565480224006.webp', index: 7, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46049_be-m-dita-ghee-cronograma-100g_z1_638654564301393900.webp', index: 1, variationPath:'/' } , ]; Descrição Informações Como usar Descrição Curta Descrição longa Selecione a visualização desejada: Lista Como usar Be(M)dita Ghee | Manteiga de Hidratação Banana & Aloe Vera - 100g A quantidade varia de acordo com o volume e o comprimento de seus cabelos, mas evite aplicar diretamente

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
