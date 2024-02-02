"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { cookies } from "next/headers";

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

export async function publish(
  formState: PublishFormState,
  formData: FormData
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

  const accessToken = cookies().get("accessToken");
  if (!accessToken || accessToken.value === "") return redirect("/");

  // 수정
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/articles`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken.value}`,
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      }
    );

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      console.log("get me error");
    }

  } catch (error) {
    console.log("get me error");
  }


  return redirect("/redirect");

}
