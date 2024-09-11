"use server";

import { PASSWORD_RESET } from "@/functions/api";
import { types } from "@/functions/validate";

export default async function Reset(state: {}, formData: FormData) {
  const login = formData.get("login") as string | null;
  const key = formData.get("key") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!login || !key || !password) throw new Error("Erro no envio dos dados");

    if (!types["password"].regex.test(password))
      throw new Error("Digite letras e números e no mínimo 8 dígitos!");

    const { url, options } = PASSWORD_RESET({ login, key, password });
    const response = await fetch(url, options);
    if (!response.ok)
      throw new Error("Token expirado, solicite novamente a troca da senha!");
    return { data: null, ok: true, erro: "" };
  } catch (e) {
    if (e instanceof Error) return { data: null, ok: false, erro: e.message };
    return { data: null, ok: false, erro: "Error" };
  }
}
