import type { Metadata } from "next";
import "@fontsource-variable/fraunces/wght.css";
import "./globals.css";
export const metadata: Metadata = { title: "Meu Primeiro Céu | Storybook personalizado do nascimento", description: "Storybook astrológico personalizado para compreender melhor bebês, crianças e adolescentes, com linguagem leve, visual e sem rótulos.", other: { "codex-preview": "development" }, icons: { icon: "/assets/brand/logo-square.png" } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html>; }
