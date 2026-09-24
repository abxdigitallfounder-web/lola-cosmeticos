// CEP lookup for the product page's "Calcular frete e prazo de entrega" widget.
// The captured markup ships the input (#PostalCode), the OK button and the
// .error-delivery / .delivery-response slots; this wires them to ViaCEP (public,
// CORS-enabled, no key) and renders the address plus delivery estimates.
//
// Shipping prices and days mirror the checkout. The address itself is real
// (from ViaCEP).

interface ViaCep {
  cep?: string;
  logradouro?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  erro?: boolean;
}

const money = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const mountedBoxes = new WeakSet<HTMLElement>();

function maskCep(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 8);
  return d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d;
}

export function mountDeliveryFee(root: HTMLElement): () => void {
  // A product source can contain both the desktop and mobile delivery widget.
  // Do not use querySelector here: it silently leaves the second widget inert.
  const boxes = Array.from(root.querySelectorAll<HTMLElement>(".wd-product-deliveryfee"));
  if (!boxes.length) return () => {};
  const cleanups: Array<() => void> = [];

  for (const box of boxes) {
    if (mountedBoxes.has(box)) continue;
    const input = box.querySelector<HTMLInputElement>("input[name='PostalCode'], #PostalCode");
    const button = box.querySelector<HTMLButtonElement>(".button-wrapper button, button[type='submit']");
    const errorEl = box.querySelector<HTMLElement>(".error-delivery");
    // In the captured product markup the response panel is a sibling of the
    // widget, inside the same delivery column.
    const respEl = box.querySelector<HTMLElement>(".delivery-response")
      ?? box.parentElement?.querySelector<HTMLElement>(".delivery-response");
    if (!input || !respEl || !errorEl) continue;
    mountedBoxes.add(box);
    const form = input.closest("form");
    let busy = false;
    let automaticLookup: number | undefined;
    let lastCep = "";

  const showError = (msg: string) => { respEl.innerHTML = ""; errorEl.textContent = msg; errorEl.classList.add("lola-cep-error"); };
  const clearError = () => { errorEl.textContent = ""; errorEl.classList.remove("lola-cep-error"); };

  const lookup = async () => {
    if (busy) return;
    const cep = (input.value || "").replace(/\D/g, "");
    clearError();
    if (cep.length !== 8) { showError("Digite um CEP válido com 8 dígitos."); return; }
    busy = true;
    respEl.innerHTML = `<p class="lola-cep-loading">Consultando CEP…</p>`;
    try {
      const r = await fetch(`/api/cep/${cep}`, { cache: "no-store" });
      const data = (await r.json()) as ViaCep;
      if (!r.ok || data.erro) { respEl.innerHTML = ""; showError("CEP não encontrado. Confira o número."); return; }
      const uf = (data.uf || "").toUpperCase();
      const rua = [data.logradouro, data.bairro].filter(Boolean).join(", ");
      const cidade = [data.localidade, uf].filter(Boolean).join(" - ");
      const cepFmt = maskCep(cep);
      respEl.innerHTML = `
        <div class="lola-cep-result">
          <p class="lola-cep-addr">${rua ? `<strong>${rua}</strong><br>` : ""}${cidade} · CEP ${cepFmt}</p>
          <ul class="lola-cep-options">
            <li><span class="lola-cep-name">JT - Normal</span><span class="lola-cep-price">${money(7.9)}</span><span class="lola-cep-eta">2 dias úteis</span></li>
            <li><span class="lola-cep-name">PAC - Normal</span><span class="lola-cep-price">${money(9.2)}</span><span class="lola-cep-eta">4 dias úteis</span></li>
          </ul>
        </div>`;
      lastCep = cep;
    } catch {
      respEl.innerHTML = "";
      showError("Não foi possível consultar o CEP agora. Tente novamente.");
    } finally {
      busy = false;
    }
  };

  const onSubmit = (e?: Event) => { e?.preventDefault(); void lookup(); };
  const onInput = () => {
    input.value = maskCep(input.value);
    clearError();
    window.clearTimeout(automaticLookup);
    const cep = input.value.replace(/\D/g, "");
    if (cep.length !== 8) {
      lastCep = "";
      respEl.innerHTML = "";
      return;
    }
    if (cep === lastCep) return;
    automaticLookup = window.setTimeout(() => { void lookup(); }, 250);
  };
  const onKeydown = (e: KeyboardEvent) => { if (e.key === "Enter") { e.preventDefault(); void lookup(); } };

    button?.addEventListener("click", onSubmit);
    form?.addEventListener("submit", onSubmit);
    input.addEventListener("input", onInput);
    input.addEventListener("keydown", onKeydown);
    cleanups.push(() => {
      button?.removeEventListener("click", onSubmit);
      form?.removeEventListener("submit", onSubmit);
      input.removeEventListener("input", onInput);
      input.removeEventListener("keydown", onKeydown);
      window.clearTimeout(automaticLookup);
      mountedBoxes.delete(box);
    });
  }

  return () => cleanups.forEach((cleanup) => cleanup());
}
