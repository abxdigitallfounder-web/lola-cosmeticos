# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/tannic-acid-leave-in-protetor-100ml-ps-19629-301-p46341-2e57ea83/ProductDetail.tsx
- Route: /tannic-acid-leave-in-protetor-100ml-ps-19629-301-p46341 (product)
- Source: https://www.lolacosmetics.com.br/tannic-acid-leave-in-protetor-100ml-ps-19629-301-p46341
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/tannic-acid-leave-in-protetor-100ml-ps-19629-301-p46341-2e57ea83/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46341 ts-theme-light" and #main class "context-product-46341",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46341_tannic-acid-leave-in-protetor-100ml-ps-19629-301_m1_639071153771825034.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46341_tannic-acid-leave-in-protetor-100ml-ps-19629-301_m3_639086413845821415.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46341_tannic-acid-leave-in-protetor-100ml-ps-19629-301_m4_639086414191712847.webp', index: 3, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46341_tannic-acid-leave-in-protetor-100ml-ps-19629-301_l1_639071153771825034.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46341_tannic-acid-leave-in-protetor-100ml-ps-19629-301_l3_639086413845821415.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46341_tannic-acid-leave-in-protetor-100ml-ps-19629-301_l4_639086414191712847.webp', index: 3, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46341_tannic-acid-leave-in-protetor-100ml-ps-19629-301_z1_639071153771825034.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46341_tannic-acid-leave-in-protetor-100ml-ps-19629-301_z3_639086413845821415.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46341_tannic-acid-leave-in-protetor-100ml-ps-19629-301_z4_639086414191712847.webp', index: 3, variationPath:'/' } ]; Descrição Informações Como usar Principais Ingredientes Descrição longa Selecione a visualização desejada: Lista Como usar Aplique uma pequena quantidade no comprimento e pontas dos cabelos limpos, secos ou úmidos. Finalize como preferir. Principais Ingredientes Principais Ingredientes <img src="https://lolacosmetics.admin.linxcommerce.com.br/Custom/Content/Themes/Lola/Imagens/Principais_Ingredientes/acido tanico.ppm "> Ácido tânico ajuda a fortalecer, proteger e selar a fibra capilar; <img src="https://lolacosmetics.admin.linxcommerce.com.br/Custom/Content/Themes/Lola/Imagens/Principais_Ingredientes/image-4-1024x682.png "> Glicerina promove hidratação e flexibilidade aos fios; <img src="https://lolacosmetics.admin.linxcommerce.com.br/Custom/Content/Themes/Lola/Imagens/Principais_Ingredientes//vegetais.png "> Triglicerídeos vegetais auxiliam na nutrição e maciez. Ingredientes Completos Aqua, Lactic acid, Propanediol, Hydroxyethyl diethylenetriamine dioleamide/palmitamide, Behentrimonium chloride, Dipropylene glycol, Behentrimonium methosulfate, Octyldodecanol, Hydrogenated coco-glycerides, Helianthus annus seed extract, Tocopheryl acetate, PPG-3 benzyl ether myristate, Parfum, Dibutyl a

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
