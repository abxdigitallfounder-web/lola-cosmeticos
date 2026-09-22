# Footer Specification
## Overview
Target: src/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/Footer.tsx.
Screenshot: docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/desktop-loaded-1440.png and mobile-390.png.
Interaction: click cookie consent, newsletter, back to top and footer links.
## DOM Structure
Render exact sanitized fragments.Footer from ./fragments.json in display:contents wrapper. Original source.css loaded globally. Keep original decorative image, columns, badges, payment SVGs, newsletter and cookies markup. Own footer-extra.css only if needed.
## Computed Styles
Footer padding20px 0 0; margin50px 0 0; font Lato14px 400; position static; width1440px; height640.266px; transparent background. Exact descendant values come from local source.css, preserve source classes.
## States & Behaviors
.btn-agree-usage dismisses cookie overlay and persists localStorage. Source cookie dark banner fixed bottom, white text and green button.
Newsletter validate email locally, show demo success explicitly no submission/network, no external messages.
Backtop scrolls smoothly to top. Footer links remain original external destinations.
Mobile footer headings toggle lists only when original CSS collapses them; ensure reachable.
## Per-State Content
Consent visible initially, hidden after click persisted. Newsletter valid/invalid states are demo.
## Assets
All local URLs already mapped in fragments.Footer; source image/SVG assets remain exact.
## Text Content
Fique por dentro das nossas novidades; Enviar; Sobre; Ajuda; Contato; Segurança; Meus pedidos; Formas de pagamento; 0800 000 5521; lolamail@farmativa.ind.br; preserve all remaining fragment copy.
## Responsive Behavior
1440 desktop source columns; 768 and390 responsive source CSS. Breakpoint1100px. Cookie button remains operable in mobile.

