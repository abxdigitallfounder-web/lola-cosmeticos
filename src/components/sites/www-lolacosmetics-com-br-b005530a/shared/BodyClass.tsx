"use client";
import { useEffect } from "react";
import { isMobileBrowser } from "./mobileDevice";

/**
 * The theme scopes most of its rules to a class on <body> (HomeRoute, LoginRoute,
 * grid-products …). App Router renders one <body> in the root layout, so each route
 * publishes its own captured class here and restores the previous one on exit.
 */
export default function BodyClass({ value }: { value: string }) {
  useEffect(() => {
    const previous = document.body.className;
    const previousPath = document.documentElement.getAttribute("data-lola-path");
    const previousDevice = document.documentElement.getAttribute("data-lola-device");
    document.body.className = value;
    document.documentElement.setAttribute("data-lola-path", window.location.pathname);
    document.documentElement.setAttribute("data-lola-device", isMobileBrowser() ? "phone" : "desktop");
    return () => {
      document.body.className = previous;
      if (previousPath === null) document.documentElement.removeAttribute("data-lola-path");
      else document.documentElement.setAttribute("data-lola-path", previousPath);
      if (previousDevice === null) document.documentElement.removeAttribute("data-lola-device");
      else document.documentElement.setAttribute("data-lola-device", previousDevice);
    };
  }, [value]);
  // Run while parsing the static document, before the captured content can paint.
  // The effect still handles client-side route changes; this avoids waiting for
  // hydration to apply the theme's product layout on a cold navigation.
  const initialClass = JSON.stringify(value).replace(/</g, "\\u003c");
  return <script dangerouslySetInnerHTML={{ __html: `document.body.className = ${initialClass}; document.documentElement.dataset.lolaPath = location.pathname;` }} />;
}
