"use server";

import { notFound } from "next/navigation";

type GetArticleResponse = {
  status: number;
  message: string;
  data: {
    articleId: number;
    title: string;
    createdDate: string;
    displayName: string;
    avatarUrl: string;
    content: string;
    excerpt: string;
  };
};

export async function getArticle(
  username: string,
  slug: string,
): Promise<GetArticleResponse> {
  const response = await fetch(
    `${process.env.BACK_END_PUBLIC_BASE_URL}/api/v1/articles/${username}/${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    notFound();
  }

  return await response.json();
}
