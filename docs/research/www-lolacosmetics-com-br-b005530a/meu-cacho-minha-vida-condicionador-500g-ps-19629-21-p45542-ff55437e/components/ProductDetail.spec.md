# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/meu-cacho-minha-vida-condicionador-500g-ps-19629-21-p45542-ff55437e/ProductDetail.tsx
- Route: /meu-cacho-minha-vida-condicionador-500g-ps-19629-21-p45542 (product)
- Source: https://www.lolacosmetics.com.br/meu-cacho-minha-vida-condicionador-500g-ps-19629-21-p45542
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/meu-cacho-minha-vida-condicionador-500g-ps-19629-21-p45542-ff55437e/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45542 ts-theme-light" and #main class "context-product-45542",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd23_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/54/45542_meu-cacho-minha-vida-condicionador-500g-ps-19629-21_m7_638736767570652523.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/54/45542_meu-cacho-minha-vida-condicionador-500g-ps-19629-21_m8_638907780952772966.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/54/45542_meu-cacho-minha-vida-condicionador-500g-ps-19629-21_m9_638907781018055234.webp', index: 3, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/54/45542_meu-cacho-minha-vida-condicionador-500g-ps-19629-21_l7_638736767570652523.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/54/45542_meu-cacho-minha-vida-condicionador-500g-ps-19629-21_l8_638907780952772966.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/54/45542_meu-cacho-minha-vida-condicionador-500g-ps-19629-21_l9_638907781018055234.webp', index: 3, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/54/45542_meu-cacho-minha-vida-condicionador-500g-ps-19629-21_z7_638736767570652523.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/54/45542_meu-cacho-minha-vida-condicionador-500g-ps-19629-21_z8_638907780952772966.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/54/45542_meu-cacho-minha-vida-condicionador-500g-ps-19629-21_z9_638907781018055234.webp', index: 3, variationPath:'/' } ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Após o shampoo ou a máscara, aplique no comprimento e pontas. Deixe agir de 1 a 2 minutos e enxágue. Descrição longa O Condicionador Meu Cacho Minha Vida desembaraça, restaura e ajuda a selar as cutículas dos cabelos com curvaturas, proporcionando fios mais macios, brilhantes e fáceis de pentear. Benefícios: • Facilita o desembaraço; • Ajuda a selar as cutículas; • Promove maciez; • Intensifica o brilho; • Reduz o frizz; • Deixa os fios mais alinhados. Dicas da Lola Finalize com o Creme para Pentear para potencializar a definição dos cachos. Como usar Após o shampoo ou a máscara, aplique no comprimento e pontas. Deixe agir de 1 a 2 minutos e enxágue. Ingredientes e Ativos MEU CACHO MINHA VIDA - CONDICIONADOR 500g console.log("Trustvox rating | PDP:", 45542, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 45542); 4.9 de 5 (16) Ref: PS.19629.21 Condicionador Uso diário Vegano Cruelty Free Embalagem Reciclável R$ 49,90 1 x R$ 49,90 sem juros var variants = [ { sku: 'PS.19629.21', productID: '45542', name: 'MEU CACHO MINHA VIDA - CONDICIONADOR 500g', i

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
