# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/loira-de-farmacia-mascara-100g-ps-19629-311-p46367-c7b890b4/ProductDetail.tsx
- Route: /loira-de-farmacia-mascara-100g-ps-19629-311-p46367 (product)
- Source: https://www.lolacosmetics.com.br/loira-de-farmacia-mascara-100g-ps-19629-311-p46367
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/loira-de-farmacia-mascara-100g-ps-19629-311-p46367-c7b890b4/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46367 ts-theme-light" and #main class "context-product-46367",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/36/46367_loira-de-farmacia-mascara-100g-ps-19629-311_m1_639173047954746211.webp', index: 1, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/36/46367_loira-de-farmacia-mascara-100g-ps-19629-311_l1_639173047954746211.webp', index: 1, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/36/46367_loira-de-farmacia-mascara-100g-ps-19629-311_z1_639173047954746211.webp', index: 1, variationPath:'/' } ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Após lavar os cabelos com o Shampoo Loira de Farmácia, aplique uma quantidade generosa da máscara nos cabelos úmidos, distribuindo uniformemente do comprimento às pontas. Enluve os fios e deixe agir por 5 minutos. Enxágue bem. Descrição longa A linha Loira de Farmácia foi desenvolvida especialmente para cabelos loiros e descoloridos que sofrem com o amarelamento dos fios. Com ação matizadora, ajuda a neutralizar os tons amarelados indesejados, reavivando a cor do loiro e proporcionando mais brilho, luminosidade e maciez. Sua fórmula combina ativos nutritivos e antioxidantes que auxiliam na manutenção da cor, além de proteger os fios contra os danos causados pelos raios UV, poluição e calor de ferramentas térmicas. Benefícios: • Neutraliza os tons amarelados dos fios; • Promove efeito desamarelador gradual; • Reaviva e ilumina o tom de loiro; • Proporciona mais brilho e luminosidade; • Auxilia na retenção da cor; • Ajuda a controlar o frizz; • Possui ação nutritiva e antioxidante; • Protege contra raios UV e poluição ambiental. Dicas da Lola Para potencializar os resultados e manter o loiro bonito por mais tempo, utilize o Shampoo Matizador Loira de Farmácia e a Máscara Matizadora Loira de Farmácia em conjunto. A combinação promove uma limpeza matizadora eficaz, hidrata os fios e ajuda a manter a cor iluminada e livre de tons amarelados indesejados. Como usar Após lavar os cabelos com o Shampoo Loira de Farmácia, aplique uma quantidade generosa da máscara nos cabelos úmidos, distribuindo uniformemente do comprimento às pontas. Enluve os fios e deixe agir por 5 minutos. Enxágue bem. Ingredientes e Ativos LOIRA DE FARMACIA MÁSCARA 100G console.log("Trustvox rating | PDP:", 46367, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 46367); 3 de 5 (2) Ref: PS.19629.311 Vegano Cruelty Free Embalagem Reciclável R$ 34,90 1 x R$ 34,90 sem juros var variants = [ { sku: 'PS.19629.311', productID: '46367', name: 'LOIRA DE FARMACIA M&#193;SCARA 100G', isPromotion: 'false', price: '34,9', priceBase: '34,9', priceDescription: ' &lt;strong class=&#39;sale-price&#39;&gt;&lt;span itemprop=&#39;price&#39;&gt;R$ 34,90&lt;/span&gt;&lt;/strong&gt; &lt;dfn class=&#39;condition&#39;&gt;&lt;span class=&#39;parcels&#39;&gt;1 x &lt;/span&gt;&lt;span class=&#39;parcel-value&#39;&gt;R$ 

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
