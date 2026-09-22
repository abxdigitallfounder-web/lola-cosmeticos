# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/kit-celebridades-ps-19629-316-p46377-98174e3a/ProductDetail.tsx
- Route: /kit-celebridades-ps-19629-316-p46377 (product)
- Source: https://www.lolacosmetics.com.br/kit-celebridades-ps-19629-316-p46377
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/kit-celebridades-ps-19629-316-p46377-98174e3a/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46377 ts-theme-light" and #main class "context-product-46377",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46377_kit-celebridades-ps-19629-316_m1_639219551674436362.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46377_kit-celebridades-ps-19629-316_m2_639219551773034882.webp', index: 2, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46377_kit-celebridades-ps-19629-316_l1_639219551674436362.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46377_kit-celebridades-ps-19629-316_l2_639219551773034882.webp', index: 2, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46377_kit-celebridades-ps-19629-316_z1_639219551674436362.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46377_kit-celebridades-ps-19629-316_z2_639219551773034882.webp', index: 2, variationPath:'/' } ]; Descrição Informações Como usar Descrição Curta Descrição longa Selecione a visualização desejada: Lista Como usar 1 - Morte Súbita Máscara Use quando os fios estiverem secos, ressecados, opacos ou precisando de hidratação intensa. Após lavar os cabelos, aplique no comprimento e pontas. Deixe agir por 10 minutos e enxágue bem. 2 - Danos Vorazes Máscara Use quando os fios estiverem muito danificados, fragilizados ou precisando de reparação intensiva. Após lavar os cabelos, aplique no comprimento e pontas, trabalhando mecha a mecha. Deixe agir por 2 minutos e enxágue bem. 3 - Rapunzel Máscara Use quando os fios estiverem frágeis, finos, quebradiços ou precisando de fortalecimento. Após lavar os cabelos, aplique no comprimento e pontas dos fios limpos e úmidos. Deixe agir de 3 a 5 minutos e enxágue bem. Frequência • Morte Súbita Máscara: uso semanal ou conforme necessidade de hidratação dos fios; • Danos Vorazes Máscara: 1 a 2 vezes por semana ou conforme o nível de dano; • Rapunzel Máscara: uso semanal ou conforme necessidade de fortalecimento. Descrição Curta Ideal para quem deseja uma rotina de tratamento poderosa em versão prática, reunindo três máscaras queridinhas da Lola para cuidar de diferentes necessidades dos fios: hidratação intensa, reparação de danos e fortalecimento capilar. Descrição longa O Kit Celebridades reúne três grandes estrelas da Lola em versão 100g: Morte Súbita Máscara, Danos Vorazes Máscara e Rapunzel Máscara. Juntas, elas formam uma rotina completa de cuidado para cabelos que precisam de hidratação, reconstrução, força, brilho e maciez. A Morte Súbita Máscara ajuda a restaurar a hidratação dos fios secos e danificados, devolvendo brilho, maciez e movimento. A Danos Vorazes Máscara promove reparação intensiva para cabelos extremamente danificados, auxiliando na recuperação da fibra capilar, controle do frizz e fortalecimento. Já a Rapunzel Máscara fortalec

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
