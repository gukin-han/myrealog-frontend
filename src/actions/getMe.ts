type GetMeResponse = {
  username: string;
  displayName: string;
  avatarUrl: string;
  status: number;
};

export async function getMe(accessToken: string): Promise<GetMeResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/me`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      // next: { revalidate: 10 }, // 백엔드 서버가 다운되면
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("유저 정보를 가져오는데 실패했습니다.");
  }

  return await response.json();
}
