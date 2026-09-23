"use client";

import { useEffect, useRef } from "react";
import captures from "./media-data.json";
import phoneCaptures from "./phone-media-data.json";
import { isMobileBrowser } from "../shared/mobileDevice";

type Variant = "highlights" | "carousel";

/** The captured widget styles live in a shadow root, just as on the source site. */
export default function MediaStories({ variant }: { variant: Variant }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!host.current) return;
    const phone = isMobileBrowser();
    const shadow = host.current.shadowRoot ?? host.current.attachShadow({ mode: "open" });
    shadow.innerHTML = (phone ? phoneCaptures : captures)[variant === "highlights" ? 0 : 1].html;
    const controller = new AbortController();
    const { signal } = controller;
    const extra = document.createElement("style");
    extra.textContent = `
      :host { display:block; width:100%; min-width:0; }
      ${phone ? "" : ".LIMITER { max-width:100%!important; width:calc(100% - 2px)!important; }"}
      [role=button]:focus-visible { outline:2px solid #ea136a; outline-offset:3px; }
      dialog.story-dialog { position:fixed; inset:0; padding:0; margin:auto; border:0; border-radius:15px; background:#131313; color:#fff; width:min(420px,100vw); max-width:100vw; height:min(760px,95dvh); max-height:95dvh; overflow:hidden; }
      dialog.story-dialog::backdrop { background:rgba(0,0,0,.8); }
      .story-dialog video,.story-dialog .story-poster { width:100%; height:100%; object-fit:contain; }
      .story-control { position:absolute; z-index:2; border:0; border-radius:50%; width:38px; height:38px; background:#13131380; color:white; display:grid; place-items:center; cursor:pointer; font:24px Arial,sans-serif; }
      .story-close { right:12px; top:12px; } .story-previous { left:8px; top:50%; } .story-next { right:8px; top:50%; }
      .story-caption { position:absolute; left:16px; right:16px; bottom:40px; padding:8px; text-align:center; background:#13131380; border-radius:8px; pointer-events:none; }
      ${phone ? "" : "@media(max-width:767px) { #widde-pro > div { gap:8px; } }"}
    `;
    shadow.append(extra);
    const rail = shadow.querySelector<HTMLElement>(variant === "highlights" ? ".overflow-x-auto" : "#card-container");
    const cards = Array.from(shadow.querySelectorAll<HTMLElement>(variant === "highlights" ? ".overflow-x-auto > div" : ".CALCULATE"));
    const videos = Array.from(shadow.querySelectorAll<HTMLVideoElement>("video"));
    const visible = new Set<HTMLVideoElement>();
    const dialog = document.createElement("dialog");
    dialog.className = "story-dialog";
    dialog.setAttribute("aria-label", "Vídeos das Loletes");
    shadow.append(dialog);
    let selected = 0;
    let active = Math.max(0, cards.findIndex(card => card.querySelector('[style*="scale(1)"]')));
    let dragged = false;
    let previousOverflow = "";
    let opener: HTMLElement | null = null;
    const resumeVisible = () => visible.forEach(video => { if (!dialog.open) void video.play().catch(() => {}); });
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      const video = entry.target as HTMLVideoElement;
      if (entry.isIntersecting) { visible.add(video); if (!dialog.open) void video.play().catch(() => {}); }
      else { visible.delete(video); video.pause(); }
    }), { threshold: 0.1 });
    videos.forEach(video => {
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      observer.observe(video);
    });
    const close = () => {
      dialog.querySelector("video")?.pause();
      dialog.close();
    };
    const show = (index: number) => {
      selected = (index + cards.length) % cards.length;
      dialog.querySelector("video")?.pause();
      dialog.replaceChildren();
      const card = cards[selected];
      const source = card.querySelector<HTMLVideoElement>("video");
      const image = card.querySelector<HTMLImageElement>("img");
      const title = variant === "highlights" ? card.querySelector(".text-base")?.textContent : card.querySelector("span")?.textContent;
      if (source) {
        const video = document.createElement("video");
        video.src = source.getAttribute("src") ?? "";
        video.poster = source.getAttribute("poster") ?? "";
        video.autoplay = true;
        video.controls = true;
        video.playsInline = true;
        video.loop = true;
        dialog.append(video);
        void video.play().catch(() => {});
      } else if (image) {
        const poster = image.cloneNode() as HTMLImageElement;
        poster.removeAttribute("style");
        poster.className = "story-poster";
        poster.alt = title ?? "Loletes";
        dialog.append(poster);
      }
      const addButton = (label: string, glyph: string, className: string, action: () => void) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `story-control ${className}`;
        button.setAttribute("aria-label", label);
        button.textContent = glyph;
        button.addEventListener("click", action, { signal });
        dialog.append(button);
      };
      addButton("Fechar vídeo", "×", "story-close", close);
      addButton("Vídeo anterior", "‹", "story-previous", () => show(selected - 1));
      addButton("Próximo vídeo", "›", "story-next", () => show(selected + 1));
      const caption = document.createElement("div");
      caption.className = "story-caption";
      caption.textContent = title ?? "";
      dialog.append(caption);
      if (!dialog.open) {
        opener = shadow.activeElement as HTMLElement | null;
        previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        videos.forEach(video => video.pause());
        dialog.showModal();
      }
      dialog.querySelector<HTMLButtonElement>(".story-close")?.focus();
    };
    dialog.addEventListener("close", () => {
      dialog.querySelector("video")?.pause();
      dialog.replaceChildren();
      document.body.style.overflow = previousOverflow;
      opener?.focus();
      resumeVisible();
    }, { signal });
    dialog.addEventListener("click", event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
    }, { signal });
    dialog.addEventListener("keydown", event => {
      if (event.key === "ArrowLeft") { event.preventDefault(); show(selected - 1); }
      if (event.key === "ArrowRight") { event.preventDefault(); show(selected + 1); }
    }, { signal });
    cards.forEach((card, index) => {
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Assistir ${card.querySelector(variant === "highlights" ? ".text-base" : "span")?.textContent?.trim() ?? "vídeo"}`);
      card.addEventListener("click", event => { if (dragged) { event.preventDefault(); return; } show(index); }, { signal });
      card.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); show(index); } }, { signal });
    });
    // The source widget positions the central card at full size and its neighbors at 86%.
    const layoutCarousel = () => {
      if (phone && variant === "highlights" && host.current) {
        const limiter = shadow.querySelector<HTMLElement>(".LIMITER");
        if (limiter) {
          const available = host.current.clientWidth;
          limiter.style.maxWidth = `${available - 1}px`;
          limiter.style.width = `min(${available - 2}px, 100%)`;
        }
      }
      if (!rail || variant !== "carousel") return;
      const mobile = window.innerWidth < 768;
      const width = mobile ? (phone ? Math.floor((rail.clientWidth - 32) / 2) : Math.min(250, Math.max(160, (rail.clientWidth - 32) / 2))) : 299.09909909909913;
      // The source reserves mobile rail space with its mobile rectangle ratio,
      // independently of the 255/436 aspect ratio used to render the video.
      const mobileHeight = phone ? Math.ceil(width * 438 / 229) + 58 : width * 436 / 255 + 95;
      rail.style.height = mobile ? `${mobileHeight}px` : "592px";
      cards.forEach((card, index) => {
        const offset = index - active;
        const x = (rail.clientWidth - width) / 2 + offset * (width * .86 + 16) + Math.sign(offset) * width * .07;
        card.style.transform = `translateX(${x}px)`;
        const scaled = card.querySelector<HTMLElement>('[style*="scale("]');
        if (scaled) scaled.style.transform = `scale(${offset === 0 ? 1 : .86})`;
        const inner = card.querySelector<HTMLElement>(".card-container > .shapper-rounded");
        if (inner) inner.style.width = `${width}px`;
        const product = card.querySelector<HTMLElement>("#external-product");
        if (product) {
          const height = mobile ? 46 : 64;
          product.style.height = product.style.minHeight = product.style.maxHeight = `${height}px`;
          if (product.parentElement) {
            product.parentElement.style.width = `${width * (offset === 0 ? 1 : .86) - 16}px`;
            product.parentElement.style.marginTop = `${offset === 0 ? mobile ? 6 : 8 : mobile ? -14 : -26}px`;
          }
          const copy = product.querySelector("p");
          if (copy) copy.style.fontSize = `${mobile ? offset === 0 ? 12 : 10.32 : offset === 0 ? 13.4595 : 11.5751}px`;
        }
        const label = card.querySelector<HTMLElement>("span");
        if (label) label.style.fontSize = mobile ? `${width * .06}px` : "14px";
      });
    };
    const resize = new ResizeObserver(layoutCarousel);
    if (phone && variant === "highlights") resize.observe(host.current);
    else if (rail) resize.observe(rail);
    layoutCarousel();
    let startX = 0;
    let startScroll = 0;
    let down = false;
    rail?.addEventListener("pointerdown", event => {
      if (event.button !== 0) return;
      dragged = false;
      down = true;
      startX = event.clientX;
      startScroll = rail.scrollLeft;
    }, { signal });
    window.addEventListener("pointermove", event => {
      if (!down || !rail) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 8) dragged = true;
      if (variant === "highlights" && event.pointerType === "mouse" && dragged) {
        rail.style.scrollBehavior = "auto";
        rail.scrollLeft = startScroll - delta;
      }
    }, { signal });
    const endDrag = (event: PointerEvent) => {
      if (!down) return;
      down = false;
      if (variant === "carousel" && dragged && Math.abs(event.clientX - startX) > 30) {
        active = Math.max(0, Math.min(cards.length - 1, active + (event.clientX < startX ? 1 : -1)));
        layoutCarousel();
      }
      if (rail) rail.style.scrollBehavior = "";
    };
    window.addEventListener("pointerup", endDrag, { signal });
    window.addEventListener("pointercancel", () => { down = false; }, { signal });
    rail?.addEventListener("keydown", event => {
      if (variant !== "carousel" || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      active = Math.max(0, Math.min(cards.length - 1, active + (event.key === "ArrowRight" ? 1 : -1)));
      layoutCarousel();
      cards[active]?.focus({ preventScroll: true });
    }, { signal });
    return () => {
      controller.abort();
      observer.disconnect();
      resize.disconnect();
      videos.forEach(video => video.pause());
      if (dialog.open) { document.body.style.overflow = previousOverflow; close(); }
      shadow.replaceChildren();
    };
  }, [variant]);

  return <div ref={host} data-media-stories={variant} style={{ display: "block", width: "100%", minHeight: variant === "highlights" ? 214 : undefined }} />;
}
