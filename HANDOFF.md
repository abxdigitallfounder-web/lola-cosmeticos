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
| `qa-lola-cart.mjs` | adicionar à sacola e tela de carrinho em iPhone/Android emulados e desktop |
| `qa-lola-checkout.mjs` | passo Entrega do /checkout/easy em iPhone emulado e desktop |

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

## Sacola e tela de carrinho — 2026-09-24

Antes só o card de listagem adicionava à sacola: o handler casava apenas
`.wd-product-line .btn-buy`, e a página de produto ficava de fora. E `/carrinho`
servia o estado "vazio" capturado, sem nunca mostrar o que havia na sacola.

`cartStore.ts` passou a ser a fonte única. O drawer (`ShopInteractions`) e a tela
(`CartScreen`) são duas vistas do mesmo carrinho, via `useSyncExternalStore`, e o
`localStorage` continua sendo `lola-demo-cart`. A quantidade mudada num lado
aparece no outro sem recarregar, e outras abas entram pelo evento `storage`.

Adicionar à sacola:

- **Card de listagem** — o card traz **dois** `.btn-buy`: `ADICIONAR À SACOLA`,
  que fica 0×0, e `Comprar`, o visível. Quem clica define o alvo, então ambos os
  tamanhos funcionam; em teste, filtre por `:visible` ou você pega o oculto.
- **Página de produto** — `.product-buy-button-custom`, com o id vindo do input
  escondido `Products[0].ProductID` que o formulário da origem postaria. Nome sai
  do `h1`, preço de `.sale-price`, imagem de `.medias img`, quantidade de
  `input.js-qty`. `.btn-oneclickbuy` é deixado de fora: compartilha `.btn-buy`
  mas é compra direta.

A tela é montada **dentro** de `.wd-checkout-basket`, por portal, para o
espaçamento e os seletores do tema seguirem valendo; o bloco `.empty` capturado
continua ali e volta a aparecer quando a sacola esvazia. O widget centraliza
texto, por isso `.lola-basket` declara o próprio `text-align`. A partir de 769px
a linha vira uma só (imagem, nome, quantidade, total, remover); abaixo disso
empilha.

Verificado com `qa-lola-cart.mjs` em iPhone 390, Android 412 e desktop 1440:
overflow horizontal 0 nos três, imagens carregam, `R$ 99,90 + 2 × R$ 54,90 =
R$ 209,70`, e o contador do header acompanha.

`Finalizar Compra` mostra o aviso de demonstração — não há checkout real nem
pedido enviado.

## Checkout /checkout/easy — passo Entrega — 2026-09-24

Clone do passo **Entrega** de `https://www.lolacosmetics.com.br/checkout/easy`
(skill clone-website). O checkout da origem é uma SPA em JS atrás de um gate de
identificação (email/CPF), então a referência mestre é a screenshot do usuário
do passo Entrega como Visitante; os tokens vieram da extração ao vivo (título em
`obviously`, rosa `#ff2b5a`) e do restante do clone.

Chaves: site-key `www-lolacosmetics-com-br-b005530a`, page-key
`checkout-easy-819da193` (sha256("/checkout/easy")[:8]). Componentes em
`src/components/sites/.../checkout-easy-819da193/`:

- `CheckoutHeader.tsx` — chrome mínima própria do checkout (logo, 3 passos com
  Entrega ativo, "Olá, Visitante / Sair", "Site seguro"). Não usa o header/footer
  da loja.
- `CheckoutEntrega.tsx` (client) — lê o carrinho de `cartStore`. Coluna esquerda:
  H1 Entrega, botão rosa "Cadastrar endereço" (abre um formulário de demonstração,
  só client), caixa creme, e o card produto + "Forma de entrega" com radios
  esqueleto. Coluna direita: Resumo do pedido, "Ver pedido completo", linhas
  (N produto(s), Frete, Cupons, CRM BONUS), total e "Continuar (Pagamento)".
- `checkout.css` — tokens e layout; grid 2 colunas ≥992px, 1 coluna ≤991px.

Fluxo: o "Finalizar Compra" da tela de carrinho (`CartScreen`) agora leva a
`/checkout/easy` — antes mostrava o aviso de demonstração.

**É um checkout de demonstração.** Nenhum dado de endereço ou pagamento é
enviado a lugar nenhum; "Cadastrar endereço" e "Continuar" são só client-side.
Frete fixo de `R$ 24,20` (igual à referência). Com a sacola do Kit Feira
Cronolola: `R$ 99,90 + R$ 24,20 = R$ 124,10`, batendo com a screenshot.

Verificado com `qa-lola-checkout.mjs` em iPhone 390 emulado real (`data-lola-device`
= phone) e desktop 1440: overflow horizontal 0, logo e miniatura carregam, o link
do carrinho aponta para `/checkout/easy`, o formulário de endereço abre/salva e o
"Continuar" mostra o aviso de demonstração.

**Atualização — fluxo completo em etapas.** O checkout agora é um fluxo dirigido
por hash em `CheckoutEntrega`:

- **Entrega, sem endereço** (`#delivery`): botão "Cadastrar endereço", caixa creme,
  card com "Forma de entrega" esqueleto, frete placeholder R$ 24,20.
- **Entrega, com endereço**: ao salvar o formulário aparece o bloco de endereço
  selecionado (borda verde à esquerda, nome, pill "Endereço selecionado", texto do
  endereço e botão "Alterar endereço do pedido"), e o card mostra as opções reais
  de entrega ("JT - Normal / R$ 11,08 / 2 dias úteis", a primeira selecionada). O
  frete passa a R$ 11,08 → total R$ 110,98. CRM BONUS vira "Ganhe Cashback".
- **Pagamento** (`#payment`): topo "Ver detalhes do pedido" + contagem, "Escolha o
  meio de pagamento / ‹ Voltar", três métodos (Cartão de crédito, PIX, PIX
  Parcelado com a florzinha da Lola em SVG inline), resumo e "Finalizar compra"
  (mostra o aviso de demonstração). O header marca Entrega como concluída e
  Pagamento ativo. "Continuar (Pagamento)" da etapa de entrega leva aqui.

O cabeçalho de pagamento usa título em bloco (largura total) com "‹ Voltar"
posicionado no canto — flexbox encolhia o título e quebrava palavra a palavra.
Verificado em iPhone emulado real e desktop: overflow 0, R$ 110,98, ícones e
etapas corretos.

## Pagamento PIX real — Jungle Pagamentos — 2026-09-24

Integração da API do seller (PIX) da Jungle Pagamentos no checkout. Contrato:
seções 1–7 do guia. Valores sempre em reais; status em MAIÚSCULAS.

**Segredos** (só em `.env.local`, gitignored; nomes em `.env.example`):
`JUNGLE_API_BASE`, `JUNGLE_API_KEY`, `JUNGLE_WEBHOOK_SECRET`, `JUNGLE_CALLBACK_URL`.
Nunca commitados. A chave é a do dashboard **Principal** (a usada pelo checkout).

**Server-only** `src/lib/jungle.ts` (import `server-only` — falha se importado no
client): `createCharge`, `findTransaction` (varre `GET /gateway/transactions` por
não haver banco), `verifyWebhook` (HMAC-SHA256 do corpo bruto, `timingSafeEqual`).

**Rotas** (App Router, `runtime=nodejs`, `dynamic=force-dynamic`):
- `POST /api/checkout/pix` — cria a cobrança a partir da sacola + cliente, gera o
  QR (pacote `qrcode`, data URI) e devolve `{transactionId, pixCode, qrImage,
  expiresAt, amount}`. Repassa IP/User-Agent do comprador. 5xx do gateway viram
  mensagem amigável.
- `GET /api/checkout/pix/status?transactionId=` — consulta o status (só `PAID` = pago).
- `POST /api/webhooks/jungle` — valida `X-Signature` (401 se inválida, 200 se ok).
  Sem banco aqui: valida e confirma; o TODO marca onde liberar o pedido de forma
  idempotente por `transactionId` quando houver persistência de pedidos.

**Frontend**: a etapa de pagamento (`CheckoutEntrega`) tem seleção de método; PIX
(pré-selecionado) e PIX Parcelado geram a cobrança e mostram `PixPanel` (QR,
copia-e-cola com botão Copiar, contador de expiração e polling de status até
aprovar). Cartão segue como demonstração. O formulário de endereço ganhou **e-mail
e CPF** (exigidos pela API).

**Inputs controlados (importante):** os scripts de rastreamento (Utmify/Meta que
adicionamos) mexem em campos do DOM — o de e-mail perdia o "@". Por isso o
formulário é controlado pelo React (estado é a fonte da verdade) e o campo de
e-mail usa `type="text"` + `inputMode="email"` com `name="lola_email"` para não
ser alvo de scripts que miram `type=email`. Não reverter para uncontrolled/type=email.

Verificado ao vivo (cria cobrança PIX real e pendente, que expira sem pagamento):
criação `POST /gateway/charges` OK (R$ 110,98), status `PENDING`, webhook 401/200,
e o painel PIX renderizando QR + copia-e-cola em iPhone 390 emulado e desktop 1440,
overflow 0. Não há script de QA automático para o PIX porque cada execução geraria
cobrança real; validar manualmente.

`GET /api/checkout/pix/status` sem banco varre as transações do workspace — para
produção, persista o pedido e leia o status do webhook (idempotente por
`transactionId`), usando a rota de status/reconciliação só como rede de segurança.
