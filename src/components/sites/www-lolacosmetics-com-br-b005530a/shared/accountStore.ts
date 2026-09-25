"use client";
import { useSyncExternalStore } from "react";

// The customer panel, the login page and the checkout are three views of one
// account. They all read/write through here so a profile created in the popup
// shows up in the panel and pre-fills the checkout without a reload — the same
// localStorage + useSyncExternalStore pattern the cart uses (see cartStore.ts).
//
// This is a demo clone: there is no auth backend, so accounts live in the
// browser. Passwords are stored only as a SHA-256 hash (never in clear text),
// which keeps the stored blob from exposing the raw password even though this
// is not a substitute for real server-side authentication.

const ACCOUNTS_KEY = "lola-accounts"; // Record<emailLowercase, Account>
const SESSION_KEY = "lola-session"; // the logged-in account's email (lowercase)
const CHANGED = "lola:account-changed";

export type AccountAddress = {
  endereco?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
};

export type Account = {
  name: string;
  email: string;
  cep: string;
  passwordHash: string;
  address?: AccountAddress;
  createdAt: number;
};

// A profile without the secret — this is what the UI reads.
export type PublicAccount = Omit<Account, "passwordHash">;

export type CreateInput = {
  name: string;
  email: string;
  cep: string;
  password: string;
  address?: AccountAddress;
};

export type LoginResult =
  | { status: "ok"; account: PublicAccount }
  | { status: "not-found" }
  | { status: "bad-password" };

const normalizeEmail = (email: string) => email.trim().toLowerCase();
const strip = (account: Account): PublicAccount => {
  const rest: PublicAccount & { passwordHash?: string } = { ...account };
  delete rest.passwordHash;
  return rest;
};

// SHA-256 hex. crypto.subtle needs a secure context (https or localhost), which
// production and local dev both are; the fallback keeps a dev over plain http
// from throwing rather than pretending to be secure.
async function hashPassword(password: string): Promise<string> {
  try {
    const data = new TextEncoder().encode(`lola::${password}`);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  } catch {
    let h = 0;
    for (let i = 0; i < password.length; i++) h = (Math.imul(31, h) + password.charCodeAt(i)) | 0;
    return `weak-${(h >>> 0).toString(16)}`;
  }
}

function readAccounts(): Record<string, Account> {
  if (typeof window === "undefined") return {};
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "{}");
    return saved && typeof saved === "object" ? (saved as Record<string, Account>) : {};
  } catch {
    return {};
  }
}

function writeAccounts(accounts: Record<string, Account>) {
  try {
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
  } catch {}
}

// The current account is cached by identity so useSyncExternalStore only
// re-renders when it actually changes, never on every read.
let cache: PublicAccount | null = null;
let cacheReady = false;

function computeCurrent(): PublicAccount | null {
  if (typeof window === "undefined") return null;
  let email = "";
  try {
    email = localStorage.getItem(SESSION_KEY) || "";
  } catch {
    return null;
  }
  if (!email) return null;
  const account = readAccounts()[normalizeEmail(email)];
  return account ? strip(account) : null;
}

function refresh() {
  cache = computeCurrent();
  cacheReady = true;
}

function notify() {
  refresh();
  try {
    window.dispatchEvent(new Event(CHANGED));
  } catch {}
}

export function getCurrentAccount(): PublicAccount | null {
  if (typeof window === "undefined") return null;
  if (!cacheReady) refresh();
  return cache;
}

export function findAccount(email: string): boolean {
  return Boolean(readAccounts()[normalizeEmail(email)]);
}

export async function createAccount(input: CreateInput): Promise<PublicAccount> {
  const email = normalizeEmail(input.email);
  const accounts = readAccounts();
  const account: Account = {
    name: input.name.trim(),
    email,
    cep: input.cep.trim(),
    passwordHash: await hashPassword(input.password),
    address: input.address,
    createdAt: Date.now(),
  };
  accounts[email] = account;
  writeAccounts(accounts);
  try {
    localStorage.setItem(SESSION_KEY, email);
  } catch {}
  notify();
  return strip(account);
}

export async function login(email: string, password: string): Promise<LoginResult> {
  const key = normalizeEmail(email);
  const account = readAccounts()[key];
  if (!account) return { status: "not-found" };
  const hash = await hashPassword(password);
  if (hash !== account.passwordHash) return { status: "bad-password" };
  try {
    localStorage.setItem(SESSION_KEY, key);
  } catch {}
  notify();
  return { status: "ok", account: strip(account) };
}

export function logout() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {}
  notify();
}

// Merge a few extra fields into the logged-in profile (e.g. the address the
// checkout resolved from the CEP) so everything stays in one place.
export function updateCurrentAccount(patch: Partial<Pick<Account, "name" | "cep">> & { address?: AccountAddress }): PublicAccount | null {
  const current = getCurrentAccount();
  if (!current) return null;
  const accounts = readAccounts();
  const account = accounts[current.email];
  if (!account) return null;
  if (patch.name !== undefined) account.name = patch.name;
  if (patch.cep !== undefined) account.cep = patch.cep;
  if (patch.address) account.address = { ...account.address, ...patch.address };
  accounts[current.email] = account;
  writeAccounts(accounts);
  notify();
  return strip(account);
}

function subscribe(onChange: () => void) {
  const local = () => onChange();
  const foreign = (event: StorageEvent) => {
    if (event.key !== null && event.key !== ACCOUNTS_KEY && event.key !== SESSION_KEY) return;
    refresh();
    onChange();
  };
  window.addEventListener(CHANGED, local);
  window.addEventListener("storage", foreign);
  return () => {
    window.removeEventListener(CHANGED, local);
    window.removeEventListener("storage", foreign);
  };
}

export function useAccount(): PublicAccount | null {
  return useSyncExternalStore(subscribe, getCurrentAccount, () => null);
}
