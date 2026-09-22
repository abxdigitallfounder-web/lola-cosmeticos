# CategoryTextFooter Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/colecoes-milagre-4719adcb/CategoryTextFooter.tsx
- Route: /colecoes/milagre (category)
- Source: https://www.lolacosmetics.com.br/colecoes/milagre
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/colecoes-milagre-4719adcb/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.category-text-footer` is stored as fragments.CategoryTextFooter
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-category-1486 grid-products" and #main class "context-category-1486 grid-products",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
É um creme multifuncional que deixa os cabelos fáceis de desembaraçar, hidratados e com brilho intenso. Perfeito por ser leve e não oleoso, Milagre! é ideal para ser usado como tratamento diário. No cronograma, pode ser usado na etapa de hidratação. Contém frutas cítricas, Manteiga de Karité, Benjoim doce, baunilha e água de coco. Você vai querer experimentar mesmo se o seu cabelo estiver maravilhoso. Ler mais

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
