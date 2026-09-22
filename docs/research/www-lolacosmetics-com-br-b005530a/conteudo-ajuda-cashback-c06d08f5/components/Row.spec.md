# Row Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/conteudo-ajuda-cashback-c06d08f5/Row.tsx
- Route: /conteudo/ajuda/cashback (category)
- Source: https://www.lolacosmetics.com.br/conteudo/ajuda/cashback
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/conteudo-ajuda-cashback-c06d08f5/desktop-1440.png
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
Ajuda Prazos de atendimento Entrega e envios Pagamento Trocas e devoluções Perguntas Frequentes Como rastrear pedidos Regulamento Promocional Cashback Cashback * { margin: 0; padding: 0; box-sizing: border-box; } body { font-family: &#39;Segoe UI&#39;, Tahoma, Geneva, Verdana, sans-serif; min-height: 100vh; padding: 0; } main { max-width: 1200px; margin: 0 auto; padding: 2rem 0; } .header { text-align: center; margin-bottom: 3rem; color: white; } .header h1 { font-size: 2.5rem; margin-bottom: 0.5rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); } .header p { font-size: 1.2rem; opacity: 0.9; } .grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; padding: 1rem; } .card { background: white; padding: 2rem; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.2); transition: all 0.3s ease; position: relative; overflow: hidden; } .card::before { content: &#39;&#39;; position: absolute; top: 0; left: 0; right: 0; height: 5px; background: var(--card-color); } .card-icon { width: 64px; height: 64px; margin: 0 auto 1.5rem; padding: 1rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--card-color); box-shadow: 0 5px 15px rgba(0,0,0,0.2); } .card-icon img { width: 32px; height: 32px; filter: brightness(0) invert(1); } .card p { font-size: 1rem; line-height: 1.6; color: #333; font-weight: 500; } .card-1 { --card-color: #9d5fdd; } .card-2 { --card-color: #37c8d3; } .card-3 { --card-color: #ea136a; } .card-4 { --card-color: #f49416; } .card-5 { --card-color: #03d896; } .card-6 { --card-color: #ef86d1; } /* Responsividade */ @media (max-width: 768px) { .grid-container { grid-template-columns: 1fr; gap: 1.5rem; padding: 0.5rem; } .card { padding: 1.5rem; border-radius: 15px; } .header h1 { font-size: 2rem; } .header p { font-size: 1rem; } body { padding: 0.5rem; } main { padding: 1rem 0; } } @media (max-width: 480px) { .grid-container { grid-template-columns: 1fr; gap: 1rem; padding: 0; } .card { padding: 1.2rem; border-radius: 12px; } .card-icon { width: 56px; height: 56px; margin-bottom: 1rem; } .card-icon img { width: 28px; height: 28px; } .card p { font-size: 0.9rem; } .header h1 { font-size: 1.8rem; } } A cada pedido feito no nosso site, você recebe de volta 10% do valor da sua compra em forma de cashback pra usar na próxima. Até 2 dias depois da confirmação do pagamento, seu cashback já vai estar prontinho pra uso. Cashback gerado só poderá ser utilizado nas lojas físicas ou no site: https://www.lolacosmetics.com.br/ Mas atenção: ele não vira grana, tá? Nem pode ser usado como forma de pagamento tradicional. Sua compra precisa ser de pelo menos 4x o valor do seu bônus. Exemplo: se você tem R$20 de cashback, a compra tem que ser de no mínimo R$80. Cashback e promoções não andam juntinhos. Em campanhas tipo Black Friday, o uso do bônus é suspenso. O que é o CRM Bônus da Lola? É o nosso jeitinho carinhoso de dizer: "valeu por comprar com a gente, Lolete!". A cada pedido feito no nosso site, você recebe de volta 10% do valor da sua compra em forma de cashback pra usar na próxima. Um mimo só pra você. Quando o cashback fica disponível? Até 2 dias depois da confirmação do pagamento, seu cashback já vai estar prontinho pra uso. Mas atenção: ele não vira grana, tá? Nem pode ser usado como forma de pagamento tradicional. Como usar meu cashback? Facinho, facinho: 1. Você recebe uma mensagem por SMS ou WhatsApp com o valor e validade do bônus. 2. Vai no site, coloca seus produtinhos na sacola e clica em 'Giftback'. 3. Faz login, digita seu telefone e o PIN que recebeu. 4. Clica em "aplicar desconto na compra" e finaliza o pedido. Pronto, cashback usado com sucesso! Tem valor mínimo pra usar o cashback? Tem sim, lolete! Sua compra precisa ser de pelo menos 4x o valor do seu bônus. Exemplo: se você tem R$20 de cashback, a compra tem que ser de no mínimo R$80. Cashback vale por quanto tempo? Você tem 60 dias corridos pra usar seu bônus, contadinhos 

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
