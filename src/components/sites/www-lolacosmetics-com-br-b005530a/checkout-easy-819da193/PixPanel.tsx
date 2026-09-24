"use client";
import { useEffect, useRef, useState } from "react";
import { money } from "../shared/cartStore";

export interface PixCharge {
  transactionId: string;
  pixCode: string;
  qrImage: string;
  amount: number;
  expiresAt: string;
}

export default function PixPanel({ charge, onPaid }: { charge: PixCharge; onPaid: () => void }) {
  const [copied, setCopied] = useState(false);
  const [paid, setPaid] = useState(false);
  const [left, setLeft] = useState(() => Math.max(0, Math.floor((+new Date(charge.expiresAt) - Date.now()) / 1000)));
  const onPaidRef = useRef(onPaid);
  useEffect(() => { onPaidRef.current = onPaid; }, [onPaid]);

  // Poll the gateway (via our server route) until PAID or the code expires.
  useEffect(() => {
    let stop = false;
    const tick = async () => {
      try {
        const r = await fetch(`/api/checkout/pix/status?transactionId=${encodeURIComponent(charge.transactionId)}`, { cache: "no-store" });
        const j = await r.json();
        if (!stop && j?.data?.paid) { setPaid(true); onPaidRef.current(); }
      } catch {}
    };
    const poll = setInterval(() => { if (!paid) tick(); }, 4000);
    tick();
    return () => { stop = true; clearInterval(poll); };
  }, [charge.transactionId, paid]);

  // Countdown to expiry.
  useEffect(() => {
    const t = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  const copy = async () => {
    try { await navigator.clipboard.writeText(charge.pixCode); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {}
  };
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  if (paid) {
    return (
      <div className="co-pix co-pix-paid">
        <div className="co-pix-check">✓</div>
        <h3>Pagamento aprovado!</h3>
        <p>Recebemos o seu PIX de {money(charge.amount)}. Obrigado pela compra.</p>
      </div>
    );
  }

  return (
    <div className="co-pix">
      <h3>Pague com PIX</h3>
      <p className="co-pix-sub">Escaneie o QR Code no app do seu banco ou use o copia-e-cola. Valor: <strong>{money(charge.amount)}</strong></p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="co-pix-qr" src={charge.qrImage} alt="QR Code do PIX" width={220} height={220} />
      <div className="co-pix-code">
        <input readOnly value={charge.pixCode} aria-label="Código PIX copia-e-cola" onFocus={(e) => e.currentTarget.select()} />
        <button type="button" onClick={copy}>{copied ? "Copiado!" : "Copiar"}</button>
      </div>
      <p className="co-pix-timer">{left > 0 ? <>Expira em <strong>{mm}:{ss}</strong> · aguardando pagamento…</> : <>Código expirado. Gere um novo PIX.</>}</p>
    </div>
  );
}
