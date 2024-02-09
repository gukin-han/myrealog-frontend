"use server";

type GetMeResponse = {
  status: number;
  message: string;
  data: {
    username: string;
    displayName: string;
    avatarUrl: string;
  };
};

export async function getMe(accessToken: string): Promise<GetMeResponse> {
  try {
    const response = await fetch(
      `${process.env.BACK_END_PUBLIC_BASE_URL}/api/v1/users/me`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        next: { revalidate: 10 },
      },
    );

    if (!response.ok) {
      throw new Error("문제가 발생했습니다. 다시 로그인해주세요.");
    }

    return await response.json();
  } catch (error) {
    throw new Error("문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
}
