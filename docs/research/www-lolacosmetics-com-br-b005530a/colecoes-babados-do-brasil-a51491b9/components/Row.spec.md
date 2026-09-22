# Row Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/colecoes-babados-do-brasil-a51491b9/Row.tsx
- Route: /colecoes/babados-do-brasil (category)
- Source: https://www.lolacosmetics.com.br/colecoes/babados-do-brasil
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/colecoes-babados-do-brasil-a51491b9/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.row` is stored as fragments.Row
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-category-1494 grid-products" and #main class "context-category-1494 grid-products",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
$context = { Browsing: { Name: 'Babados do Brasil', FullPathName: '/Coleções/Babados do Brasil', Grid: { Facets: [{"FieldName":"CS1_CategoryNames","PropertyMetadataID":35,"PropertyDisplayName":"Nome da categoria","SearchFacetID":11,"Alias":"category","Name":"Categoria","Priority":1,"Selection":"Multiples","Facet":"Dynamic","Sort":"AlphaAsc","ShowEmptyFacets":false,"WidgetName":"facet_type_levels","WidgetProperties":null,"InitClosed":false,"Limit":1000,"MaxOptions":null,"MinOptions":null,"MinRange":null,"UrlPattern":"categoria-{value}","UrlPatternRange":"","UrlPatternStart":"","UrlPatternEnd":"","LabelPattern":"{value}","LabelPatternRange":"","LabelPatternStart":"","LabelPatternEnd":"","Prefix":null,"Offset":null,"ParameterPatternFormatted":"p-categoria-{name}:{value}","Stats":null,"AvailableOptions":[{"Url":"categoria--colecoes","Label":"/Coleções","Count":3,"Value":"/Coleções","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-babados-do-brasil","Label":"/Coleções/Babados do Brasil","Count":3,"Value":"/Coleções/Babados do Brasil","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--lolaterapia","Label":"/LOLATERAPIA","Count":1,"Value":"/LOLATERAPIA","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--lolaterapia-corpo","Label":"/LOLATERAPIA/Corpo","Count":1,"Value":"/LOLATERAPIA/Corpo","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--lolaterapia-corporal","Label":"/LOLATERAPIA/CORPORAL","Count":1,"Value":"/LOLATERAPIA/CORPORAL","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--promocao","Label":"/PROMOÇÃO","Count":3,"Value":"/PROMOÇÃO","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--promocao-achadinhos","Label":"/PROMOÇÃO/Achadinhos","Count":2,"Value":"/PROMOÇÃO/Achadinhos","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--promocao-semana-da-lolete","Label":"/PROMOÇÃO/Semana da Lolete","Count":3,"Value":"/PROMOÇÃO/Semana da Lolete","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null}],"SelectedOptions":[],"DatesFacets":null,"Layout":null,"ShowGroupMetadataOptions":false},{"FieldName":"PM208_s","PropertyMetadataID":208,"PropertyDisplayName":"Tipo de Produto","SearchFacetID":26,"Alias":"tipo_de_produto","Name":"Tipo de produto","Priority":null,"Selection":"JustOne","Facet":"Dynamic","Sort":"AlphaAsc","ShowEmptyFacets":false,"WidgetName":"facet_type_list","WidgetProperties":null,"InitClosed":false,"Limit":100,"MaxOptions":100,"MinOptions":null,"MinRange":null,"UrlPattern":"tipo-de-produto-{value}","UrlPatternRange":"","UrlPatternStart":"","UrlPatternEnd":"","LabelPattern":"{value}","LabelPatternRange":"","LabelPatternStart":"","LabelPatternEnd":"","Prefix":null,"Offset":null,"ParameterPatternFormatted":"p-tipo-de-produto-{name}:{value}","Stats":null,"AvailableOptions":[{"Url":"tipo-de-produto-sabonete","Label":"Sabonete","Count":1,"Value":"Sabonete","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":true,"Title":"Sabonete","Color":"","HasImage":false,"ImagePath":null,"Reference":"",

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
