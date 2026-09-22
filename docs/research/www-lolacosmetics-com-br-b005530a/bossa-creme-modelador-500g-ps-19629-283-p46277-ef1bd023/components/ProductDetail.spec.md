# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/bossa-creme-modelador-500g-ps-19629-283-p46277-ef1bd023/ProductDetail.tsx
- Route: /bossa-creme-modelador-500g-ps-19629-283-p46277 (product)
- Source: https://www.lolacosmetics.com.br/bossa-creme-modelador-500g-ps-19629-283-p46277
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/bossa-creme-modelador-500g-ps-19629-283-p46277-ef1bd023/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46277 ts-theme-light" and #main class "context-product-46277",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/27/46277_bossa-creme-modelador-500g-ps-19629-283_m1_638930341084020703.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/27/46277_bossa-creme-modelador-500g-ps-19629-283_m2_638943131749099619.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/27/46277_bossa-creme-modelador-500g-ps-19629-283_m3_638943131805174280.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/27/46277_bossa-creme-modelador-500g-ps-19629-283_m4_638943131846347410.webp', index: 4, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/27/46277_bossa-creme-modelador-500g-ps-19629-283_l1_638930341084020703.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/27/46277_bossa-creme-modelador-500g-ps-19629-283_l2_638943131749099619.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/27/46277_bossa-creme-modelador-500g-ps-19629-283_l3_638943131805174280.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/27/46277_bossa-creme-modelador-500g-ps-19629-283_l4_638943131846347410.webp', index: 4, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/27/46277_bossa-creme-modelador-500g-ps-19629-283_z1_638930341084020703.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/27/46277_bossa-creme-modelador-500g-ps-19629-283_z2_638943131749099619.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/27/46277_bossa-creme-modelador-500g-ps-19629-283_z3_638943131805174280.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/27/46277_bossa-creme-modelador-500g-ps-19629-283_z4_638943131846347410.webp', index: 4, variationPath:'/' } ]; Descrição Informações Como usar Principais Ingredientes Descrição longa Selecione a visualização desejada: Lista Como usar Aplique nos cabelos úmidos e limpos, distribuindo pelo comprimento e pontas. Finalize como preferir. Principais Ingredientes Principais Ingredientes <img src="https://lolacosmetics.admin.linxcommerce.com.br/Custom/Content/Themes/Lola/Imagens/Principais_Ingredientes/oleo pequi.jpg "> Óleo de pequi ajuda no controle do frizz, volume e alinhamento dos cachos; <img src="https://lolacosmetics.admin.linxcommerce.com.br/Custom/Content/Themes/Lola/Imagens/Principais_Ingredientes/Acai-da-tradicao-indigena-ao-sucesso-internacional (1).png "> Óleo de açaí promove nutrição profunda, brilho e toque sed

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
