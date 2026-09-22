# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/plot-twist-guava-cream-480g-ps-19629-147-p45666-ec19ab2b/ProductDetail.tsx
- Route: /plot-twist-guava-cream-480g-ps-19629-147-p45666 (product)
- Source: https://www.lolacosmetics.com.br/plot-twist-guava-cream-480g-ps-19629-147-p45666
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/plot-twist-guava-cream-480g-ps-19629-147-p45666-ec19ab2b/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45666 ts-theme-light" and #main class "context-product-45666",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd23_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_m12_638736731037108530.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_m10_638621809436171734.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_m11_638621809438059386.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_m11_638621809442992083.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_m11_638621809443381962.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_m14_638907799698933748.webp', index: 6, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_m13_638907799676000907.webp', index: 7, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_m15_638907854735762864.webp', index: 8, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_l12_638736731037108530.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_l10_638621809436171734.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_l11_638621809438059386.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_l11_638621809442992083.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_l11_638621809443381962.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_l14_638907799698933748.webp', index: 6, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_l13_638907799676000907.webp', index: 7, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/66/45666_plot-twist-guava-cream-480g-ps-19629-147_l15_63890785473

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
