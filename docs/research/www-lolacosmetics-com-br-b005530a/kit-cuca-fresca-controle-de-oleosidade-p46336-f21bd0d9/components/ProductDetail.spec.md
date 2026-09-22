# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/kit-cuca-fresca-controle-de-oleosidade-p46336-f21bd0d9/ProductDetail.tsx
- Route: /kit-cuca-fresca-controle-de-oleosidade-p46336 (product)
- Source: https://www.lolacosmetics.com.br/kit-cuca-fresca-controle-de-oleosidade-p46336
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/kit-cuca-fresca-controle-de-oleosidade-p46336-f21bd0d9/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46336 ts-theme-light" and #main class "context-product-46336",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46336_kit-cuca-fresca-controle-de-oleosidade_m1_639062294485322389.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46336_kit-cuca-fresca-controle-de-oleosidade_m2_639062294534003689.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46336_kit-cuca-fresca-controle-de-oleosidade_m3_639062294584497456.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46336_kit-cuca-fresca-controle-de-oleosidade_m2_639062294540678765.webp', index: 4, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46336_kit-cuca-fresca-controle-de-oleosidade_l1_639062294485322389.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46336_kit-cuca-fresca-controle-de-oleosidade_l2_639062294534003689.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46336_kit-cuca-fresca-controle-de-oleosidade_l3_639062294584497456.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46336_kit-cuca-fresca-controle-de-oleosidade_l2_639062294540678765.webp', index: 4, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46336_kit-cuca-fresca-controle-de-oleosidade_z1_639062294485322389.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46336_kit-cuca-fresca-controle-de-oleosidade_z2_639062294534003689.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46336_kit-cuca-fresca-controle-de-oleosidade_z3_639062294584497456.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/33/46336_kit-cuca-fresca-controle-de-oleosidade_z2_639062294540678765.webp', index: 4, variationPath:'/' } ]; Descrição Informações Como usar Principais Ingredientes Descrição longa Selecione a visualização desejada: Lista Como usar 1 - Cuca Fresca Shampoo Controle de Oleosidade Aplique nos cabelos úmidos, massageando suavemente o couro cabeludo. Deixe agir por 30 segundos e enxágue. Repita se necessário. 2 - Cuca Fresca Condicionador Reequilibrante Aplique no comprimento e pontas. Deixe agir por aproximadamente 2 minutos e enxágue. Principais Ingredientes Ingredientes Completos Cuca Fresca Shampoo Controle de Oleosidade Aqua, Polyquaternium-10, Sodium lauroyl methyl isethionate, Lauryl glucoside, Cocamidopropyl betaine, Disodium cocoyl glutamate, Sodium benzoate, Potassium sorbate, Citric acid, Sodium gluconate, PEG-160 sorbitan

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
