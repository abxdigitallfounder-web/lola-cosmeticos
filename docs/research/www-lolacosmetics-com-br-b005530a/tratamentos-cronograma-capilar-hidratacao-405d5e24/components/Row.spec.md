# Row Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/tratamentos-cronograma-capilar-hidratacao-405d5e24/Row.tsx
- Route: /tratamentos/cronograma-capilar/hidratacao (category)
- Source: https://www.lolacosmetics.com.br/tratamentos/cronograma-capilar/hidratacao
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/tratamentos-cronograma-capilar-hidratacao-405d5e24/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.row` is stored as fragments.Row
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-category-1531 grid-products" and #main class "context-category-1531 grid-products",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
$context = { Browsing: { Name: 'Hidrata&#231;&#227;o', FullPathName: '/TRATAMENTOS/Cronograma Capilar/Hidratação', Grid: { Facets: [{"FieldName":"CS1_CategoryNames","PropertyMetadataID":35,"PropertyDisplayName":"Nome da categoria","SearchFacetID":11,"Alias":"category","Name":"Categoria","Priority":1,"Selection":"Multiples","Facet":"Dynamic","Sort":"AlphaAsc","ShowEmptyFacets":false,"WidgetName":"facet_type_levels","WidgetProperties":null,"InitClosed":false,"Limit":1000,"MaxOptions":null,"MinOptions":null,"MinRange":null,"UrlPattern":"categoria-{value}","UrlPatternRange":"","UrlPatternStart":"","UrlPatternEnd":"","LabelPattern":"{value}","LabelPatternRange":"","LabelPatternStart":"","LabelPatternEnd":"","Prefix":null,"Offset":null,"ParameterPatternFormatted":"p-categoria-{name}:{value}","Stats":null,"AvailableOptions":[{"Url":"categoria--colecoes","Label":"/Coleções","Count":22,"Value":"/Coleções","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-be-m-dita-ghee","Label":"/Coleções/Be(m)dita Ghee","Count":6,"Value":"/Coleções/Be(m)dita Ghee","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-brancos-e-grisalhos","Label":"/Coleções/Brancos e Grisalhos","Count":3,"Value":"/Coleções/Brancos e Grisalhos","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-dream-cream","Label":"/Coleções/Dream Cream","Count":5,"Value":"/Coleções/Dream Cream","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-meu-cacho-minha-vida","Label":"/Coleções/Meu Cacho minha Vida","Count":4,"Value":"/Coleções/Meu Cacho minha Vida","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--colecoes-morte-subita","Label":"/Coleções/Morte Súbita","Count":4,"Value":"/Coleções/Morte Súbita","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--dream-cream","Label":"/DREAM CREAM","Count":1,"Value":"/DREAM CREAM","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--dream-cream-mascara","Label":"/DREAM CREAM/MASCARA","Count":1,"Value":"/DREAM CREAM/MASCARA","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--kits","Label":"/KITS","Count":6,"Value":"/KITS","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--lancamentos","Label":"/LANÇAMENTOS","Count":1,"Value":"/LANÇAMENTOS","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--lancamentos-embaixadoras","Label":"/LANÇAMENTOS/Embaixadoras","Count":1,"Value":"/LANÇAMENTOS/Embaixadoras","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":"","Color":"","HasImage":false,"ImagePath":"","Reference":"","Order":0,"GroupName":null},{"Url":"categoria--promocao","Label":"/PROMOÇÃO","Count":5,"Value":"/PROMOÇÃO","Start":null,"End":null,"MetadataPath":"","HasMetadataOption":false,"Title":

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
