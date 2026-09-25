import type { Metadata } from "next";
import Header from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/Header";
import Footer from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/Footer";
import ShopInteractions from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/ShopInteractions";
import BodyClass from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/BodyClass";
import AccountPanel from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/AccountPanel";

export const metadata: Metadata = { title: "Meus pedidos - Lola" };

// Functional customer area. The clone chrome (header/footer) wraps a real,
// client-side account panel: login, create-account popup and saved profile.
export default function Page() {
  return (
    <>
      <BodyClass value="column-1 CustomerRoute area-profile" />
      <section id="main" className="CustomerRoute">
        <Header variant="interior" />
        <div id="bg-search" />
        <AccountPanel initialView="pedidos" />
        <Footer />
        <ShopInteractions />
      </section>
    </>
  );
}
