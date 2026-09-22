# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/purple-shampoo-250ml-ps-19629-266-p46192-e091a131/ProductDetail.tsx
- Route: /purple-shampoo-250ml-ps-19629-266-p46192 (product)
- Source: https://www.lolacosmetics.com.br/purple-shampoo-250ml-ps-19629-266-p46192
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/purple-shampoo-250ml-ps-19629-266-p46192-e091a131/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46192 ts-theme-light" and #main class "context-product-46192",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46192_purple-shampoo-250ml-ps-19629-266_m1_638791094839089762.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46192_purple-shampoo-250ml-ps-19629-266_m2_638796178330971817.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46192_purple-shampoo-250ml-ps-19629-266_m3_638796178390060240.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46192_purple-shampoo-250ml-ps-19629-266_m4_638907810087733934.webp', index: 4, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46192_purple-shampoo-250ml-ps-19629-266_l1_638791094839089762.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46192_purple-shampoo-250ml-ps-19629-266_l2_638796178330971817.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46192_purple-shampoo-250ml-ps-19629-266_l3_638796178390060240.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46192_purple-shampoo-250ml-ps-19629-266_l4_638907810087733934.webp', index: 4, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/19/46192_purple-shampoo-250ml-ps-19629-266_z1_638791094839089762.webp', index: 1, variationPath:'/' } , ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Agite antes de usar. Aplique nos cabelos molhados, massageando suavemente o couro cabeludo. Deixe agir por aproximadamente 2 minutos, enxágue e repita a aplicação, se necessário. Descrição longa O Purple Shampoo Iluminador promove limpeza profunda sem ressecar, enquanto ajuda a preservar a saúde dos cabelos loiros, coloridos ou descoloridos. Sua fórmula auxilia no conforto do couro cabeludo, combate a quebra, reduz a aspereza e contribui para um loiro mais brilhante e saudável. Benefícios: • Limpeza profunda sem ressecar; • Ajuda a reduzir a quebra; • Auxilia no conforto do couro cabeludo; • Ajuda a preservar a cor dos fios; • Reduz a aspereza e o frizz; • Deixa os cabelos mais brilhantes. Dicas da Lola Use em conjunto com o Acidificante Corretor de Porosidade e a Máscara Reparadora Purple para potencializar o brilho e prolongar a durabilidade da cor. Como usar Agite antes de usar. Aplique nos cabelos molhados, massageando suavemente o couro cabeludo. Deixe agir por aproximadamente 2 minutos, enxágue e repita a aplicação, se necessário. Ingredientes e Ativos Purple Shampoo 250ml console.log("Trustvox rating | PDP:", 46192, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 46192); 4.1 de 5 (7) Ref: PS.19629.

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
