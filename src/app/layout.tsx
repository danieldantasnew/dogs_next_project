import type { Metadata } from "next";
import "./globals.css";
import { secondary_font } from "@/functions/fonts";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Dogs Next Project",
  description: "Projeto de aprendizado Next da Origamid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${secondary_font.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
