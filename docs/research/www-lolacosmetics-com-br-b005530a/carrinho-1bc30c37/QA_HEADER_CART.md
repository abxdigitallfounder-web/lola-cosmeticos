# QA — correção do cabeçalho do carrinho

Data: 2026-09-22. Clone: http://localhost:4360/carrinho.

## Resultado

O header da home/interior provocava 43px de overflow a 390px. A variante `cart`, derivada
da captura original de `/carrinho`, elimina o elemento `.basket` extra e reproduz
`.main-bar.simples`. Nenhuma regra de `overflow-x: hidden` foi acrescentada.

Uma regra global herdada do CSS combinado aplicava `padding:0.5rem` ao body no mobile.
O ajuste restrito a `body.BasketIndexRoute` restaura o `padding:0` do original.

| Viewport | Overflow final | Header clone/original (x, y, largura, altura) | Container do logo clone/original |
|---|---|---|---|
| 390 | 0px | 0, -4, 390, 100 | 148, 1.5, 89, 89 |
| 768 | 0px | 0, -4, 768, 100 | 337, 1.5, 89, 89 |
| 1440 | 0px | 0, 0, 1440, 120 | 675.5, 15.5, 89, 89 |

Screenshots finais feitos com fontes carregadas e scroll no topo. O logo retorna à home
local, onde o menu completo reaparece. Imagens e links do novo header são locais.

## Regressão

`qa-lola-mobile-sweep.mjs` passou em 13 rotas: home, kits, tratamentos, lisos,
finalização, Rapunzel, embaixadoras, achadinhos, dois produtos, ajuda, login e carrinho.
Todas com overflow 0px, imagens quebradas 0, erros de console 0 e respostas 4xx 0.
Essa varredura ocorreu após a troca estrutural; após o ajuste restrito de padding, o
carrinho foi novamente validado nas três larguras acima.

`qa-lola-mobile-nav.mjs` passou no build final:

- Gaveta: fechada em x=-390 → aberta em x=0, largura 324px.
- Acordeão: altura 0 → 102px.
- Sublink: navegação local para `/tipos-de-cabelo/liso`.
- Busca `volumao`: três sugestões visíveis.
- Toque no produto: navegação local para `/volumao-spray-250ml-ps-19629-322-p46391`, overflow 0px.

`npm run build` passou, incluindo TypeScript e geração das rotas. `git diff --check`
passou. Os geradores foram executados; só a rota `/carrinho` mudou de variante, sem
alterar os fragmentos e as rotas restantes.

## Limites desta correção

Comparação de fidelidade restrita ao cabeçalho. Permanecem as diferenças de conteúdo
e widgets já existentes: avaliações Trustvox assíncronas, conteúdo capturado do carrinho
e rodapé demonstrativo. Não houve recaptura geral das 187 rotas nem alteração de backend.
