# Row Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/conteudo-ajuda-como-rastrear-pedidos-010ffef8/Row.tsx
- Route: /conteudo/ajuda/como-rastrear-pedidos (category)
- Source: https://www.lolacosmetics.com.br/conteudo/ajuda/como-rastrear-pedidos
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/conteudo-ajuda-como-rastrear-pedidos-010ffef8/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.row` is stored as fragments.Row
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 ContentRoute conteudo-ajuda" and #main class "ContentRoute",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Ajuda Prazos de atendimento Entrega e envios Pagamento Trocas e devoluções Perguntas Frequentes Como rastrear pedidos Regulamento Promocional Cashback Como rastrear pedidos CLIQUE AQUI para acessar a central única de rastreio. Ao clicar no link, você será redirecionado ao link de nosso parceiro logístico. É só informar o número de sua Nota Fiscal (NF) e o CPF utilizado no momento da compra. Prazo de entrega O pedido é liberado para a separação no primeiro dia útil após a confirmação do pagamento, o despacho ocorre em até 5 dias úteis e o prazo de entrega varia de acordo com o local de entrega e a opção de envio escolhida no fechamento da compra. Os CORREIOS e TRANSPORTADORAS TERCEIRIZADAS, são responsáveis pelo cumprimento do prazo a partir do envio do código para Rastreio do Objeto. #GuentaCoração Informamos que os seus dados serão utilizados apenas com a finalidade de informar o status do seu pedido e que a utilização desses dados segue a nossa Política de Privacidade.

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
