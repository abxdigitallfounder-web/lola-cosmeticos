# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/trio-be-m-dita-ghee-reconstrucao-350g-p46048-f1be6c56/ProductDetail.tsx
- Route: /trio-be-m-dita-ghee-reconstrucao-350g-p46048 (product)
- Source: https://www.lolacosmetics.com.br/trio-be-m-dita-ghee-reconstrucao-350g-p46048
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/trio-be-m-dita-ghee-reconstrucao-350g-p46048-f1be6c56/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46048 ts-theme-light" and #main class "context-product-46048",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46048_trio-be-m-dita-ghee-reconstrucao-350g_m1_638653893015099567.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46048_trio-be-m-dita-ghee-reconstrucao-350g_m2_638653893374684276.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46048_trio-be-m-dita-ghee-reconstrucao-350g_m2_638653893378579989.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46048_trio-be-m-dita-ghee-reconstrucao-350g_m3_638653893397283417.webp', index: 4, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46048_trio-be-m-dita-ghee-reconstrucao-350g_l1_638653893015099612.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46048_trio-be-m-dita-ghee-reconstrucao-350g_l2_638653893374684339.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46048_trio-be-m-dita-ghee-reconstrucao-350g_l2_638653893378580050.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46048_trio-be-m-dita-ghee-reconstrucao-350g_l3_638653893397283485.webp', index: 4, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/04/46048_trio-be-m-dita-ghee-reconstrucao-350g_z1_638653893015099670.webp', index: 1, variationPath:'/' } , ]; Descrição Informações Como usar Descrição Curta Descrição longa Selecione a visualização desejada: Lista Como usar BEMDITA GHEE MAMAO SHAMPOO 250mL Aplique uma pequena quantidade nos cabelos úmidos, massageie suavemente e enxágue em seguida. Repita a operação se necessário. Siga com a Manteiga Vegetal Be(m)dita Ghee de Reconstrução. BEMDITA GHEE RECONSTRUCAO MAMAO 350g A quantidade varia de acordo com volume e comprimento de seus cabelos, mas evite aplicar diretamente na raiz. Retire de 2 a 3 colheres de chá e aplique nas mãos. Emulsione para espalhar e aplique do comprimento às pontas, logo após o shampoo de sua preferência. Deixe agir de 3 a 5 minutos. Retire todo o excesso. Não é necessário finalizar com condicionador. Use de 15 em 15 dias ou quando se fizer necessário o processo de reconstrução dos fios. Be(m)dita Ghee mamão Óleo Aplique de 1 a 3 gotas, nos cabelos úmidos ou secos. Pode ser usado durante a noite ou adicionado a sua Ghee para uma reconstrução mais profunda. Ideal para usar como reparador de pontas e antifrizz. Descrição Curta BEMDITA GHEE MAMAO SHAMPOO 250mL Shampoo reconstrutor com fórmula leve que limpa suavemente, restaurando os cabelos quebradiços e fracos. Reponho a massa perdida dos fios após processos químicos, mecânicos e ambientais. BEMDITA GHEE RECONST

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
