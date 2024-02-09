import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function GET(request: Request): Promise<string> {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/signin/oauth/callback/google?code=${code}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    console.error("Something wrong!");
    redirect("/redirect");
  }

  const data = await response.json();
  cookies().set(data.data.type, data.data.value);

  const location = response.headers.get("Location");
  if (location) {
    redirect(location);
  } else {
    redirect("/");
  }
}
