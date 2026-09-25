// Single source of truth for the traffic campaign's automatic offer:
// 35% OFF + free shipping, applied everywhere in the funnel (cart drawer,
// cart page and checkout) so shoppers coming from ads always see it.
//
// The coupon code references the current day so it reads as a fresh, "today
// only" deal — which is what the ad promises and what lifts conversion.

export const OFFER_PERCENT = 35;
export const OFFER_FREE_SHIPPING = true;

const WEEKDAYS = ["DOMINGO", "SEGUNDA", "TERCA", "QUARTA", "QUINTA", "SEXTA", "SABADO"];

/** Today's auto coupon, e.g. "LOLA35QUINTA". Changes daily. */
export function dailyCouponCode(date: Date = new Date()): string {
  return `LOLA35${WEEKDAYS[date.getDay()]}`;
}

/** The 35% discount over an items subtotal, rounded to cents. */
export function offerDiscount(subtotal: number): number {
  return Math.round(subtotal * OFFER_PERCENT) / 100;
}

/** True when a typed code matches today's auto coupon (accent/case-insensitive). */
export function isDailyCoupon(code: string, date: Date = new Date()): boolean {
  const norm = (s: string) => s.trim().normalize("NFD").replace(/[̀-ͯ]/g, "").toUpperCase();
  return norm(code) === dailyCouponCode(date);
}

/** Human date like "sexta-feira, 26/09" for urgency copy. */
export function offerDayLabel(date: Date = new Date()): string {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}`;
}
