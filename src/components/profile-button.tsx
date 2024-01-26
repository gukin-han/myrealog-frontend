"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthContext } from "@/components/provider/auth-provider";
import * as actions from "@/actions";

const ProfileButton = () => {
  const { state, signin, signout } = useAuthContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/115940366?s=400&u=6947e85139ccbca2951c9e5c50116f26dfb8272e&v=4" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{state.username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          내 페이지
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          아티클 작성
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          프로필 설정
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <form action={actions.signout} onSubmit={signout}>
            <button className="w-full" type="submit">
              로그아웃
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
