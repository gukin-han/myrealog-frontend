import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VerticalThreeDots } from "@/components/icons";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import * as actions from "@/actions";

export default function MoreButton({
  articleId,
  username,
  slug,
}: {
  articleId: number;
  username: string;
  slug: string;
}) {
  console.log(articleId);
  const deleteArticleWithArticleIdAndUsernameAndSlug =
    actions.deleteArticle.bind(null, articleId, username, slug);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>{VerticalThreeDots()}</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href={`/${username}/${slug}/edit`}>수정</Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="text-red-500 dark:text-red-400"
          onSelect={(e) => e.preventDefault()}
        >
          <Dialog>
            <DialogTrigger asChild>
              <button>삭제</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>아티클 삭제</DialogTitle>
                <DialogDescription>정말로 삭제하시겠습니까?</DialogDescription>
              </DialogHeader>
              <form
                action={deleteArticleWithArticleIdAndUsernameAndSlug}
                className="grid sm:flex sm:justify-end"
              >
                <Button variant="destructive" type="submit">
                  삭제
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
