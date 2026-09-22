# CategoryTextFooter Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/tipos-de-cabelo-c8d37892/CategoryTextFooter.tsx
- Route: /tipos-de-cabelo (category)
- Source: https://www.lolacosmetics.com.br/tipos-de-cabelo
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/tipos-de-cabelo-c8d37892/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `.category-text-footer` is stored as fragments.CategoryTextFooter
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 context-category-1461 grid-products" and #main class "context-category-1461 grid-products",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
Miga, pode entrar, se sentir em casa e já puxar a cadeira, porque aqui você encontra tudo sobre cabelo, do jeito real que a gente vive no dia a dia. Este é um espaço feito para quem ama se cuidar, mas também para quem já passou por todos os sufocos capilares possíveis — e sobreviveu. Aqui, cabelo não é só estética: é identidade, autoestima, rotina, desafio e, muitas vezes, terapia.Você vai encontrar uma curadoria completa de produtos para cabelo, pensada para diferentes tipos de fios, texturas, necessidades e fases da vida. Seja para cabelo liso, ondulado, cacheado ou crespo, nosso conteúdo ajuda você a entender melhor o que funciona de verdade, como usar cada produto e como montar uma rotina capilar eficiente. Falamos de hidratação, nutrição, reconstrução, cronogramas capilares, finalização, tratamentos intensivos e cuidados diários, sempre com uma linguagem simples, prática e sem promessas milagrosas.Além disso, reunimos linhas mara, aquelas que realmente entregam resultado e fazem diferença no toque, no brilho e na saúde dos fios. Aqui você descobre lançamentos, queridinhos do momento e clássicos indispensáveis para manter o cabelo bonito e bem cuidado. Tudo explicado de forma clara, para você saber exatamente o que está usando e por que está usando.E claro, miga, não poderia faltar a parte mais real de todas: a sessão dos sufocos do dia a dia que a lolete passa e tem que superar. Quem nunca errou na química, exagerou na chapinha, testou um produto duvidoso ou acordou com o cabelo simplesmente vivendo sua própria vida? Aqui a gente fala sobre isso sem filtro, com leveza, humor e acolhimento, porque cuidar do cabelo também é aceitar os erros e aprender com eles.Nosso conteúdo vai além da indicação de produtos: ele informa, educa e conecta. A ideia é que você se sinta segura para fazer escolhas, confiante para testar novidades e confortável para assumir quem você é — com frizz, volume, definição ou aquele dia de coque improvisado.Se você busca um lugar onde cabelo é levado a sério, mas sem perder a leveza, este é o seu espaço. Aqui você encontra informação relevante, dicas práticas, experiências reais e muito carinho em cada detalhe. Porque cabelo é poder, é expressão, é história — e toda miga merece um lugar onde isso seja valorizado. Ler mais

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
