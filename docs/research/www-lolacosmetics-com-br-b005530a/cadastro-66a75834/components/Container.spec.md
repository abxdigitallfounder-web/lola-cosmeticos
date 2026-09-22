# Container Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/cadastro-66a75834/Container.tsx
- Route: /cadastro (category)
- Source: https://www.lolacosmetics.com.br/cadastro
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/cadastro-66a75834/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.container` is stored as fragments.Container
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 AccountRegisterRoute area-profile page-register" and #main class "AccountRegisterRoute",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Dados cadastrais var wdProfileRegisterAnimationTime = 500; var wdProfileRegisterEnableSlideAnimate = true; Pessoa Física Pessoa Jurídica * Nome: * Sobrenome: * Data de Nascimento: * Sexo: Selecione Feminino Masculino Não Informado * CPF: Tipo de cabelo: Selecione Liso Ondulado Cacheado Crespo Quimicamente tratado Concordo com os Termos de Uso e Política de Privacidade da Lola Aceito receber novidades, ofertas e promoções da Lola Comestics por E-mail, SMS ou Whatsapp * Razão Social: * CNPJ: * Inscrição Estadual: Concordo com os Termos de Uso e Política de Privacidade da Lola Aceito receber novidades, ofertas e promoções da Lola Comestics por E-mail, SMS ou Whatsapp * E-mail: * Telefone Celular : Ex: DDD + Telefone * Senha: Repita a senha: Cadastrar

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
