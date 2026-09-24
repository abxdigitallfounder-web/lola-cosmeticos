import { NextResponse } from "next/server";

export async function GET(_request: Request, context: { params: Promise<{ cep: string }> }) {
  const { cep } = await context.params;
  const digits = cep.replace(/\D/g, "");
  if (digits.length !== 8) return NextResponse.json({ error: "CEP inválido" }, { status: 400 });
  try {
    const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`, { cache: "no-store" });
    if (!response.ok) return NextResponse.json({ error: "Falha ao consultar CEP" }, { status: 502 });
    return NextResponse.json(await response.json(), { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "Serviço de CEP indisponível" }, { status: 502 });
  }
}
