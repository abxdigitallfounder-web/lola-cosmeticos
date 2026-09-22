# MediaStories Specification
## Overview
Target: src/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/MediaStories.tsx.
Screenshot desktop-top.png, desktop-loaded-1440.png, mobile-top.png in docs/design-references/www-lolacosmetics-com-br-b005530a/root-8a5edab2/.
Interaction: muted looping thumbnail video; click opens modal; horizontal swipe rail.
## DOM Structure
Data in ./media-data.json contains exact captured shadow DOM HTML/CSS for WIDDE-PRO-HIGHLIGHTS and WIDDE-PRO-CAROUSEL, with all assets rewritten locally.
Prefer render original shadow HTML in own shadow root via useEffect to isolate Tailwind CSS. No original scripts; reconstruct event interactions. Export default MediaStories({variant:'highlights'|'carousel'}).
## Computed Styles
Highlights host desktop height214px. Each circular image/video 142px square inside150px circular pink bordered button, rail gap16px. Exact descendants/CSS are embedded in captured shadow HTML, preserve them rather than approximate.
Original video rail async content captured in media-data second entry includes images/product labels and videos.
## States & Behaviors
Autoplay videos muted loop playsInline only when visible; thumbnails behind video. Click shows local modal video with close, next/prev. Escape closes, backdrop closes, stop playback on close. No external requests.
Video rail horizontal swipe native scroll; preserve original arrows if in snapshot, wire them.
## Per-State Content
ANTICASPA; CRONOGRAMA CAPILAR; BRILHO; CREME DE PENTEAR; LEAVE IN; FORTALECIMENTO; OLÉOS; USO DIÁRIO; OLEOSIDADE; SOS REPARAÇÃO.
## Assets
Every thumbnail/MP4 in ./media-data.json local assets. Some carousel records have only poster; show poster rather than invent video.
## Text Content
Preserve source captured labels and product texts in HTML.
## Responsive Behavior
1440 highlights rail width1440;390 shows ~2.3 circular items; overflow horizontal. Captured media CSS handles desktop and mobile, preserve original styles. Main video rail uses captured responsive CSS.

