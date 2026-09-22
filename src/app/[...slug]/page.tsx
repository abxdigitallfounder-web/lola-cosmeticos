import Header from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/Header";
import Footer from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/Footer";
import ShopInteractions from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/ShopInteractions";
import BodyClass from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/BodyClass";

export const metadata = { title: "Lola Cosmetics" };

/**
 * The captured pages link to far more of the storefront than was cloned. Static routes
 * win over this catch-all, so every cloned page still resolves; everything else lands
 * here inside the real header and footer rather than leaving the clone or 404ing.
 */
export default async function CatchAll({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const pathname = `/${slug.join("/")}`;
  return (
    <>
      <BodyClass value="column-1 lola-clone" />
      <section id="main">
        <Header />
        <div id="bg-search" />
        <section id="middle" className="wrapper">
          <div id="content">
            <div id="content-wrapper">
              <div className="lola-uncloned">
                <h1>Esta página não faz parte do clone</h1>
                <p>
                  O caminho <code>{pathname}</code> existe na loja original, mas não foi
                  capturado neste clone.
                </p>
                <p>
                  <a href="/">Voltar para a home</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <ShopInteractions />
      </section>
    </>
  );
}
