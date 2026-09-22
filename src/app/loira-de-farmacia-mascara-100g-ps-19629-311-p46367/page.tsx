import type { Metadata } from "next";
import Header from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/Header";
import Footer from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/Footer";
import ShopInteractions from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/ShopInteractions";
import BodyClass from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/BodyClass";
import PageContent from "@/components/sites/www-lolacosmetics-com-br-b005530a/loira-de-farmacia-mascara-100g-ps-19629-311-p46367-c7b890b4/PageContent";

export const metadata: Metadata = {"title":"LOIRA DE FARMACIA MÁSCARA 100G -"};

// Captured product page. Everything between the header and the footer is the
// source's own #middle subtree, replayed whole so the theme's selectors keep matching.
export default function Page() {
  return (
    <>
      <BodyClass value="column-1 context-product-46367 ts-theme-light" />
      <section id="main" className="context-product-46367">
        <Header />
        <div id="bg-search" />
        <PageContent />
        <Footer />
        <ShopInteractions />
      </section>
    </>
  );
}
