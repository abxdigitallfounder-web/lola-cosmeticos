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

## Aberto: overflow no carrinho (mobile)

`/carrinho` a 390px tem **43px de overflow horizontal**. Única rota com o problema.

Causa já diagnosticada: o header compartilhado vem da captura da home, que traz 3 elementos
`.basket`. O original serve só 1 na página do carrinho. O `.basket` extra fica em `x=395`,
fora da viewport de 390px, e empurra a página.

```
clone  /carrinho: .basket em x=395 w=25 right=420 → overflow 43px
source /carrinho: nenhum .basket → overflow 0
```

Contagem de `class="basket"` no HTML do original: home 3, /login 3, /tratamentos 3,
**/carrinho 1**.

Correção fiel: dar à rota do carrinho um header próprio (uma terceira variante em
`chrome.json`, como já é feito com `HeaderInterior`), derivada da captura de `/carrinho`.
O componente `shared/Header.tsx` já aceita `variant`; basta acrescentar o caso e trocar em
`scripts/prepare-lola-pages.mjs`, que hoje passa `variant="interior"` para todas.

Evitar `overflow-x: hidden` no body: esconde o sintoma e não reproduz o original.

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
