# Row Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/conteudo-sobre-revenda-7255390b/Row.tsx
- Route: /conteudo/sobre/revenda (category)
- Source: https://www.lolacosmetics.com.br/conteudo/sobre/revenda
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/conteudo-sobre-revenda-7255390b/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.row` is stored as fragments.Row
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 ContentRoute" and #main class "ContentRoute",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Revenda Olá! Tudo bem com você? Agradecemos por escolher a Lola! Será incrível ter você como parceiro(a) de negócios, mas para agilizar o seu atendimento pedimos gentilmente que você entre em contato direto com o setor comercial através do e-mail: lolaadm.comercial@farmativa.ind.br e envie as seguintes informações: Nome da Loja: CNPJ: Tempo de Empresa: Site Oficial: Tipo de Negócio: (Ex: ecommerce, loja de rua, loja de shopping, farmácia) É importante ressaltar que os e-mails que não estejam com o preenchimento correto não serão considerados. Fique de olho nas nossas redes sociais para saber das novidades! Beijinhos e muito sucesso!

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
