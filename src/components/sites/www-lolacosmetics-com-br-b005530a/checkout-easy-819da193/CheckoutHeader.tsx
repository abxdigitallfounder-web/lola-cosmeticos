import Link from "next/link";

const LOGO = "/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/logo-lola-15anos.svg-944cf132.svg";

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SairIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="13" height="13">
      <path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4" stroke="currentColor" strokeWidth="2" />
      <path d="M10 12h9m0 0-3-3m3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Checkout has its own minimal chrome: logo, the three steps with Entrega
// active, the visitor block and the "site seguro" seal.
export default function CheckoutHeader() {
  return (
    <>
      <header className="co-head">
        <Link href="/" className="co-logo" aria-label="Lola Cosmetics">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="Lola Cosmetics" />
        </Link>
        <nav className="co-steps" aria-label="Etapas do checkout">
          <span className="co-step done"><span className="co-dot">✓</span>Carrinho</span>
          <span className="co-step active" aria-current="step"><span className="co-dot" />Entrega</span>
          <span className="co-step"><span className="co-dot" />Pagamento</span>
        </nav>
        <div className="co-account">
          <span className="co-hi">Olá, <strong>Visitante</strong></span>
          <span className="co-sair">Sair <SairIcon /></span>
        </div>
        <span className="co-secure"><LockIcon /> Site seguro</span>
      </header>
      <div className="co-spacer" />
    </>
  );
}
