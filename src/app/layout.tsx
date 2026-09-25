import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/product-reviews.css";
import "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/product-loading.css";
import "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/slider-init.css";
import "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/delivery-fee.css";
import Tracking from "@/components/Tracking";
import FastNav from "@/components/FastNav";
const lato = localFont({ src: "../../public/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/S6uyw4BMUTPHjx4wXiWtFCc-0d7407373c.woff2", variable: "--font-lola-body", display: "swap" });
// Keep the phone layout at its intended scale while preserving user pinch zoom.
// Product geometry must fit the viewport rather than relying on automatic shrinking.
export const viewport: Viewport = { width: "device-width", initialScale: 1, userScalable: true };
export const metadata: Metadata = { title: "Lola Cosmetics - Escolha Lola, escolha ser feliz!", description: "Escolha Lola, escolha ser feliz! Cosméticos e cuidados para todos os tipos de cabelo." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html suppressHydrationWarning lang="pt-BR" className={lato.variable}><head><script dangerouslySetInnerHTML={{ __html: `document.documentElement.dataset.lolaDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) ? "phone" : "desktop";` }} /><link rel="preconnect" href="https://cdn.utmify.com.br" /><link rel="dns-prefetch" href="https://cdn.utmify.com.br" /><link rel="dns-prefetch" href="https://connect.facebook.net" /><link rel="dns-prefetch" href="https://www.clarity.ms" /><link rel="stylesheet" href="/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/source.css" /></head><body suppressHydrationWarning className="column-1 HomeRoute lola-clone">{children}<FastNav /><Tracking /></body></html>;
}
