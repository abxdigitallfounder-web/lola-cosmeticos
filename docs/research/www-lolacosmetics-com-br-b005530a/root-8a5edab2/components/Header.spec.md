# Header Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/Header.tsx
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/desktop-loaded-1440.png and mobile-390.png
- Interaction: links, hover and local UI controls

## DOM Structure
Exact sanitized source markup is provided as fragments.Header in fragments.json. All source class names and inline SVGs retained. Render as HTML with display:contents wrapper to preserve selectors. Original CSS is loaded globally from local source.css, including all descendant values. Do not approximate or override original styles.

## Computed Styles
- fontSize: 14px
- fontWeight: 400
- fontFamily: Lato, sans-serif
- lineHeight: normal
- letterSpacing: normal
- color: rgb(0, 0, 0)
- backgroundColor: rgba(0, 0, 0, 0)
- padding: 0px
- margin: 0px
- width: 1440px
- height: 212px
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
- position: fixed
- top: 0px
- zIndex: 999
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
body #logo a{ background-image: url(https://d1hjvew1n9ss7u.cloudfront.net/Custom/Content/Themes/Shared/#2f2f2f); } @media (min-width: 1100px) { body #top-searchnovo .wd-search button { font-size: 0; background: transparent; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='18' viewBox='0 0 19 18' fill='none'%3E%3Cpath d='M2.62241 12.3665C3.86939 13.6149 5.52996 14.3643 7.29129 14.4735C9.05263 14.5829 10.7932 14.0444 12.185 12.9598L16.9739 17.7473C17.1437 17.9113 17.3712 18.002 17.6073 18C17.8434 17.9979 18.0692 17.9033 18.2362 17.7364C18.4031 17.5695 18.4979 17.3437 18.5 17.1076C18.502 16.8716 18.4112 16.6442 18.2472 16.4744L13.4583 11.6868C14.5914 10.2331 15.1272 8.40195 14.9562 6.5669C14.7852 4.73184 13.9205 3.03109 12.5384 1.8115C11.1562 0.591899 9.36079 -0.0546789 7.51819 0.00362649C5.67559 0.0619319 3.92463 0.820729 2.62241 2.12527C1.94955 2.7976 1.41578 3.59588 1.05161 4.47448C0.687439 5.3531 0.5 6.29483 0.5 7.2459C0.5 8.19695 0.687439 9.1387 1.05161 10.0173C1.41578 10.8959 1.94955 11.6942 2.62241 12.3665ZM3.89573 3.40003C4.78595 2.51007 5.9573 1.95624 7.21018 1.83287C8.46307 1.70949 9.71998 2.02421 10.7668 2.72341C11.8136 3.42262 12.5855 4.46303 12.951 5.66741C13.3166 6.87178 13.253 8.16559 12.7713 9.32841C12.2897 10.4912 11.4196 11.4511 10.3093 12.0445C9.19905 12.6379 7.91736 12.8281 6.68257 12.5827C5.44779 12.3372 4.33631 11.6715 3.53751 10.6987C2.73871 9.72587 2.30202 8.50629 2.30183 7.24769C2.29936 6.53251 2.43898 5.82396 2.7126 5.16315C2.98621 4.50233 3.38837 3.90242 3.89573 3.39822V3.40003Z' fill='%23EA136A'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: center; top: -4px; width: 30px; right: 10px; } body.HomeRoute #main.HomeRoute #middle { padding-top: 176px !important; } } Entre ou cadastre-se Entrar / Criar Conta E-mail(CPF/CNPJ): Esqueci minha senha ENTRAR Esqueceu sua senha? E-mail(CPF/CNPJ): Enviar * Informe o e-mail, CPF, ou CNPJ utilizado no seu cadastro.* As instruções para alteração da senha serão enviadas para o seu e-mail Minha conta Meus pedidos E-mail(CPF/CNPJ): Esqueci minha senha ENTRAR Esqueceu sua senha? E-mail(CPF/CNPJ): Enviar * Informe o e-mail, CPF, ou CNPJ utilizado no seu cadastro.* As instruções para alteração da senha serão enviadas para o seu e-mail Fazer Login com o GoogleFazer Login com o Google. Abre em uma nova guia $.wdStartStack = $.wdStartStack || []; $.wdStartStack.push({handler:'ProfileWelcomeShopper', id:'wd6', option:{}}); Bem vinda(o) Clique aqui e acesse sua conta para uma experiência personalizada e ver seus itens favoritos Rastrear pedido KITS TIPOS DE CABELO voltar TIPOS DE CABELO Lisos Cachos & Curvas Todos os tipos de cabelos Ver tudo TRATAMENTOS voltar TRATAMENTOS Uso diário Cronograma Capilar Hidratação Nutrição Reconstrução Ver tudo SOS Reparação Brilho Fortalecimento Finalização Creme de Pentear Leave In Óleo Ver tudo Cuidados específicos Anticaspa Oleosidade Ver tudo Ver tudo Coleções voltar Coleções A Fórmula Argan Oil Babados Da Lola Lola Book Necessaire Sacola de Rafia Ver tudo Babados do Brasil Banana Tropicana Basicão Be(m)dita Ghee Be(m)dita Praia Bossa Brancos e Grisalhos Camomila Cereal Killer Comigo Ninguém Pode Cuca Fresca Danos Vorazes Densidade Drama Queen Dream Cream Ela é Carioca Eu sei o que você fez na química passada! Exterminador de Frizz Kit Celebridades Liso, leve e and solto Loira de Farmácia Lola Kids Lola Vintage Girls Meu Cacho minha Vida Milagre! Morte Súbita Papo Reto Pinga! Plot Twist Purple Rapunzel Tannic Acid Tarja Preta Transição Umectação Volumão Xapadinha Lolaterapia Ver tudo LANÇAMENTOS voltar LANÇAMENTOS Embaixadoras Banana Tropicana Volumão Basicão Ghee Açaí Tannic Acid Cuca Fresca A Fórmula Bossa Kits de presente Ver tudo PROMOÇÃO voltar PROMOÇÃO Achadinhos Semana da Lolete Ver tudo Lola Cosmetics X { "suggestions": { "keystrokeDelay": 200, "showCorrections": true, "showTerms": true, "showProducts": true, "termsLimit": 0, "productsLimit": 0, "bannerTop" : { "src": "", "targetBlank": true, "url": "" }, "bannerBottom" : { "src": "", "targetBlank": true, "url": "" } } } <div class="suggestion-box-wrapper"> <div class="suggestion-terms"> <span class="suggestion-title">Termos mais buscados</span> <ul> <%= termsList %> </ul> </div> </div> <li class="suggestion-item nav-indexable" data-indexable="<%= term %>" data-term="<%= term %>"> <span class="suggestion-term"><a href="/pesquisa?t=<%= term %>&origin=autocomplete&ranking=<%= ranking %>&topsearch=1"><%= term %></a></span> </li> Buscar Rastrear pedido 0 x Minha sacola contém 0 itens Faltam para você ganharfrete grátis! Produtos no meu carrinho :( Não há produtos na sua sacola. Que tal conferir algumas ofertas? Total de pontos 0 pontos Você está no ponto de corte. Saiba mais. Você excedeu o limite de compra Seus Créditos Você possui R$ 0,00 Serão usados R$ 0,00 Seu saldo será R$ 0,00 Subtotal R$ 0,00 Finalizar Compra Continuar comprando KITS TIPOS DE CABELO Lisos Cachos & Curvas Todos os tipos de cabelos Ver Tudo TRATAMENTOS Uso diário Cronograma Capilar Hidratação Nutrição Reconstrução Ver tudo SOS Reparação Brilho Fortalecimento Finalização Creme de Pentear Leave In Óleo Ver tudo Cuidados específicos Anticaspa Oleosidade Ver tudo Ver Tudo Coleções A Fórmula Argan Oil Babados Da Lola Lola Book Necessaire Sacola de Rafia Ver tudo Babados do Brasil Banana Tropicana Basicão Be(m)dita Ghee Be(m)dita Praia Bossa Brancos e Grisalhos Camomila Cereal Killer Comigo Ninguém Pode Cuca Fresca Danos Vorazes Densidade Drama Queen Dream Cream Ela é Carioca Eu sei o que você fez na química passada! Exterminador de Frizz Kit Celebridades Liso, leve e and solto Loira de Farmácia Lola Kids Lola Vintage Girls Meu Cacho minha Vida Milagre! Morte Súbita Papo Reto Pinga! Plot Twist Purple Rapunzel Tannic Acid Tarja Preta Transição Umectação Volumão Xapadinha Lolaterapia Ver Tudo LANÇAMENTOS Embaixadoras Banana Tropicana Volumão Basicão Ghee Açaí Tannic Acid Cuca Fresca A Fórmula Bossa Kits de presente Ver Tudo PROMOÇÃO Achadinhos Semana da Lolete Ver Tudo

## Responsive Behavior
1440: original desktop layout. 768 and 390: source CSS media queries, header switches at 1100px. Matching mobile screenshot and mobile-specific hero/header fragments available. Product rails use breakpoints above.
