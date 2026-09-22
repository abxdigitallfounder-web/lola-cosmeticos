"use client";
import { useEffect, useRef } from "react";
import fragments from "./fragments.json";
import type { LolaSectionName } from "./types";

export default function SourceSection({ name }: { name: LolaSectionName }) {
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
      const sliders = $(ref.current).find("[data-lola-slider]");
      sliders.each(function () {
        const slider = $(this);
        if (!slider.hasClass("slick-initialized")) {
          const options = JSON.parse(slider.attr("data-lola-slider") || "{}");
          slider.slick(options);
        }
      });
      const resize = () => sliders.each(function () { if ($(this).hasClass("slick-initialized")) $(this).slick("setPosition"); });
      document.fonts.ready.then(() => { if (!disposed) resize(); });
      ref.current.querySelectorAll("img").forEach(img => img.addEventListener("load", resize));
      cleanup = () => { sliders.each(function () { if ($(this).hasClass("slick-initialized")) $(this).slick("unslick"); }); };
    }
    initialize();
    return () => { disposed = true; cleanup?.(); };
  }, [name]);
  return <div className="lola-fragment" ref={ref} data-section={name} dangerouslySetInnerHTML={{ __html: fragments[name] }} />;
}
