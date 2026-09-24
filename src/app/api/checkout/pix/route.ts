import { NextResponse } from "next/server";
import QRCode from "qrcode";
import { createCharge, jungleConfigured, JungleError } from "@/lib/jungle";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface CartItem { id: string; name: string; quantity: number; price: number }
interface Body {
  items: CartItem[];
  frete?: number;
  discount?: number;
  customer: { name?: string; email?: string; doc?: string; phone?: string };
  metadata?: Record<string, unknown>;
}

const onlyDigits = (s: string) => s.replace(/\D/g, "");

export async function POST(request: Request) {
  if (!jungleConfigured()) {
    return NextResponse.json({ success: false, error: "Pagamento não configurado (JUNGLE_API_KEY ausente)." }, { status: 503 });
  }
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ success: false, error: "JSON inválido." }, { status: 400 });
  }

  const items = Array.isArray(body.items) ? body.items : [];
  if (!items.length) return NextResponse.json({ success: false, error: "Sacola vazia." }, { status: 400 });

  const name = (body.customer?.name || "").trim();
  const email = (body.customer?.email || "").trim().toLowerCase();
  const doc = onlyDigits(body.customer?.doc || "");
  if (!name || !email || !doc) {
    return NextResponse.json({ success: false, error: "Informe nome, e-mail e CPF para gerar o PIX." }, { status: 400 });
  }

  const subtotal = items.reduce((n, i) => n + Number(i.price) * Number(i.quantity), 0);
  const frete = Number.isFinite(body.frete) ? Number(body.frete) : 0;
  const discount = Number.isFinite(body.discount) ? Math.max(0, Number(body.discount)) : 0;
  // The gateway charges a single product.value; round to 2 decimals (reais).
  // Never let a coupon drive the charge to zero or below.
  const value = Math.max(0.01, Math.round((subtotal + frete - discount) * 100) / 100);
  const productName = items.length === 1 ? items[0].name : `Pedido Lola (${items.reduce((n, i) => n + i.quantity, 0)} itens)`;

  // Forward the buyer's IP/User-Agent (attribution + Meta CAPI), never the server's.
  const fwd = request.headers.get("x-forwarded-for");
  const ip = fwd ? fwd.split(",")[0].trim() : undefined;
  const userAgent = request.headers.get("user-agent") || undefined;

  try {
    const charge = await createCharge({
      product: { name: productName, value },
      customer: {
        name,
        email,
        doc,
        docType: doc.length > 11 ? "cnpj" : "cpf",
        phone: body.customer?.phone ? onlyDigits(body.customer.phone) : undefined,
        ip,
      },
      expiracaoSegundos: 3600,
      callbackUrl: process.env.JUNGLE_CALLBACK_URL || undefined,
      metadata: {
        ...(body.metadata || {}),
        itens: items.map((i) => ({ id: i.id, nome: i.name, qtd: i.quantity })),
        ...(userAgent ? { userAgent } : {}),
      },
    });

    // QR from the EMV copia-e-cola so the client just renders an <img>.
    const qrImage = await QRCode.toDataURL(charge.pixCode, { margin: 1, width: 320 });

    return NextResponse.json({
      success: true,
      data: {
        transactionId: charge.transactionId,
        pixCode: charge.pixCode,
        qrImage,
        expiresAt: charge.expiresAt,
        amount: charge.amount,
      },
    });
  } catch (e) {
    const err = e instanceof JungleError ? e : new JungleError(String(e));
    // Upstream 5xx (transient gateway failures) shouldn't surface raw to the buyer.
    const upstream5xx = !err.status || err.status >= 500;
    const message = upstream5xx ? "Não foi possível gerar o PIX agora. Tente novamente em instantes." : err.message;
    return NextResponse.json({ success: false, error: message }, { status: upstream5xx ? 502 : err.status });
  }
}
