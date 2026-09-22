# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/morte-subita-oleo-50ml-ps-19629-315-p46375-15a60cc4/ProductDetail.tsx
- Route: /morte-subita-oleo-50ml-ps-19629-315-p46375 (product)
- Source: https://www.lolacosmetics.com.br/morte-subita-oleo-50ml-ps-19629-315-p46375
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/morte-subita-oleo-50ml-ps-19629-315-p46375-15a60cc4/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-46375 ts-theme-light" and #main class "context-product-46375",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_m6_639190142945025501.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_m3_639190142804452074.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_m2_639190142744725369.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_m4_639190142852672977.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_m5_639190142903013356.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_m1_639190142669170979.webp', index: 6, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_l6_639190142945025501.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_l3_639190142804452074.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_l2_639190142744725369.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_l4_639190142852672977.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_l5_639190142903013356.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_l1_639190142669170979.webp', index: 6, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_z6_639190142945025501.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_z3_639190142804452074.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_z2_639190142744725369.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/46/37/46375_morte-subita-oleo-50ml-ps-19629-315_z4_639190142852672977.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4md

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
