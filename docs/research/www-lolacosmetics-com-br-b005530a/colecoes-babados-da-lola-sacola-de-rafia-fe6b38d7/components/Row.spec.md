# Row Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/colecoes-babados-da-lola-sacola-de-rafia-fe6b38d7/Row.tsx
- Route: /colecoes/babados-da-lola/sacola-de-rafia (category)
- Source: https://www.lolacosmetics.com.br/colecoes/babados-da-lola/sacola-de-rafia
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/colecoes-babados-da-lola-sacola-de-rafia-fe6b38d7/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.row` is stored as fragments.Row
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-category-1604 grid-products" and #main class "context-category-1604 grid-products",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
$context = { Browsing: { Name: 'Sacola de Rafia', FullPathName: '/Coleções/Babados Da Lola/Sacola de Rafia', Grid: { Facets: [{"FieldName":"CS1_CategoryNames","PropertyMetadataID":35,"PropertyDisplayName":"Nome da categoria","SearchFacetID":11,"Alias":"category","Name":"Categoria","Priority":1,"Selection":"Multiples","Facet":"Dynamic","Sort":"AlphaAsc","ShowEmptyFacets":false,"WidgetName":"facet_type_levels","WidgetProperties":null,"InitClosed":false,"Limit":1000,"MaxOptions":null,"MinOptions":null,"MinRange":null,"UrlPattern":"categoria-{value}","UrlPatternRange":"","UrlPatternStart":"","UrlPatternEnd":"","LabelPattern":"{value}","LabelPatternRange":"","LabelPatternStart":"","LabelPatternEnd":"","Prefix":null,"Offset":null,"ParameterPatternFormatted":"p-categoria-{name}:{value}","Stats":null,"AvailableOptions":[{"Url":"categoria--babados-da-lola","Label":"/BABADOS DA LOLA","Count":1,"Value":"/BABADOS DA LOLA","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--babados-da-lola-brindes","Label":"/BABADOS DA LOLA/BRINDES","Count":1,"Value":"/BABADOS DA LOLA/BRINDES","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes","Label":"/Coleções","Count":1,"Value":"/Coleções","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-babados-da-lola","Label":"/Coleções/Babados Da Lola","Count":1,"Value":"/Coleções/Babados Da Lola","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-babados-da-lola-sacola-de-rafia","Label":"/Coleções/Babados Da Lola/Sacola de Rafia","Count":1,"Value":"/Coleções/Babados Da Lola/Sacola de Rafia","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null}],"SelectedOptions":[],"DatesFacets":null,"Layout":null,"ShowGroupMetadataOptions":false}], ProductCount: 1 }, Provider: 'Elasticsearch' }, BaseUrl: '/' }; Categoria BABADOS DA LOLA(1) BRINDES (1) Coleções(1) Babados Da Lola (1) Sacola de Rafia(1) Página 1 de 11 produtos encontrados. Anterior 1 Próximo Ordenar por: Mais Relevantes Mais Acessados Maior preço Menor Preço A-Z Novidades Mais Vendidos document.addEventListener('DOMContentLoaded', function () { document.addEventListener('click', function (e) { const btn = e.target.closest('.wd-product-line-wishlist .js-btn'); if (!btn) return; const isAuthenticated = window.browsingContext && browsingContext.Common && browsingContext.Common.Shopper && browsingContext.Common.Shopper.IsAuthenticated; if (isAuthenticated) return; e.preventDefault(); e.stopPropagation(); if (typeof e.stopImmediatePropagation === 'function') { e.stopImmediatePropagation(); } window.location.href = browsingContext.Common.Urls.BaseUrl + 'Login?url=' + encodeURIComponent(window.location.href); }, true); }); [] (9) SACOLA RAFIA LOLA + CHICA CAPETO 10% de cashback R$ 19,90 1 x R$ 19,90 sem juros - + Comprar ADICIONAR À SACOLA Confira as opiniões de clientes satisfeitos Daniela G. 21/09/2026 Gosto muito:) VANESSA F. 18/09/2026 Amei receber meus produtos perfeitamente embalados e as amostras grátis - até comprei o creme de pentear que veio de amostra. Joice S. 14/09/2026 São de excelente qualidade vale a pena comprar pois o investimento e eficaz e duradouro. Eliane S. 10/09/2026 cabelo muito cheiroso, soltinho. E rende muito. Sofia v. 08/09/2026 perfeição, produtos bem organizados e com muita informação sobre! SARA M. 01/09/2026 Produz os produtos que amo. Jéssica F. 01/09/2026 Incrível. Trata o client

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
