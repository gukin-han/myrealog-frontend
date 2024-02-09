"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const publishSchema = z.object({
  title: z
    .string()
    .min(3, { message: "제목은 최소 3자 이상이어야 합니다." })
    .max(50, { message: "제목은 최대 50자까지 가능합니다." }),
  content: z.string().min(3, { message: "최소 3자 이상이어야 합니다." }),
  excerpt: z.string().max(150, { message: "최대 50자까지 가능합니다." }),
});

interface PublishFormState {
  errors: {
    title?: string[];
    content?: string[];
    excerpt?: string[];
  };
}

export async function createArticle(
  formState: PublishFormState,
  formData: FormData,
): Promise<PublishFormState> {
  const result = publishSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    excerpt: formData.get("excerpt"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const accessToken = cookies().get("ACCESS_TOKEN");
  if (!accessToken || accessToken.value === "") return redirect("/");

  const response = await fetch(
    `${process.env.BACK_END_PUBLIC_BASE_URL}/api/v1/articles`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken.value}`,
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    },
  );

  const redirectUri = response.headers.get("Location");
  if (!response.ok) {
    throw new Error("에러가 발생했습니다.");
  }

  revalidatePath("/");
  return redirect(redirectUri ? redirectUri : "/");
}
