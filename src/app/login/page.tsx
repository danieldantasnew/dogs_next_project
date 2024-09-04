import { Metadata } from "next";
import LoginComponent from "@/components/login/component";

export const metadata: Metadata = {
  title: "Dogs | Login",
  description: "Faça login na Dogs",
};

export default async function Login() {
  return <LoginComponent />;
}
