"use server";

import { cookies } from "next/headers";

export default async function ActionsLogOut() {
  cookies().delete("token");
  return true;
}
