"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const beforeLoginCookie = cookies.find((cookie) =>
      cookie.startsWith("beforeLogin=")
    );

    const redirectPath = beforeLoginCookie
      ? beforeLoginCookie.split("=")[1]
      : "/";
    router.replace(redirectPath);
  }, [router]);

  return <div>Redirecting...</div>;
}
