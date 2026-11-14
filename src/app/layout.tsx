import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const description =
  "Gestão simples. Negócios em movimento. Clientes, negociações, propostas e o dinheiro recebido no mesmo lugar — CRM e Financeiro para pequenas empresas brasileiras.";

export const metadata: Metadata = {
  title: { default: "Thigu Gestão · CRM e Financeiro para pequenas empresas", template: "%s · Thigu Gestão" },
  description,
  openGraph: {
    title: "Thigu Gestão — Gestão simples. Negócios em movimento.",
    description,
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = { themeColor: "#142D4E", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-ink antialiased">
        <a
          href="#conteudo"
          className="absolute -left-[999px] top-2 z-[100] rounded-lg bg-primary px-3.5 py-2 text-white focus:left-2"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
