"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart, countItems, sumItems, money } from "../shared/cartStore";
import PixPanel, { type PixCharge } from "./PixPanel";
import "./checkout.css";

// Demo clone: no address or payment data is submitted anywhere. Shipping is a
// flat demo value; the delivery option (JT - Normal) sets it to R$ 11,08.
const FRETE_PLACEHOLDER = 24.2;
const DELIVERY = [
  { id: "jt-1", name: "JT - Normal", price: 11.08, eta: "2 dias úteis" },
  { id: "jt-2", name: "JT - Normal", price: 11.08, eta: "2 dias úteis" },
];
const PAYMENTS = [
  { id: "card", label: "Cartao de crédito", icon: "card" as const },
  { id: "pix", label: "PIX", icon: "pix" as const },
  { id: "pixp", label: "PIX Parcelado", icon: "flower" as const },
];

type Address = { nome: string; email: string; cpf: string; cep: string; endereco: string; numero: string; bairro: string; cidade: string; uf: string };
const EMPTY_ADDR: Address = { nome: "", email: "", cpf: "", cep: "", endereco: "", numero: "", bairro: "", cidade: "", uf: "" };

function PlusIcon() { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>; }
function BagIcon() { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 8h12l-1 12H7L6 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="2" /></svg>; }
function LockIcon() { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" /></svg>; }
function QIcon() { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="co-q"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.2 2.4c-.7.25-1.2.9-1.2 1.6v.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><circle cx="12" cy="17" r="1" fill="currentColor" /></svg>; }
function PayIcon({ kind }: { kind: "card" | "pix" | "flower" }) {
  if (kind === "card") return <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="co-pay-icon"><rect x="6" y="12" width="36" height="24" rx="3" stroke="#333" strokeWidth="2.4" /><path d="M6 19h36" stroke="#333" strokeWidth="2.4" /><path d="M11 29h9" stroke="#333" strokeWidth="2.4" strokeLinecap="round" /></svg>;
  if (kind === "pix") return <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="co-pay-icon"><g fill="#4b9ce2"><path d="M24 5.5 32 13.5a4 4 0 0 1-5.7 0L24 11.2l-2.3 2.3a4 4 0 0 1-5.7 0L24 5.5Z" /><path d="M24 42.5 16 34.5a4 4 0 0 1 5.7 0l2.3 2.3 2.3-2.3a4 4 0 0 1 5.7 0L24 42.5Z" /><path d="M5.5 24 13.5 16a4 4 0 0 1 0 5.7L11.2 24l2.3 2.3a4 4 0 0 1 0 5.7L5.5 24Z" /><path d="M42.5 24 34.5 32a4 4 0 0 1 0-5.7L36.8 24l-2.3-2.3a4 4 0 0 1 0-5.7L42.5 24Z" /></g></svg>;
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="co-pay-icon">
      <g transform="translate(24 24)">
        <ellipse cx="0" cy="-9" rx="6" ry="9" fill="#ff2b5a" />
        <ellipse cx="0" cy="9" rx="6" ry="9" fill="#2fc46b" />
        <ellipse cx="-9" cy="0" rx="9" ry="6" fill="#4b9ce2" />
        <ellipse cx="9" cy="0" rx="9" ry="6" fill="#f5a623" />
        <circle cx="0" cy="0" r="4.5" fill="#fff" />
      </g>
    </svg>
  );
}

function OrderSummary({ children, subtotal, frete, count }: { children?: React.ReactNode; subtotal: number; frete: number; count: number }) {
  return (
    <>
      <div className="co-sum-list">
        <div className="co-sum-row"><span className="co-sum-label">{count} {count === 1 ? "produto" : "produtos"}</span><span className="co-sum-val">{money(subtotal)}</span></div>
        <div className="co-sum-row"><span className="co-sum-label">Frete</span><span className="co-sum-val">{money(frete)}</span></div>
        <div className="co-sum-row"><span className="co-sum-label">Cupons</span><span className="co-sum-link">Aplicar cupom</span></div>
        <div className="co-sum-row"><span className="co-sum-label co-crm">CRM BONUS <QIcon /></span><span className="co-sum-link">Ganhe Cashback</span></div>
      </div>
      <div className="co-total"><span>Total:</span><strong>{money(subtotal + frete)}</strong></div>
      {children}
      <p className="co-secure-foot"><LockIcon /> Site 100% seguro</p>
    </>
  );
}

export default function CheckoutEntrega() {
  const cart = useCart();
  const [step, setStep] = useState<"entrega" | "pagamento">("entrega");
  const [addrOpen, setAddrOpen] = useState(false);
  const [address, setAddress] = useState<Address | null>(null);
  // Controlled form state. Controlled inputs are authoritative from React, so
  // the tracking scripts (Utmify/Meta) that mutate DOM fields — they were
  // eating the "@" from the e-mail field — can't corrupt what we submit.
  const [form, setForm] = useState<Address>(EMPTY_ADDR);
  const openAddr = () => { setForm(address ?? EMPTY_ADDR); setAddrOpen(true); };
  const setField = (k: keyof Address) => (e: React.ChangeEvent<HTMLInputElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const [delivery, setDelivery] = useState(0);
  const [seeAll, setSeeAll] = useState(false);
  const [seeDetails, setSeeDetails] = useState(false);
  const [placed, setPlaced] = useState(false);
  const [payMethod, setPayMethod] = useState<string>("pix");
  const [pix, setPix] = useState<PixCharge | null>(null);
  const [generating, setGenerating] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);

  // The step follows the hash so #payment deep-links to the payment screen and
  // the header's active step stays in sync.
  useEffect(() => {
    const read = () => setStep(window.location.hash === "#payment" ? "pagamento" : "entrega");
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);
  const goTo = (s: "entrega" | "pagamento") => {
    window.location.hash = s === "pagamento" ? "#payment" : "#delivery";
    setStep(s);
  };

  const count = countItems(cart);
  const subtotal = sumItems(cart);
  const frete = address || step === "pagamento" ? DELIVERY[delivery].price : FRETE_PLACEHOLDER;

  const generatePix = async () => {
    if (!address?.email || !address?.cpf) {
      setPayError("Para pagar com PIX, cadastre e-mail e CPF no endereço (etapa Entrega).");
      return;
    }
    setGenerating(true);
    setPayError(null);
    try {
      const r = await fetch("/api/checkout/pix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map((p) => ({ id: p.id, name: p.name, quantity: p.quantity, price: p.price })),
          frete,
          customer: { name: address.nome, email: address.email, doc: address.cpf },
          metadata: { sourceUrl: typeof window !== "undefined" ? window.location.href : undefined },
        }),
      });
      const j = await r.json();
      if (!j.success) throw new Error(j.error || "Falha ao gerar o PIX.");
      setPix(j.data as PixCharge);
    } catch (e) {
      setPayError(e instanceof Error ? e.message : "Falha ao gerar o PIX.");
    } finally {
      setGenerating(false);
    }
  };

  const finalize = () => {
    // This gateway integration is PIX. Card stays a demo placeholder.
    if (payMethod === "card") { setPlaced(true); return; }
    generatePix();
  };

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

  // ---- Payment step ------------------------------------------------------
  if (step === "pagamento") {
    return (
      <>
        <div className="co-order-toggle">
          <button type="button" className="co-order-link" onClick={() => setSeeDetails((v) => !v)}>
            Ver detalhes do pedido <span className={`co-caret ${seeDetails ? "up" : ""}`}>⌄</span>
          </button>
          <span className="co-order-count">{count} {count === 1 ? "produto" : "produtos"}</span>
          {seeDetails && (
            <div className="co-preview co-preview-top">
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
        </div>
        <div className="co-spacer" />

        <main className="co-body">
          <section className="co-main">
            <div className="co-pay-head">
              <h1 className="co-h1">Escolha o meio de pagamento</h1>
              <button type="button" className="co-voltar" onClick={() => goTo("entrega")}>‹ Voltar</button>
            </div>
            {pix ? (
              <PixPanel charge={pix} onPaid={() => {}} />
            ) : (
              <>
                <div className="co-pay-grid">
                  {PAYMENTS.map((m) => (
                    <button
                      type="button"
                      key={m.id}
                      className={`co-pay-card ${payMethod === m.id ? "sel" : ""}`}
                      aria-pressed={payMethod === m.id}
                      onClick={() => { setPayMethod(m.id); setPayError(null); }}
                    >
                      <PayIcon kind={m.icon} />
                      <span className="co-pay-label">{m.label}</span>
                    </button>
                  ))}
                </div>
                {payMethod === "card" && <p className="co-pay-hint">Pagamento com cartão é demonstração. Use PIX para pagar de verdade.</p>}
                {payError && <p role="alert" className="co-pay-error">{payError}</p>}
              </>
            )}
          </section>

          <aside className="co-summary">
            <h2 className="co-h2">Resumo do pedido</h2>
            <button type="button" className="co-see" onClick={() => setSeeAll((v) => !v)}><BagIcon /> Ver pedido completo</button>
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
            <OrderSummary subtotal={subtotal} frete={frete} count={count}>
              {pix ? (
                <p className="co-secure-foot" style={{ marginTop: 0 }}>Aguardando o pagamento do PIX…</p>
              ) : placed ? (
                <p role="status" className="co-demo-notice">Pagamento com cartão é apenas demonstração — nenhum valor é cobrado. Volte e escolha PIX para pagar.</p>
              ) : (
                <button type="button" className="co-continue co-finalizar" disabled={generating} onClick={finalize}>
                  {generating ? "Gerando PIX…" : "Finalizar compra"}
                </button>
              )}
            </OrderSummary>
          </aside>
        </main>
      </>
    );
  }

  // ---- Delivery step -----------------------------------------------------
  return (
    <>
      <main className="co-body">
        <section className="co-main">
          <h1 className="co-h1">Entrega</h1>

          {!address && !addrOpen && (
            <button type="button" className="co-addr-btn" onClick={openAddr}>
              <PlusIcon /> Cadastrar endereço
            </button>
          )}

          {addrOpen && (
            <form
              className="co-form"
              onSubmit={(e) => {
                e.preventDefault();
                const t = (s: string) => s.trim();
                setAddress({
                  nome: t(form.nome) || "Visitante",
                  email: t(form.email),
                  cpf: t(form.cpf),
                  cep: t(form.cep) || "00000-000",
                  endereco: t(form.endereco) || "Rua",
                  numero: t(form.numero) || "0",
                  bairro: t(form.bairro),
                  cidade: t(form.cidade) || "Cidade",
                  uf: t(form.uf).toUpperCase() || "UF",
                });
                setAddrOpen(false);
              }}
            >
              <h3>Novo endereço</h3>
              <div className="co-grid">
                <label className="co-wide">Nome completo<input name="nome" autoComplete="off" value={form.nome} onChange={setField("nome")} /></label>
                <label>E-mail<input name="lola_email" type="text" inputMode="email" autoComplete="off" value={form.email} onChange={setField("email")} /></label>
                <label>CPF<input name="cpf" inputMode="numeric" autoComplete="off" value={form.cpf} onChange={setField("cpf")} /></label>
                <label>CEP<input name="cep" inputMode="numeric" autoComplete="off" value={form.cep} onChange={setField("cep")} /></label>
                <label>Número<input name="numero" inputMode="numeric" autoComplete="off" value={form.numero} onChange={setField("numero")} /></label>
                <label className="co-wide">Endereço<input name="endereco" autoComplete="off" value={form.endereco} onChange={setField("endereco")} /></label>
                <label>Bairro<input name="bairro" autoComplete="off" value={form.bairro} onChange={setField("bairro")} /></label>
                <label>Cidade<input name="cidade" autoComplete="off" value={form.cidade} onChange={setField("cidade")} /></label>
                <label>UF<input name="uf" maxLength={2} autoComplete="off" value={form.uf} onChange={setField("uf")} /></label>
              </div>
              <div className="co-form-actions">
                <button type="submit" className="co-btn-save">Salvar endereço</button>
                {address && <button type="button" className="co-btn-cancel" onClick={() => setAddrOpen(false)}>Cancelar</button>}
              </div>
            </form>
          )}

          {address && !addrOpen ? (
            <div className="co-addr-selected">
              <div className="co-addr-top">
                <span className="co-addr-name">{address.nome}</span>
                <span className="co-addr-pill">Endereço selecionado</span>
              </div>
              <p className="co-addr-text">{address.endereco}, {address.numero}.{address.bairro ? ` ${address.bairro},` : ""} {address.cidade} - {address.uf}. CEP {address.cep}</p>
              <button type="button" className="co-addr-change" onClick={openAddr}>Alterar endereço do pedido</button>
            </div>
          ) : !addrOpen && (
            <div className="co-info">
              <a onClick={(e) => { e.preventDefault(); openAddr(); }} href="#">Cadastre um endereço</a> para escolher a forma de entrega.
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
              {address ? (
                <div className="co-opts">
                  {DELIVERY.map((o, i) => (
                    <div
                      key={o.id}
                      role="radio"
                      aria-checked={delivery === i}
                      tabIndex={0}
                      className={`co-opt ${delivery === i ? "sel" : ""}`}
                      onClick={() => setDelivery(i)}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setDelivery(i); } }}
                    >
                      <span className="co-opt-radio" />
                      <span className="co-opt-body">
                        <span className="co-opt-name">{o.name}</span>
                        <span className="co-opt-price">{money(o.price)}</span>
                        <span className="co-opt-eta">{o.eta}</span>
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="co-skel-row"><span className="co-skel-radio" /><span className="co-skel-bar" /></div>
                  <div className="co-skel-row"><span className="co-skel-radio" /><span className="co-skel-bar" /></div>
                </>
              )}
            </div>
          </div>
        </section>

        <aside className="co-summary">
          <h2 className="co-h2">Resumo do pedido</h2>
          <button type="button" className="co-see" onClick={() => setSeeAll((v) => !v)}><BagIcon /> Ver pedido completo</button>
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
          <OrderSummary subtotal={subtotal} frete={frete} count={count}>
            {address ? (
              <button type="button" className="co-continue" onClick={() => goTo("pagamento")}>Continuar →<small>(Pagamento)</small></button>
            ) : (
              <button type="button" className="co-continue co-disabled" aria-disabled>Continuar →<small>(Pagamento)</small></button>
            )}
          </OrderSummary>
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
