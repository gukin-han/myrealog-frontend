"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SignInButton from "@/components/auth/signin-button";
import * as actions from "@/actions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "@/components/provider/auth-provider";
import { useEffect } from "react";

export default function SignInModalButton({
  errorMessage,
}: {
  errorMessage?: String;
}) {
  if (errorMessage) toast.error(errorMessage);

  const { signout } = useAuthContext();
  useEffect(() => {
    signout();
  }, []);

  return (
    <Dialog>
      <ToastContainer />
      <DialogTrigger asChild>
        <Button>로그인</Button>
      </DialogTrigger>

      <DialogContent className="w">
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form action={actions.signin}>
          <SignInButton />
        </form>
        <DialogFooter className="text-sm text-slate-500 dark:text-slate-400">
          현재 이메일 가입은 지원하지 않습니다
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
