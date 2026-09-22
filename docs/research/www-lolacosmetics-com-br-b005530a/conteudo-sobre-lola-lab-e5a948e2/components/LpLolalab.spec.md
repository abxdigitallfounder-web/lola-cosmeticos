# LpLolalab Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/conteudo-sobre-lola-lab-e5a948e2/LpLolalab.tsx
- Route: /conteudo/sobre/lola-lab (category)
- Source: https://www.lolacosmetics.com.br/conteudo/sobre/lola-lab
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/conteudo-sobre-lola-lab-e5a948e2/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `#lp-lolalab` is stored as fragments.LpLolalab
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 lolalab" and #main class "lolalab",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
LolaLab. Prêmio de Máscara Rapunzel nos EUA Reconhecida internacionalmente Performance do produto em fortalecimento Performance em hidratação e brilho dos fios. Avaliação máxima (5/5), evidenciando sua aceitação e destaque no mercado internacional Organização brasileira que atua na promoção do veganismo e na certificação dos produtos que não utilizam ingredientes de origem animal e não envolvem testes em animais. O papo é reto aqui na Lola: Não contém ingredientes de origem animal Não é testado em animais (nem pelo fabricante, nem por terceiros) Atendemos aos critérios definidos pela associação para produtos veganos. ONG brasileira voltada à proteção animal e à promoção do consumo consciente Ou seja, Lolete: Não realizamos testes em animais Não contratamos terceiros para testar em animais Assumimos um compromisso público com práticas cruelty-free Logística Reversa 100% Nosso material da embalagem é tecnicamente reciclável, podendo ser reprocessado e reinserido na cadeia produtiva, quando destinado corretamente aos sistemas de coleta e reciclagem. Isso significa que, após o uso, a embalagem pode ser coletada, separada, reciclada e transformada em novos produtos, reduzindo a necessidade de matéria-prima virgem e contribuindo para a diminuição do impacto ambiental. Redução de resíduos enviados a aterros Otimização do uso de recursos naturais Estímulo à cadeia de reciclagem ISO 22716 GMP Somos certificados pela ISO 22716, norma internacional que estabelece as Boas Práticas de Fabricação para a indústria cosmética. Nossos processos seguem padrões globais rigorosos, com controle, rastreabilidade e excelência em todas as etapas produtivas, garantindo a qualidade, segurança e consistência dos nossos produtos. P-life e B-flex As nossas embalagens de 250 g, 500 g e 1 kg possuem aditivo de P-Life ao Polietileno, matéria-prima da embalagem, e com isso redução do tempo de degradação junto à natureza. #Aprovado Formulação v2.4 Final Energia Verde Nossa fábrica utiliza 100% de energia proveniente de fonte solar, gerada por meio de sistemas fotovoltaicos próprios. Permitimos que todas as atividades produtivas sejam realizadas com base em uma fonte limpa, renovável e de baixo impacto ambiental, reduzindo significativamente a emissão de gases de efeito estufa e a dependência de fontes energéticas convencionais. É babado ou não é, Lolete?

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
