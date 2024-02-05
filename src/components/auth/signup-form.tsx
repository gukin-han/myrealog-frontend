"use client";

import { redirect, useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";

import { TypographyH1 } from "@/components/typography/typography-h1";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import FormButton from "@/components/form-button";
import Link from "next/link";

import * as actions from "@/actions";

export default function SignupForm() {
  const params = useSearchParams();
  const email = params.get("email");
  if (!email) {
    redirect("/");
  }
  const [formState, action] = useFormState(actions.signup, {
    errors: {},
  });

  return (
    <form action={action}>
      <div className="flex flex-col gap-10 items-center m-10 md:m-0 md:mt-10">
        <TypographyH1>
          Welcome to{" "}
          <span className="text-blue-500 dark:text-blue-400">MyReaLog</span>
        </TypographyH1>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="이메일을 기반으로 회원가입이 진행됩니다."
            disabled
            value={email}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="username">유저이름</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="서브도메인으로 사용될 유저이름을 입력해주세요."
            aria-describedby="usernameError"
          />
          <div id="usernameError" aria-live="polite" aria-atomic="true">
            {formState.errors.username && (
              <p className="text-xs text-red-500 dark:text-red-400">
                {formState.errors.username}
              </p>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="displayName">이름</Label>
          <Input
            type="text"
            name="displayName"
            id="displayName"
            placeholder="다른 유저에게 표시될 이름을 입력해주세요."
            aria-describedby="displayNameError"
          />
          <div id="displayNameError" aria-live="polite" aria-atomic="true">
            {formState.errors.displayName && (
              <p className="text-xs text-red-500 dark:text-red-400">
                {formState.errors.displayName}
              </p>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="bio">자기소개</Label>
          <Textarea
            placeholder="프로필에 표시될 자기소개를 입력해주세요."
            name="bio"
            id="bio"
            aria-describedby="bioError"
          />
          <div id="bioError" aria-live="polite" aria-atomic="true">
            {formState.errors.bio && (
              <p className="text-xs text-red-500 dark:text-red-400">
                {formState.errors.bio}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-6">
          <Link href={"/"}>
            <Button variant={"secondary"}>취소</Button>
          </Link>
          <FormButton>완료</FormButton>
        </div>
      </div>
    </form>
  );
}
