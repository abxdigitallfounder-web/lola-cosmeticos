# Row Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/colecoes-tarja-preta-d2cf1eb8/Row.tsx
- Route: /colecoes/tarja-preta (category)
- Source: https://www.lolacosmetics.com.br/colecoes/tarja-preta
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/colecoes-tarja-preta-d2cf1eb8/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.row` is stored as fragments.Row
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-category-1492 grid-products grid-empty" and #main class "context-category-1492 grid-empty",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
$context = { Browsing: { Name: 'Tarja Preta', FullPathName: '/Coleções/Tarja Preta', Grid: { Facets: [], ProductCount: 0 }, Provider: 'Elasticsearch' }, BaseUrl: '/' }; <div class="facet-type-selected template"> {{#HasItems}} {{#selected}} <div class="selected-facet {{ Alias }} "> {{#Name}} <div class="selected-facet-name">{{ Name }}</div> {{/Name}} <ul> {{#options}} <li class="selected-option" data-url="{{ Url }}"> {{#GroupName}} {{#HasImage}} <span class="markup-color" style="background:url(https://d1hjvew1n9ss7u.cloudfront.net/Custom/Content/Themes/Shared/Images/Swatches/{{GroupName}}.jpg);"></span> {{/HasImage}} {{^HasImage}} {{#Color}} <span class="markup-color" style="background:{{Color}};"></span> {{/Color}} {{^Color}} <span class="markup-color"></span> {{/Color}} {{/HasImage}} {{/GroupName}} {{^GroupName}} {{#HasImage}} <span class="markup-color" style="background:url(https://d2l4mdyojly1ma.cloudfront.net/Custom/Content/Swatches/{{ImagePath}});"></span> {{/HasImage}} {{^HasImage}} {{#Color}} <span class="markup-color" style="background:{{Color}};"></span> {{/Color}} {{^Color}} <span class="markup-color"></span> {{/Color}} {{/HasImage}} {{/GroupName}} <span class="option-label">{{ Label }}</span> <span class="clear-filter">&times;</span> </li> {{/options}} </ul> </div> {{/selected}} {{/HasItems}} {{^HasItems}} <div class="no-data"></div> {{/HasItems}} </div> Ordenar por: Mais Relevantes Mais Acessados Maior preço Menor Preço A-Z Novidades Mais Vendidos Não existem produtos cadastrados Confira as opiniões de clientes satisfeitos Daniela G. 21/09/2026 Gosto muito:) VANESSA F. 18/09/2026 Amei receber meus produtos perfeitamente embalados e as amostras grátis - até comprei o creme de pentear que veio de amostra. Joice S. 14/09/2026 São de excelente qualidade vale a pena comprar pois o investimento e eficaz e duradouro. Eliane S. 10/09/2026 cabelo muito cheiroso, soltinho. E rende muito. Sofia v. 08/09/2026 perfeição, produtos bem organizados e com muita informação sobre! SARA M. 01/09/2026 Produz os produtos que amo. Jéssica F. 01/09/2026 Incrível. Trata o cliente com muito carinho e entrega rápida e bem feita. Avaliações confiáveis do Ordenar por: Mais Relevantes Mais Acessados Maior preço Menor Preço A-Z Novidades Mais Vendidos É uma reconstrução BAPHÔNICA! Possui 20 substâncias que vão transformar a sua cabeleira na mais amada do quarteirão.

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
