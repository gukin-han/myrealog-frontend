"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { cookies } from "next/headers";

const signupSchema = z.object({
  username: z
    .string()
    .min(3, { message: "유저이름은 최소 3자 이상이어야 합니다." })
    .max(15, { message: "유저이름은 최대 20자까지 가능합니다." })
    .regex(/^[a-zA-Z0-9-]*$/, {
      message: "유저이름에 숫자, 알파벳, 대시(-)만 입력해주세요.",
    }),
  displayName: z
    .string()
    .min(3, { message: "이름은 최소 3자 이상이어야 합니다." })
    .max(15, { message: "이름은 최대 15자까지 가능합니다." })
    .regex(/^[a-zA-Z0-9-가-힣\s]*$/, {
      message: "이름에 숫자, 알파벳, 한글, 공백, 대시(-)만 입력해주세요.",
    }),
  bio: z.string().max(35, { message: "자기소개는 최대 35자까지 가능합니다." }),
});

interface SignupFormState {
  errors: {
    username?: string[];
    displayName?: string[];
    bio?: string[];
  };
}

export async function signup(
  formState: SignupFormState,
  formData: FormData
): Promise<SignupFormState> {
  // validate form
  const result = signupSchema.safeParse({
    username: formData.get("username"),
    displayName: formData.get("displayName"),
    bio: formData.get("bio"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  // post request to signup
  const signupToken = cookies().get("signupToken");
  if (!signupToken) return redirect("/");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${signupToken.value}`,
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      }
    );

    cookies().delete("signupToken");
    // console.log(response.headers.getSetCookie()[0]);

  } catch (error) {
    console.error(error);
  }


  return redirect("/redirect");
}
