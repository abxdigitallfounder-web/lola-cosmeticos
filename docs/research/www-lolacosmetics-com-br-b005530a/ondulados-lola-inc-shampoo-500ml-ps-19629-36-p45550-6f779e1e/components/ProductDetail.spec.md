# ProductDetail Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/ondulados-lola-inc-shampoo-500ml-ps-19629-36-p45550-6f779e1e/ProductDetail.tsx
- Route: /ondulados-lola-inc-shampoo-500ml-ps-19629-36-p45550 (product)
- Source: https://www.lolacosmetics.com.br/ondulados-lola-inc-shampoo-500ml-ps-19629-36-p45550
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/ondulados-lola-inc-shampoo-500ml-ps-19629-36-p45550-6f779e1e/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.product-detail` is stored as fragments.ProductDetail
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-product-45550 ts-theme-light" and #main class "context-product-45550",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Este produto é referente a : Adicionar à lista de desejos Adicionar à lista Seleciona a lista: Informe a quantidade: Adicionar document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.btn-product-wishlist-add'); if (!btn) return; const isAuthenticated = window.browsingContext && window.browsingContext.Common && window.browsingContext.Common.Shopper && window.browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) { btn.classList.add('btn-product-wishlist-added'); return; } e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } const baseUrl = (window.browsingContext && window.browsingContext.Common.Urls.BaseUrl) || '/'; window.location.href = baseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); var wd22_MediaSelectorDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/55/45550_ondulados-lola-inc-shampoo-500ml-ps-19629-36_m8_638735943724803334.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/55/45550_ondulados-lola-inc-shampoo-500ml-ps-19629-36_m10_638907790801846537.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/55/45550_ondulados-lola-inc-shampoo-500ml-ps-19629-36_m9_638907790731874124.webp', index: 3, variationPath:'/' } ]; Clique para zoom Clique para zoom var MediaEnlargerDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/55/45550_ondulados-lola-inc-shampoo-500ml-ps-19629-36_l8_638735943724803334.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/55/45550_ondulados-lola-inc-shampoo-500ml-ps-19629-36_l10_638907790801846537.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/55/45550_ondulados-lola-inc-shampoo-500ml-ps-19629-36_l9_638907790731874124.webp', index: 3, variationPath:'/' } ]; var MediaZoomDS = [ { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/55/45550_ondulados-lola-inc-shampoo-500ml-ps-19629-36_z8_638735943724803334.webp', index: 1, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/55/45550_ondulados-lola-inc-shampoo-500ml-ps-19629-36_z10_638907790801846537.webp', index: 2, variationPath:'/' } , { mediaPath: 'https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Products/45/55/45550_ondulados-lola-inc-shampoo-500ml-ps-19629-36_z9_638907790731874124.webp', index: 3, variationPath:'/' } ]; Descrição Informações Como usar Descrição longa Selecione a visualização desejada: Lista Como usar Agite antes de usar. Aplique nos cabelos molhados diretamente no couro cabeludo, massageando suavemente. Enxágue e repita a aplicação, se necessário. Descrição longa O Shampoo Ondulados promove uma limpeza suave que ajuda a definir a curvatura natural dos fios sem ressecar. Sua fórmula auxilia no controle do frizz, fortalece os cabelos e proporciona mais brilho, hidratação e movimento para as ondas. Benefícios: • Limpeza suave sem ressecar; • Ajuda na definição das ondas; • Controle do frizz; • Hidratação leve; • Fortalecimento dos fios; • Mais brilho e movimento. Dicas da Lola Para ondas mais definidas e hidratadas, utilize em conjunto com o Condicionador Ondulados e finalize com o Creme Texturizador. Como usar Agite antes de usar. Aplique nos cabelos molhados diretamente no couro cabeludo, massageando suavemente. Enxágue e repita a aplicação, se necessário. Ingredientes e Ativos ONDULADOS LOLA INC. - SHAMPOO 500ML console.log("Trustvox rating | PDP:", 45550, "tipo:", 3); console.log("Trustvox rating | ID final usado =", 45550); 4.6 de 5 (44) Ref: PS.19629.36 Shampoo Uso diário Vegano Cruelty Free Embalagem Reciclável R$

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
