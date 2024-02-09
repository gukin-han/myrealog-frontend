import ProfileButton from "@/components/profile-button";
import SignInModalButton from "@/components/auth/signin-modal-button";
import * as actions from "@/actions";
import { cookies } from "next/headers";

export default async function UserAuthControl() {
  const accessToken = cookies().get("ACCESS_TOKEN");
  if (!accessToken || accessToken.value === "") return <SignInModalButton />;

  try {
    const response = await actions.getMe(accessToken.value);

    return <ProfileButton userData={response.data} />;
  } catch (error) {
    if (error instanceof Error) {
      return <SignInModalButton errorMessage={error.message} />;
    }
  }
}
