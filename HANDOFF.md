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
| `qa-lola-mobile-gallery.mjs` | galeria verdadeira de celular: UA mobile, toque, DPR, swipe e indicadores |

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
Resultado anterior: **0px de diferença nas nove combinações de navegador desktop**, registrado em
`docs/research/<site>/root-8a5edab2/product-alignment-qa.json`. Build aprovado;
menu mobile, acordeão, sublink de categoria, busca e toque no produto passaram.
Esse teste apenas estreitava a janela: não valida a versão entregue a celulares.
Não corrigir essas diferenças com offsets ou `overflow-x: hidden`: o tema original
depende de `content-box` e de estilos específicos restritos às páginas de origem.

### Correção da galeria entregue a celulares

O original troca o HTML da galeria quando recebe um user agent mobile:
`.wd-product-media-selector2` com uma foto por slide e indicadores, em vez de
`figure.wd-product-medias` com miniaturas. A janela desktop estreitada mostrava
justamente a versão incorreta relatada pelo usuário.

`mobileProductGallery.ts` agora seleciona essa variante antes de inicializar o Slick,
reutilizando as fotos locais e as opções capturadas do original. Aplica-se aos 79
produtos. Das 335 fotos verificadas, 43 têm atributos de zoom inválidos na captura;
esses casos usam a foto local de 450px. Nenhum caminho de imagem escolhido está ausente.

QA final em contextos Chromium com perfis iPhone (390px) e Android (412px),
`isMobile`, toque e DPR3: Volumão e Rapunzel passaram em toque nos indicadores,
swipe e retorno à primeira foto. Sem miniaturas sobrepostas, imagens quebradas ou
overflow. Posição x/y igual à origem; arredondamento do Slick/jQuery deixa a foto
1px maior. Banana Tropicana e Purple também carregam as fotos de fallback.
Desktop permaneceu com a galeria anterior (foto 566.09375px a 1440px).

Evidências: `mobile-gallery-extraction.json`, `mobile-gallery-qa.json` e screenshots
`mobile-gallery-*.png`. Isso é emulação de dispositivo, não teste em hardware iPhone
nem execução do motor WebKit/Safari. O popup de marketing da origem é bloqueado apenas
no teste de gesto para que não intercepte o toque durante a validação.

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
- A comparação antiga do header a 390px se referia ao desktop estreitado. A captura
  com contexto mobile completo mostra outro header na origem (busca em uma segunda
  linha). Essa diferença é separada da galeria e não foi alterada neste ajuste.
