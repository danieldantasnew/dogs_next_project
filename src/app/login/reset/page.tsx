import ResetComponent from "@/components/login/reset/component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dogs | Resetar senha",
  description: "Recupere sua conta na Dogs",
};

export default function ResetPage() {
  return <ResetComponent />;
}
