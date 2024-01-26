"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";


export async function signin() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  if (accessToken) redirect("/signin");
  redirect(`http://localhost:8080/api/v1/signin/oauth/google`);
}
