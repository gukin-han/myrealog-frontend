import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  if (!accessToken) return redirect("/");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/me`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken.value}`,
      },
      credentials: "include",
    }
  );

  if (!response.ok) {
    cookieStore.delete("accessToken");
  }

  const data = await response.json();
  return Response.json({ data });
}
