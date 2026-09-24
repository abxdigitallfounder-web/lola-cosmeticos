import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

// Server-only client for the Jungle Pagamentos seller API (PIX).
// Contract: sections 1–7 of the integration guide. All money is in reais.
// The API key and webhook secret live in the environment and never reach the
// browser — this module imports "server-only" so a client import fails the build.

const BASE = (process.env.JUNGLE_API_BASE || "https://app.junglepagamentos.com/api").replace(/\/$/, "");
const API_KEY = process.env.JUNGLE_API_KEY || "";
const WEBHOOK_SECRET = process.env.JUNGLE_WEBHOOK_SECRET || "";

export class JungleError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.status = status;
  }
}

export function jungleConfigured(): boolean {
  return Boolean(API_KEY);
}

type Envelope<T> = { success: boolean; error?: string; data?: T; meta?: unknown };

async function call<T>(method: string, path: string, body?: unknown, params?: Record<string, string>): Promise<Envelope<T>> {
  if (!API_KEY) throw new JungleError("JUNGLE_API_KEY ausente no ambiente", 500);
  const url = new URL(BASE + path);
  if (params) for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const headers: Record<string, string> = { "X-Api-Key": API_KEY };
  let payload: string | undefined;
  if (body !== undefined) {
    payload = JSON.stringify(body);
    headers["Content-Type"] = "application/json";
  }
  let resp: Response;
  try {
    resp = await fetch(url, { method, headers, body: payload, cache: "no-store", signal: AbortSignal.timeout(15000) });
  } catch (e) {
    throw new JungleError(`falha de rede: ${e instanceof Error ? e.message : String(e)}`);
  }
  let json: Envelope<T>;
  try {
    json = (await resp.json()) as Envelope<T>;
  } catch {
    throw new JungleError(`resposta não-JSON (HTTP ${resp.status})`, resp.status);
  }
  if (!json.success) {
    const raw = (json as { error?: unknown }).error;
    const msg = typeof raw === "string" ? raw : raw ? JSON.stringify(raw) : `HTTP ${resp.status}`;
    throw new JungleError(msg, resp.status);
  }
  return json;
}

export interface ChargeInput {
  product: { name: string; value: number };
  customer: { name: string; email: string; doc: string; docType?: "cpf" | "cnpj"; phone?: string; ip?: string };
  expiracaoSegundos?: number;
  callbackUrl?: string;
  metadata?: Record<string, unknown>;
}

export interface ChargeData {
  transactionId: string;
  pixCode: string;
  expiresAt: string;
  amount: number;
  feeAmount: number;
  netAmount: number;
}

export async function createCharge(input: ChargeInput): Promise<ChargeData> {
  const { data } = await call<ChargeData>("POST", "/gateway/charges", input);
  if (!data) throw new JungleError("resposta sem data");
  return data;
}

export interface TransactionData {
  id: string;
  status: "PENDING" | "PAID" | "FAILED" | "EXPIRED" | "MED";
  amount: number;
  endToEndId?: string | null;
  paidAt?: string | null;
  pixCode?: string | null;
  metadata?: Record<string, unknown>;
}

// No database here, so status is read by scanning the workspace transactions and
// matching the id. Bounded to a few pages so a busy workspace can't stall the poll.
export async function findTransaction(transactionId: string, maxPages = 3): Promise<TransactionData | null> {
  for (let page = 1; page <= maxPages; page++) {
    const res = await call<TransactionData[]>("GET", "/gateway/transactions", undefined, { page: String(page), limit: "100" });
    const items = res.data || [];
    const hit = items.find((t) => t.id === transactionId);
    if (hit) return hit;
    const meta = res.meta as { pages?: number } | undefined;
    if (meta?.pages && page >= meta.pages) break;
    if (items.length === 0) break;
  }
  return null;
}

// HMAC-SHA256 hex of the RAW webhook body with the webhook secret (section 4.1),
// compared in constant time.
export function verifyWebhook(rawBody: string, signatureHeader: string | null): boolean {
  if (!WEBHOOK_SECRET || !signatureHeader) return false;
  const expected = createHmac("sha256", WEBHOOK_SECRET).update(rawBody, "utf8").digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signatureHeader);
  return a.length === b.length && timingSafeEqual(a, b);
}
