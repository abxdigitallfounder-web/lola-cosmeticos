import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
const lato = localFont({ src: "../../public/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/S6uyw4BMUTPHjx4wXiWtFCc-0d7407373c.woff2", variable: "--font-lola-body", display: "swap" });
// The storefront serves width=device-width with zooming left enabled; Next's default
// would pin initial-scale and drop user-scalable.
export const viewport: Viewport = { width: "device-width", userScalable: true };
export const metadata: Metadata = { title: "Lola Cosmetics - Escolha Lola, escolha ser feliz!", description: "Escolha Lola, escolha ser feliz! Cosméticos e cuidados para todos os tipos de cabelo." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="pt-BR" className={lato.variable}><head><link rel="stylesheet" href="/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/source.css" /></head><body className="column-1 HomeRoute lola-clone">{children}</body></html>;
}
