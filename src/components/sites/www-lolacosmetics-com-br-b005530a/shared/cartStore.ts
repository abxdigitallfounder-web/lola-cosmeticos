"use client";
import { useSyncExternalStore } from "react";
import type { LolaProduct } from "./types";

// The drawer in ShopInteractions and the /carrinho screen are two views of one
// cart. Both read through here so a quantity changed in one shows up in the
// other without a reload.
const KEY = "lola-demo-cart";
const CHANGED = "lola:cart-changed";
const EMPTY: LolaProduct[] = [];

// useSyncExternalStore compares snapshots by identity, so the parsed array is
// cached and only replaced when the cart actually changes. Re-parsing on every
// read would hand React a new array each time and spin forever.
let cache: LolaProduct[] | null = null;

function parse(): LolaProduct[] {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(KEY) || "[]");
    return Array.isArray(saved) ? (saved as LolaProduct[]) : [];
  } catch {
    return [];
  }
}

export function getCart(): LolaProduct[] {
  if (typeof window === "undefined") return EMPTY;
  if (cache === null) cache = parse();
  return cache;
}

function commit(items: LolaProduct[]) {
  cache = items;
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch {}
  window.dispatchEvent(new Event(CHANGED));
}

export function subscribe(onChange: () => void) {
  const local = () => onChange();
  // Another tab wrote the key: drop the cache so the next read re-parses.
  const foreign = (event: StorageEvent) => {
    if (event.key !== null && event.key !== KEY) return;
    cache = parse();
    onChange();
  };
  window.addEventListener(CHANGED, local);
  window.addEventListener("storage", foreign);
  return () => {
    window.removeEventListener(CHANGED, local);
    window.removeEventListener("storage", foreign);
  };
}

export function useCart(): LolaProduct[] {
  return useSyncExternalStore(subscribe, getCart, () => EMPTY);
}

export function addToCart(product: LolaProduct) {
  const items = getCart();
  const known = items.some((p) => p.id === product.id);
  commit(
    known
      ? items.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : p))
      : [...items, product],
  );
}

export function changeQuantity(id: string, delta: number) {
  commit(
    getCart()
      .map((p) => (p.id === id ? { ...p, quantity: p.quantity + delta } : p))
      .filter((p) => p.quantity > 0),
  );
}

export function removeFromCart(id: string) {
  commit(getCart().filter((p) => p.id !== id));
}

export const countItems = (items: LolaProduct[]) => items.reduce((n, p) => n + p.quantity, 0);
export const sumItems = (items: LolaProduct[]) => items.reduce((n, p) => n + p.price * p.quantity, 0);
export const money = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Both the listing cards and the product page feed the same shape. The listing
// card carries its own id; the product page keeps it in a hidden input that the
// source's form would have posted.
export function readProductFrom(scope: HTMLElement, onProductPage: boolean): LolaProduct | null {
  const text = (selector: string) => scope.querySelector(selector)?.textContent?.trim() || "";
  const priceOf = (value: string) => Number(value.replace(/[^\d,]/g, "").replace(",", ".")) || 0;
  if (onProductPage) {
    const id = scope.querySelector<HTMLInputElement>(".product-id")?.value;
    if (!id) return null;
    const quantity = Math.max(1, Number(document.querySelector<HTMLInputElement>("input.js-qty")?.value) || 1);
    return {
      id,
      name: document.querySelector("h1")?.textContent?.trim() || "Produto Lola",
      image: document.querySelector<HTMLImageElement>(".medias img")?.src || "",
      // Use the MAIN product price (.priceContainer). On kit pages the first
      // .sale-price is a component in the "kit contents" list (e.g. the shampoo),
      // which made the cart show the wrong, cheaper price. .priceContainer holds
      // the actual product/kit price on both kit and regular pages.
      price: priceOf((document.querySelector(".priceContainer .sale-price") || document.querySelector(".sale-price"))?.textContent || "0"),
      quantity,
    };
  }
  return {
    id: scope.dataset.productId || "",
    name: text(".name") || "Produto Lola",
    image: scope.querySelector<HTMLImageElement>(".medias img")?.src || "",
    price: priceOf(text(".sale-price") || "0"),
    quantity: 1,
  };
}
