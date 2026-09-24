"use client";
import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useCart, changeQuantity, removeFromCart, countItems, sumItems, money } from "./cartStore";
import "./cart-screen.css";

// The captured /carrinho page ships the source's own widget shell: an <h1>, the
// .wd-checkout-basket container and, inside it, the "seu carrinho está vazio"
// block. The real basket is rendered into that container so the theme's
// selectors and spacing keep applying, and the captured empty state is left in
// place to be shown whenever the bag is actually empty.
// The captured widget is plain DOM, not React state, so it is read through
// useSyncExternalStore: querySelector hands back the same node every call, and
// the server snapshot is null so nothing is portalled during SSR.
const keepHost = () => () => {};
const findHost = () => document.querySelector<HTMLElement>(".basket-content .wd-checkout-basket");
const noHost = () => null;

export default function CartScreen() {
  const cart = useCart();
  const host = useSyncExternalStore(keepHost, findHost, noHost);

  useEffect(() => {
    const empty = document.querySelector<HTMLElement>(".basket-content .wd-checkout-basket > .empty");
    // The captured block carries its own display rule, so toggling `hidden`
    // alone would not hide it.
    if (empty) empty.style.display = cart.length ? "none" : "";
  }, [cart]);

  if (!host || !cart.length) return null;
  const subtotal = sumItems(cart);
  return createPortal(
    <div className="lola-basket">
      <p className="lola-basket-count">{countItems(cart)} {countItems(cart) === 1 ? "item" : "itens"} na sacola</p>
      <ul className="lola-basket-list">
        {cart.map((product) => (
          <li key={product.id} className="lola-basket-row">
            {/* Captured product photos, already local under /sites. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image} alt={product.name} />
            <div className="lola-basket-info">
              <h2>{product.name}</h2>
              <span className="lola-basket-unit">{money(product.price)} cada</span>
            </div>
            <div className="lola-basket-qty">
              <button type="button" aria-label={`Diminuir ${product.name}`} onClick={() => changeQuantity(product.id, -1)}>−</button>
              <span aria-live="polite">{product.quantity}</span>
              <button type="button" aria-label={`Aumentar ${product.name}`} onClick={() => changeQuantity(product.id, 1)}>+</button>
            </div>
            <strong className="lola-basket-line">{money(product.price * product.quantity)}</strong>
            <button type="button" className="lola-basket-remove" onClick={() => removeFromCart(product.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <div className="lola-basket-summary">
        <div className="lola-basket-totals">
          <p><span>Subtotal</span><span>{money(subtotal)}</span></p>
          <p className="lola-basket-shipping"><span>Frete</span><span>calculado no checkout</span></p>
          <p className="lola-basket-grand"><span>Total</span><strong>{money(subtotal)}</strong></p>
        </div>
        <Link className="lola-basket-checkout" href="/checkout/easy">Finalizar Compra</Link>
        <Link className="lola-basket-back" href="/">Voltar à loja</Link>
      </div>
    </div>,
    host,
  );
}
