"use server";

import { notFound } from "next/navigation";
import { GetArticlesResponse } from "@/types";

export async function getArticles(): Promise<GetArticlesResponse> {
  const response = await fetch(
    `${process.env.BACK_END_PUBLIC_BASE_URL}/api/v1/articles/recent`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 },
    },
  );

  if (!response.ok) {
    notFound();
  }

  return await response.json();
}
