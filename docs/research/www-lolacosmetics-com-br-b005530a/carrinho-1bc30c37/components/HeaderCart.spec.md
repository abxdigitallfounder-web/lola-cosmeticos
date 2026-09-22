# HeaderCart — cabeçalho específico do carrinho

## Origem e implementação

- Origem: https://www.lolacosmetics.com.br/carrinho
- Captura: `header-extraction.json`; HTML também preservado em `loaded-extraction.json.headerHtml`.
- Saída: `shared/chrome.json.HeaderCart`, produzida pelo sanitizador comum em `scripts/prepare-lola.mjs`.
- Componente: `shared/Header.tsx`, variante `cart` selecionada pelo gerador somente em `/carrinho`.
- Referências: `source-cart-clean-1440.png`, `source-cart-clean-768.png`, `source-cart-clean-390.png` no diretório de screenshots desta rota.

## Estrutura e conteúdo

`header#header > .main-bar.simples > .wrapper > .row.align-items-center > #logo`.
Logo com link para `/` e texto original “Lola Cosmetics”. A captura específica não contém
`.basket`, `.hamburguer`, campo de busca ou navegação de categorias dentro de `#header`.
Preservar o SVG/imagem de logo e os seletores originais; não remover elementos de outra
variante via CSS nem aplicar `overflow-x: hidden` ao documento.

## Medidas observadas no original

| Viewport | Cabeçalho (x, y, largura, altura) | Logo (x, y, largura, altura) | Overflow horizontal |
|---|---|---|---|
| 1440 | 0, 0, 1440, 120 | 675.5, 15.5, 89, 89 | 0 |
| 768 | 0, -4, 768, 100 | 337, 1.5, 89, 89 | 0 |
| 390 | 0, -4, 390, 100 | 148, 1.5, 89, 89 | 0 |

As declarações do tema já estão em `source.css`. A correção é de estrutura, não de
largura artificial ou recorte. O logo usa os assets já mapeados localmente. O CSS
combinado contém uma regra genérica de outra captura (`body { padding:0.5rem }`);
`body.BasketIndexRoute { padding:0 }` restaura o valor medido no original só nesta rota.

## Estados e interação

Clique no logo retorna à home local. O cabeçalho simplificado não possui gaveta ou
busca. Os listeners do componente compartilhado toleram esses controles ausentes e
são reinstalados caso a variante mude. Home, categorias, produtos e login preservam
suas variantes existentes.
