# Row Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/conteudo-ajuda-pagamento-54c5116a/Row.tsx
- Route: /conteudo/ajuda/pagamento (category)
- Source: https://www.lolacosmetics.com.br/conteudo/ajuda/pagamento
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/conteudo-ajuda-pagamento-54c5116a/desktop-1440.png
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
Ajuda Prazos de atendimento Entrega e envios Pagamento Trocas e devoluções Perguntas Frequentes Como rastrear pedidos Regulamento Promocional Cashback Pagamento PIX: o PIX será gerado na conclusão do pedido e o pagamento pode ser realizado em qualquer banco através do código de barras ou através do QR Code. É importante lembrar que o código tem validade de 20 minutos e o não pagamento dentro do prazo resulta no cancelamento automático do seu pedido. ATENÇÃO: NÃO realize o pagamento do PIX após o prazo de 20 minutos. Quando o pagamento não é confirmado, o pedido é cancelado automaticamente e você receberá um e-mail confirmando o cancelamento. CARTÃO DE CRÉDITO: É rápido e garantimos a segurança ao informar seus dados. Parcelamos em até 03x sem juros, nas compras com parcela mínima de R$30,00. >>> Informamos que os seus dados serão utilizados apenas com a finalidade de processamento de pagamento e que estes estarão protegidos nas esferas financeira (sem risco de vazamento para terceiros) e de privacidade e proteção de dados, de acordo com a nossa Política de Privacidade. PIX PARCELADO: o que é o PIX parcelado sem juros? é a forma de pagamento para parcelar em até 4X sem precisar cartão de crédito. como funciona o parcelamento? caso você ainda não tenha se cadastrado, alguns dados serão pedidos para um registro rápido e seguro. se você já tiver cadastro, seu telefone será solicitado para validação de acesso. uma análise rápida será realizada e, se a compra for aprovada, a primeira parcela vai ser cobrada no ato da compra através do PIX e as demais, a cada 15 dias. fica ligado: as parcelas não serão debitadas automaticamente. o parcelamento tem juros? não! mas os pagamentos das parcelas precisam estar em dia. se você não conseguir fazer o pagamento da parcela até o vencimento, nossa taxa de serviço é fixa e varia de acordo com o valor total da compra. aqui você pode saber mais sobre os termos de uso da Pagaleve em: https://www.pagaleve.com.br/termos-de-uso/. é possível parcelar em mais vezes? não! só pode parcelar em 4x sem juros: a primeira parcela no ato da compra e as demais com um intervalo de 15 dias entre elas (15/30/45 depois da data da compra). por que o usuário não foi aprovado? se você não tiver limite de parcelamento suficiente para o valor total do pedido, em alguns casos, será sugerido o pagamento de valor maior na entrada, permitindo o parcelamento do valor restante. existe parcela mínima para o parcelamento no PIX? sim! parcela mínima de R$30,00. precisa pagar a primeira parcela no ato da compra? sim! o pagamento da primeira parcela precisa ser feito em até 2h depois da compra finalizada. após esse prazo, o QR Code pode ser cancelado automaticamente. como sei que o pagamento deu certo? você pode entrar em “meus pedidos” e acompanhar a atualização de status do pedido, além disso, você vai receber via WhatsApp e e-mail a confirmação do pagamento.no extrato bancário a identificação da transação fica em nome de PAGALEVE TECNOLOGIA FINANCEIRA LTDA. pode alterar a data de vencimento das parcelas? não! as parcelas são geradas automaticamente para vencer a cada 15 dias corridos, após o pagamento da primeira no ato da compra. caso o vencimento esteja para um fim de semana ou feriado, o pagamento via PIX fica disponível 24h por dia e 7 dias na semana. você consegue antecipar o pagamento acessando sua wallet ou através do aplicativo Pagaleve. recebo algum aviso sobre os vencimentos? sim, você recebe todas as atualizações por WhatsApp e e-mail, mas para isso precisa manter o cadastro sempre atualizado. você também pode acessar as parcelas via wallet ou através do aplicativo Pagaleve. as parcelas serão debitadas automaticamente? não! você precisa acessar a wallet ou o aplicativo Pagaleve para consultar suas compras e realizar o pagamento das parcelas. se preferir pode agendar, mas é preciso ter saldo em conta no dia do vencimento. pode antecipar os pagamentos? sim! só é preciso pagar sempre a próxima parcela a vencer. para antec

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
