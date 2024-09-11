"use server";

import { USER_POST } from "@/functions/api";
import SignIn from "./signIn";
import { types } from "@/functions/validate";

export default async function signUp(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;
  const email = formData.get("email") as string | null;

  try {
    if (!username || !password || !email) throw new Error("Preencha os dados");
    if (password.length < 6) throw new Error("Digite no mínimo 6 dígitos");
    const { url } = USER_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const emailValidate = types["email"].regex.test(email);
    if (!emailValidate) throw new Error("E-mail não é válido");

    const passwordValidate = types["password"].regex.test(password);
    if (!passwordValidate) throw new Error("Digite letras e números");

    if (!response.ok) throw new Error("Usuário ou email já existe");
    const { ok, data } = await SignIn({}, formData);

    if (!ok) throw new Error("Não foi possível fazer login");
    return { data: data, ok: true, erro: "" };
  } catch (e: unknown) {
    if (e instanceof Error) return { data: null, ok: false, erro: e.message };
    return { data: null, ok: false, erro: "Erro" };
  }
}
