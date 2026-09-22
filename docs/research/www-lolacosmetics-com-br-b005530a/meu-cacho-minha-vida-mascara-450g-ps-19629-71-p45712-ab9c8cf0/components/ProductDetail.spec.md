# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/meu-cacho-minha-vida-mascara-450g-ps-19629-71-p45712-ab9c8cf0/ProductDetail.tsx
- Route: /meu-cacho-minha-vida-mascara-450g-ps-19629-71-p45712 (product)
- Source: https://www.lolacosmetics.com.br/meu-cacho-minha-vida-mascara-450g-ps-19629-71-p45712
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/meu-cacho-minha-vida-mascara-450g-ps-19629-71-p45712-ab9c8cf0/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45712 ts-theme-light" and #main class "context-product-45712",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd23_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/71/45712_meu-cacho-minha-vida-mascara-450g-ps-19629-71_m7_638736766883172122.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/71/45712_meu-cacho-minha-vida-mascara-450g-ps-19629-71_m8_638907780914521167.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/71/45712_meu-cacho-minha-vida-mascara-450g-ps-19629-71_m9_638907780967896607.webp', index: 3, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/71/45712_meu-cacho-minha-vida-mascara-450g-ps-19629-71_l7_638736766883172122.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/71/45712_meu-cacho-minha-vida-mascara-450g-ps-19629-71_l8_638907780914521167.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/71/45712_meu-cacho-minha-vida-mascara-450g-ps-19629-71_l9_638907780967896607.webp', index: 3, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/71/45712_meu-cacho-minha-vida-mascara-450g-ps-19629-71_z7_638736766883172122.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/71/45712_meu-cacho-minha-vida-mascara-450g-ps-19629-71_z8_638907780914521167.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/71/45712_meu-cacho-minha-vida-mascara-450g-ps-19629-71_z9_638907780967896607.webp', index: 3, variationPath:'/' } ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Após o shampoo, aplique no comprimento e pontas dos cabelos limpos e úmidos. Deixe agir por 3 minutos e enxágue. Descrição longa A Máscara Hidratante Meu Cacho Minha Vida promove hidratação profunda, recuperando o equilíbrio da umidade dos fios e ajudando a reparar danos causados por agressões químicas, mecânicas e ambientais. Os cabelos ficam mais definidos, macios e brilhantes. Benefícios: • Hidratação profunda; • Recupera a umidade dos fios; • Ajuda na definição das curvaturas; • Reduz o frizz; • Promove brilho intenso; • Deixa os fios mais macios. Dicas da Lola Utilize semanalmente para manter seus cachos hidratados, definidos e com movimento natural. Como usar Após o shampoo, aplique no comprimento e pontas dos cabelos limpos e úmidos. Deixe agir por 3 minutos e enxágue. Ingredientes e Ativos MEU CACHO MINHA VIDA - MÁSCARA 450g console.log("Trustvox rating | PDP:", 45712, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 45712); 5 de 5 (10) Ref: PS.19629.71 Máscara Vegano Cruelty Free Embalagem Reciclável R$ 64,90 2 x R$ 32,45 sem juros var variants = [ { sku: 'PS.19629.71', productID: '45712', nam

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
