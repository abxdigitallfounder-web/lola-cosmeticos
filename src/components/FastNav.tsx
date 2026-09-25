"use client";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

// The captured storefront is thousands of plain <a> tags, so every click was a
// full document reload — re-downloading and re-parsing the ~2.5MB theme CSS and
// re-running every script each time. This upgrades same-origin navigation to the
// App Router (client-side) and prefetches links on hover/focus, so the shell,
// CSS and JS load once and page-to-page moves feel instant. It changes nothing
// visual: same URLs, same markup, same styles — only how the bytes are fetched.
export default function FastNav() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const internal = (a: HTMLAnchorElement): URL | null => {
      const raw = a.getAttribute("href");
      if (!raw) return null;
      let url: URL;
      try {
        url = new URL(a.href, location.href);
      } catch {
        return null;
      }
      if (url.origin !== location.origin) return null;
      if (url.protocol !== "http:" && url.protocol !== "https:") return null;
      if (a.target && a.target !== "_self") return null;
      if (a.hasAttribute("download")) return null;
      if ((a.getAttribute("rel") || "").split(/\s+/).includes("external")) return null;
      return url;
    };

    const prefetched = new Set<string>();
    const prefetch = (event: Event) => {
      const a = (event.target as Element | null)?.closest?.("a") as HTMLAnchorElement | null;
      if (!a) return;
      const url = internal(a);
      if (!url) return;
      // A pure in-page anchor needs no route data.
      if (url.hash && url.pathname === location.pathname && url.search === location.search) return;
      const key = url.pathname + url.search;
      if (prefetched.has(key)) return;
      prefetched.add(key);
      try {
        router.prefetch(key);
      } catch {}
    };

    const onClick = (event: MouseEvent) => {
      // Respect any handler that already claimed the click (e.g. the cart drawer)
      // and every gesture that asks for a new tab / different button.
      if (event.defaultPrevented) return;
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const a = (event.target as Element | null)?.closest?.("a") as HTMLAnchorElement | null;
      if (!a) return;
      const url = internal(a);
      if (!url) return;
      // Same-page hash: let the browser scroll natively.
      if (url.hash && url.pathname === location.pathname && url.search === location.search) return;
      event.preventDefault();
      router.push(url.pathname + url.search + url.hash);
    };

    document.addEventListener("pointerover", prefetch, { passive: true });
    document.addEventListener("touchstart", prefetch, { passive: true });
    document.addEventListener("focusin", prefetch);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("pointerover", prefetch);
      document.removeEventListener("touchstart", prefetch);
      document.removeEventListener("focusin", prefetch);
      document.removeEventListener("click", onClick);
    };
  }, [router]);

  // Keep the Meta pixel's page views working across client-side navigations
  // (they used to come "for free" from full reloads). The initial load's
  // PageView still fires from the pixel snippet; this covers later moves.
  const firstLoad = useRef(true);
  useEffect(() => {
    // The pixel snippet already fires PageView on the initial load; only count
    // the client-side navigations that follow.
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    if (typeof fbq === "function") {
      try {
        fbq("track", "PageView");
      } catch {}
    }
  }, [pathname]);

  return null;
}
