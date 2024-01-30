"use client";

import * as utils from "@/utils";

export default function SignOutButton() {
  return (
    <button className="" type="submit" onClick={utils.writeUrlAsCookie}>
      로그아웃
    </button>
  );
}
