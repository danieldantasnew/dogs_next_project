"use server";

import { TOKEN_POST } from "@/functions/api";
import { TokenPost } from "@/types/types";
import { cookies } from "next/headers";
import ActionsUserGet from "./userGet";

export default async function SignIn(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  const { url } = TOKEN_POST();
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok)
    return { ok: false, data: null, erro: "Senha ou usuário inválidos." };

  const data = (await response.json()) as TokenPost;
  cookies().set("token", data.token, {
    httpOnly: true,
    secure: true,
  });
  const user = await ActionsUserGet();
  return { ok: true, data: user, erro: "" };
}
