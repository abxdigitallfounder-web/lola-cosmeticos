# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/tannic-mascara-450g-ps-19629-290-p46289-bc31c554/ProductDetail.tsx
- Route: /tannic-mascara-450g-ps-19629-290-p46289 (product)
- Source: https://www.lolacosmetics.com.br/tannic-mascara-450g-ps-19629-290-p46289
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/tannic-mascara-450g-ps-19629-290-p46289-bc31c554/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46289 ts-theme-light" and #main class "context-product-46289",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/28/46289_tannic-mascara-450g-ps-19629-290_m1_638938068871444184.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/28/46289_tannic-mascara-450g-ps-19629-290_m4_638960595869998305.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/28/46289_tannic-mascara-450g-ps-19629-290_m2_638960595791164464.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/28/46289_tannic-mascara-450g-ps-19629-290_m3_638960595823322174.webp', index: 4, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/28/46289_tannic-mascara-450g-ps-19629-290_l1_638938068871444184.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/28/46289_tannic-mascara-450g-ps-19629-290_l4_638960595869998305.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/28/46289_tannic-mascara-450g-ps-19629-290_l2_638960595791164464.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/28/46289_tannic-mascara-450g-ps-19629-290_l3_638960595823322174.webp', index: 4, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/28/46289_tannic-mascara-450g-ps-19629-290_z1_638938068871444184.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/28/46289_tannic-mascara-450g-ps-19629-290_z4_638960595869998305.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/28/46289_tannic-mascara-450g-ps-19629-290_z2_638960595791164464.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/28/46289_tannic-mascara-450g-ps-19629-290_z3_638960595823322174.webp', index: 4, variationPath:'/' } ]; Descrição Informações Como usar Principais Ingredientes Descrição longa Selecione a visualização desejada: Lista Como usar Após lavar os cabelos, aplique a máscara no comprimento e pontas dos fios úmidos. Massageie mecha a mecha, deixe agir por até 5 minutos e enxágue bem. Principais Ingredientes Principais Ingredientes <img src="https://lolacosmetics.admin.linxcommerce.com.br/Custom/Content/Themes/Lola/Imagens/Principais_Ingredientes/acido tanico.ppm "> Ácido tânico ajuda a fortalecer, proteger e selar a fibra capilar; <img src="https://lolacosmetics.admin.linxcommerce.com.br/Custom/Content/Themes/Lola/Imagens/Principais_Ingredientes/image-4-1024x682.png "> Glicerina promove hidratação e flexibilidade aos fios; <img src="https://lolacosmetics.admin.linxcommerce.com.br/Custom/Content/Themes/L

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
