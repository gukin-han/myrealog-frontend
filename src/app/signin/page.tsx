"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/components/provider/auth-provider";
import * as utils from "@/utils";

export default function SignInPage() {
  const router = useRouter();
  const { signin } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/users/me");

        if (!response.ok) {
          router.push(`http://localhost:8080/api/v1/signin/oauth/google`);
          throw new Error("데이터를 불러오는데 실패했습니다.");
        }

        const result = await response.json();
        console.log("페칭된 데이터:", result);
        signin(result.data);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    fetchData();
    const beforeLoginUrl = utils.getCookieValue("beforeLogin");
    const redirectUrl = beforeLoginUrl ? beforeLoginUrl : "/";
    router.replace(redirectUrl);
  }, []);

  return <div>Redirecting...</div>;
}
