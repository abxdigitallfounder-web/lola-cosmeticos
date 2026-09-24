"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const LOGO = "/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/logo-lola-15anos.svg-944cf132.svg";

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
// Minimal checkout chrome. The active step follows the hash: #payment marks
// Pagamento active and Entrega done; otherwise Entrega is active.
export default function CheckoutHeader() {
  const [payment, setPayment] = useState(false);
  useEffect(() => {
    const read = () => setPayment(window.location.hash === "#payment");
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);
  return (
    <>
      <header className="co-head">
        <Link href="/" className="co-logo" aria-label="Lola Cosmetics">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="Lola Cosmetics" />
        </Link>
        <nav className="co-steps" aria-label="Etapas do checkout">
          <span className="co-step done"><span className="co-dot">✓</span>Carrinho</span>
          <span className={`co-step ${payment ? "done" : "active"}`} aria-current={payment ? undefined : "step"}>
            <span className="co-dot">{payment ? "✓" : null}</span>Entrega
          </span>
          <span className={`co-step ${payment ? "active" : ""}`} aria-current={payment ? "step" : undefined}>
            <span className="co-dot" />Pagamento
          </span>
        </nav>
        <span className="co-secure"><LockIcon /> Site seguro</span>
      </header>
      <div className="co-spacer" />
    </>
  );
}
