# Row Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/lancamentos-11622ffd/Row.tsx
- Route: /lancamentos (category)
- Source: https://www.lolacosmetics.com.br/lancamentos
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/lancamentos-11622ffd/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.row` is stored as fragments.Row
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-category-1460 grid-products" and #main class "context-category-1460 grid-products",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
$context = { Browsing: { Name: 'LAN&#199;AMENTOS', FullPathName: '/LANÇAMENTOS', Grid: { Facets: [{"FieldName":"CS1_CategoryNames","PropertyMetadataID":35,"PropertyDisplayName":"Nome da categoria","SearchFacetID":11,"Alias":"category","Name":"Categoria","Priority":1,"Selection":"Multiples","Facet":"Dynamic","Sort":"AlphaAsc","ShowEmptyFacets":false,"WidgetName":"facet_type_levels","WidgetProperties":null,"InitClosed":false,"Limit":1000,"MaxOptions":null,"MinOptions":null,"MinRange":null,"UrlPattern":"categoria-{value}","UrlPatternRange":"","UrlPatternStart":"","UrlPatternEnd":"","LabelPattern":"{value}","LabelPatternRange":"","LabelPatternStart":"","LabelPatternEnd":"","Prefix":null,"Offset":null,"ParameterPatternFormatted":"p-categoria-{name}:{value}","Stats":null,"AvailableOptions":[{"Url":"categoria--a-formula","Label":"/A FORMULA","Count":1,"Value":"/A FORMULA","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--a-formula-finalizador","Label":"/A FORMULA/FINALIZADOR","Count":1,"Value":"/A FORMULA/FINALIZADOR","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--banana-tropicana","Label":"/Banana Tropicana","Count":6,"Value":"/Banana Tropicana","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--banana-tropicana-condicionador","Label":"/Banana Tropicana/CONDICIONADOR","Count":1,"Value":"/Banana Tropicana/CONDICIONADOR","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--banana-tropicana-finalizador","Label":"/Banana Tropicana/FINALIZADOR","Count":1,"Value":"/Banana Tropicana/FINALIZADOR","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--banana-tropicana-mascara","Label":"/Banana Tropicana/MASCARA","Count":1,"Value":"/Banana Tropicana/MASCARA","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--banana-tropicana-shampoo","Label":"/Banana Tropicana/SHAMPOO","Count":2,"Value":"/Banana Tropicana/SHAMPOO","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--basicao","Label":"/Basicão","Count":2,"Value":"/Basicão","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--basicao-mascara","Label":"/Basicão/MASCARA","Count":1,"Value":"/Basicão/MASCARA","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--basicao-shampoo-e-condicionador","Label":"/Basicão/SHAMPOO E CONDICIONADOR","Count":1,"Value":"/Basicão/SHAMPOO E CONDICIONADOR","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--bossa","Label":"/BOSSA","Count":1,"Value":"/BOSSA","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--bossa-finalizador","Label":"/BOSSA/FINALIZADOR","Count":1,"Value":"/BOSSA/FINALIZADOR","Start":null,"End":null,"MetadataPath":"","HasMe

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
