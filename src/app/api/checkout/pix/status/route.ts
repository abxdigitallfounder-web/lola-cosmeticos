import { NextResponse } from "next/server";
import { findTransaction, jungleConfigured, JungleError } from "@/lib/jungle";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// The PIX panel polls this while it waits. A production integration would read
// status from its own DB (written by the webhook); with no DB here, we ask the
// gateway directly. Only PAID means paid (MED = chargeback → treat as unpaid).
export async function GET(request: Request) {
  if (!jungleConfigured()) {
    return NextResponse.json({ success: false, error: "Pagamento não configurado." }, { status: 503 });
  }
  const id = new URL(request.url).searchParams.get("transactionId");
  if (!id) return NextResponse.json({ success: false, error: "transactionId ausente." }, { status: 400 });

  try {
    const tx = await findTransaction(id);
    if (!tx) return NextResponse.json({ success: true, data: { status: "PENDING" } });
    return NextResponse.json({
      success: true,
      data: { status: tx.status, paid: tx.status === "PAID", endToEndId: tx.endToEndId ?? null, paidAt: tx.paidAt ?? null },
    });
  } catch (e) {
    const err = e instanceof JungleError ? e : new JungleError(String(e));
    return NextResponse.json({ success: false, error: err.message }, { status: err.status && err.status >= 400 ? err.status : 502 });
  }
}
