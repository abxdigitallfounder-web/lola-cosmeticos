# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/plot-twist-guava-misturinha-ps-19629-243-p46078-bc0b3a02/ProductDetail.tsx
- Route: /plot-twist-guava-misturinha-ps-19629-243-p46078 (product)
- Source: https://www.lolacosmetics.com.br/plot-twist-guava-misturinha-ps-19629-243-p46078
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/plot-twist-guava-misturinha-ps-19629-243-p46078-bc0b3a02/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46078 ts-theme-light" and #main class "context-product-46078",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/07/46078_plot-twist-guava-misturinha-ps-19629-243_m3_638681307879727027.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/07/46078_plot-twist-guava-misturinha-ps-19629-243_m4_638907802687678150.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/07/46078_plot-twist-guava-misturinha-ps-19629-243_m2_638678916322509386.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/07/46078_plot-twist-guava-misturinha-ps-19629-243_m1_638678916266436270.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/07/46078_plot-twist-guava-misturinha-ps-19629-243_m5_638907802905198589.webp', index: 5, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/07/46078_plot-twist-guava-misturinha-ps-19629-243_l3_638681307879727027.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/07/46078_plot-twist-guava-misturinha-ps-19629-243_l4_638907802687678150.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/07/46078_plot-twist-guava-misturinha-ps-19629-243_l2_638678916322509386.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/07/46078_plot-twist-guava-misturinha-ps-19629-243_l1_638678916266436270.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/07/46078_plot-twist-guava-misturinha-ps-19629-243_l5_638907802905198589.webp', index: 5, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/07/46078_plot-twist-guava-misturinha-ps-19629-243_z3_638681307879727027.webp', index: 1, variationPath:'/' } , ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Borrife sobre os cabelos secos ou levemente úmidos e amasse as mechas para reativar a curvatura. Descrição longa O Plot Twist Misturinha revitaliza a definição no day after, reduzindo o frizz e devolvendo movimento sem necessidade de lavar os cabelos. Benefícios: • Revitaliza os cachos; • Reduz frizz; • Recupera definição; • Hidratação leve; • Não pesa. Dicas da Lola Leve sempre na bolsa para renovar a definição ao longo do dia. Como usar Borrife sobre os cabelos secos ou levemente úmidos e amasse as mechas para reativar a curvatura. Ingredientes e Ativos Plot Twist Guava Misturinha console.log("Trustvox rating | PDP:", 46078, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 46078); 3.2 de 5 (13) Ref: PS.19629.243 Vegano Cruelty Free Embalagem Reciclável R$ 59,90 1 x R$ 5

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
