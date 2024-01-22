"use server";

import { redirect } from "next/navigation";

export default async function getAuth() {
  redirect(`http://localhost:8080/login/oauth/google`);
}
