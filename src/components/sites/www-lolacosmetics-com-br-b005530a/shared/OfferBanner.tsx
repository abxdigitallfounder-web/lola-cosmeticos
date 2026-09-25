"use client";
import { dailyCouponCode, offerDayLabel, OFFER_PERCENT } from "./dailyOffer";
import "./offer-banner.css";

function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12.6 2.6 21 11a2 2 0 0 1 0 2.8l-6.2 6.2a2 2 0 0 1-2.8 0L3.6 11.6A2 2 0 0 1 3 10.2V4a1.4 1.4 0 0 1 1.4-1.4h6.2c.5 0 1 .2 1.4.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="1.6" fill="currentColor" />
    </svg>
  );
}

// Campaign banner: 35% OFF + free shipping, auto-applied. `compact` is for the
// cart drawer; the default is the fuller version for the cart page and checkout.
export default function OfferBanner({ compact = false }: { compact?: boolean }) {
  const code = dailyCouponCode();
  return (
    <div className={`lola-offer${compact ? " lola-offer-compact" : ""}`} role="note" aria-label="Oferta do dia aplicada">
      <span className="lola-offer-badge"><TagIcon /></span>
      <div className="lola-offer-body">
        <strong className="lola-offer-title">{OFFER_PERCENT}% OFF + FRETE GRÁTIS</strong>
        <span className="lola-offer-sub">
          Cupom <b className="lola-offer-code">{code}</b> aplicado automaticamente · só hoje ({offerDayLabel()})
        </span>
      </div>
      <span className="lola-offer-check" aria-hidden="true">✓</span>
    </div>
  );
}
