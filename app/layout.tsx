import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Meu Primeiro Céu | O livro do céu da criança", description: "Storybooks astrológicos infantis personalizados, com linguagem lúdica, leve e um universo celestial em aquarela.", other: { "codex-preview": "development" }, icons: { icon: "/assets/brand/logo-square.png" } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html>; }
