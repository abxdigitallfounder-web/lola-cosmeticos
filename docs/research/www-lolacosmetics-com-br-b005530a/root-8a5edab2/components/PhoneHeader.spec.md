# Header delivered to phones

## Source and device

Captured the home and a product page using iPhone Safari UA, 390 × 844 viewport
and screen, DPR3, isMobile true and hasTouch true. Unlike the desktop template,
the phone header has the search below the main row. A viewport resize alone does
not select it. Exact raw markup and geometry live in `header-phone-extraction.json`
and `header-phone-interior-extraction.json`.

## Structure

Use the actual captured `#header`: hamburger, centered `#logo`, tracking/account/basket
icons on the first row; full-width search and magnifier beneath. Home retains its
promotion strip and h1 logo; interiors use their captured variant. Keep the existing
cart variant, which deliberately includes its own drawer.

## Measured layout at 390px

- Interior header box: x0, y0, width390, height96.
- Logo/hamburger/icons occupy the first row; hamburger x22.5, y36.5, 20 × 16px.
- Search input: x15, y96, 360 × 43px. Search submit: x330, y96, 20 × 43px.
- Icon container: x261.5, y30.234375, 69 × 31.515625px.
- Basket: x336.421875, y30.234375, 25 × 31.515625px.
- Home's promotion strip shifts these elements down by 29.25px.
- Existing source CSS supplies all positioning, backgrounds, SVGs and breakpoints.

## Behaviors and implementation

Device selection shared with the mobile product gallery. Sanitize captured markup
through the existing pipeline, preserving local navigation/assets. Rebind Header
handlers when the selected HTML changes after hydration: drawer, accordion, search,
logo link and demo cart. Do not use spacing overrides to squeeze desktop markup.

## Validation

`qa-lola-phone-header.mjs`: compare home, KITS and PDP on iPhone and Android contexts,
capture geometry/screenshots and tap the drawer, accordion, search, logo and basket.
Also verify the desktop variant remains selected at 1440px. This is Chromium device
emulation, not physical-device or WebKit testing.
