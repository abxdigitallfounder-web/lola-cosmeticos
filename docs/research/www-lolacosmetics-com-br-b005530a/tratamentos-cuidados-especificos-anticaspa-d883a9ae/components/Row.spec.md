# Row Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/tratamentos-cuidados-especificos-anticaspa-d883a9ae/Row.tsx
- Route: /tratamentos/cuidados-especificos/anticaspa (category)
- Source: https://www.lolacosmetics.com.br/tratamentos/cuidados-especificos/anticaspa
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/tratamentos-cuidados-especificos-anticaspa-d883a9ae/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.row` is stored as fragments.Row
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-category-1772 grid-products" and #main class "context-category-1772 grid-products",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
$context = { Browsing: { Name: 'Anticaspa', FullPathName: '/TRATAMENTOS/Cuidados específicos/Anticaspa', Grid: { Facets: [{"FieldName":"CS1_CategoryNames","PropertyMetadataID":35,"PropertyDisplayName":"Nome da categoria","SearchFacetID":11,"Alias":"category","Name":"Categoria","Priority":1,"Selection":"Multiples","Facet":"Dynamic","Sort":"AlphaAsc","ShowEmptyFacets":false,"WidgetName":"facet_type_levels","WidgetProperties":null,"InitClosed":false,"Limit":1000,"MaxOptions":null,"MinOptions":null,"MinRange":null,"UrlPattern":"categoria-{value}","UrlPatternRange":"","UrlPatternStart":"","UrlPatternEnd":"","LabelPattern":"{value}","LabelPatternRange":"","LabelPatternStart":"","LabelPatternEnd":"","Prefix":null,"Offset":null,"ParameterPatternFormatted":"p-categoria-{name}:{value}","Stats":null,"AvailableOptions":[{"Url":"categoria--colecoes","Label":"/Coleções","Count":4,"Value":"/Coleções","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-cuca-fresca","Label":"/Coleções/Cuca Fresca","Count":4,"Value":"/Coleções/Cuca Fresca","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--cuca-fresca","Label":"/CUCA FRESCA","Count":1,"Value":"/CUCA FRESCA","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--cuca-fresca-tonico","Label":"/CUCA FRESCA/TÔNICO","Count":1,"Value":"/CUCA FRESCA/TÔNICO","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--kits","Label":"/KITS","Count":1,"Value":"/KITS","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--lancamentos","Label":"/LANÇAMENTOS","Count":4,"Value":"/LANÇAMENTOS","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--lancamentos-cuca-fresca","Label":"/LANÇAMENTOS/Cuca Fresca","Count":4,"Value":"/LANÇAMENTOS/Cuca Fresca","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--tratamentos","Label":"/TRATAMENTOS","Count":4,"Value":"/TRATAMENTOS","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--tratamentos-cuidados-especificos","Label":"/TRATAMENTOS/Cuidados específicos","Count":4,"Value":"/TRATAMENTOS/Cuidados específicos","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--tratamentos-cuidados-especificos-anticaspa","Label":"/TRATAMENTOS/Cuidados específicos/Anticaspa","Count":4,"Value":"/TRATAMENTOS/Cuidados específicos/Anticaspa","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--tratamentos-cuidados-especificos-oleosidade","Label":"/TRATAMENTOS/Cuidados específicos/Oleosidade","Count":1,"Value":"/TRATAMENTOS/Cuidados específicos/Oleosidade","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null}],"SelectedOptions":[],"DatesFacets":null,"Layout":null,"ShowGroupMetadataOptions":false},{"

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
