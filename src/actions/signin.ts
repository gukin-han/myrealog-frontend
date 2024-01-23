"use server";

import { redirect } from "next/navigation";

export async function signin() {
  redirect(`http://localhost:8080/api/v1/signin/oauth/google`);
}
