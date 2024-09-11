"use server";

import { PASSWORD_LOST } from "@/functions/api";

export default async function LostPassword(state: {}, formData: FormData) {
  const login = formData.get("login") as string | null;
  const urlLink = formData.get("url") as string | null;

  try {
    if (!login || !urlLink) throw new Error("Preencha os dados necessários");

    const { url, options } = PASSWORD_LOST({
      login,
      url: urlLink,
    });

    const response = await fetch(url, options);
    const dataFetch = await response.json();
    if (!response.ok) throw new Error(dataFetch.message);
    return { data: dataFetch, ok: true, error: "" };
  } catch (e: unknown) {
    if (e instanceof Error) return { data: null, ok: false, error: e.message };
    return { data: null, ok: false, error: "Erro" };
  }
}
