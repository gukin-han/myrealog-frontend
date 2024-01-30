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
import SignOutButton from "@/components/signout-button";

import * as actions from "@/actions";

interface ProfileButtonProps {
  username: string;
  displayName: string;
  avatarUrl: string;
}

const ProfileButton = ({
  username,
  displayName,
  avatarUrl,
}: ProfileButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{displayName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={`/@${username}`}>
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
          <DropdownMenuItem className="cursor-pointer" >
            <SignOutButton />
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
