import { verifyWebhook } from "@/lib/jungle";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Webhook receiver (section 4). Reads the RAW body, verifies X-Signature with the
// webhook secret, and answers 200 fast. There is no database in this clone, so
// this endpoint validates and acknowledges; wire the paid event to order
// fulfillment (and persist by transactionId, idempotently) once orders are stored.
export async function POST(request: Request) {
  const raw = await request.text(); // raw bytes, exactly as received — never re-serialize
  if (!verifyWebhook(raw, request.headers.get("x-signature"))) {
    return new Response("invalid signature", { status: 401 });
  }
  let event: { event?: string; data?: { transactionId?: string; status?: string } };
  try {
    event = JSON.parse(raw);
  } catch {
    return new Response("bad json", { status: 400 });
  }
  // Only transaction.paid + status PAID releases an order, idempotently by
  // transactionId. MED (chargeback) must be treated as unpaid.
  if (event.event === "transaction.paid" && event.data?.status === "PAID") {
    // TODO: mark the order paid by event.data.transactionId (idempotent) and fulfill.
  }
  return new Response("ok", { status: 200 });
}
