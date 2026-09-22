# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/meu-cacho-minha-vida-jelly-gel-500g-ps-19629-13-p45474-7aee1b48/ProductDetail.tsx
- Route: /meu-cacho-minha-vida-jelly-gel-500g-ps-19629-13-p45474 (product)
- Source: https://www.lolacosmetics.com.br/meu-cacho-minha-vida-jelly-gel-500g-ps-19629-13-p45474
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/meu-cacho-minha-vida-jelly-gel-500g-ps-19629-13-p45474-7aee1b48/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45474 ts-theme-light" and #main class "context-product-45474",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd23_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/47/45474_meu-cacho-minha-vida-jelly-gel-500g-ps-19629-13_m8_638736766246254832.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/47/45474_meu-cacho-minha-vida-jelly-gel-500g-ps-19629-13_m9_638907781069078574.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/47/45474_meu-cacho-minha-vida-jelly-gel-500g-ps-19629-13_m10_638907781144289799.webp', index: 3, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/47/45474_meu-cacho-minha-vida-jelly-gel-500g-ps-19629-13_l8_638736766246254832.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/47/45474_meu-cacho-minha-vida-jelly-gel-500g-ps-19629-13_l9_638907781069078574.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/47/45474_meu-cacho-minha-vida-jelly-gel-500g-ps-19629-13_l10_638907781144289799.webp', index: 3, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/47/45474_meu-cacho-minha-vida-jelly-gel-500g-ps-19629-13_z8_638736766246254832.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/47/45474_meu-cacho-minha-vida-jelly-gel-500g-ps-19629-13_z9_638907781069078574.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/47/45474_meu-cacho-minha-vida-jelly-gel-500g-ps-19629-13_z10_638907781144289799.webp', index: 3, variationPath:'/' } ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Aplique uma pequena quantidade nos cabelos úmidos ou secos e distribua uniformemente. Finalize como de costume. Descrição longa O Jelly Gel Meu Cacho Minha Vida proporciona definição com leveza, ajudando a fixar as curvaturas sem deixar os fios rígidos. Também auxilia no controle do frizz e prolonga o efeito do day after, mantendo os cachos com movimento natural. Benefícios: • Define e fixa as curvaturas; • Prolonga o day after; • Ajuda a controlar o frizz; • Promove brilho; • Não deixa aspecto rígido; • Mantém os fios leves. Dicas da Lola Use após o Creme para Pentear para aumentar a definição e prolongar a durabilidade dos cachos. Como usar Aplique uma pequena quantidade nos cabelos úmidos ou secos e distribua uniformemente. Finalize como de costume. Ingredientes e Ativos MEU CACHO MINHA VIDA - JELLY GEL 500g console.log("Trustvox rating | PDP:", 45474, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 45474); 5 de 5 (4) Ref: PS.19629.13 Finalizador Vegano Cruelty Free Embalagem Reciclável R$ 59,90 1 x R$ 59,90 sem juros var variants = [ { sku: 'PS.19629.13', productID: '45474', n

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
