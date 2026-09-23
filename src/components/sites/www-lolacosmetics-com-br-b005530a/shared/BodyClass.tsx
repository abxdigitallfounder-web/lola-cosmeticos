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
  return null;
}
