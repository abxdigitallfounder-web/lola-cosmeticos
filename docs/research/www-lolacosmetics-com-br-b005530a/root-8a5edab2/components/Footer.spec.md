# Footer Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/Footer.tsx
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/desktop-loaded-1440.png and mobile-390.png
- Interaction: links, hover and local UI controls

## DOM Structure
Exact sanitized source markup is provided as fragments.Footer in fragments.json. All source class names and inline SVGs retained. Render as HTML with display:contents wrapper to preserve selectors. Original CSS is loaded globally from local source.css, including all descendant values. Do not approximate or override original styles.

## Computed Styles
- fontSize: 14px
- fontWeight: 400
- fontFamily: Lato, sans-serif
- lineHeight: normal
- letterSpacing: normal
- color: rgb(0, 0, 0)
- backgroundColor: rgba(0, 0, 0, 0)
- padding: 20px 0px 0px
- margin: 50px 0px 0px
- width: 1440px
- height: 640.266px
- maxWidth: none
- display: block
- flexDirection: row
- justifyContent: normal
- alignItems: normal
- gap: normal
- borderRadius: 0px
- border: 0px none rgb(0, 0, 0)
- boxShadow: none
- overflow: visible
- position: static
- top: auto
- zIndex: auto
- opacity: 1
- transform: none
- transition: all

## States & Behaviors
Native scrolling, fixed header remains 212px at 1440 before and after scroll; no Lenis. Desktop navigation hover reveals menus (block/grid/flex); mobile .dropdown-menu toggles .active-menu with left 0px and 0.3s transition. Hero starts at slide 0, auto advance every 5000ms, pauses on hover/focus, dots clickable. Product carousels: 4 desktop, 3 below 1250, 2 below 1024; paired promo/collector 2 throughout.

## Per-State Content
All carousel slide contents retained in fragments; source inline icons retained verbatim. No backend or authentication. Non-home destinations link to original site. Local demo purchase/wishlist are handled separately.

## Assets
All URLs in fragment are rewritten using asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/. Exact source imagery, fonts, SVGs, and videos locally hosted.

## Text Content (verbatim)
Nós usamos cookies e outras tecnologias semelhantes para melhorar a experiência de navegação e recomendar conteúdo de seu interesse. Ao continuar navegando você concorda com a nossa política de privacidade. Concordo Fique por dentro das nossas novidades Cadastre-se e receba ofertas exclusivas. Nome: Email: Enviar var baseUrl = "/"; Sobre Sobre Quem somos Este site é seguro? Política de Cookies Política de Privacidade Nossa lojas Trabalhe Conosco Lola Lab Revenda Afiliados Ajuda Ajuda Prazos de atendimento Entrega e envios Pagamento Trocas e devoluções Perguntas Frequentes Como rastrear pedidos Regulamento Promocional Cashback Contato 0800 000 5521 lolamail@farmativa.ind.br Segunda à Sexta-Feira das 9h às 18h Segurança 4.7 Meus pedidos Acompanhe seus pedidos Formas de pagamento AVENIDA CIVIT I 1795 ARMAZEM A GALPAO 4 E 5, SALA 33 - BARRO BRANCO, SERRA - ES | CEP 29170-740 |CNPJ 37.410.037/0002-89 Plataforma: Projeto: var _trustvox_shelf_rate = _trustvox_shelf_rate || []; _trustvox_shelf_rate.push(['_storeId', '124669']); (function() { $('.produto .codigo-produto .trustvox-stars').show(); var tv = document.createElement('script'); tv.type = 'text/javascript'; tv.async = true; tv.src = '//rate.trustvox.com.br/widget.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tv, s); })(); <div class="wd-error-summary"> <div> <b>Verifique os erros abaixo:</b> </div> <ul> {{#Errors}} <li>{{ErrorMessage}}</li> {{/Errors}} </ul> </div> .page-sobre-afiliados { display: none; }

## Responsive Behavior
1440: original desktop layout. 768 and 390: source CSS media queries, header switches at 1100px. Matching mobile screenshot and mobile-specific hero/header fragments available. Product rails use breakpoints above.
