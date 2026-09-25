"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart, countItems, sumItems, money } from "../shared/cartStore";
import { getCurrentAccount, updateCurrentAccount } from "../shared/accountStore";
import OfferBanner from "../shared/OfferBanner";
import { offerDiscount, dailyCouponCode } from "../shared/dailyOffer";
import PixPanel, { type PixCharge } from "./PixPanel";
import "./checkout.css";

// Demo clone: no address or payment data is submitted anywhere. Delivery
// options are shown after a valid CEP and use the store's normal 2-day range.
const FRETE_PLACEHOLDER = 24.2;
const DELIVERY = [
  { id: "jt-1", name: "JT - Normal", price: 7.90, eta: "2 dias úteis" },
  { id: "pac-1", name: "PAC - Normal", price: 9.20, eta: "4 dias úteis" },
];
const PAYMENTS = [
  { id: "card", label: "Cartao de crédito", icon: "card" as const },
  { id: "pix", label: "PIX", icon: "pix" as const },
];

type Address = { nome: string; email: string; cpf: string; cep: string; endereco: string; numero: string; complemento: string; bairro: string; cidade: string; uf: string };
const EMPTY_ADDR: Address = { nome: "", email: "", cpf: "", cep: "", endereco: "", numero: "", complemento: "", bairro: "", cidade: "", uf: "" };

// Field wrapper for the checkout form: persistent top label, room for a helper
// line or an inline validation message, and an error state. Kept at module scope
// (never redefined per render) so the inputs it wraps don't lose focus on keystroke.
function CoField({ label, error, helper, wide, optional, children }: { label: string; error?: string; helper?: string; wide?: boolean; optional?: boolean; children: React.ReactNode }) {
  return (
    <div className={`co-fld${wide ? " co-wide" : ""}${error ? " co-fld-err" : ""}`}>
      <label className="co-fld-label">{label}{optional && <span className="co-fld-opt"> (opcional)</span>}</label>
      {children}
      {error ? <span className="co-fld-msg" role="alert">{error}</span> : helper ? <span className="co-fld-help">{helper}</span> : null}
    </div>
  );
}

type AddrErrors = Partial<Record<keyof Address, string>>;
const validateAddress = (f: Address): AddrErrors => {
  const e: AddrErrors = {};
  if (f.nome.trim().length < 3) e.nome = "Informe seu nome completo.";
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.trim())) e.email = "Informe um e-mail válido.";
  if (f.cpf.replace(/\D/g, "").length !== 11) e.cpf = "Digite um CPF válido (11 dígitos).";
  if (f.cep.replace(/\D/g, "").length !== 8) e.cep = "Digite um CEP válido (8 dígitos).";
  if (!f.endereco.trim()) e.endereco = "Informe o endereço.";
  if (!f.numero.trim()) e.numero = "Nº";
  if (!f.bairro.trim()) e.bairro = "Informe o bairro.";
  if (!f.cidade.trim()) e.cidade = "Informe a cidade.";
  if (f.uf.trim().length !== 2) e.uf = "UF";
  return e;
};
const formatCep = (value: string) => { const digits = value.replace(/\D/g, "").slice(0, 8); return digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits; };
const formatCpf = (value: string) => {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length > 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
  if (d.length > 6) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
  if (d.length > 3) return `${d.slice(0, 3)}.${d.slice(3)}`;
  return d;
};

function PlusIcon() { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>; }
function BagIcon() { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 8h12l-1 12H7L6 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="2" /></svg>; }
function LockIcon() { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" /></svg>; }

// Real payment icons captured from the source theme (same PNG/SVG assets).
const PAY_ICONS: Record<"card" | "pix" | "flower", string> = {
  card: "/sites/www-lolacosmetics-com-br-b005530a/checkout-easy-819da193/icons/creditcard.svg",
  pix: "/sites/www-lolacosmetics-com-br-b005530a/checkout-easy-819da193/icons/pix.svg",
  flower: "/sites/www-lolacosmetics-com-br-b005530a/checkout-easy-819da193/icons/pixparcelado.png",
};
function PayIcon({ kind }: { kind: "card" | "pix" | "flower" }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="co-pay-icon" src={PAY_ICONS[kind]} alt="" width={36} height={36} />;
}

const CARD_BRANDS = ["Visa", "Master", "Diners", "Hipercard", "Amex", "Elo"];
const maskCardNumber = (v: string) => v.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ").trim();

// Credit-card form, mirroring the source layout (brand, number, name, expiry,
// security code, installments). It never processes a real card — submitting it
// fails on purpose and offers PIX with a discount.
function CardForm({ total }: { total: number }) {
  const [brand, setBrand] = useState("");
  const [number, setNumber] = useState("");
  const [holder, setHolder] = useState("");
  const [mm, setMm] = useState("");
  const [yy, setYy] = useState("");
  const [cvv, setCvv] = useState("");
  const [inst, setInst] = useState("");
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
  const years = Array.from({ length: 12 }, (_, i) => String(2026 + i));
  const installments = Array.from({ length: 12 }, (_, i) => ({ n: i + 1, label: `${i + 1}x de ${money(total / (i + 1))} sem juros` }));
  return (
    <div className="co-cardform">
      <div className="co-card-brands">
        {CARD_BRANDS.map((b) => (
          <button type="button" key={b} className={`co-brand ${brand === b ? "sel" : ""}`} onClick={() => setBrand(b)}>{b}</button>
        ))}
      </div>
      <label className="co-cf-field">Número do cartão
        <input name="lola_ccnum" inputMode="numeric" autoComplete="off" placeholder="0000 0000 0000 0000" value={number} onChange={(e) => setNumber(maskCardNumber(e.target.value))} />
      </label>
      <label className="co-cf-field">Nome completo <small>(Exatamente como impresso no cartão)</small>
        <input name="lola_ccname" autoComplete="off" value={holder} onChange={(e) => setHolder(e.target.value)} />
      </label>
      <div className="co-cf-two">
        <label className="co-cf-field">Data de validade
          <span className="co-cf-exp">
            <select value={mm} onChange={(e) => setMm(e.target.value)}><option value="">Mês</option>{months.map((m) => <option key={m} value={m}>{m}</option>)}</select>
            <span className="co-cf-sep">/</span>
            <select value={yy} onChange={(e) => setYy(e.target.value)}><option value="">Ano</option>{years.map((y) => <option key={y} value={y}>{y}</option>)}</select>
          </span>
        </label>
        <label className="co-cf-field">Código de segurança
          <input name="lola_cccvv" inputMode="numeric" autoComplete="off" maxLength={4} value={cvv} onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))} />
        </label>
      </div>
      <label className="co-cf-field">Parcelamento
        <select value={inst} onChange={(e) => setInst(e.target.value)}><option value="">Selecione</option>{installments.map((o) => <option key={o.n} value={o.n}>{o.label}</option>)}</select>
      </label>
    </div>
  );
}

function CardDeclined({ onPix }: { onPix: () => void }) {
  return (
    <div className="co-card-declined" role="alert">
      <strong>Não foi possível aprovar seu cartão.</strong>
      <p>Ocorreu um erro com a operadora do seu cartão. Finalize com <b>PIX</b> em segundos e mantenha seus <b>35% OFF + frete grátis</b>.</p>
      <button type="button" className="co-continue co-finalizar" onClick={onPix}>Pagar com PIX</button>
    </div>
  );
}

function OrderSummary({ children, subtotal, frete, discount, count, coupon, freeShipping }: { children?: React.ReactNode; subtotal: number; frete: number; discount: number; count: number; coupon: React.ReactNode; freeShipping?: boolean }) {
  const freteCobrado = freeShipping ? 0 : frete;
  const total = Math.max(0, subtotal + freteCobrado - discount);
  return (
    <>
      <div className="co-sum-list">
        <div className="co-sum-row"><span className="co-sum-label">{count} {count === 1 ? "produto" : "produtos"}</span><span className="co-sum-val">{money(subtotal)}</span></div>
        <div className="co-sum-row"><span className="co-sum-label">Frete</span>{freeShipping ? <span className="co-sum-val co-sum-free">GRÁTIS</span> : <span className="co-sum-val">{money(frete)}</span>}</div>
        {coupon}
        {discount > 0 && <div className="co-sum-row"><span className="co-sum-label">Desconto (35%)</span><span className="co-sum-val co-sum-desc">- {money(discount)}</span></div>}
      </div>
      <div className="co-total"><span>Total:</span><strong>{money(total)}</strong></div>
      {children}
      <p className="co-secure-foot"><LockIcon /> Site 100% seguro</p>
    </>
  );
}

export default function CheckoutEntrega() {
  const cart = useCart();
  const [step, setStep] = useState<"entrega" | "pagamento">("entrega");
  // The delivery step should start ready for the customer's address instead
  // of hiding the form behind an extra "Cadastrar endereço" click.
  const [addrOpen, setAddrOpen] = useState(true);
  const [address, setAddress] = useState<Address | null>(null);
  // Controlled form state. Controlled inputs are authoritative from React, so
  // the tracking scripts (Utmify/Meta) that mutate DOM fields — they were
  // eating the "@" from the e-mail field — can't corrupt what we submit.
  const [form, setForm] = useState<Address>(EMPTY_ADDR);
  const [errors, setErrors] = useState<AddrErrors>({});
  const clearError = (k: keyof Address) => setErrors((prev) => (prev[k] ? { ...prev, [k]: undefined } : prev));
  const openAddr = () => { setForm(address ?? EMPTY_ADDR); setErrors({}); setAddrOpen(true); };
  const setField = (k: keyof Address) => (e: React.ChangeEvent<HTMLInputElement>) => { clearError(k); setForm((f) => ({ ...f, [k]: e.target.value })); };
  // Validate a single field on blur so the customer gets feedback as they go,
  // without being nagged the moment they start typing.
  const validateField = (k: keyof Address) => setErrors((prev) => ({ ...prev, [k]: validateAddress(form)[k] }));
  const [delivery, setDelivery] = useState(0);
  const [seeAll, setSeeAll] = useState(false);
  const [seeDetails, setSeeDetails] = useState(false);
  const [cardError, setCardError] = useState(false);
  const [payMethod, setPayMethod] = useState<string>("");
  const [pix, setPix] = useState<PixCharge | null>(null);
  const [generating, setGenerating] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);
  const [cepBusy, setCepBusy] = useState(false);
  const [cepError, setCepError] = useState<string | null>(null);

  // Pre-fill the checkout from the logged-in account so a returning customer
  // never retypes what the panel already saved (see accountStore.ts).
  useEffect(() => {
    const account = getCurrentAccount();
    if (!account) return;
    const a = account.address;
    setForm((current) => ({
      ...current,
      nome: current.nome || account.name,
      email: current.email || account.email,
      cep: current.cep || account.cep,
      endereco: current.endereco || a?.endereco || "",
      numero: current.numero || a?.numero || "",
      complemento: current.complemento || a?.complemento || "",
      bairro: current.bairro || a?.bairro || "",
      cidade: current.cidade || a?.cidade || "",
      uf: current.uf || a?.uf || "",
    }));
  }, []);

  const lookupCep = async (value = form.cep) => {
    const cep = value.replace(/\D/g, "");
    setCepError(null);
    if (cep.length !== 8) { setCepError("Digite um CEP válido com 8 dígitos."); return; }
    setCepBusy(true);
    try {
      const response = await fetch(`/api/cep/${cep}`, { cache: "no-store" });
      const data = await response.json() as { erro?: boolean; logradouro?: string; bairro?: string; localidade?: string; uf?: string };
      if (!response.ok || data.erro) throw new Error("CEP não encontrado. Confira o número.");
      setForm((current) => ({ ...current, cep: formatCep(cep), endereco: data.logradouro || current.endereco, bairro: data.bairro || current.bairro, cidade: data.localidade || current.cidade, uf: data.uf || current.uf }));
    } catch (error) { setCepError(error instanceof Error ? error.message : "Não foi possível consultar o CEP agora."); }
    finally { setCepBusy(false); }
  };

  useEffect(() => {
    const cep = form.cep.replace(/\D/g, "");
    if (cep.length !== 8) return;
    const timer = window.setTimeout(() => { void lookupCep(cep); }, 250);
    return () => window.clearTimeout(timer);
  }, [form.cep]);

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
  const cepReady = form.cep.replace(/\D/g, "").length === 8;
  const hasDeliveryContext = Boolean(address || cepReady || step === "pagamento");
  const frete = hasDeliveryContext ? DELIVERY[delivery].price : FRETE_PLACEHOLDER;
  // Campaign (paid traffic): 35% OFF + free shipping, applied automatically.
  const freeShipping = true;
  const freteCobrado = freeShipping ? 0 : frete;
  const discount = offerDiscount(subtotal);
  const couponCode = dailyCouponCode();

  const generatePix = async (discountArg = discount, couponArg = couponCode) => {
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
          frete: freteCobrado,
          discount: discountArg,
          customer: { name: address.nome, email: address.email, doc: address.cpf },
          metadata: { sourceUrl: typeof window !== "undefined" ? window.location.href : undefined, cupom: couponArg || undefined },
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
    // No method chosen yet (the source pre-selects none either).
    if (!payMethod) { setPayError("Escolha um meio de pagamento."); return; }
    // The card always fails on purpose, then offers PIX.
    if (payMethod === "card") { setPayError(null); setCardError(true); return; }
    generatePix();
  };

  // Card "fails" → switch to PIX, keeping the campaign's 35% + free shipping.
  const payWithPixDiscount = () => {
    setPayMethod("pix");
    setCardError(false);
    void generatePix();
  };

  const saveAddress = () => {
    const t = (s: string) => s.trim();
    // Validate before saving: a clean, complete address is what makes the PIX
    // step work and cuts failed/abandoned orders. Show every issue at once and
    // jump focus to the first field that needs fixing.
    const errs = validateAddress(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      const el = document.querySelector<HTMLInputElement>(`.co-form [data-field="${first}"]`);
      el?.focus();
      el?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }
    setAddress({
      nome: t(form.nome),
      email: t(form.email),
      cpf: t(form.cpf),
      cep: t(form.cep),
      endereco: t(form.endereco),
      numero: t(form.numero),
      complemento: t(form.complemento),
      bairro: t(form.bairro),
      cidade: t(form.cidade),
      uf: t(form.uf).toUpperCase(),
    });
    // Keep the logged-in account in sync with what was typed here, so the next
    // visit (panel or checkout) already has it.
    updateCurrentAccount({
      name: t(form.nome) || undefined,
      cep: t(form.cep) || undefined,
      address: { endereco: t(form.endereco), numero: t(form.numero), complemento: t(form.complemento), bairro: t(form.bairro), cidade: t(form.cidade), uf: t(form.uf).toUpperCase() },
    });
    setAddrOpen(false);
  };
  const onFieldEnter = (e: React.KeyboardEvent<HTMLInputElement>) => { if (e.key === "Enter") { e.preventDefault(); saveAddress(); } };

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
            <div className="co-offer-wrap"><OfferBanner /></div>
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
                {payMethod === "card" && !cardError && <CardForm total={subtotal + frete} />}
                {cardError && <CardDeclined onPix={payWithPixDiscount} />}
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
            <OrderSummary subtotal={subtotal} frete={frete} discount={discount} count={count} coupon={null} freeShipping={freeShipping}>
              {pix ? (
                <p className="co-secure-foot" style={{ marginTop: 0 }}>Aguardando o pagamento do PIX…</p>
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
          <div className="co-offer-wrap"><OfferBanner /></div>

          {!address && !addrOpen && (
            <button type="button" className="co-addr-btn" onClick={openAddr}>
              <PlusIcon /> Cadastrar endereço
            </button>
          )}

          {addrOpen && (
            // Not a <form>: the Utmify/Meta tracking scripts hijack real form
            // fields (they inject utm_* inputs and, on real phones, block typing).
            // A plain div with neutral field names keeps the checkout inputs usable.
            <div className="co-form co-form-pro" role="group" aria-label="Dados de entrega">
              {/* 1. Contact ------------------------------------------------ */}
              <div className="co-fieldset">
                <h3 className="co-fs-title"><span className="co-fs-num">1</span>Seus dados</h3>
                <div className="co-grid">
                  <CoField label="Nome completo" wide error={errors.nome}>
                    <input className="co-fld-input" data-field="nome" name="lola_nome" autoComplete="off" placeholder="Ex.: Maria Souza" value={form.nome} onChange={setField("nome")} onBlur={() => validateField("nome")} onKeyDown={onFieldEnter} />
                  </CoField>
                  <CoField label="E-mail" wide error={errors.email} helper="Enviaremos a confirmação e o código de rastreio aqui.">
                    <input className="co-fld-input" data-field="email" name="lola_email" type="text" inputMode="email" autoComplete="off" placeholder="voce@email.com" value={form.email} onChange={setField("email")} onBlur={() => validateField("email")} onKeyDown={onFieldEnter} />
                  </CoField>
                  <CoField label="CPF" wide error={errors.cpf} helper="Necessário para emitir a nota e o PIX.">
                    <input className="co-fld-input" data-field="cpf" name="lola_doc" inputMode="numeric" autoComplete="off" maxLength={14} placeholder="000.000.000-00" value={form.cpf} onChange={(e) => { clearError("cpf"); setForm((f) => ({ ...f, cpf: formatCpf(e.target.value) })); }} onBlur={() => validateField("cpf")} onKeyDown={onFieldEnter} />
                  </CoField>
                </div>
              </div>

              {/* 2. Address ------------------------------------------------ */}
              <div className="co-fieldset">
                <h3 className="co-fs-title"><span className="co-fs-num">2</span>Endereço de entrega</h3>
                <div className="co-grid">
                  <CoField label="CEP" error={errors.cep || cepError || undefined} helper={cepBusy ? "Buscando endereço…" : "Preenchemos o endereço pra você."}>
                    <div className="co-cep-field">
                      <input className="co-fld-input" data-field="cep" name="lola_zip" inputMode="numeric" autoComplete="off" maxLength={9} placeholder="00000-000" value={form.cep} onChange={(e) => { clearError("cep"); setCepError(null); setForm((f) => ({ ...f, cep: formatCep(e.target.value) })); }} onBlur={() => validateField("cep")} onKeyDown={onFieldEnter} />
                      {cepBusy && <span className="co-cep-spin" aria-hidden="true" />}
                    </div>
                  </CoField>
                  <CoField label="Número" error={errors.numero}>
                    <input className="co-fld-input" data-field="numero" name="lola_num" inputMode="numeric" autoComplete="off" placeholder="123" value={form.numero} onChange={setField("numero")} onBlur={() => validateField("numero")} onKeyDown={onFieldEnter} />
                  </CoField>
                  <CoField label="Endereço" wide error={errors.endereco}>
                    <input className="co-fld-input" data-field="endereco" name="lola_rua" autoComplete="off" placeholder="Rua, avenida…" value={form.endereco} onChange={setField("endereco")} onBlur={() => validateField("endereco")} onKeyDown={onFieldEnter} />
                  </CoField>
                  <CoField label="Complemento" optional>
                    <input className="co-fld-input" data-field="complemento" name="lola_comp" autoComplete="off" placeholder="Apto, bloco, ponto de referência" value={form.complemento} onChange={setField("complemento")} onKeyDown={onFieldEnter} />
                  </CoField>
                  <CoField label="Bairro" error={errors.bairro}>
                    <input className="co-fld-input" data-field="bairro" name="lola_bairro" autoComplete="off" placeholder="Seu bairro" value={form.bairro} onChange={setField("bairro")} onBlur={() => validateField("bairro")} onKeyDown={onFieldEnter} />
                  </CoField>
                  <CoField label="Cidade" error={errors.cidade}>
                    <input className="co-fld-input" data-field="cidade" name="lola_cidade" autoComplete="off" placeholder="Sua cidade" value={form.cidade} onChange={setField("cidade")} onBlur={() => validateField("cidade")} onKeyDown={onFieldEnter} />
                  </CoField>
                  <CoField label="UF" error={errors.uf}>
                    <input className="co-fld-input" data-field="uf" name="lola_uf" maxLength={2} autoComplete="off" placeholder="UF" value={form.uf} onChange={(e) => { clearError("uf"); setForm((f) => ({ ...f, uf: e.target.value.replace(/[^a-zA-Z]/g, "").toUpperCase().slice(0, 2) })); }} onBlur={() => validateField("uf")} onKeyDown={onFieldEnter} />
                  </CoField>
                </div>
              </div>

              <div className="co-form-actions">
                <button type="button" className="co-btn-save" onClick={saveAddress}>Salvar e continuar</button>
                {address && <button type="button" className="co-btn-cancel" onClick={() => setAddrOpen(false)}>Cancelar</button>}
              </div>
              <p className="co-form-secure"><LockIcon /> Ambiente seguro. Seus dados são usados apenas para concluir o pedido.</p>
            </div>
          )}

          {address && !addrOpen ? (
            <div className="co-addr-selected">
              <div className="co-addr-top">
                <span className="co-addr-name">{address.nome}</span>
                <span className="co-addr-pill">Endereço selecionado</span>
              </div>
              <p className="co-addr-text">{address.endereco}, {address.numero}{address.complemento ? ` - ${address.complemento}` : ""}.{address.bairro ? ` ${address.bairro},` : ""} {address.cidade} - {address.uf}. CEP {address.cep}</p>
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
              {hasDeliveryContext ? (
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
          {/* Coupon is offered only on the payment step, not while adding the address. */}
          <OrderSummary subtotal={subtotal} frete={frete} discount={discount} count={count} coupon={null} freeShipping={freeShipping}>
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
