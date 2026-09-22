import type { Metadata } from "next";
import Header from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/Header";
import Footer from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/Footer";
import ShopInteractions from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/ShopInteractions";
import BodyClass from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/BodyClass";
import PageContent from "@/components/sites/www-lolacosmetics-com-br-b005530a/colecoes-babados-da-lola-39f96520/PageContent";

export const metadata: Metadata = {"title":"Babados Da Lola | Lola Cosmetics Escolha Lola, escolha ser feliz!"};

// Captured subcategory page. Everything between the header and the footer is the
// source's own #middle subtree, replayed whole so the theme's selectors keep matching.
export default function Page() {
  return (
    <>
      <BodyClass value="column-1 context-category-1495 grid-products" />
      <section id="main" className="context-category-1495 grid-products">
        <Header />
        <div id="bg-search" />
        <PageContent />
        <Footer />
        <ShopInteractions />
      </section>
    </>
  );
}
