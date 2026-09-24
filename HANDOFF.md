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
| `qa-lola-phone-header.mjs` | header mobile real, posições e interações em iPhone/Android emulados |

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

### Header da versão de celular

O antigo `chrome.HeaderMobile` era idêntico ao desktop. Agora o pipeline usa as capturas
completas `header-phone-extraction.json` e `header-phone-interior-extraction.json`.
Elas geram `HeaderMobile` e `HeaderMobileInterior`, com logo centralizado, ícones na
primeira linha e busca na segunda. O detector em `mobileDevice.ts` é compartilhado
com a galeria. Header reassocia os handlers quando o HTML muda após a hidratação.

O layout usa o CSS original, sem overrides de posicionamento. A variante desktop e
o header simplificado do carrinho com drawer foram preservados. Reproduzir esses
testes em contextos com user agent, tela, DPR e toque; redimensionar apenas a janela
desktop não ativa o template que a origem entrega aos celulares.

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

## Home mobile refeita — 2026-09-23

A home agora seleciona os fragmentos reais servidos ao user agent de celular,
incluindo banners, carrosséis, imagens, vídeos, avaliações e rodapé. Desktop
continua usando a captura anterior. O header mobile mantém a busca abaixo do logo;
sugestões agora ficam ancoradas ao campo.

Captura e geração: scripts/capture-lola-phone-home.mjs e
scripts/prepare-lola-phone-home.mjs. O prepare principal inclui essa etapa.
Assets locais: 1389. Hero atualizado para os quatro banners de 23/09.
Os destinos dos banners foram resolvidos para rotas locais existentes.

Build aprovado, 187 rotas preservadas. Comparação completa com Chromium emulado
(UA + screen + viewport + toque + DPR3): iPhone390 com delta geométrico0;
Android412 com delta máximo0.671875px; sem overflow ou imagens quebradas.
Interações do header, vídeos, avaliações, rodapé e navegação dos banners aprovadas.
Servidor de produção em http://localhost:4360, acessível na rede em
http://192.168.3.44:4360. Não foi teste em aparelho físico.

Evidências e detalhes: docs/research/www-lolacosmetics-com-br-b005530a/root-8a5edab2/PHONE_HOME_PLAN.md
e phone-home-qa.json; screenshots phone-home-* em docs/design-references.

## Abertura do produto sem zoom transitório — 2026-09-23

Reproduzido com UA de iPhone, screen390×844, DPR3 e toque: clone mostrava
imagem1200px, depois273px e finalmente338px; original já mostrava337.27px.
A classe de página agora é aplicada durante o parse do HTML, antes da hidratação.
A identificação de dispositivo também ocorre no head. product-loading.css dá à
primeira foto estática a geometria mobile definitiva enquanto Slick carrega;
não esconde a página nem usa overflow-x:hidden.

Build aprovado. qa-lola-product-loading.mjs atrasa cada chunk JS em2s e amostra
cada frame: dois produtos em390/412 mantiveram variação de largura inferior a1px,
sem overflow/erros, até a galeria interativa estar pronta (~7s sob atraso).
Dados em docs/research/www-lolacosmetics-com-br-b005530a/root-8a5edab2/product-loading-qa.json.
Clique real na home abriu Kit Bossa corretamente em mobile e desktop; templates
corretos e sem overflow. Emulação Chromium, não teste em aparelho físico.

## Arraste lateral do produto em celulares largos — 2026-09-23

Reproduzido no Kit Feira Cronolola a440px com toque/UA/screen mobile:
documento459px e visualViewport440px permitiam offsetLeft19px. No original,
a ausência de initial-scale fazia o navegador reduzir a escala para0.9607.
A auditoria anterior a360/390/412 não atravessava o breakpoint430 e não detectava isso.

Causa: .medias recebe width100% mais padding lateral30px acima de430.
product-loading.css agora inclui padding na largura (border-box) apenas em
dispositivos mobile. Setas relacionadas com offset negativo também foram trazidas
para dentro do carrossel entre431 e767. Não foi adicionado overflow-x:hidden
nem desabilitado pinch zoom.

Build passou. qa-lola-product-pan.mjs testa gestos CDP nos dois sentidos e
visualViewport em390/412/430/440/480: largura igual à tela, scale1,
offsetLeft0 e scrollX0. Navegação das fotos aprovada. Desktop1440 preservado.
Resultado: docs/research/www-lolacosmetics-com-br-b005530a/root-8a5edab2/product-pan-qa.json.

## Rastreamento — 2026-09-24

`src/components/Tracking.tsx`, montado no layout raiz, carrega:

- **Utmify UTM** (`cdn.utmify.com.br/scripts/utms/latest.js`) com os atributos
  `data-utmify-prevent-xcod-sck` e `data-utmify-prevent-subids` do fornecedor.
- **Utmify pixel** (`.../pixel/pixel.js`), pixel `6aaf1dfcacd70d7371f48e78`.
  O script lê `window.pixelId` na avaliação, por isso o global é definido em um
  inline `beforeInteractive` — trocar a estratégia quebra a ordem e o pixel sobe
  sem id.
- **Meta Pixel** `1734208590789662`, com `PageView` e o `noscript` de fallback.

Em `localhost` o pixel da Utmify aponta sozinho para `http://localhost:3001/tracking/v1`
e os `ERR_CONNECTION_REFUSED` no console são esperados; com domínio real ele usa
`tracking.utmify.com.br`.

O token da Conversions API do Meta **não fica no repositório**: vive em
`.env.local` como `META_CAPI_ACCESS_TOKEN` (ignorado pelo git), com o nome
documentado em `.env.example`. Sem prefixo `NEXT_PUBLIC_`, ou vaza para o browser.
Ainda não há rota server-side consumindo esse token.
