"use server";

import { TOKEN_POST } from "@/functions/api";
import { TokenPost } from "@/types/types";
import { cookies } from "next/headers";

export type TokenSuccessResponse = {
  autorizado: true;
  token: string;
  user_email: string;
  user_nicename: string;
  user_display_name: string;
};

export type TokenErrorResponse = {
  autorizado: false;
  erro: string;
};

export type TokenResponse = TokenSuccessResponse | TokenErrorResponse;

export default async function ActionsSetCookies(
  username: string,
  password: string
): Promise<TokenResponse> {
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

  if (!response.ok) return { autorizado: false, erro: "Dados incorretos" };
  const data = (await response.json()) as TokenPost;
  cookies().set("token", data.token, {
    httpOnly: true,
    secure: true,
  });
  return { autorizado: true, ...data };
}
