# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/papo-reto-mascara-270ml-ps-19629-211-p45949-73c1e4ac/ProductDetail.tsx
- Route: /papo-reto-mascara-270ml-ps-19629-211-p45949 (product)
- Source: https://www.lolacosmetics.com.br/papo-reto-mascara-270ml-ps-19629-211-p45949
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/papo-reto-mascara-270ml-ps-19629-211-p45949-73c1e4ac/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45949 ts-theme-light" and #main class "context-product-45949",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/94/45949_papo-reto-mascara-270ml-ps-19629-211_m5_638621807611995214.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/94/45949_papo-reto-mascara-270ml-ps-19629-211_m6_638621809809729599.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/94/45949_papo-reto-mascara-270ml-ps-19629-211_m6_638621809802099585.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/94/45949_papo-reto-mascara-270ml-ps-19629-211_m7_638907851948257030.webp', index: 4, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/94/45949_papo-reto-mascara-270ml-ps-19629-211_l5_638621807611995214.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/94/45949_papo-reto-mascara-270ml-ps-19629-211_l6_638621809809729599.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/94/45949_papo-reto-mascara-270ml-ps-19629-211_l6_638621809802099585.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/94/45949_papo-reto-mascara-270ml-ps-19629-211_l7_638907851948257030.webp', index: 4, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/94/45949_papo-reto-mascara-270ml-ps-19629-211_z5_638621807611995214.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/94/45949_papo-reto-mascara-270ml-ps-19629-211_z6_638621809809729599.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/94/45949_papo-reto-mascara-270ml-ps-19629-211_z6_638621809802099585.webp', index: 3, variationPath:'/' } , ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Após lavar os cabelos, aplique no comprimento e pontas dos fios úmidos. Massageie, deixe agir por aproximadamente 4 minutos e enxágue. Descrição longa A Máscara Fluida Reparação Molecular promove tratamento intensivo para cabelos danificados, descoloridos e quimicamente tratados. Sua tecnologia penetra profundamente na fibra capilar, fortalecendo os fios, reduzindo a porosidade e devolvendo resistência, brilho e maleabilidade. Benefícios: • Reconstrução profunda da fibra capilar; • Redução da quebra; • Melhora da elasticidade; • Proteção da cor; • Proteção térmica; • Mais brilho e maciez. Dicas da Lola Para uma reparação completa, finalize o tratamento com o Condicionador Reparação Molecular. Como usar Após lavar os cabelos, aplique no comprimento e pontas dos fios úmidos. Massageie, deixe agir por aproximadamente 4 minutos e en

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
