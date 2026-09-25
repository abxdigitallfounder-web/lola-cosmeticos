"use client";
import { useEffect, useRef } from "react";
import { mountMobileProductGalleries } from "./mobileProductGallery";
import { useMobileBrowser } from "./useMobileBrowser";
import { mountCapturedReviews } from "./capturedReviews";
import { mountDeliveryFee } from "./deliveryFee";

/** Replays one captured source fragment and re-initializes the carousels inside it. */
export default function SourceSection({ name, html, mobileHtml }: { name: string; html: string; mobileHtml?: string }) {
  const mobile = useMobileBrowser();
  const renderedHtml = mobile && mobileHtml !== undefined ? mobileHtml : html;
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    async function initialize() {
      const { default: $ } = await import("jquery");
      // Under a bundler slick's UMD exports a factory instead of registering itself, so
      // importing it decorates nothing; calling it is what defines $.fn.slick, and passing
      // our instance keeps it off the separate copy its own require("jquery") would load.
      const { default: registerSlick } = await import("slick-carousel");
      registerSlick(window, $);
      if (disposed || !ref.current) return;
      const restoreGalleries = mountMobileProductGalleries(ref.current);
      const restoreReviews = name === "Reviews" && mobile ? mountCapturedReviews(ref.current) : () => {};
      const restoreDeliveryFee = mountDeliveryFee(ref.current);
      const sliders = $(ref.current).find("[data-lola-slider]");
      sliders.each(function () {
        const slider = $(this);
        if (!slider.hasClass("slick-initialized")) {
          const options = JSON.parse(slider.attr("data-lola-slider") || "{}");
          slider.slick(options);
          if (slider.is(".wd-product-media-selector ul")) {
            const slick = slider.slick("getSlick");
            if (!slick.options.vertical && slick.$list?.[0] && slick.slideWidth != null) {
              // jQuery 4 defers ready callbacks that the source's jQuery 1.7 ran
              // synchronously. Hold the measured viewport through those callbacks
              // so an inline-block track cannot expand its own viewport on startup.
              const list = slick.$list[0] as HTMLElement;
              const width = list.style.width;
              list.style.width = `${Number(slick.slideWidth) * (slick.options.slidesToShow ?? 1)}px`;
              window.setTimeout(() => { list.style.width = width; }, 0);
            }
          }
        }
      });
      // Pause each carousel's autoplay while it's off-screen and resume when it
      // returns. Measured cause of mobile jank: the ~7 rails kept animating and
      // repainting continuously in the background (105 DOM mutations / 4s while
      // idle, all .slick-*). Visually identical — an off-screen rail isn't seen.
      const visObservers: IntersectionObserver[] = [];
      if (typeof IntersectionObserver !== "undefined") {
        sliders.each(function () {
          const el = this as Element;
          const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => { try { $(el).slick(e.isIntersecting ? "slickPlay" : "slickPause"); } catch {} });
          }, { rootMargin: "200px 0px" });
          io.observe(el);
          visObservers.push(io);
        });
      }
      // The source thumbnail rail is inline-block on phones. Repeated setPosition
      // calls feed its track width back into its intrinsic width (150 → 180 → 216px).
      // Slick already handles viewport changes; only product/banner rails need the
      // extra image/font-load refresh, matching the source gallery's initialization.
      const resize = () => sliders.not(".wd-product-media-selector ul").each(function () { if ($(this).hasClass("slick-initialized")) $(this).slick("setPosition"); });
      document.fonts.ready.then(() => { if (!disposed) resize(); });
      const images = ref.current.querySelectorAll("img");
      images.forEach(img => img.addEventListener("load", resize));
      cleanup = () => {
        visObservers.forEach((o) => o.disconnect());
        images.forEach(img => img.removeEventListener("load", resize));
        sliders.each(function () { if ($(this).hasClass("slick-initialized")) $(this).slick("unslick"); });
        restoreGalleries();
        restoreReviews();
        restoreDeliveryFee();
      };
    }
    // Defer the heavy jQuery + slick initialization until the section is near
    // the viewport. Initializing all ~7 home carousels at once on load froze the
    // main thread on mobile ("travando ao abrir"); this staggers the work so only
    // the visible section inits immediately and the rest init as they scroll in.
    // Behaviour and appearance are unchanged — carousels look/work the same.
    let observer: IntersectionObserver | undefined;
    let started = false;
    const start = () => { if (!started) { started = true; observer?.disconnect(); initialize(); } };
    // Observe the section's real box and init only when it's near the viewport.
    // Off-screen sections stay out of the initial load work (the ~1.5s of
    // main-thread blocking on open) and init as they scroll in. If there's no
    // box to observe, init immediately so nothing can stay uninitialized.
    const target = ref.current?.firstElementChild;
    if (target && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) start();
      }, { rootMargin: "600px 0px" });
      observer.observe(target);
    } else {
      initialize();
    }
    return () => { disposed = true; observer?.disconnect(); cleanup?.(); };
  }, [name, renderedHtml, mobile]);
  // display:contents keeps this host out of the box tree. It still sits in the DOM, so the
  // theme's child combinators (body.grid-products #middle #content-wrapper>.row) only
  // survive when a fragment carries its own container — interior pages replay all of #middle.
  return <div style={{ display: "contents" }} ref={ref} data-section={name} dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
}
