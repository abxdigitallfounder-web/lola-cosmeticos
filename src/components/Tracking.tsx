import Script from "next/script";

// Utmify and Meta pixel ids are public identifiers: they ship in the page and
// identify the account that receives the events. The Meta Conversions API
// access token is a secret and never belongs here — it stays in the
// environment, server side. See "Rastreamento" in HANDOFF.md.
const UTMIFY_PIXEL_ID = "6aaf1dfcacd70d7371f48e78";
const META_PIXEL_ID = "1734208590789662";

export default function Tracking() {
  return (
    <>
      {/* Utmify reads window.pixelId when pixel.js evaluates, so the global has
          to exist first. beforeInteractive runs ahead of every other strategy
          and is injected into <head> wherever the component sits. The lint rule
          below predates the App Router and still points at pages/_document.js;
          the Next 16 docs require beforeInteractive to live in the root layout,
          which is where this component is rendered. */}
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script id="utmify-pixel-id" strategy="beforeInteractive">
        {`window.pixelId = ${JSON.stringify(UTMIFY_PIXEL_ID)};`}
      </Script>
      <Script
        id="utmify-pixel"
        src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
        strategy="afterInteractive"
      />
      {/* The two data attributes come from the vendor snippet: they stop Utmify
          from appending its own click and subid parameters to outgoing links. */}
      <Script
        id="utmify-utms"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        strategy="afterInteractive"
        data-utmify-prevent-xcod-sck=""
        data-utmify-prevent-subids=""
      />
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', ${JSON.stringify(META_PIXEL_ID)});
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* A 1x1 tracking beacon, not content: next/image would rewrite the URL
            through the optimizer and the event would never reach Meta. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
