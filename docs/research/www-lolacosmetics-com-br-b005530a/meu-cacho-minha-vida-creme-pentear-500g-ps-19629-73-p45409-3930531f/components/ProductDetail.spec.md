# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/meu-cacho-minha-vida-creme-pentear-500g-ps-19629-73-p45409-3930531f/ProductDetail.tsx
- Route: /meu-cacho-minha-vida-creme-pentear-500g-ps-19629-73-p45409 (product)
- Source: https://www.lolacosmetics.com.br/meu-cacho-minha-vida-creme-pentear-500g-ps-19629-73-p45409
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/meu-cacho-minha-vida-creme-pentear-500g-ps-19629-73-p45409-3930531f/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45409 ts-theme-light" and #main class "context-product-45409",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd23_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/40/45409_meu-cacho-minha-vida-creme-pentear-500g-ps-19629-73_m11_638736766564994535.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/40/45409_meu-cacho-minha-vida-creme-pentear-500g-ps-19629-73_m12_638907781132882409.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/40/45409_meu-cacho-minha-vida-creme-pentear-500g-ps-19629-73_m13_638907781196286588.webp', index: 3, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/40/45409_meu-cacho-minha-vida-creme-pentear-500g-ps-19629-73_l11_638736766564994535.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/40/45409_meu-cacho-minha-vida-creme-pentear-500g-ps-19629-73_l12_638907781132882409.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/40/45409_meu-cacho-minha-vida-creme-pentear-500g-ps-19629-73_l13_638907781196286588.webp', index: 3, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/40/45409_meu-cacho-minha-vida-creme-pentear-500g-ps-19629-73_z11_638736766564994535.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/40/45409_meu-cacho-minha-vida-creme-pentear-500g-ps-19629-73_z12_638907781132882409.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/40/45409_meu-cacho-minha-vida-creme-pentear-500g-ps-19629-73_z13_638907781196286588.webp', index: 3, variationPath:'/' } ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Aplique nos cabelos limpos e úmidos, distribuindo uniformemente no comprimento e pontas. Finalize como preferir. Descrição longa O Creme para Pentear Meu Cacho Minha Vida modela as curvaturas com leveza, melhora a penteabilidade e ajuda a preservar a umidade natural dos fios, proporcionando cachos definidos, macios e protegidos. Benefícios: • Define as curvaturas; • Facilita o desembaraço; • Ajuda a controlar o frizz; • Mantém a hidratação; • Promove brilho; • Não pesa os fios. Dicas da Lola Aplique por mechas utilizando fitagem para conquistar definição prolongada. Como usar Aplique nos cabelos limpos e úmidos, distribuindo uniformemente no comprimento e pontas. Finalize como preferir. Ingredientes e Ativos MEU CACHO MINHA VIDA - CREME PENTEAR 500g console.log("Trustvox rating | PDP:", 45409, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 45409); 4.7 de 5 (15) Ref: PS.19629.73 Creme de Pentear Finalizador Vegano Cruelty Free Embalagem Reciclável R$ 64,90 2 x R$ 32,45 sem juros var variants = [ { sku: 'PS.19629.73', productID: '45409', na

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
