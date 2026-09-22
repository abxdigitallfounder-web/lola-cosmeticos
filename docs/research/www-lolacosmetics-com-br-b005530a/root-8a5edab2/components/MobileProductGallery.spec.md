# Mobile product gallery

Source: Volumão Shampoo, requested with iPhone Safari user agent, mobile viewport
390 × 844, deviceScaleFactor 3, isMobile true, hasTouch true.

The origin renders `.wd-product-media-selector2` instead of `figure.wd-product-medias`
for phones. Narrowing a desktop browser does NOT select this template. The previous
desktop-only QA therefore certified the wrong gallery for mobile visitors.

## Structure and appearance

- Keep the existing `.product-detail .head .medias` and wishlist.
- Replace only the desktop figure with the source mobile div and one `.image` div
  per original gallery photo, in the same order. No thumbnail column.
- At 390px: gallery x26.359375, y207, width337.265625, height360 plus margin-bottom30.
- First image x26.359375, y207, 337 × 337px, border-radius10px.
- Existing source stylesheet provides the mobile gallery rules, including padding-bottom20.
- Dots: source active orange #F49416, 12 × 12px buttons. Arrows have 40px SVGs,
  but source CSS hides them at the phone viewport. Preserve captured options and CSS.
- Use the downloaded full-size version of each original photo, never enlarge thumbnails.

## Interaction

Horizontal swipe, one image per slide, infinite loop, dots click/tap to select,
500ms transition; source Slick options in `mobile-gallery-extraction.json`.
Device-specific markup must be selected before slider initialization, and restored
on component cleanup. Desktop keeps its original image and thumbnail gallery.

## Validation

Compare original and clone using fresh mobile browser contexts, including user agent,
screen dimensions, touch and device scale. Test iPhone and Android, swipe, dot selection,
and a desktop regression. Real-device hardware testing is separate from emulation.
