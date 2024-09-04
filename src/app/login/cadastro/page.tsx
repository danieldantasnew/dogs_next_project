import CadastroComponent from "@/components/login/cadastro/component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dogs | Cadastre-se",
  description: "Realize o seu cadastro na Dogs",
};

export default async function CadastroPage() {
  return <CadastroComponent />;
}
