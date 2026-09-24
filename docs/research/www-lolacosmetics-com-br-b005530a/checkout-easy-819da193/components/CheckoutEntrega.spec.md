# Checkout /checkout/easy — Entrega step Specification

## Overview
- **Target files:**
  - `src/components/sites/www-lolacosmetics-com-br-b005530a/checkout-easy-819da193/CheckoutHeader.tsx`
  - `src/components/sites/www-lolacosmetics-com-br-b005530a/checkout-easy-819da193/CheckoutEntrega.tsx` (client)
  - `src/components/sites/www-lolacosmetics-com-br-b005530a/checkout-easy-819da193/checkout.css`
  - route: `src/app/checkout/easy/page.tsx`
- **Master reference:** the user-supplied desktop screenshot of the Entrega step (Visitante).
- **Interaction model:** mostly static; `Cadastrar endereço` opens a demo address form (client-only, no network); `Continuar (Pagamento)` shows the demo notice — this is a demo clone, no real checkout/payment/PII transmission.

## Global tokens (confirmed from live extraction + existing clone)
- Body font: `Lato, sans-serif` (already loaded as `--font-lola-body`).
- Heading font: `obviously` → falls back to Lato bold (same as the rest of the clone). h1 color `rgb(255,43,90)` = `#ff2b5a`.
- Pink primary: `#ff2b5a` (buttons, headings, links).
- Active-step blue: `#2f80ed` (the "Entrega" label, filled step dot, underline).
- Done-step check: same pink/blue accent, filled circle with check.
- Info box: cream `#fff6e6` background, soft border `#f6dca8`, orange link `#c8791b`.
- Skeleton bars (loading delivery options): `#ececec`.
- Total box: `#f4f4f4` background.
- Card border: `#e3e3e3`; hairlines `#ededed`.
- Body text: `#333`; muted `#777`.
- Logo (shared): `/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/logo-lola-15anos.svg-944cf132.svg`.

## Layout
- Checkout has its OWN minimal chrome (NOT the store header/footer):
  - Left: Lola logo (~110px wide on desktop).
  - Center: 3 steps — `Carrinho` (done, check), `Entrega` (active, blue dot + blue label + underline), `Pagamento` (todo, empty dot).
  - Right: `Olá, **Visitante**` / `Sair ↪` stacked, then `🔒 Site seguro`.
  - Thin light-gray spacer bar below the header (full width, ~44px, `#ececec`).
- Body: centered container `max-width: ~1180px`, two columns:
  - **Left main** (flex ~1.6): `Entrega` H1; big pink `➕ Cadastrar endereço` button (full width, height ~86px, radius 4px); cream info box `Cadastre um endereço para escolher a forma de entrega.`; then a bordered delivery card.
  - **Right summary** (fixed ~360px): `Resumo do pedido` H2; pink-outline `🛒 Ver pedido completo` button; rows `1 produto / R$ x`, `Frete / R$ y`, `Cupons / Aplicar cupom`, `CRM BONUS / Utilizar créditos`; gray `Total: R$ z` box; big pink `Continuar → (Pagamento)`; `🔒 Site 100% seguro`.
- Delivery card (left, below info box): bordered box, split into left (product thumb + name + `Qtde. N`) and right (`Forma de entrega` header + two skeleton radio rows with gray bars).
- Bottom band: three pink-outline pill badges connected by a horizontal line — `CONFIRA OS DADOS DE CADASTRO!`, `ATENTE-SE AO SEU E-MAIL`, `SURGIU ALGUMA DÚVIDA?` (uppercase, pink text, 2px pink border, radius ~6px).

## Order summary numbers
- Read the live cart from `cartStore` (`lola-demo-cart`).
- `N produto(s)` and product subtotal from the cart.
- `Frete`: flat demo value `R$ 24,20` (matches the reference screenshot) when cart non-empty, else `—`.
- `Total = subtotal + frete`.

## States & behaviors
- `Cadastrar endereço` (button): hover darkens pink `#ff2b5a → #e81f4c`. Click toggles an inline demo address form (nome, CEP, endereço, número, cidade/UF) — client state only, `Salvar` collapses it and swaps the cream info box for a neutral confirmation line. No submission anywhere.
- `Ver pedido completo`: toggles the delivery card's expanded product list (uses the same cart rows). Pink-outline hover fills pink, text white.
- `Continuar (Pagamento)`: shows the demo notice (`Checkout de demonstração — nenhum pagamento é processado.`). Disabled visual when cart empty.
- Empty cart: show `Sua sacola está vazia` with a `Voltar à loja` link instead of the two-column body.

## Responsive
- **Desktop (≥992px):** two columns as above.
- **Tablet (768–991px):** summary drops below main, full width; header steps stay in one row.
- **Mobile (≤767px):** single column; logo centered or left with steps wrapping; `Cadastrar endereço` and `Continuar` full width; badges stack vertically; order summary is a full-width block above/below main. Verified with REAL device emulation (UA + isMobile + touch + DPR), not a resized window — the source serves phones a different template, and `data-lola-device` must read `phone`.

## Text content (verbatim)
- Steps: `Carrinho`, `Entrega`, `Pagamento`.
- `Olá,`, `Visitante`, `Sair`, `Site seguro`.
- `Entrega`
- `Cadastrar endereço`
- `Cadastre um endereço para escolher a forma de entrega.`
- `Qtde.`
- `Forma de entrega`
- `Resumo do pedido`
- `Ver pedido completo`
- `produto` / `produtos`
- `Frete`, `Cupons`, `Aplicar cupom`, `CRM BONUS`, `Utilizar créditos`
- `Total:`
- `Continuar`, `(Pagamento)`
- `Site 100% seguro`
- Badges: `CONFIRA OS DADOS DE CADASTRO!`, `ATENTE-SE AO SEU E-MAIL`, `SURGIU ALGUMA DÚVIDA?`
