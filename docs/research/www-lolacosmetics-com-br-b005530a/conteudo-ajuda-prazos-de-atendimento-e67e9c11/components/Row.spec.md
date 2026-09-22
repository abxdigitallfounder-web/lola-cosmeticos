# Row Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/conteudo-ajuda-prazos-de-atendimento-e67e9c11/Row.tsx
- Route: /conteudo/ajuda/prazos-de-atendimento (category)
- Source: https://www.lolacosmetics.com.br/conteudo/ajuda/prazos-de-atendimento
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/conteudo-ajuda-prazos-de-atendimento-e67e9c11/desktop-1440.png
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
Ajuda Prazos de atendimento Entrega e envios Pagamento Trocas e devoluções Perguntas Frequentes Como rastrear pedidos Regulamento Promocional Cashback Prazos de atendimento Prazo de resposta de ticket Estabelecemos um prazo máximo de 72 horas úteis para responder a todas as suas mensagens. Isso significa que nossa equipe está empenhada em fornecer uma resposta completa e útil dentro desse período de tempo. Entendemos que, em certas situações, você pode precisar de uma resposta mais urgente. Caso você tenha uma consulta ou solicitação que exija uma atenção imediata, faremos o possível para atender prontamente e priorizar sua necessidade. Prazo de estorno Se você precisar solicitar um estorno para um produto comprado em nosso site Lola, nossa equipe está pronta para ajudar. Assim que recebermos o item devolvido e processarmos a solicitação, faremos o possível para concluir o estorno em até 7 dias úteis. Em casos de grandes ações, como Niver Lola, o prazo para estorno é de até 30 dias úteis. Prazo de acareação com a transportadora Acareação é a abertura de um protocolo de atendimento junto a transportadora responsável pela entrega do seu pedido, para entender o que houve. O prazo para retorno do protocolo é de 7 dias úteis. Prazo de contestação após entrega do pedido Lolete, teve algum problema com a entrega de seu pedido? Não se preocupe! Estamos aqui para ajudar. Entre em contato com nossa Central de Atendimento em até 5 dias corridos após a data de recebimento para que possamos verificar o que aconteceu e resolver o problema para você. Encerramento de atendimento Tickets abertos e não respondidos pelo cliente no período de 7 dias serão finalizados pelo nosso SAC por inatividade. Mas você sempre pode abrir uma nova solicitação. A Lola Gênia está sempre à disposição

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
