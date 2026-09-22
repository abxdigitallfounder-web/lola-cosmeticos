"use client";
import { useEffect, useRef, useState } from "react";
import type { LolaProduct } from "./types";
import "./shop.css";
const money = (value:number) => value.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
export default function ShopInteractions() {
 const [cart,setCart]=useState<LolaProduct[]>([]);
 const [open,setOpen]=useState(false);
 const [checkout,setCheckout]=useState(false);
 const dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{
  try { const saved=JSON.parse(localStorage.getItem("lola-demo-cart")||"[]"); if(Array.isArray(saved))setCart(saved); } catch {}
  const show=()=>{setCheckout(false);setOpen(true);};
  const click=(event:MouseEvent)=>{
   const target=event.target as HTMLElement;
   const buy=target.closest(".wd-product-line .btn-buy");
   if(buy){event.preventDefault();const card=buy.closest<HTMLElement>(".wd-product-line");if(!card)return;
    const product:LolaProduct={id:card.dataset.productId||"",name:card.querySelector(".name")?.textContent?.trim()||"Produto Lola",image:card.querySelector<HTMLImageElement>(".medias img")?.src||"",price:Number((card.querySelector(".sale-price")?.textContent||"0").replace(/[^\d,]/g,"").replace(",",".")),quantity:1};
    setCart(old=>old.some(p=>p.id===product.id)?old.map(p=>p.id===product.id?{...p,quantity:p.quantity+1}:p):[...old,product]);show();
   }
   const wish=target.closest<HTMLButtonElement>(".wd-product-line-wishlist button");
   if(wish){event.preventDefault();const id=wish.closest<HTMLElement>(".wd-product-line")?.dataset.productId;if(!id)return;let ids:string[]=[];try{ids=JSON.parse(localStorage.getItem("lola-demo-wishlist")||"[]")}catch{};const enabled=!ids.includes(id);ids=enabled?[...ids,id]:ids.filter(x=>x!==id);localStorage.setItem("lola-demo-wishlist",JSON.stringify(ids));document.querySelectorAll(`[data-product-id="${id}"] .wd-product-line-wishlist button`).forEach(b=>{b.classList.toggle("lola-liked",enabled);b.setAttribute("aria-pressed",String(enabled));b.setAttribute("aria-label",enabled?"Remover dos favoritos":"Adicionar aos favoritos");});}
  };
  document.addEventListener("click",click);
  window.addEventListener("lola:open-cart",show);
  const tick=()=>{const now=new Date();const end=new Date(now);end.setHours(23,59,59,999);const sec=Math.max(0,Math.floor((+end-+now)/1000));for(const [selector,value] of [[".hours",Math.floor(sec/3600)],[".minutes",Math.floor(sec/60)%60],[".seconds",sec%60]] as const){const el=document.querySelector(`#contador-lola ${selector}`);if(el){const number=el.querySelector("span,strong,b");if(number)number.textContent=String(value).padStart(2,"0");}}};
  tick();const timer=setInterval(tick,1000);
  return()=>{document.removeEventListener("click",click);window.removeEventListener("lola:open-cart",show);clearInterval(timer);};
 },[]);
 useEffect(()=>{localStorage.setItem("lola-demo-cart",JSON.stringify(cart));document.querySelectorAll("#header .basket-size,#header .basket-size em,#header .wd-checkout-basket-summaryheader .basket-size").forEach(e=>e.textContent=String(cart.reduce((n,p)=>n+p.quantity,0)));},[cart]);
 useEffect(()=>{if(open)dialog.current?.showModal();else dialog.current?.close();},[open]);
 const update=(id:string,delta:number)=>setCart(items=>items.map(p=>p.id===id?{...p,quantity:p.quantity+delta}:p).filter(p=>p.quantity>0));
 const total=cart.reduce((n,p)=>n+p.price*p.quantity,0);
 return <dialog ref={dialog} className="lola-cart" onCancel={()=>setOpen(false)} onClick={e=>{if(e.target===e.currentTarget)setOpen(false)}}><div className="lola-cart-inner"><button className="lola-cart-close" aria-label="Fechar sacola" onClick={()=>setOpen(false)}>×</button><h2>Minha sacola</h2><p>contém {cart.reduce((n,p)=>n+p.quantity,0)} itens</p>{!cart.length?<div className="lola-empty"><strong>:(</strong><p>Não há produtos na sua sacola. Que tal conferir algumas ofertas?</p></div>:<div className="lola-cart-products">{cart.map(p=><article key={p.id}><img src={p.image} alt={p.name}/><div><h3>{p.name}</h3><strong>{money(p.price)}</strong><div className="lola-quantity"><button aria-label={`Diminuir ${p.name}`} onClick={()=>update(p.id,-1)}>−</button><span>{p.quantity}</span><button aria-label={`Aumentar ${p.name}`} onClick={()=>update(p.id,1)}>+</button><button className="lola-remove" onClick={()=>setCart(items=>items.filter(x=>x.id!==p.id))}>Remover</button></div></div></article>)}</div>}<div className="lola-cart-total"><span>Subtotal</span><strong>{money(total)}</strong></div>{checkout?<p role="status" className="lola-demo-notice">Esta é uma sacola de demonstração. Nenhum pedido foi enviado e nenhum pagamento será cobrado.</p>:<button className="lola-checkout" disabled={!cart.length} onClick={()=>setCheckout(true)}>Finalizar Compra</button>}<button className="lola-continue" onClick={()=>setOpen(false)}>Continuar comprando</button></div></dialog>;
}
