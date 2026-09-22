# Formulario Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/trabalhe-conosco-af4132c0/Formulario.tsx
- Route: /trabalhe-conosco (category)
- Source: https://www.lolacosmetics.com.br/trabalhe-conosco
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/trabalhe-conosco-af4132c0/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.formulario` is stored as fragments.Formulario
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 trabalhe-conosco" and #main class "trabalhe-conosco",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
SEJA UM LOLABORADOR OFICIAL! Que incrível que você quer fazer parte do universo Lola From Rio Para participar dos nossos processos seletivos, envie um e-mail para: recrutamento@lolafromrio.com.br Assunto do e-mail: 👉 Quero ser um Lolaborador No corpo do e-mail, conte pra gente qual área você tem interesse e anexe seu currículo. ÁREAS DISPONÍVEIS: Marketing Produto & Desenvolvimento Comercial Atendimento Financeiro Varejo Internacional RH & Pessoas Operações & Logística Outras áreas Estamos sempre em busca de pessoas criativas, apaixonadas e cheias de atitude para crescer com a Lola.

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
