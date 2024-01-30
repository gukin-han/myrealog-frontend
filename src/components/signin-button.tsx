"use client";

import { Button } from "@/components/ui/button";
import * as utils from "@/utils";

export default function SignInButton() {
  return (
    <Button
      className="w-full"
      onClick={utils.writeUrlAsCookie}
    >{`Google 계정으로 로그인하기`}</Button>
  );
}
