import type { Metadata } from "next";
import CheckoutHeader from "@/components/sites/www-lolacosmetics-com-br-b005530a/checkout-easy-819da193/CheckoutHeader";
import CheckoutEntrega from "@/components/sites/www-lolacosmetics-com-br-b005530a/checkout-easy-819da193/CheckoutEntrega";
import BodyClass from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/BodyClass";

export const metadata: Metadata = { title: "Entrega - Lola Cosmetics" };

// Demo checkout: the delivery step of /checkout/easy, wired to the demo cart.
// No address or payment data is submitted anywhere.
export default function Page() {
  return (
    <>
      <BodyClass value="column-1 CheckoutRoute co-route" />
      <div className="co-page">
        <CheckoutHeader />
        <CheckoutEntrega />
      </div>
    </>
  );
}
