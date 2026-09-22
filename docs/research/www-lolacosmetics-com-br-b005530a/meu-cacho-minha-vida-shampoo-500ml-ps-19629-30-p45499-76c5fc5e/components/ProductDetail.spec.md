# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/meu-cacho-minha-vida-shampoo-500ml-ps-19629-30-p45499-76c5fc5e/ProductDetail.tsx
- Route: /meu-cacho-minha-vida-shampoo-500ml-ps-19629-30-p45499 (product)
- Source: https://www.lolacosmetics.com.br/meu-cacho-minha-vida-shampoo-500ml-ps-19629-30-p45499
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/meu-cacho-minha-vida-shampoo-500ml-ps-19629-30-p45499-76c5fc5e/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45499 ts-theme-light" and #main class "context-product-45499",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd23_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/49/45499_meu-cacho-minha-vida-shampoo-500ml-ps-19629-30_m7_638736767187606030.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/49/45499_meu-cacho-minha-vida-shampoo-500ml-ps-19629-30_m8_638907781006113303.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/49/45499_meu-cacho-minha-vida-shampoo-500ml-ps-19629-30_m9_638907781075146467.webp', index: 3, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/49/45499_meu-cacho-minha-vida-shampoo-500ml-ps-19629-30_l7_638736767187606030.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/49/45499_meu-cacho-minha-vida-shampoo-500ml-ps-19629-30_l8_638907781006113303.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/49/45499_meu-cacho-minha-vida-shampoo-500ml-ps-19629-30_l9_638907781075146467.webp', index: 3, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/49/45499_meu-cacho-minha-vida-shampoo-500ml-ps-19629-30_z7_638736767187606030.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/49/45499_meu-cacho-minha-vida-shampoo-500ml-ps-19629-30_z8_638907781006113303.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/49/45499_meu-cacho-minha-vida-shampoo-500ml-ps-19629-30_z9_638907781075146467.webp', index: 3, variationPath:'/' } ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Agite antes de usar. Aplique nos cabelos molhados diretamente no couro cabeludo, massageando suavemente. Enxágue e repita a aplicação, se necessário. Descrição longa O Shampoo Hidratante Meu Cacho Minha Vida promove uma limpeza suave e emoliente, preservando a hidratação natural dos cabelos com curvaturas. Sua fórmula ajuda a controlar o frizz, proporcionar brilho e deixar os fios leves, macios e saudáveis desde a lavagem. Benefícios: • Limpeza suave; • Preserva a hidratação natural; • Ajuda a controlar o frizz; • Promove brilho; • Deixa os fios leves e macios; • Ideal para cabelos com curvaturas. Dicas da Lola Para cachos mais definidos e hidratados, utilize toda a rotina Meu Cacho Minha Vida. Como usar Agite antes de usar. Aplique nos cabelos molhados diretamente no couro cabeludo, massageando suavemente. Enxágue e repita a aplicação, se necessário. Ingredientes e Ativos MEU CACHO MINHA VIDA - SHAMPOO 500mL console.log("Trustvox rating | PDP:", 45499, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 45499); 4.6 de 5 (16) Ref: PS.19629.30 Shampoo Uso diário Vegano Cruelty Free Embalagem Recic

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
