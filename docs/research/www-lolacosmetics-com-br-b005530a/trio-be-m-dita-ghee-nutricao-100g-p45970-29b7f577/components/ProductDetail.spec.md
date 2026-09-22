# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/trio-be-m-dita-ghee-nutricao-100g-p45970-29b7f577/ProductDetail.tsx
- Route: /trio-be-m-dita-ghee-nutricao-100g-p45970 (product)
- Source: https://www.lolacosmetics.com.br/trio-be-m-dita-ghee-nutricao-100g-p45970
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/trio-be-m-dita-ghee-nutricao-100g-p45970-29b7f577/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45970 ts-theme-light" and #main class "context-product-45970",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45970_trio-be-m-dita-ghee-nutricao-100g_m5_638635755721181796.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45970_trio-be-m-dita-ghee-nutricao-100g_m5_638635755725458142.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45970_trio-be-m-dita-ghee-nutricao-100g_m2_638635755286186381.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45970_trio-be-m-dita-ghee-nutricao-100g_m3_638635755350163002.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45970_trio-be-m-dita-ghee-nutricao-100g_m4_638635755467191553.webp', index: 5, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45970_trio-be-m-dita-ghee-nutricao-100g_l5_638635755721181857.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45970_trio-be-m-dita-ghee-nutricao-100g_l5_638635755725458209.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45970_trio-be-m-dita-ghee-nutricao-100g_l2_638635755286186440.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45970_trio-be-m-dita-ghee-nutricao-100g_l3_638635755350163065.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/97/45970_trio-be-m-dita-ghee-nutricao-100g_l4_638635755467191621.webp', index: 5, variationPath:'/' } ]; var MediaZoomDS = [ ]; Descrição Informações Como usar Descrição Curta Descrição longa Selecione a visualização desejada: Lista Como usar BE(M)DITA GHEE - ABACAXI SHAMPOO 250mL Aplique nos cabelos molhados e massageie delicadamente até fazer espuma. Repita a operação se necessário. Siga com a Manteiga Vegetal Be(m)dita Ghee de Nutrição. BE(M)DITA GHEE - NUTRIÇÃO ABACAXI 100g A quantidade varia de acordo com volume e comprimento de seus cabelos, mas evite aplicar diretamente na raiz. Retire de 2 a 3 colheres de chá e aplique nas mãos. Emulsione para espalhar e aplique do comprimento às pontas, logo após o shampoo de sua preferência. Deixe agir de 3 a 5 minutos. Retire todo o excesso. Não é necessário finalizar com condicionador. Use semanalmente ou quando se fizer necessário o processo de nutrição dos fios. Be(m)dita Ghee Abacaxi Óleo Aplique nos cabelos úmidos após lavar e condicionar. Finalize como desejar. Excelente para aplicar nos cabelos secos como reparador de pontas e anti frizz. Descrição Curta BE(M)DITA GHEE - ABACAXI SHAMPOO 250mL Shampoo Ghee de Nutrição com ativos vegetais de Abacaxi, Girassol & Manteiga de Karité para cabelos porosos e ressecados,

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
