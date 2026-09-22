# Row Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/tratamentos-uso-diario-55480637/Row.tsx
- Route: /tratamentos/uso-diario (category)
- Source: https://www.lolacosmetics.com.br/tratamentos/uso-diario
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/tratamentos-uso-diario-55480637/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.row` is stored as fragments.Row
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-category-1650 grid-products" and #main class "context-category-1650 grid-products",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
$context = { Browsing: { Name: 'Uso di&#225;rio', FullPathName: '/TRATAMENTOS/Uso diário', Grid: { Facets: [{"FieldName":"CS1_CategoryNames","PropertyMetadataID":35,"PropertyDisplayName":"Nome da categoria","SearchFacetID":11,"Alias":"category","Name":"Categoria","Priority":1,"Selection":"Multiples","Facet":"Dynamic","Sort":"AlphaAsc","ShowEmptyFacets":false,"WidgetName":"facet_type_levels","WidgetProperties":null,"InitClosed":false,"Limit":1000,"MaxOptions":null,"MinOptions":null,"MinRange":null,"UrlPattern":"categoria-{value}","UrlPatternRange":"","UrlPatternStart":"","UrlPatternEnd":"","LabelPattern":"{value}","LabelPatternRange":"","LabelPatternStart":"","LabelPatternEnd":"","Prefix":null,"Offset":null,"ParameterPatternFormatted":"p-categoria-{name}:{value}","Stats":null,"AvailableOptions":[{"Url":"categoria--basicao","Label":"/Basicão","Count":1,"Value":"/Basicão","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--basicao-shampoo-e-condicionador","Label":"/Basicão/SHAMPOO E CONDICIONADOR","Count":1,"Value":"/Basicão/SHAMPOO E CONDICIONADOR","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--cereal-killer","Label":"/Cereal Killer","Count":1,"Value":"/Cereal Killer","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--cereal-killer-creme-texturizador","Label":"/Cereal Killer/CREME TEXTURIZADOR","Count":1,"Value":"/Cereal Killer/CREME TEXTURIZADOR","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes","Label":"/Coleções","Count":40,"Value":"/Coleções","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-a-formula","Label":"/Coleções/A Fórmula","Count":3,"Value":"/Coleções/A Fórmula","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-basicao","Label":"/Coleções/Basicão","Count":3,"Value":"/Coleções/Basicão","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-be-m-dita-ghee","Label":"/Coleções/Be(m)dita Ghee","Count":1,"Value":"/Coleções/Be(m)dita Ghee","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-be-m-dita-praia","Label":"/Coleções/Be(m)dita Praia","Count":1,"Value":"/Coleções/Be(m)dita Praia","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-bossa","Label":"/Coleções/Bossa","Count":6,"Value":"/Coleções/Bossa","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-brancos-e-grisalhos","Label":"/Coleções/Brancos e Grisalhos","Count":3,"Value":"/Coleções/Brancos e Grisalhos","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-camomila","Label":"/Coleções/Camomila","Count":1,"Value":"/Coleções/Camomila","Start":null,"End":null,"

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
