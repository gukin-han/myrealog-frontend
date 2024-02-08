"use client";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SignOutButton from "@/components/auth/signout-button";

import * as actions from "@/actions";
import { useAuthContext } from "@/components/provider/auth-provider";
import { useEffect } from "react";

interface ProfileButtonProps {
  userData: { username: string; displayName: string; avatarUrl: string };
}

const ProfileButton = ({ userData }: ProfileButtonProps) => {
  const { signin } = useAuthContext();
  useEffect(() => {
    signin(userData);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={userData.avatarUrl} />
          <AvatarFallback>
            {userData.avatarUrl !== ""
              ? userData.avatarUrl
              : userData.displayName[0]}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{userData.displayName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={`/${userData.username}`}>
          <DropdownMenuItem className="cursor-pointer">
            내 페이지
          </DropdownMenuItem>
        </Link>
        <Link href={"/write"}>
          <DropdownMenuItem className="cursor-pointer">
            아티클 작성
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="cursor-pointer">
          프로필 설정
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <form action={actions.signout} className="">
          <DropdownMenuItem className="cursor-pointer">
            <SignOutButton />
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
