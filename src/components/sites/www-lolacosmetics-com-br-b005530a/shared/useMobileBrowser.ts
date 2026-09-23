"use client";
import { useSyncExternalStore } from "react";
import { isMobileBrowser } from "./mobileDevice";

const subscribe = () => () => {};
const serverSnapshot = () => false;

/** Keep static HTML hydration stable, then select the same device template as the source. */
export function useMobileBrowser() {
  return useSyncExternalStore(subscribe, isMobileBrowser, serverSnapshot);
}
