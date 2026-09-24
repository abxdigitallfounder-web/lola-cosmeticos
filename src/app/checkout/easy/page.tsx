import type { Metadata } from "next";
import CheckoutHeader from "@/components/sites/www-lolacosmetics-com-br-b005530a/checkout-easy-819da193/CheckoutHeader";
import CheckoutEntrega from "@/components/sites/www-lolacosmetics-com-br-b005530a/checkout-easy-819da193/CheckoutEntrega";
import BodyClass from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/BodyClass";
import Header from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/Header";
import Footer from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/Footer";
import ShopInteractions from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/ShopInteractions";
import CartPageContent from "@/components/sites/www-lolacosmetics-com-br-b005530a/carrinho-1bc30c37/PageContent";
import CartScreen from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/CartScreen";

export const metadata: Metadata = { title: "Entrega - Lola Cosmetics" };

// Demo checkout: the delivery step of /checkout/easy, wired to the demo cart.
// No address or payment data is submitted anywhere.
export default async function Page({ searchParams }: { searchParams: Promise<{ step?: string }> }) {
  const params = await searchParams;
  if (params.step !== "delivery") {
    return <><BodyClass value="column-1 BasketIndexRoute page-basket" /><section id="main" className="BasketIndexRoute"><Header variant="cart" /><div id="bg-search" /><CartPageContent /><CartScreen /><Footer /><ShopInteractions /></section></>;
  }
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
