"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  useAccount,
  login,
  logout,
  createAccount,
  type AccountAddress,
} from "./accountStore";
import "./account.css";

const formatCep = (value: string) => {
  const d = value.replace(/\D/g, "").slice(0, 8);
  return d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d;
};

// Resolve the CEP to a full address so the created account already carries
// everything the checkout needs to pre-fill.
async function resolveCep(cep: string): Promise<AccountAddress | undefined> {
  const digits = cep.replace(/\D/g, "");
  if (digits.length !== 8) return undefined;
  try {
    const res = await fetch(`/api/cep/${digits}`, { cache: "no-store" });
    const data = (await res.json()) as { erro?: boolean; logradouro?: string; bairro?: string; localidade?: string; uf?: string };
    if (!res.ok || data.erro) return undefined;
    return { endereco: data.logradouro, bairro: data.bairro, cidade: data.localidade, uf: data.uf };
  } catch {
    return undefined;
  }
}

type View = "dashboard" | "dados" | "pedidos";

function CreateAccountModal({
  initialEmail,
  onClose,
}: {
  initialEmail: string;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(initialEmail);
  const [cep, setCep] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // Close on Escape, like the source's own modals.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const submit = async () => {
    setError(null);
    if (!name.trim()) return setError("Informe seu nome.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) return setError("Informe um e-mail válido.");
    if (cep.replace(/\D/g, "").length !== 8) return setError("Informe um CEP válido com 8 dígitos.");
    if (password.length < 6) return setError("A senha precisa ter ao menos 6 caracteres.");
    if (password !== confirm) return setError("As senhas não conferem.");
    setBusy(true);
    try {
      const address = await resolveCep(cep);
      await createAccount({ name, email, cep: formatCep(cep), password, address });
      onClose();
    } catch {
      setError("Não foi possível criar a conta agora. Tente novamente.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="lac-modal-backdrop" role="dialog" aria-modal="true" aria-label="Criar conta" onClick={onClose}>
      <div className="lac-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lac-modal-close" aria-label="Fechar" onClick={onClose}>×</button>
        <h2 className="lac-modal-title">Criar sua conta</h2>
        <p className="lac-modal-sub">Não encontramos uma conta com esse e-mail. Crie a sua para agilizar o checkout.</p>
        <div className="lac-form">
          <label>Nome completo
            <input name="lac_name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>E-mail
            <input name="lac_email" type="text" inputMode="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>CEP
            <input name="lac_cep" inputMode="numeric" autoComplete="off" maxLength={9} value={cep} onChange={(e) => setCep(formatCep(e.target.value))} />
          </label>
          <label>Senha
            <input name="lac_pw" type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>Confirmar senha
            <input name="lac_pw2" type="password" autoComplete="new-password" value={confirm} onChange={(e) => setConfirm(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); void submit(); } }} />
          </label>
          {error && <p className="lac-error" role="alert">{error}</p>}
          <button type="button" className="lac-btn" disabled={busy} onClick={() => void submit()}>
            {busy ? "Criando…" : "Criar conta"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AccountPanel({ initialView = "dashboard" }: { initialView?: View }) {
  const account = useAccount();
  const [view, setView] = useState<View>(initialView);

  // Login form state.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  const doLogin = async () => {
    setError(null);
    if (!email.trim() || !password) { setError("Informe e-mail e senha."); return; }
    setBusy(true);
    try {
      const result = await login(email, password);
      if (result.status === "not-found") {
        // The account doesn't exist — open the create-account popup.
        setShowCreate(true);
      } else if (result.status === "bad-password") {
        setError("Senha incorreta. Tente novamente.");
      }
    } finally {
      setBusy(false);
    }
  };

  // Logged out → login card (+ create-account popup when the e-mail is unknown).
  if (!account) {
    return (
      <div className="lac-wrap">
        <div className="lac-card">
          <h1 className="lac-h1">Entrar / Criar Conta</h1>
          <p className="lac-lead">Acesse sua conta para uma experiência personalizada e um checkout mais rápido.</p>
          <div className="lac-form">
            <label>E-mail
              <input name="lac_login_email" type="text" inputMode="email" autoComplete="off" value={email} onChange={(e) => { setEmail(e.target.value); setError(null); }} />
            </label>
            <label>Senha
              <input name="lac_login_pw" type="password" autoComplete="off" value={password} onChange={(e) => { setPassword(e.target.value); setError(null); }} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); void doLogin(); } }} />
            </label>
            {error && <p className="lac-error" role="alert">{error}</p>}
            <button type="button" className="lac-btn" disabled={busy} onClick={() => void doLogin()}>
              {busy ? "Entrando…" : "Entrar"}
            </button>
            <button type="button" className="lac-btn lac-btn-ghost" onClick={() => setShowCreate(true)}>Criar conta</button>
          </div>
        </div>
        {showCreate && <CreateAccountModal initialEmail={email} onClose={() => setShowCreate(false)} />}
      </div>
    );
  }

  // Logged in → the functional panel.
  const addr = account.address;
  const hasAddr = addr && (addr.endereco || addr.cidade);
  return (
    <div className="lac-wrap">
      <div className="lac-panel">
        <aside className="lac-side">
          <p className="lac-hello">Olá,<br /><strong>{account.name.split(" ")[0] || account.name}</strong></p>
          <nav className="lac-nav">
            <button type="button" className={view === "dashboard" ? "on" : ""} onClick={() => setView("dashboard")}>Início</button>
            <button type="button" className={view === "dados" ? "on" : ""} onClick={() => setView("dados")}>Dados cadastrais</button>
            <button type="button" className={view === "pedidos" ? "on" : ""} onClick={() => setView("pedidos")}>Meus pedidos</button>
            <button type="button" className="lac-logout" onClick={() => logout()}>Sair</button>
          </nav>
        </aside>
        <section className="lac-content">
          {view === "dashboard" && (
            <>
              <h1 className="lac-h1">Painel do cliente</h1>
              <p className="lac-lead">Seus dados já estão salvos e serão usados automaticamente no checkout.</p>
              <div className="lac-cards">
                <div className="lac-info">
                  <h3>Dados</h3>
                  <p>{account.name}</p>
                  <p>{account.email}</p>
                </div>
                <div className="lac-info">
                  <h3>Endereço</h3>
                  <p>CEP {account.cep || "—"}</p>
                  {hasAddr ? <p>{[addr?.endereco, addr?.bairro].filter(Boolean).join(", ")}</p> : null}
                  {hasAddr ? <p>{[addr?.cidade, addr?.uf].filter(Boolean).join(" / ")}</p> : null}
                </div>
              </div>
              <Link href="/checkout/easy" className="lac-btn lac-btn-inline">Ir para a sacola</Link>
            </>
          )}
          {view === "dados" && (
            <>
              <h1 className="lac-h1">Dados cadastrais</h1>
              <div className="lac-datalist">
                <div><span>Nome</span><strong>{account.name}</strong></div>
                <div><span>E-mail</span><strong>{account.email}</strong></div>
                <div><span>CEP</span><strong>{account.cep || "—"}</strong></div>
                {hasAddr && <div><span>Endereço</span><strong>{[addr?.endereco, addr?.bairro, addr?.cidade, addr?.uf].filter(Boolean).join(", ")}</strong></div>}
              </div>
            </>
          )}
          {view === "pedidos" && (
            <>
              <h1 className="lac-h1">Meus pedidos</h1>
              <p className="lac-empty">Você ainda não possui pedidos. Que tal começar agora?</p>
              <Link href="/" className="lac-btn lac-btn-inline">Ver produtos</Link>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
