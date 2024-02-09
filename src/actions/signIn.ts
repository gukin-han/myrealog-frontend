"use server";

import { redirect } from "next/navigation";

export async function signIn(type: string) {
  const REDIRECT_URI = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/social/callback`;
  if (type === "google") {
    return redirect(
      `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&response_type=code&redirect_uri=${REDIRECT_URI}&client_id=1093181076891-hb8imppppmtd0gj52hqnu3ed9dt3j5ka.apps.googleusercontent.com`,
    );
  }
}
