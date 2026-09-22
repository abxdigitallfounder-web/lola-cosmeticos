"use client";

import { useEffect, useRef } from "react";
import chrome from "./chrome.json";
import "./header-extra.css";

/** Preserve the captured header DOM while replacing the storefront's remote scripts. */
/**
 * `variant` picks which captured markup to replay: the source makes the logo the page
 * heading on the home page only, so interior routes get the variant without the <h1>.
 */
export default function Header({ variant = "home" }: { variant?: "home" | "interior" } = {}) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = root.current?.querySelector<HTMLElement>("#header");
    if (!header) return;
    const menu = header.querySelector<HTMLElement>(".dropdown-menu");
    const shade = header.querySelector<HTMLElement>("#bg-menu");
    const hamburger = header.querySelector<HTMLElement>(".hamburguer");
    const input = header.querySelector<HTMLInputElement>(".search-field");
    const suggestions = header.querySelector<HTMLElement>(".suggestion-box");
    const searchForm = input?.closest("form");
    const trigger = hamburger?.querySelector<SVGElement>(":scope > svg");
    trigger?.setAttribute("role", "button");
    trigger?.setAttribute("tabindex", "0");
    trigger?.setAttribute("aria-label", "Abrir menu");
    trigger?.setAttribute("aria-expanded", "false");
    input?.setAttribute("aria-label", "O que você procura?");
    suggestions?.setAttribute("aria-live", "polite");
    const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
    const setMenu = (open: boolean) => {
      menu?.classList.toggle("active-menu", open);
      if (shade) shade.style.display = open ? "block" : "none";
      trigger?.setAttribute("aria-expanded", String(open));
    };
    const closeSearch = () => suggestions?.replaceChildren();
    const updateHeights = () => {
      // Inner accordions alter the height of their open ancestors, too.
      [...header.querySelectorAll<HTMLElement>(".is-open > ul")].reverse().forEach((panel) => {
        panel.style.setProperty("--accordion-height", `${panel.scrollHeight + 32}px`);
      });
    };
    const toggleAccordion = (button: HTMLElement, force?: boolean) => {
      const item = button.closest("li");
      const id = button.getAttribute("aria-controls");
      const panel = id ? header.querySelector<HTMLElement>(`[id="${id}"]`) : null;
      if (!item || !panel) return;
      const open = force ?? button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      item.classList.toggle("is-open", open);
      panel.style.setProperty("--accordion-height", open ? `${panel.scrollHeight + 32}px` : "0px");
      updateHeights();
    };
    const showSuggestions = () => {
      if (!input || !suggestions) return;
      suggestions.replaceChildren();
      const term = normalize(input.value.trim());
      if (!term) return;
      const seen = new Set<string>();
      const products = [...document.querySelectorAll<HTMLElement>(".wd-product-line")].filter((card) => {
        const name = card.querySelector(".name")?.textContent?.trim() ?? "";
        if (!normalize(name).includes(term) || seen.has(name)) return false;
        seen.add(name);
        return true;
      }).slice(0, 8);
      const panel = document.createElement("div");
      panel.className = "suggestion-box-wrapper lola-local-suggestions";
      if (!products.length) {
        const empty = document.createElement("p");
        empty.textContent = "Nenhum produto encontrado";
        panel.append(empty);
      }
      products.forEach((card) => {
        const name = card.querySelector(".name")?.textContent?.trim() ?? "";
        const sourceImage = card.querySelector<HTMLImageElement>(".current-img, .medias img");
        const link = document.createElement("a");
        link.className = "suggestion-product";
        link.href = card.querySelector<HTMLAnchorElement>(".name a")?.href ?? "#";
        if (sourceImage) {
          const image = document.createElement("img");
          image.src = sourceImage.currentSrc || sourceImage.src;
          image.alt = name;
          link.append(image);
        }
        const text = document.createElement("span");
        text.textContent = name;
        const price = document.createElement("small");
        price.textContent = card.querySelector(".sale-price")?.textContent?.trim() ?? "";
        text.append(price);
        link.append(text);
        panel.append(link);
      });
      suggestions.append(panel);
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (target.closest(".close-hamburguer, #bg-menu")) {
        setMenu(false);
        return;
      }
      if (target.closest(".hamburguer") && !target.closest(".dropdown-menu")) {
        setMenu(true);
        return;
      }
      const accordion = target.closest<HTMLElement>(".accordion-trigger");
      if (accordion) {
        event.preventDefault();
        toggleAccordion(accordion);
        return;
      }
      const back = target.closest(".voltar-menu-2");
      if (back) {
        const button = back.parentElement?.parentElement?.querySelector<HTMLElement>(":scope > h3 .accordion-trigger");
        if (button) toggleAccordion(button, false);
        return;
      }
      if (target.closest(".basket > a")) {
        event.preventDefault();
        window.dispatchEvent(new CustomEvent("lola:open-cart"));
      }
      if (target.closest(".close-search")) {
        closeSearch();
        input?.blur();
      }
    };
    const onSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      showSuggestions();
    };
    const onOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest(".wd-search")) closeSearch();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(false);
        closeSearch();
      }
      if ((event.key === "Enter" || event.key === " ") && event.target === trigger) {
        event.preventDefault();
        setMenu(!menu?.classList.contains("active-menu"));
      }
    };
    header.addEventListener("click", onClick);
    input?.addEventListener("input", showSuggestions);
    input?.addEventListener("focus", showSuggestions);
    searchForm?.addEventListener("submit", onSubmit);
    document.addEventListener("click", onOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      header.removeEventListener("click", onClick);
      input?.removeEventListener("input", showSuggestions);
      input?.removeEventListener("focus", showSuggestions);
      searchForm?.removeEventListener("submit", onSubmit);
      document.removeEventListener("click", onOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return <div ref={root} style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: variant === "interior" ? chrome.HeaderInterior : chrome.Header }} />;
}
