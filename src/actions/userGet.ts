"use server";

import { USER_GET } from "@/functions/api";
import { UserGet } from "@/types/types";
import { cookies } from "next/headers";

export default async function ActionsUserGet() {
  const { url } = USER_GET();
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + cookies().get("token")?.value,
    },
  });

  if (!response.ok) return null;
  const data = (await response.json()) as UserGet;
  return data;
}
