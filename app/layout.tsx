import type { Metadata } from "next";
import "@fontsource-variable/fraunces/wght.css";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://meu-primeiro-ceu.ptd45qrs8w.chatgpt.site"),
  title: "Meu Primeiro Céu | Livro astrológico personalizado",
  description: "Livro astrológico digital e personalizado para bebês, crianças e adolescentes, com linguagem leve, arte aquarelada e sem rótulos.",
  alternates: { canonical: "/" },
  openGraph: { title: "Meu Primeiro Céu", description: "O céu conta pistas. A criança escreve a história.", type: "website", locale: "pt_BR", images: [{ url: "/assets/brand/logo-square.png", width: 1042, height: 1042, alt: "Meu Primeiro Céu" }] },
  twitter: { card: "summary_large_image", title: "Meu Primeiro Céu", description: "O céu conta pistas. A criança escreve a história.", images: ["/assets/brand/logo-square.png"] },
  other: { "codex-preview": "development" },
  icons: { icon: "/assets/brand/logo-square.png", apple: "/assets/brand/logo-square.png" },
};

const productSchema = {
  "@context": "https://schema.org", "@type": "Product", name: "Meu Primeiro Céu",
  description: "Livro astrológico digital e personalizado para bebês, crianças e adolescentes.",
  brand: { "@type": "Brand", name: "Meu Primeiro Céu" },
  offers: [
    { "@type": "Offer", name: "Meu Primeiro Céu Light", price: "69.90", priceCurrency: "BRL", availability: "https://schema.org/PreOrder" },
    { "@type": "Offer", name: "Meu Primeiro Céu Plus", price: "129.90", priceCurrency: "BRL", availability: "https://schema.org/PreOrder" },
  ],
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} /></body></html>;
}
