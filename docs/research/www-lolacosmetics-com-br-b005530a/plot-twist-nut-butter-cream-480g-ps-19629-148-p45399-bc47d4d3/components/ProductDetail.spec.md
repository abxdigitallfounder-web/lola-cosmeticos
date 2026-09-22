# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/plot-twist-nut-butter-cream-480g-ps-19629-148-p45399-bc47d4d3/ProductDetail.tsx
- Route: /plot-twist-nut-butter-cream-480g-ps-19629-148-p45399 (product)
- Source: https://www.lolacosmetics.com.br/plot-twist-nut-butter-cream-480g-ps-19629-148-p45399
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/plot-twist-nut-butter-cream-480g-ps-19629-148-p45399-bc47d4d3/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45399 ts-theme-light" and #main class "context-product-45399",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd23_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_m13_638621807397986615.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_m14_638621808473238482.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_m14_638621808473854924.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_m14_638621808479746667.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_m15_638621809832689443.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_m15_638621809837758392.webp', index: 6, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_m18_638907801865459888.webp', index: 7, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_m17_638907801839055152.webp', index: 8, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_m16_638621809841081603.webp', index: 9, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_l13_638621807397986615.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_l14_638621808473238482.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_l14_638621808473854924.webp', index: 3, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_l14_638621808479746667.webp', index: 4, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_l15_638621809832689443.webp', index: 5, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/39/45399_plot-twist-nut-butter-cream-480g-ps-19629-148_l15_638621809837758392.webp', index: 6, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Pr

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
