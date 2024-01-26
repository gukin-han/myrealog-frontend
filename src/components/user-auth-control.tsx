"use client";

import ProfileButton from "@/components/profile-button";
import LoginButton from "@/components/login-button";
import { useAuthContext } from '@/components/provider/auth-provider';
import { useEffect } from "react";

export default function UserAuthControl() {
  const { state, signin, signout } = useAuthContext();

//   useEffect(() => {
//     const getAuth = async () => {

//       try {
//         const response = await fetch("/api/users/me");
//         const result = await response.json();
//         signin(result.data);

//       } catch (error) {
//         console.error("에러 발생:", error);
//         return <ProfileButton />
//       }
//     };
//     getAuth();

//   }, []);

  return state.isAuthenticated ? <ProfileButton /> : <LoginButton />;
}
