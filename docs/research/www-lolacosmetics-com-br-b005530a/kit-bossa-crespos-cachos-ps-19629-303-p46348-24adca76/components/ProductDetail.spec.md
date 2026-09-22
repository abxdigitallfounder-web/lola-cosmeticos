# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/kit-bossa-crespos-cachos-ps-19629-303-p46348-24adca76/ProductDetail.tsx
- Route: /kit-bossa-crespos-cachos-ps-19629-303-p46348 (product)
- Source: https://www.lolacosmetics.com.br/kit-bossa-crespos-cachos-ps-19629-303-p46348
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/kit-bossa-crespos-cachos-ps-19629-303-p46348-24adca76/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46348 ts-theme-light" and #main class "context-product-46348",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46348_kit-bossa-crespos-cachos-ps-19629-303_m2_639106436890145611.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46348_kit-bossa-crespos-cachos-ps-19629-303_m1_639106436812199462.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46348_kit-bossa-crespos-cachos-ps-19629-303_m3_639106436942117494.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46348_kit-bossa-crespos-cachos-ps-19629-303_m4_639106437006941924.webp', index: 4, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46348_kit-bossa-crespos-cachos-ps-19629-303_l2_639106436890145611.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46348_kit-bossa-crespos-cachos-ps-19629-303_l1_639106436812199462.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46348_kit-bossa-crespos-cachos-ps-19629-303_l3_639106436942117494.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46348_kit-bossa-crespos-cachos-ps-19629-303_l4_639106437006941924.webp', index: 4, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46348_kit-bossa-crespos-cachos-ps-19629-303_z2_639106436890145611.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46348_kit-bossa-crespos-cachos-ps-19629-303_z1_639106436812199462.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46348_kit-bossa-crespos-cachos-ps-19629-303_z3_639106436942117494.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/34/46348_kit-bossa-crespos-cachos-ps-19629-303_z4_639106437006941924.webp', index: 4, variationPath:'/' } ]; Descrição Informações Como usar Principais Ingredientes Descrição longa Selecione a visualização desejada: Lista Como usar Aplique primeiro o Creme Modelador Bossa nos cabelos limpos e úmidos, distribuindo uniformemente do comprimento às pontas para hidratar e alinhar os fios. Em seguida, aplique a Gelatina Modeladora para selar a definição e garantir maior fixação. Deixe secar naturalmente ou utilize um difusor para potencializar o resultado. Principais Ingredientes Principais Ingredientes <img src="https://lolacosmetics.admin.linxcommerce.com.br/Custom/Content/Themes/Lola/Imagens/Principais_Ingredientes/oleo pequi.jpg "> Óleo de pequi ajuda no controle do frizz, volume e alinhamento dos cachos; <img src="https://lolacosmetics.admin

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
