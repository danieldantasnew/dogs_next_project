import type { Metadata } from "next";
import "./globals.css";
import { secondary_font } from "@/functions/fonts";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { MyApp } from "@/context/user-context";
import ActionsUserGet from "@/actions/userGet";

export const metadata: Metadata = {
  title: "Dogs Next Project",
  description: "Projeto de aprendizado Next da Origamid",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await ActionsUserGet();

  return (
    <html lang="pt-BR">
      <body className={`${secondary_font.variable}`}>
        <MyApp user={response}>
          <Header />
          {children}
          <Footer />
        </MyApp>
      </body>
    </html>
  );
}
