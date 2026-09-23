# Rebuild the phone home from the actual mobile response

User requested rebuilding `/` after confirming that narrowing a desktop browser does
not select the source site's mobile templates. Preserve the existing desktop home,
all 187 routes and the prior phone product-gallery fix.

## Capture contract

`capture-lola-phone-home.mjs` uses a fresh context with iPhone UA, viewport and screen
390 × 844, deviceScaleFactor3, isMobile true and hasTouch true. It scrolls the entire
home, waits for lazy assets/fonts, preserves per-section slider originalSettings,
and captures both WIDDE shadow roots. The timed marketing popup is blocked solely
to keep the page observable. Raw response/DOM, rectangles, images and styles are in
`phone-home-extraction.json`; full screenshot is `phone-home-source-full.png`.

## Section order and measured geometry

| Section | Top | Height at390 |
|---|---:|---:|
| Full banner | 182 | 510 |
| Video highlights | 777 | 214 |
| Categories | 991 | 321.5 |
| Favorites | 1312.5 | 649 |
| Hair types | 1991.5 | 537 |
| Video carousel | 2528.5 | 546.5 |
| Daily deals | 3075 | 1115 |
| Launches | 4190 | 718 |
| Collector | 4908 | 1113.59375 |
| Before/after | 6021.59375 | 1039.703125 |
| Affiliate | 7061.296875 | 347 |
| Blog | 7456.296875 | 777.421875 |
| Footer | 8549.71875 | 1171.15625 |

BenefitsBanner uses `.banner-beneficios-mobile` (zero box height in this capture).
ReasonsToLove, Benefits and SocialLinks are hidden by the source theme. Preserve their
actual mobile markup/state rather than reintroducing desktop blocks.

## Implementation

- `prepare-lola-phone-home.mjs` sanitizes each section independently with its own
  slider options, writes `phone-fragments.json` and `phone-media-data.json`, and scopes
  extra mobile styles to the phone home. All asset/link rewriting uses the common sanitizer.
- Main prepare script runs phone preparation and emits dual-template section wrappers.
- `SourceSection` selects `mobileHtml` by device, keeping static hydration consistent.
- MediaStories selects captured phone shadow markup; existing local interactions remain.
- Footer receives the captured phone HTML on the home. Header uses its already captured
  phone variants; its search dropdown must remain below the input and not cover the logo.
- The asset downloader accepts `--phone-only` for this capture, retaining existing assets.

## Validation

Compare rendered sections and whole-page screenshots at iPhone390 and Android412 with
screen, touch, DPR and mobile UA. Exercise header, product links, slider navigation,
video controls, footer accordions and cookie dismissal. Run production build and verify
desktop remains the desktop template. Report remaining differences instead of equating
desktop-at390 with actual mobile fidelity.

## Completed verification — 2026-09-23

Production build passed with the existing 187 routes. Full Chromium device contexts
used mobile UA, screen, touch, DPR3 and viewport (390×844 and 412×915).
The final report is phone-home-qa.json: section geometry maximum delta 0px on
iPhone emulation and 0.671875px on Android emulation, zero horizontal overflow,
zero broken images, and matching slide counts on all seven carousels.
This is browser emulation, not physical iPhone or WebKit testing.

Header/menu/search/cart checks passed across home, kits and product pages.
Highlights modal, touch swipe, review dot navigation and footer accordion passed.
The second hero dot advances to slide1 and tapping it opens local /promocao.
Desktop smoke check selects the desktop template, initializes its six carousels
and has zero horizontal overflow.

The live hero changed during work: phone-hero-current.json refreshes the Hero
section to four banners on September23. The initial full DOM/screenshot retains
the earlier single banner; final phone-home-iphone/Android screenshots and
phone-home-qa.json cover the refreshed version. Promotions can change remotely.

Tracking destinations resolve to local pages. Existing collection aliases map
banana-tropicana/bossa to /colecoes, liso/cacheado to hair-type pages, cabelos to
/tipos-de-cabelo, linhas to /colecoes and campaign week URLs to the captured
/promocao/semana-da-lolete. No new destination pages are claimed.
