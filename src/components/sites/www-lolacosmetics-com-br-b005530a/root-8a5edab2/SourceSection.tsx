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
      await import("slick-carousel");
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
