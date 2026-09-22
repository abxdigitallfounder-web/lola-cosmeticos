# Row Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/colecoes-umectacao-4604aba3/Row.tsx
- Route: /colecoes/umectacao (category)
- Source: https://www.lolacosmetics.com.br/colecoes/umectacao
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/colecoes-umectacao-4604aba3/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.row` is stored as fragments.Row
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-category-1686 grid-products" and #main class "context-category-1686 grid-products",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
$context = { Browsing: { Name: 'Umecta&#231;&#227;o', FullPathName: '/Coleções/Umectação', Grid: { Facets: [{"FieldName":"CS1_CategoryNames","PropertyMetadataID":35,"PropertyDisplayName":"Nome da categoria","SearchFacetID":11,"Alias":"category","Name":"Categoria","Priority":1,"Selection":"Multiples","Facet":"Dynamic","Sort":"AlphaAsc","ShowEmptyFacets":false,"WidgetName":"facet_type_levels","WidgetProperties":null,"InitClosed":false,"Limit":1000,"MaxOptions":null,"MinOptions":null,"MinRange":null,"UrlPattern":"categoria-{value}","UrlPatternRange":"","UrlPatternStart":"","UrlPatternEnd":"","LabelPattern":"{value}","LabelPatternRange":"","LabelPatternStart":"","LabelPatternEnd":"","Prefix":null,"Offset":null,"ParameterPatternFormatted":"p-categoria-{name}:{value}","Stats":null,"AvailableOptions":[{"Url":"categoria--colecoes","Label":"/Coleções","Count":1,"Value":"/Coleções","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-umectacao","Label":"/Coleções/Umectação","Count":1,"Value":"/Coleções/Umectação","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--umectacao","Label":"/UMECTAÇÃO","Count":1,"Value":"/UMECTAÇÃO","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--umectacao-mascara","Label":"/UMECTAÇÃO/MASCARA","Count":1,"Value":"/UMECTAÇÃO/MASCARA","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null}],"SelectedOptions":[],"DatesFacets":null,"Layout":null,"ShowGroupMetadataOptions":false},{"FieldName":"PM200_ss","PropertyMetadataID":200,"PropertyDisplayName":"Curvatura","SearchFacetID":20,"Alias":"curvatura","Name":"Curvatura","Priority":2,"Selection":"Multiples","Facet":"Dynamic","Sort":"AlphaAsc","ShowEmptyFacets":false,"WidgetName":"facet_type_list","WidgetProperties":null,"InitClosed":false,"Limit":50,"MaxOptions":50,"MinOptions":null,"MinRange":null,"UrlPattern":"curvatura-{value}","UrlPatternRange":"","UrlPatternStart":"","UrlPatternEnd":"","LabelPattern":"{value}","LabelPatternRange":"","LabelPatternStart":"","LabelPatternEnd":"","Prefix":null,"Offset":null,"ParameterPatternFormatted":"p-curvatura-{name}:{value}","Stats":null,"AvailableOptions":[{"Url":"curvatura-cacheado","Label":"Cacheado","Count":1,"Value":"Cacheado","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":true,"Title":"Cacheado","Color":null,"HasImage":false,"ImagePath":null,"Reference":null,"Order":2,"GroupName":null},{"Url":"curvatura-crespo","Label":"Crespo","Count":1,"Value":"Crespo","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":true,"Title":"Crespo","Color":null,"HasImage":false,"ImagePath":null,"Reference":null,"Order":3,"GroupName":null},{"Url":"curvatura-liso","Label":"Liso","Count":1,"Value":"Liso","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":true,"Title":"Liso","Color":null,"HasImage":false,"ImagePath":null,"Reference":null,"Order":0,"GroupName":null},{"Url":"curvatura-ondulado","Label":"Ondulado","Count":1,"Value":"Ondulado","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":true,"Title":"Ondulado","Color":null,"HasImage":false,"ImagePath":null,"Reference":null,"Order":1,"GroupName":null},{"Url":"curvatura-transicao","Label":"Transição","Count":1,"Value":"Transição","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":true,"Title":"Transição","Color":null,"HasImage":false,"ImagePath":null,"Reference":null,"Order":4,"GroupName":null}],"SelectedOptions":[],"DatesFacets":null,"Layout":null,"ShowGroupMetadataOptions":false}], ProductCount: 1 }, Provider: 'Elasticsearch' }, Bas

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
