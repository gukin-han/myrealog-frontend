"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function deleteArticle(
  articleId: number,
  username: string,
  slug: string,
) {
  const accessToken = cookies().get("ACCESS_TOKEN");
  if (!accessToken || accessToken.value === "") return redirect("/");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/articles/${articleId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken.value}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("에러가 발생했습니다.");
  }

  revalidatePath(`/${username}/${slug}`);
  revalidatePath(`/`);
  return redirect("/");
}
