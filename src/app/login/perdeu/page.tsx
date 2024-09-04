import PerdeuComponent from "@/components/login/perdeu/component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dogs | Recuperar conta",
  description: "Recupere sua conta na Dogs",
};

export default async function PerdeuPage() {
  return <PerdeuComponent />;
}
