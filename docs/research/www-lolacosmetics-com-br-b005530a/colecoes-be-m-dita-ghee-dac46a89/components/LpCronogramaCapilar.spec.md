# LpCronogramaCapilar Specification

## Overview
- Target: src/components/sites/www-lolacosmetics-com-br-b005530a/colecoes-be-m-dita-ghee-dac46a89/LpCronogramaCapilar.tsx
- Route: /colecoes/be-m-dita-ghee (category)
- Source: https://www.lolacosmetics.com.br/colecoes/be-m-dita-ghee
- Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/colecoes-be-m-dita-ghee-dac46a89/desktop-1440.png
- Interaction: replayed source markup; links, hover and local UI controls

## DOM Structure
Sanitized source markup for `#lp-cronograma-capilar` is stored as fragments.LpCronogramaCapilar
in fragments.json and rendered through the shared SourceSection, which re-initializes any
slick slider inside it. The original class names and inline SVGs are preserved so the
theme's own CSS in source.css applies unchanged.

## Computed Styles
No per-element computed capture for this page; the original declarations in source.css
govern it. The shell reproduces body class "column-1 kit-cronolola-lp" and #main class "kit-cronolola-lp",
which the theme's descendant selectors depend on.

## States & Behaviors
Native scrolling and the shared fixed header. Forms are inert: the capture strips their
action and method, and checkout, login and newsletter stay demo-only.

## Assets
URLs are rewritten through asset-manifest.json to /sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/, the
shared store for this site's single theme.

## Text Content (verbatim)
DICA DA LOLA · CRONOGRAMA CAPILAR Descubra o que o seu cabelo está pedindo O cronograma capilar ajuda justamente nisso: entender o que os fios perderam e como devolver hidratação, nutrição e força na medida certa. BANANA & ALOE VERA Hidratação Para fios ressecados e sem brilho. ABACAXI & MANTEIGA DE BACURI Nutrição Para frizz, porosidade e pontas secas. PAPAYA & QUERATINA VEGETAL Reconstrução Para quebra, danos e fios fragilizados. ETAPA 01 · BANANA & ALOE VERA Be(m)dita Ghee Hidratação Como identificar o que o seu cabelo precisa: Seu cabelo está opaco seco sem brilho O QUE É HIDRATAÇÃO Etapa de tratamento capilar que repõe água e nutrientes que os fios vão perdendo devido à exposição diária a agressões, o que resulta em cabelos ressecados e sem vida. Produtos da etapa · Coleção Bendhita Ghee 40% OFF [] (12) BE(M)DITA GHEE - BANANA SHAMPOO 250mL 10% de cashback R$ 39,90 1 x R$ 39,90 sem juros - + Comprar ADICIONAR À SACOLA [] (20) BE(M)DITA GHEE - HIDRATAÇÃO BANANA 350g 10% de cashback R$ 69,90 2 x R$ 34,95 sem juros - + Comprar ADICIONAR À SACOLA [] (19) BE(M)DITA GHEE - HIDRATAÇÃO BANANA 100g 10% de cashback R$ 34,90 1 x R$ 34,90 sem juros - + Comprar ADICIONAR À SACOLA Sobre os ativos USO DIÁRIO EXTRATO DE BANANARico em aminoácidos e vitaminas, ajuda a repor os nutrientes e a manter a sedosidade e a hidratação dos cabelos. EXTRATO DE ALOE VERARico em minerais, hidrata os fios e oferece mais vitalidade e brilho para os cabelos. ÓLEO DE RÍCINORico em ômega 6 e 9, auxilia na hidratação profunda e forma uma película ao redor dos fios, evitando a perda de umidade. SEU FOCO É HIDRATAÇÃO → ETAPA 02 · ABACAXI & MANTEIGA DE BACURI Be(m)dita Ghee Nutrição Seu cabelo precisa ser nutrido se está: com frizz poroso e áspero desalinhado com pontas secas O QUE É NUTRIÇÃO Etapa de tratamento capilar que repõe os lipídios e vitaminas na fibra capilar, mantendo a oleosidade natural e proporcionando o selamento das cutículas. Produtos da etapa de nutrição 60% OFF [] (16) BE(M)DITA GHEE - ABACAXI SHAMPOO 250mL 10% de cashback R$ 39,90 1 x R$ 39,90 sem juros - + Comprar ADICIONAR À SACOLA [] (24) BE(M)DITA GHEE - NUTRIÇÃO ABACAXI 100g 10% de cashback R$ 34,90 1 x R$ 34,90 sem juros - + Comprar ADICIONAR À SACOLA Sobre os ativos USO SEMANAL EXTRATO DE ABACAXIAtivo multifuncional, rico em vitaminas e minerais essenciais para a saúde do couro cabeludo e o condicionamento dos cabelos. MANTEIGA DE BACURIMantém a hidratação e o brilho dos fios, restaurando a fibra capilar danificada por processos químicos e ajudando o cabelo a crescer forte. MANTEIGA DE KARITÉNutre os fios, dá maciez, controla o frizz e protege do calor e dos raios UV, com ação que favorece um couro cabeludo saudável. SEU FOCO É NUTRIÇÃO → ETAPA 03 · PAPAYA & QUERATINA VEGETAL Be(m)dita Ghee Reconstrução Seu cabelo precisa ser reconstruído se está: quebradiço elástico frágil pós-química O QUE É RECONSTRUÇÃO Etapa de tratamento capilar que repõe ceramidas, proteínas e aminoácidos aos fios, tratando a porosidade, a quebra e a fraqueza causadas pelos mais diversos tipos de danos. Produtos de reconstrução 40% OFF [] (10) BE(M)DITA GHEE - MAMÃO SHAMPOO 250mL 10% de cashback R$ 39,90 1 x R$ 39,90 sem juros - + Comprar ADICIONAR À SACOLA [] (17) BE(M)DITA GHEE - RECONSTRUÇÃO MAMÃO 100g 10% de cashback R$ 34,90 1 x R$ 34,90 sem juros - + Comprar ADICIONAR À SACOLA [] (18) BE(M)DITA GHEE - RECONSTRUCAO MAMÃO 350g 10% de cashback R$ 69,90 2 x R$ 34,95 sem juros - + Comprar ADICIONAR À SACOLA Sobre os ativos USO SEMANAL EXTRATO DE PAPAYARico em nutrientes, é ideal para manter os cabelos volumosos, fortes, brilhosos e saudáveis. COMPLEXO DE AMINOÁCIDOSDá força e resistência à fibra capilar; liga as proteínas dos fios e atua no crescimento e na queda capilar. QUERATINA VEGETALRecompõe e reconstrói a estrutura dos cabelos e intensifica o brilho, formando uma camada protetora contra agentes externos. SEU FOCO É RECONSTRUÇÃO → CRONOGRAMA COMPLETO Leve o kit de máscara completo Hidratação, nutrição e 

## Responsive Behavior
Captured at 1440 with a 390 pass recorded in mobile-extraction.json. The theme's own media
queries drive the layout; the header switches at 1100px.
