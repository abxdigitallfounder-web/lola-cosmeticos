# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/ondulados-lola-inc-condicionador-500g-ps-19629-31-p45398-5ad80e46/ProductDetail.tsx
- Route: /ondulados-lola-inc-condicionador-500g-ps-19629-31-p45398 (product)
- Source: https://www.lolacosmetics.com.br/ondulados-lola-inc-condicionador-500g-ps-19629-31-p45398
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/ondulados-lola-inc-condicionador-500g-ps-19629-31-p45398-5ad80e46/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45398 ts-theme-light" and #main class "context-product-45398",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd23_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45398_ondulados-lola-inc-condicionador-500g-ps-19629-31_m12_638735944824499742.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45398_ondulados-lola-inc-condicionador-500g-ps-19629-31_m13_638907790858501732.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45398_ondulados-lola-inc-condicionador-500g-ps-19629-31_m14_638907790925918096.webp', index: 3, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45398_ondulados-lola-inc-condicionador-500g-ps-19629-31_l12_638735944824499742.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45398_ondulados-lola-inc-condicionador-500g-ps-19629-31_l13_638907790858501732.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45398_ondulados-lola-inc-condicionador-500g-ps-19629-31_l14_638907790925918096.webp', index: 3, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45398_ondulados-lola-inc-condicionador-500g-ps-19629-31_z12_638735944824499742.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45398_ondulados-lola-inc-condicionador-500g-ps-19629-31_z13_638907790858501732.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45398_ondulados-lola-inc-condicionador-500g-ps-19629-31_z14_638907790925918096.webp', index: 3, variationPath:'/' } ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Após o shampoo, aplique no comprimento e pontas dos fios. Deixe agir de 1 a 2 minutos e enxágue. Para a técnica CoWash, utilize no lugar do shampoo, massageando suavemente o couro cabeludo antes de enxaguar. Descrição longa O Condicionador Ondulados desembaraça facilmente os fios e proporciona hidratação diária sem pesar. Também pode ser utilizado como CoWash, promovendo uma limpeza suave enquanto ajuda a manter as ondas saudáveis, macias e definidas. Benefícios: • Facilita o desembaraço; • Pode ser utilizado como CoWash; • Hidratação leve; • Ajuda a controlar o frizz; • Mantém as ondas definidas; • Deixa os fios macios e saudáveis. Dicas da Lola Nos dias em que o cabelo não precisar de uma limpeza mais intensa, utilize como CoWash para preservar a hidratação natural das ondas. Como usar Após o shampoo, aplique no comprimento e pontas dos fios. Deixe agir de 1 a 2 minutos e enxágue. Para a técnica CoWash, utilize no lugar do shampoo, massageando suavemente o couro cabeludo antes de enxaguar. Ingredientes e Ativos ONDULADOS LOLA INC. - CONDICIONADOR 500g console.log("Trust

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
