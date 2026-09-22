# Container Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/painel-do-cliente-alcada-credito-0fa06f63/Container.tsx
- Route: /painel-do-cliente/alcada-credito (category)
- Source: https://www.lolacosmetics.com.br/painel-do-cliente/alcada-credito
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/painel-do-cliente-alcada-credito-0fa06f63/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.container` is stored as fragments.Container
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 LoginRoute area-profile page-login" and #main class "LoginRoute",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Já sou cliente E-mail Senha Esqueci minha senha Entrar Esqueceu sua senha? E-mail Enviar * Informe o e-mail, CPF, ou CNPJ utilizado no seu cadastro.* As instruções para alteração da senha serão enviadas para o seu e-mail ou Entre ou crie uma conta usando: Quero criar uma conta Nome* Sobrenome* E-mail* Gostaria de receber novidades em primeira mão e acesso antecipado a todas as ofertas do site. Continuar Ao registrar seus dados, você concorda com nossos Termos & Condições, e Política de Privacidade e Cookies.

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
