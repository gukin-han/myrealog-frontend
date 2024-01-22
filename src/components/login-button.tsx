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
import getAuth from "@/actions/actions";

export default function LoginButton() {
  function handleLoginClick() {
    document.cookie =
      "beforeLogin=" + window.location.pathname + "; path=/; max-age=3600";
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>로그인</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form action={getAuth}>
          <Button onClick={handleLoginClick}>{`GitHub으로 로그인하기`}</Button>
        </form>
        <DialogFooter className="text-sm text-slate-500 dark:text-slate-400">
          현재 이메일 가입은 지원하지 않습니다
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}