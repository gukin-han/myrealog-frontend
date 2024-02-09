import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/signin/oauth/callback/google?code=${code}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  redirect("/redirect");
}
