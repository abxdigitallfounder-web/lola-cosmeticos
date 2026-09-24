"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCart, addToCart, changeQuantity, removeFromCart, countItems, sumItems, money, readProductFrom } from "./cartStore";
import { mountDeliveryFee } from "./deliveryFee";
import "./shop.css";
export default function ShopInteractions() {
 const cart=useCart();
 const [open,setOpen]=useState(false);
 const dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>mountDeliveryFee(document.body),[]);
 useEffect(()=>{
  const show=()=>setOpen(true);
  const click=(event:MouseEvent)=>{
   const target=event.target as HTMLElement;
   // The product page posts a form; the listing card is a plain button. The
   // one-click variant shares .btn-buy but checks out directly, so it is left
   // to its own handler rather than dropped into the bag.
   const buy=target.closest<HTMLElement>(".wd-product-line .btn-buy, .product-buy-button-custom .btn-buy");
   if(buy&&!buy.classList.contains("btn-oneclickbuy")){
    const card=buy.closest<HTMLElement>(".wd-product-line");
    const scope=card||buy.closest<HTMLElement>(".product-buy-button-custom");
    if(!scope)return;
    const product=readProductFrom(scope,!card);
    if(!product||!product.id)return;
    event.preventDefault();
    addToCart(product);show();
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
 useEffect(()=>{document.querySelectorAll("#header .basket-size,#header .basket-size em,#header .wd-checkout-basket-summaryheader .basket-size").forEach(e=>e.textContent=String(countItems(cart)));},[cart]);
 useEffect(()=>{if(open)dialog.current?.showModal();else dialog.current?.close();},[open]);
 const total=sumItems(cart);
 return <dialog ref={dialog} className="lola-cart" onCancel={()=>setOpen(false)} onClick={e=>{if(e.target===e.currentTarget)setOpen(false)}}><div className="lola-cart-inner"><button className="lola-cart-close" aria-label="Fechar sacola" onClick={()=>setOpen(false)}>×</button><h2>Minha sacola</h2><p>contém {countItems(cart)} itens</p>{!cart.length?<div className="lola-empty"><strong>:(</strong><p>Não há produtos na sua sacola. Que tal conferir algumas ofertas?</p></div>:<div className="lola-cart-products">{cart.map(p=><article key={p.id}><img src={p.image} alt={p.name}/><div><h3>{p.name}</h3><strong>{money(p.price)}</strong><div className="lola-quantity"><button aria-label={`Diminuir ${p.name}`} onClick={()=>changeQuantity(p.id,-1)}>−</button><span>{p.quantity}</span><button aria-label={`Aumentar ${p.name}`} onClick={()=>changeQuantity(p.id,1)}>+</button><button className="lola-remove" onClick={()=>removeFromCart(p.id)}>Remover</button></div></div></article>)}</div>}<div className="lola-cart-total"><span>Subtotal</span><strong>{money(total)}</strong></div>{cart.length?<Link className="lola-checkout" href="/checkout/easy?step=delivery" onClick={()=>setOpen(false)}>Finalizar Compra</Link>:<button className="lola-checkout" disabled>Finalizar Compra</button>}<button className="lola-continue" onClick={()=>setOpen(false)}>Continuar comprando</button></div></dialog>;
}
