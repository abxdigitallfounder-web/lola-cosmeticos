# Row Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/colecoes-lolaterapia-bece2b34/Row.tsx
- Route: /colecoes/lolaterapia (category)
- Source: https://www.lolacosmetics.com.br/colecoes/lolaterapia
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/colecoes-lolaterapia-bece2b34/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.row` is stored as fragments.Row
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-category-1807 grid-products" and #main class "context-category-1807 grid-products",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
$context = { Browsing: { Name: 'Lolaterapia', FullPathName: '/Coleções/Lolaterapia', Grid: { Facets: [{"FieldName":"CS1_CategoryNames","PropertyMetadataID":35,"PropertyDisplayName":"Nome da categoria","SearchFacetID":11,"Alias":"category","Name":"Categoria","Priority":1,"Selection":"Multiples","Facet":"Dynamic","Sort":"AlphaAsc","ShowEmptyFacets":false,"WidgetName":"facet_type_levels","WidgetProperties":null,"InitClosed":false,"Limit":1000,"MaxOptions":null,"MinOptions":null,"MinRange":null,"UrlPattern":"categoria-{value}","UrlPatternRange":"","UrlPatternStart":"","UrlPatternEnd":"","LabelPattern":"{value}","LabelPatternRange":"","LabelPatternStart":"","LabelPatternEnd":"","Prefix":null,"Offset":null,"ParameterPatternFormatted":"p-categoria-{name}:{value}","Stats":null,"AvailableOptions":[{"Url":"categoria--colecoes","Label":"/Coleções","Count":3,"Value":"/Coleções","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-lolaterapia","Label":"/Coleções/Lolaterapia","Count":3,"Value":"/Coleções/Lolaterapia","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--lolaterapia","Label":"/LOLATERAPIA","Count":2,"Value":"/LOLATERAPIA","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--lolaterapia-aromatizador-de-ambiente","Label":"/LOLATERAPIA/AROMATIZADOR DE AMBIENTE","Count":1,"Value":"/LOLATERAPIA/AROMATIZADOR DE AMBIENTE","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--lolaterapia-aromatizante","Label":"/LOLATERAPIA/AROMATIZANTE","Count":2,"Value":"/LOLATERAPIA/AROMATIZANTE","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--promocao","Label":"/PROMOÇÃO","Count":3,"Value":"/PROMOÇÃO","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--promocao-achadinhos","Label":"/PROMOÇÃO/Achadinhos","Count":3,"Value":"/PROMOÇÃO/Achadinhos","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null}],"SelectedOptions":[],"DatesFacets":null,"Layout":null,"ShowGroupMetadataOptions":false},{"FieldName":"PM208_s","PropertyMetadataID":208,"PropertyDisplayName":"Tipo de Produto","SearchFacetID":26,"Alias":"tipo_de_produto","Name":"Tipo de produto","Priority":null,"Selection":"JustOne","Facet":"Dynamic","Sort":"AlphaAsc","ShowEmptyFacets":false,"WidgetName":"facet_type_list","WidgetProperties":null,"InitClosed":false,"Limit":100,"MaxOptions":100,"MinOptions":null,"MinRange":null,"UrlPattern":"tipo-de-produto-{value}","UrlPatternRange":"","UrlPatternStart":"","UrlPatternEnd":"","LabelPattern":"{value}","LabelPatternRange":"","LabelPatternStart":"","LabelPatternEnd":"","Prefix":null,"Offset":null,"ParameterPatternFormatted":"p-tipo-de-produto-{name}:{value}","Stats":null,"AvailableOptions":[{"Url":"tipo-de-produto-agua-enegizante","Label":"Água enegizante","Count":2,"Value":"Água enegizante","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":true,"Title":"Água enegizante","Color":"","HasImage":false,"ImagePath":null,"Reference":"","Order":15,"GroupName":""},{"Url":"tipo-de-produto-sabonete","Label":"Sabonete","Count":1,"Value":"Sabonete","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":true,"Title":"Sabonete","Color":"","HasImage":false,"Imag

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
