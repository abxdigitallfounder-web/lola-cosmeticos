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
| `qa-lola-product-alignment.mjs` | posição e tamanho das imagens contra a origem em 1440, 768 e 390px |

Todos apontam para `http://127.0.0.1:4360` — ajuste a porta no topo se mudar.

## Header do carrinho (mobile)

A rota `/carrinho` usa `Header variant="cart"`, gerado em `prepare-lola.mjs`. Overflow
horizontal a 390px: **0px**, sem `overflow-x: hidden`.

O pipeline monta essa variante em dois passos:

1. A barra simplificada vem da captura da própria origem (`main-bar simples`, logo
   centralizado). O `#header` que o servidor entrega em `/carrinho` tem só **318 chars** —
   verificado com UA de desktop e de iPhone, e também no DOM renderizado ao vivo.
2. Sobre essa barra é injetado o bloco `.hamburguer` (com o drawer completo) extraído do
   header cheio.

**O passo 2 é um desvio deliberado da origem.** A loja real deixa o carrinho sem nenhuma
navegação — beco sem saída, ruim para tráfego pago. Está comentado como tal no script; se
quiser fidelidade estrita, remova a injeção e `HeaderCart` volta aos 318 chars.

Verificado a 390px: barra simplificada, altura 100px, 99 links no drawer, gaveta abre
(left 0, largura 324), acordeão expande 0 → 102px e o sublink abre `/tipos-de-cabelo/liso`.

## Posicionamento das imagens dos produtos

O CSS de páginas especiais contaminava a loja inteira: a coleção Be(m)dita Ghee
forçava os containers para 100% de largura e a página de cashback aplicava
`box-sizing: border-box` universal. O Preflight do Tailwind também alterava as
larguras, alturas de linha e alinhamento das imagens do tema original.

- `prepare-lola.mjs` mantém o tema comum global, mas envolve folhas adicionais e
  estilos inline específicos em `@scope (html[data-lola-path="..."])`.
- `BodyClass` publica o pathname junto à classe capturada da página.
- `globals.css` importa tema/utilitários do Tailwind sem seu Preflight.
- `SourceSection` evita os recálculos extras da galeria e estabiliza sua largura
  medida durante os callbacks iniciais assíncronos do jQuery 4. A origem usa jQuery
  1.7, que executava esses callbacks sincronamente. Sem isso, a largura intrínseca
  do carrossel de miniaturas mobile crescia em cada `setPosition`.

O teste `qa-lola-product-alignment.mjs` compara coordenadas e dimensões reais da home,
KITS e Volumão Shampoo, incluindo miniaturas, em 1440, 768 e 390px. Os screenshots
`alignment-*-after.png` ficam em `docs/design-references/<site>/root-8a5edab2/`.
Resultado: **0px de diferença nas nove combinações**, registrado em
`docs/research/<site>/root-8a5edab2/product-alignment-qa.json`. Build aprovado;
menu mobile, acordeão, sublink de categoria, busca e toque no produto passaram.
Não corrigir essas diferenças com offsets ou `overflow-x: hidden`: o tema original
depende de `content-box` e de estilos específicos restritos às páginas de origem.

## Diferenças conhecidas, e que são fiéis

- Auditoria adicional: `/colecoes/be-m-dita-ghee` contém uma landing CronoLola com
  31 referências de imagens locais ausentes (`/Custom/.../CronoLola LP/assets/`).
  Não é parte do ajuste de posicionamento dos produtos; precisa de recaptura de
  assets. Hoje a origem redireciona essa URL para `/kit-cronolola-lp`.

- 6 fotos de ingredientes dão 404 em todos os hosts, **inclusive no site real** — as mesmas
  lacunas aparecem lá.
- Página de produto fica ~330px mais curta que a original; a maior parte vem do widget de
  avaliações da Trustvox, cujas chamadas de API não respondem no clone.
- 4 seções da home (`BenefitsBanner`, `ReasonsToLove`, `Benefits`, `SocialLinks`) estão
  `display:none` — o original também as esconde no desktop. O `BenefitsBanner` aparece no
  mobile, nos dois.
- O header mobile parece apertado, mas bate com o original no mesmo viewport: altura 125px
  e hambúrguer, campo e botão de busca dentro de 3px. Confere também sob user agent mobile.
