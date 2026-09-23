# Phone home media widgets

Use the phone-specific shadow DOM capture when `isMobileBrowser()` matches the browser identity. Keep the existing desktop capture and behavior otherwise. The source was captured with iPhone user agent, 390 x 844 viewport/screen, DPR 3, touch and mobile enabled.

At 390px, highlights host is 390 x 214 and its captured LIMITER width is 388px with max-width389px. Preserve its captured spacing. The carousel host is 390 x 546.5; the inner rail is401px high, cards179px wide, center card index2 has x105.5, adjacent cards x-76.97 and287.97. Preserve source card scales1/.86 and 46px product CTA height. Adapt carousel positions to available rail width using the existing source-derived center/neighbor calculation; use source JS formula `ceil(cardWidth * 438 / 229) + 58` for mobile rail height. Source module `CarouselTwoView.C_SSt52E.js` defines this calculation using mobile rectangle ratio from `index.C4bz_I2d.js`. At Android 412px/DPR2.625/touch/mobile, card width190px, rail422px and active x111px verify the formula.

Keep horizontal touch scrolling, carousel swiping, keyboard activation, inline muted video playback and accessible modal controls. Do not apply desktop reconstruction LIMITER or gap overrides to the phone capture. Full-page verification is coordinated by the root agent after integration.

Highlights responsive limiter is reproduced from the source `ProHighlightsViewThree.Bez2WiXR.js`: set `H = parentWidth - 1`, `maxWidth = H` and `width = min(H - 1px, 100%)`. Observe the host width so captured390px values do not remain fixed on other phones. A fresh390px iPhone load verified max389px/width388px.
