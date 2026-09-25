// Checkout chrome, matched to the original store: a single simplified bar with
// just the centered logo. The classes are the source theme's (#header,
// .main-bar.simples, #logo), so source.css styles it exactly like the live shop;
// the logo image comes from `#logo a`'s background. The home link is a plain
// anchor so the global client-side navigation (FastNav) upgrades it to an
// instant transition.
export default function CheckoutHeader() {
  return (
    <header id="header">
      <div className="main-bar simples">
        <div className="wrapper">
          <div className="row align-items-center">
            <div id="logo" className="col col-lg-2 col-8">
              <a href="/" title="Ir para a página inicial.">Lola Cosmetics</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
