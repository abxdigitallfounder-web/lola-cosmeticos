# Blog Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/Blog.tsx
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/desktop-loaded-1440.png and mobile-390.png
- Interaction: links, hover and local UI controls

## DOM Structure
Exact sanitized source markup is provided as fragments.Blog in fragments.json. All source class names and inline SVGs retained. Render as HTML with display:contents wrapper to preserve selectors. Original CSS is loaded globally from local source.css, including all descendant values. Do not approximate or override original styles.

## Computed Styles
- fontSize: 14px
- fontWeight: 400
- fontFamily: Lato, sans-serif
- lineHeight: normal
- letterSpacing: normal
- color: rgb(0, 0, 0)
- backgroundColor: rgb(255, 239, 248)
- padding: 0px 0px 48px
- margin: 0px
- width: 1440px
- height: 661.328px
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
Conteúdos lolísticos para você!✨ Ver mais O que a Garota de Ipanema, a Blue Man e os seus cachos têm em comum? Vem descobrir! Loletes, sentem aqui que a gente tem uma fofoca daquelas de bastidores, envolvendo moda e um lançamento babadeiro para os seus fios! Se você esteve online nos últimos tempos, com certeza viu o vídeo da maravilhosa Helô P... QUERO LER! Lançamento Lola: Banana Tropicana chegou servindo produtinhos babadeiros de nutrição Loletes e Lolitos, preparem-se para um banho de brasilidade, inovação e muito alto astral! Se você acha que já viu de tudo quando o assunto é cosmético de banana, a Lolinha veio provar que o clássico pode (e deve!) ser t... QUERO LER! Lançamento Lolístico: Conheça a Coleção Volumão e dê adeus ao caberlo murchinho! Loletes e Lolitos, podem estender o tapete vermelho e preparar os flashes, porque um dos maiores lançamentos do ano acaba de desembarcar: chegou a linha Volumão! O Segredo por trás do Tapete Vermelho A gente sabe que tem... QUERO LER! document.addEventListener('DOMContentLoaded', function () { const container = document.getElementById('blog-posts-list'); const endpoint = 'https://blog.lojalolacosmetics.com.br/wp-json/wp/v2/posts?per_page=3&_embed'; function stripHTML(html) { const div = document.createElement('div'); div.innerHTML = html || ''; return (div.textContent || div.innerText || '').trim(); } function truncateText(text, maxLength) { if (!text) return ''; return text.length > maxLength ? text.substring(0, maxLength).trim() + '...' : text; } function initSlick() { const $list = $("#conteudo-lolistico ul"); if ($(window).width() < 1250) { if (!$list.hasClass('slick-initialized')) { $list.slick({ slidesToShow: 1, centerMode: true, centerPadding: '40px', infinite: false, slidesToScroll: 1, prevArrow: "<button type='button' class='slick-prev pull-left'><svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><g id='Grupo_7' data-name='Grupo 7' transform='translate(-173 -406)'><circle id='Elipse_7' data-name='Elipse 7' cx='20' cy='20' r='20' transform='translate(173 406)' fill='#ff8728'/><g id='noun-arrow-2094742' transform='translate(202.592 442.81) rotate(180)'><path id='Caminho_7' data-name='Caminho 7' d='M19.129,15.613,12.679,9.164A1.579,1.579,0,1,0,10.446,11.4L14.259,15.2H1.579a1.579,1.579,0,0,0,0,3.158H14.223l-3.777,3.783a1.579,1.579,0,0,0,2.233,2.231l6.449-6.449a1.567,1.567,0,0,0,.462-1.117.249.249,0,0,0,0-.039.276.276,0,0,0,0-.039,1.581,1.581,0,0,0-.462-1.117Z' fill='#fff'/></g></g></svg></button>", nextArrow: "<button type='button' class='slick-next pull-right'><svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><g id='Grupo_8' data-name='Grupo 8' transform='translate(213 446) rotate(180)'><circle id='Elipse_7' data-name='Elipse 7' cx='20' cy='20' r='20' transform='translate(173 406)' fill='#ff8728'/><g id='noun-arrow-2094742' transform='translate(202.592 442.81) rotate(180)'><path id='Caminho_7' data-name='Caminho 7' d='M19.129,15.613,12.679,9.164A1.579,1.579,0,1,0,10.446,11.4L14.259,15.2H1.579a1.579,1.579,0,0,0,0,3.158H14.223l-3.777,3.783a1.579,1.579,0,0,0,2.233,2.231l6.449-6.449a1.567,1.567,1.567,0,0,0,.462-1.117.249.249,0,0,0,0-.039.276.276,0,0,0,0-.039,1.581,1.581,0,0,0-.462-1.117Z' fill='#fff'/></g></g></svg></button>" }); } } else { if ($list.hasClass('slick-initialized')) { $list.slick('unslick'); } } } fetch(endpoint) .then(function (response) { return response.json(); }) .then(function (posts) { container.innerHTML = ''; posts.forEach(function (post) { const link = post.link || '#'; const title = stripHTML(post.title && post.title.rendered ? post.title.rendered : ''); const excerpt = truncateText( stripHTML(post.excerpt && post.excerpt.rendered ? post.excerpt.rendered : ''), 220 ); const image = post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && post._embedded['wp:featuredmedia'][0].source_url ? post._embedded['wp:featuredmedia'][0].source_url : '/Custom/Content/Themes/Lola/Imagens/Conteúdo lolísticos/placeholder.png'; const item = ` <li> <a href="${link}" target="_blank" rel="noopener noreferrer"> <img src="${image}" alt="${title}"> <h3>${title}</h3> <p>${excerpt}</p> <span>QUERO LER!</span> </a> </li> `; container.insertAdjacentHTML('beforeend', item); }); initSlick(); }) .catch(function (error) { console.error('Erro ao carregar posts do blog:', error); }); $(window).on('resize', function () { initSlick(); }); });

## Responsive Behavior
1440: original desktop layout. 768 and 390: source CSS media queries, header switches at 1100px. Matching mobile screenshot and mobile-specific hero/header fragments available. Product rails use breakpoints above.
