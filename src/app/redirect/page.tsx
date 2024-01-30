import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function RedirectPage() {
  const beforeLoginUrl = cookies().get("beforeLogin");
  const redirectUrl = beforeLoginUrl ? beforeLoginUrl.value : "/";

  return redirect(redirectUrl);
}
