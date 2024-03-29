"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function signout() {
  cookies().delete("ACCESS_TOKEN");
  return redirect("/redirect");
}
