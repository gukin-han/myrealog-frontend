"use client";

import { TypographyH1 } from "@/components/typography/typography-h1";
import MoreButton from "@/components/article/more-button";

import User from "@/components/user";
import { useAuthContext } from "@/components/provider/auth-provider";
import { useParams } from "next/navigation";
import React from "react";

export default function ArticleHeader({
  title,
  displayName,
  avatarUrl,
  publishedDate,
  articleId,
}: {
  title: string;
  displayName: string;
  avatarUrl: string;
  publishedDate: string;
  articleId: number;
}) {
  let moreButton: React.ReactNode = null;
  const { state } = useAuthContext();
  const params = useParams<{ username: string; slug: string }>();
  if (state.username == params.username) {
    moreButton = (
      <MoreButton
        articleId={articleId}
        username={params.username}
        slug={params.slug}
      />
    );
  }

  return (
    <section className="flex flex-col gap-4 mt-6">
      <TypographyH1>{title}</TypographyH1>
      <div className="flex flex-row justify-between items-center w-full">
        <User
          displayName={displayName}
          avatarUrl={avatarUrl}
          publishedDate={publishedDate}
        />
        {moreButton}
      </div>
    </section>
  );
}
