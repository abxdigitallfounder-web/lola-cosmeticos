import type { Metadata } from "next";
import Header from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/Header";
import Footer from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/Footer";
import ShopInteractions from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/ShopInteractions";
import BodyClass from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/BodyClass";
import PageContent from "@/components/sites/www-lolacosmetics-com-br-b005530a/plot-twist-guava-butter-gel-480g-ps-19629-146-p45431-4b04f0ef/PageContent";

export const metadata: Metadata = {"title":"PLOT TWIST GUAVA BUTTER GEL 480G -"};

// Captured product page. Everything between the header and the footer is the
// source's own #middle subtree, replayed whole so the theme's selectors keep matching.
export default function Page() {
  return (
    <>
      <BodyClass value="column-1 context-product-45431 ts-theme-light" />
      <section id="main" className="context-product-45431">
        <Header variant="interior" />
        <div id="bg-search" />
        <PageContent />
        <Footer />
        <ShopInteractions />
      </section>
    </>
  );
}
