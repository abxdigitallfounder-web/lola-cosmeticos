"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart, countItems, sumItems, money } from "../shared/cartStore";
import "./checkout.css";

// Flat demo shipping, matching the reference screenshot. This is a demo clone:
// no address or payment data is submitted anywhere.
const FRETE = 24.2;

function PlusIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}
function BagIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 8h12l-1 12H7L6 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="2" /></svg>;
}
function LockIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" /></svg>;
}

export default function CheckoutEntrega() {
  const cart = useCart();
  const [addrOpen, setAddrOpen] = useState(false);
  const [addrSaved, setAddrSaved] = useState(false);
  const [seeAll, setSeeAll] = useState(false);
  const [placed, setPlaced] = useState(false);

  const count = countItems(cart);
  const subtotal = sumItems(cart);
  const total = subtotal + (cart.length ? FRETE : 0);

  if (!cart.length) {
    return (
      <main className="co-body">
        <div className="co-empty">
          <strong>Sua sacola está vazia.</strong>
          <Link href="/">Voltar à loja</Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="co-body">
        <section className="co-main">
          <h1 className="co-h1">Entrega</h1>

          {!addrSaved && (
            <button type="button" className="co-addr-btn" onClick={() => setAddrOpen((v) => !v)}>
              <PlusIcon /> Cadastrar endereço
            </button>
          )}

          {addrOpen && !addrSaved && (
            <form
              className="co-form"
              onSubmit={(e) => { e.preventDefault(); setAddrSaved(true); setAddrOpen(false); }}
            >
              <h3>Novo endereço</h3>
              <div className="co-grid">
                <label className="co-wide">Nome completo<input name="nome" autoComplete="off" /></label>
                <label>CEP<input name="cep" inputMode="numeric" autoComplete="off" /></label>
                <label>Número<input name="numero" inputMode="numeric" autoComplete="off" /></label>
                <label className="co-wide">Endereço<input name="endereco" autoComplete="off" /></label>
                <label>Cidade<input name="cidade" autoComplete="off" /></label>
                <label>UF<input name="uf" maxLength={2} autoComplete="off" /></label>
              </div>
              <div className="co-form-actions">
                <button type="submit" className="co-btn-save">Salvar endereço</button>
                <button type="button" className="co-btn-cancel" onClick={() => setAddrOpen(false)}>Cancelar</button>
              </div>
            </form>
          )}

          {addrSaved ? (
            <div className="co-confirm">Endereço cadastrado. Escolha a forma de entrega abaixo.</div>
          ) : (
            <div className="co-info">
              <a onClick={(e) => { e.preventDefault(); setAddrOpen(true); }} href="#">Cadastre um endereço</a> para escolher a forma de entrega.
            </div>
          )}

          <div className="co-card">
            <div className="co-card-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cart[0].image} alt={cart[0].name} />
              <span className="co-item-name">{cart[0].name}</span>
              <span className="co-qtde"><b>Qtde.</b>{cart[0].quantity}</span>
            </div>
            <div className="co-card-ship">
              <p className="co-ship-title">Forma de entrega</p>
              <div className="co-skel-row"><span className="co-skel-radio" /><span className="co-skel-bar" /></div>
              <div className="co-skel-row"><span className="co-skel-radio" /><span className="co-skel-bar" /></div>
            </div>
          </div>
        </section>

        <aside className="co-summary">
          <h2 className="co-h2">Resumo do pedido</h2>
          <button type="button" className="co-see" onClick={() => setSeeAll((v) => !v)}>
            <BagIcon /> Ver pedido completo
          </button>

          {seeAll && (
            <div className="co-preview">
              {cart.map((p) => (
                <div key={p.id} className="co-preview-item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.name} />
                  <span className="co-pv-name">{p.name}</span>
                  <span className="co-pv-qty">{p.quantity}×</span>
                </div>
              ))}
            </div>
          )}

          <div className="co-sum-list">
            <div className="co-sum-row"><span className="co-sum-label">{count} {count === 1 ? "produto" : "produtos"}</span><span className="co-sum-val">{money(subtotal)}</span></div>
            <div className="co-sum-row"><span className="co-sum-label">Frete</span><span className="co-sum-val">{money(FRETE)}</span></div>
            <div className="co-sum-row"><span className="co-sum-label">Cupons</span><span className="co-sum-link">Aplicar cupom</span></div>
            <div className="co-sum-row"><span className="co-sum-label">CRM BONUS</span><span className="co-sum-link">Utilizar créditos</span></div>
          </div>

          <div className="co-total"><span>Total:</span><strong>{money(total)}</strong></div>

          {placed ? (
            <p role="status" className="co-demo-notice">Checkout de demonstração — nenhum pagamento é processado e nenhum pedido é enviado.</p>
          ) : (
            <button type="button" className="co-continue" onClick={() => setPlaced(true)}>
              Continuar →<small>(Pagamento)</small>
            </button>
          )}

          <p className="co-secure-foot"><LockIcon /> Site 100% seguro</p>
        </aside>
      </main>

      <section className="co-badges" aria-label="Ajuda">
        <span className="co-badge">Confira os dados de cadastro!</span>
        <span className="co-badge-line" />
        <span className="co-badge">Atente-se ao seu e-mail</span>
        <span className="co-badge-line" />
        <span className="co-badge">Surgiu alguma dúvida?</span>
      </section>
    </>
  );
}
