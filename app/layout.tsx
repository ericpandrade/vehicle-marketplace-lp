import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ratinho das Motos | Motos Seminovas em Fortaleza - CE",
  description:
    "Compra, venda, troca e financiamento de motocicletas usadas e seminovas em Fortaleza - CE. Honda CG 150 Titan ESD Flex 2014 disponível. Atendimento rápido pelo WhatsApp.",
  openGraph: {
    title: "Ratinho das Motos | Motos Seminovas em Fortaleza - CE",
    description:
      "Motocicletas com procedência garantida. Negocie direto pelo WhatsApp.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
