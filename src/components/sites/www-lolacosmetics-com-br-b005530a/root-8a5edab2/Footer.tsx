"use client";

import { useEffect, useRef } from "react";
import fragments from "./fragments.json";

const consentKey = "lola-demo-cookie-consent";

export default function Footer() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = root.current;
    if (!wrapper) return;

    const cookieNotice = wrapper.querySelector<HTMLElement>(".wd-data-usage-acceptance");
    const mobile = window.matchMedia("(max-width: 767px)");
    const headings = wrapper.querySelectorAll<HTMLElement>(
      ".cms-sobre > h4, .cms-ajuda > h4, .central-atendimento > h4:first-child",
    );
    const syncMobile = () => {
      cookieNotice?.classList.toggle("mobile", mobile.matches);
      headings.forEach((heading) => {
        if (mobile.matches) {
          heading.setAttribute("role", "button");
          heading.tabIndex = 0;
          heading.setAttribute("aria-expanded", String(heading.parentElement?.classList.contains("active-rodape") ?? false));
        } else {
          heading.removeAttribute("role");
          heading.removeAttribute("tabindex");
          heading.removeAttribute("aria-expanded");
        }
      });
    };
    syncMobile();
    mobile.addEventListener("change", syncMobile);
    try {
      if (localStorage.getItem(consentKey) === "accepted" && cookieNotice) {
        cookieNotice.style.display = "none";
      }
    } catch {
      // Consent still works for this visit when browser storage is unavailable.
    }

    const backtop = wrapper.querySelector<HTMLAnchorElement>(".backtop a");
    backtop?.setAttribute("aria-label", "Voltar ao topo");
    const form = wrapper.querySelector<HTMLFormElement>(".footer-newsletter form");
    const email = form?.querySelector<HTMLInputElement>('input[name="Email"]');
    if (email) {
      email.type = "email";
      email.required = true;
      email.autocomplete = "email";
    }
    const feedback = document.createElement("p");
    feedback.setAttribute("role", "status");
    feedback.setAttribute("aria-live", "polite");
    feedback.style.marginTop = "10px";
    feedback.hidden = true;
    form?.append(feedback);

    const onSubmit = (event: Event) => {
      event.preventDefault();
      if (!email) return;
      feedback.hidden = false;
      const valid = email.value.trim().length > 0 && email.validity.valid;
      feedback.textContent = valid
        ? "Tudo certo! Cadastro demonstrativo concluído. Nenhum dado foi enviado."
        : "Por favor, insira um e-mail válido.";
      email.setAttribute("aria-invalid", String(!valid));
      if (!valid) email.focus();
    };
    form?.addEventListener("submit", onSubmit);

    const toggleHeading = (heading: HTMLElement) => {
      if (!mobile.matches) return;
      const open = heading.parentElement?.classList.toggle("active-rodape");
      heading.setAttribute("aria-expanded", String(Boolean(open)));
    };
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      if (event.target.closest(".btn-agree-usage")) {
        event.preventDefault();
        if (cookieNotice) cookieNotice.style.display = "none";
        try {
          localStorage.setItem(consentKey, "accepted");
        } catch {
          // The notice is dismissed for this visit even without storage access.
        }
      } else if (event.target.closest(".backtop a")) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const heading = event.target.closest<HTMLElement>("h4");
        if (heading && Array.from(headings).includes(heading)) toggleHeading(heading);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.key !== "Enter" && event.key !== " ") || !(event.target instanceof HTMLElement)) return;
      if (Array.from(headings).includes(event.target) && mobile.matches) {
        event.preventDefault();
        toggleHeading(event.target);
      }
    };
    wrapper.addEventListener("click", onClick);
    wrapper.addEventListener("keydown", onKeyDown);
    return () => {
      mobile.removeEventListener("change", syncMobile);
      form?.removeEventListener("submit", onSubmit);
      wrapper.removeEventListener("click", onClick);
      wrapper.removeEventListener("keydown", onKeyDown);
      feedback.remove();
    };
  }, []);

  return <div ref={root} style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: fragments.Footer }} />;
}
