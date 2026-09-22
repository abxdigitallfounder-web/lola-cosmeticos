# Estado do clone — handoff

Clone de `https://www.lolacosmetics.com.br/`. Tudo commitado em `main`, árvore limpa.

## Como rodar

```bash
npm run build && npx next start -p 4360
```

## Pipeline

Nenhuma página é escrita à mão. O fluxo é sempre o mesmo:

1. `scripts/sync-capture-targets.mjs [todo]` — injeta a lista de alvos do `OUTPUT_PLAN.json`
   dentro de `scripts/capture-lola-pages.mjs` (o sandbox do Playwright MCP não lê arquivos).
2. `node scripts/capture-receiver.mjs . 4599 &` — recebe as capturas por POST.
3. Rodar `scripts/capture-lola-pages.mjs` pelo Playwright MCP (`browser_run_code_unsafe`).
4. `node scripts/download-assets-...-root-8a5edab2.mjs` — baixa assets de todas as capturas
   para o namespace compartilhado `public/sites/<site>/root-8a5edab2/`.
5. `node scripts/prepare-lola.mjs` — home, `source.css` (montado de **todas** as capturas) e
   `shared/chrome.json`.
6. `node scripts/prepare-lola-pages.mjs` — todas as rotas internas.

Sanitização compartilhada em `scripts/lib/lola-sanitize.mjs`.

## O que está pronto

- **187 rotas**: home, 7 categorias de topo, subcategorias, 79 produtos, coleções,
  páginas de conteúdo, login, carrinho, e um catch-all `[...slug]`.
- **1379 assets** locais. Zero links apontando para o site original (só hosts externos
  reais: Instagram, blog, rastreio).
- Carrosséis, menu mobile, busca com sugestões e carrinho demo funcionando.

## QA (scripts prontos, todos via Playwright MCP)

| Script | O que checa |
|---|---|
| `qa-lola-routes.mjs` | erros de console, 4xx, imagens quebradas por rota |
| `qa-lola-links.mjs` | nenhum link escapa; todo destino local responde 200 |
| `qa-lola-compare.mjs` | clone vs original lado a lado numa rota |
| `qa-lola-mobile-nav.mjs` | gaveta, acordeão, busca e toque em produto a 390px |
| `qa-lola-mobile-sweep.mjs` | overflow horizontal e saúde por rota a 390px |

Todos apontam para `http://127.0.0.1:4360` — ajuste a porta no topo se mudar.

## Corrigido: overflow no carrinho (mobile)

A rota `/carrinho` usa agora `Header variant="cart"`, com o HTML simplificado do original
(`.main-bar.simples`, logo centralizado, sem menu/busca/ícone extra de sacola).
O overflow medido a 390px caiu de **43px para 0px**, sem acrescentar `overflow-x: hidden`.

A correção está no pipeline, não apenas nos arquivos gerados:

- `capture-lola-pages.mjs` passa a preservar `headerHtml`.
- A captura existente do carrinho recebeu o header, também documentado em
  `carrinho-1bc30c37/header-extraction.json`.
- `prepare-lola.mjs` sanitiza essa captura em `shared/chrome.json.HeaderCart` e acusa erro
  se ela estiver ausente, em vez de reutilizar silenciosamente o header da home.
- `prepare-lola-pages.mjs` seleciona essa variante só em `/carrinho`.
- `header-extra.css` restaura `body.BasketIndexRoute { padding:0 }`, medido no original,
  para neutralizar os 8px de uma regra genérica vinda de outra captura no CSS combinado.

As variantes da home e das demais páginas foram preservadas. A contagem relevante no
DOM é `#header .basket`: 1 na variante interior antiga, 0 no header original do carrinho.
Contar a string `basket` no HTML também inclui classes de outros elementos.

O QA mobile de 13 rotas representativas passou sem overflow, imagens quebradas, erros
no console ou respostas 4xx. A especificação do ajuste está em
`carrinho-1bc30c37/components/HeaderCart.spec.md`.

## Diferenças conhecidas, e que são fiéis

- 6 fotos de ingredientes dão 404 em todos os hosts, **inclusive no site real** — as mesmas
  lacunas aparecem lá.
- Página de produto fica ~330px mais curta que a original; a maior parte vem do widget de
  avaliações da Trustvox, cujas chamadas de API não respondem no clone.
- 4 seções da home (`BenefitsBanner`, `ReasonsToLove`, `Benefits`, `SocialLinks`) estão
  `display:none` — o original também as esconde no desktop. O `BenefitsBanner` aparece no
  mobile, nos dois.
- O header mobile parece apertado, mas bate com o original no mesmo viewport: altura 125px
  e hambúrguer, campo e botão de busca dentro de 3px. Confere também sob user agent mobile.
