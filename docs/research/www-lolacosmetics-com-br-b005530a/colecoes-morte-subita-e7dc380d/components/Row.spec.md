# Row Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/colecoes-morte-subita-e7dc380d/Row.tsx
- Route: /colecoes/morte-subita (category)
- Source: https://www.lolacosmetics.com.br/colecoes/morte-subita
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/colecoes-morte-subita-e7dc380d/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.row` is stored as fragments.Row
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-category-1488 grid-products" and #main class "context-category-1488 grid-products",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
$context = { Browsing: { Name: 'Morte S&#250;bita', FullPathName: '/Coleções/Morte Súbita', Grid: { Facets: [{"FieldName":"CS1_CategoryNames","PropertyMetadataID":35,"PropertyDisplayName":"Nome da categoria","SearchFacetID":11,"Alias":"category","Name":"Categoria","Priority":1,"Selection":"Multiples","Facet":"Dynamic","Sort":"AlphaAsc","ShowEmptyFacets":false,"WidgetName":"facet_type_levels","WidgetProperties":null,"InitClosed":false,"Limit":1000,"MaxOptions":null,"MinOptions":null,"MinRange":null,"UrlPattern":"categoria-{value}","UrlPatternRange":"","UrlPatternStart":"","UrlPatternEnd":"","LabelPattern":"{value}","LabelPatternRange":"","LabelPatternStart":"","LabelPatternEnd":"","Prefix":null,"Offset":null,"ParameterPatternFormatted":"p-categoria-{name}:{value}","Stats":null,"AvailableOptions":[{"Url":"categoria--colecoes","Label":"/Coleções","Count":8,"Value":"/Coleções","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-morte-subita","Label":"/Coleções/Morte Súbita","Count":8,"Value":"/Coleções/Morte Súbita","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--lancamentos","Label":"/LANÇAMENTOS","Count":3,"Value":"/LANÇAMENTOS","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--lancamentos-embaixadoras","Label":"/LANÇAMENTOS/Embaixadoras","Count":3,"Value":"/LANÇAMENTOS/Embaixadoras","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--morte-subita","Label":"/MORTE SÚBITA","Count":4,"Value":"/MORTE SÚBITA","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--morte-subita-geral","Label":"/MORTE SÚBITA/GERAL","Count":2,"Value":"/MORTE SÚBITA/GERAL","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--morte-subita-mascara","Label":"/MORTE SÚBITA/MASCARA","Count":1,"Value":"/MORTE SÚBITA/MASCARA","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--morte-subita-oleo","Label":"/MORTE SÚBITA/OLEO","Count":1,"Value":"/MORTE SÚBITA/OLEO","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--promocao","Label":"/PROMOÇÃO","Count":2,"Value":"/PROMOÇÃO","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--promocao-semana-da-lolete","Label":"/PROMOÇÃO/Semana da Lolete","Count":2,"Value":"/PROMOÇÃO/Semana da Lolete","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--tipos-de-cabelo","Label":"/TIPOS DE CABELO","Count":4,"Value":"/TIPOS DE CABELO","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--tipos-de-cabelo-todos-os-tipos-de-cabelos","Label":"/TIPOS DE CABELO/Todos os tipos de cabelos","Count":4,"Value":"/TIPOS DE CABELO/Todos os tipos de cabelos","Start":null,"End":null,"MetadataPath":"","HasMetadataOpti

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
