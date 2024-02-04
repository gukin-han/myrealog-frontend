import ProfileButton from "@/components/profile-button";
import SignInModalButton from "@/components/signin-modal-button";
import * as actions from "@/actions";
import { cookies } from "next/headers";

export default async function UserAuthControl() {

  const accessToken = cookies().get("accessToken");
  if (!accessToken || accessToken.value === "") return <SignInModalButton />

  try {
    const response = await actions.getMe(accessToken.value);

    return (
      <ProfileButton
        username={response.data.username}
        displayName={response.data.displayName}
        avatarUrl={response.data.avatarUrl}
      />
    );

  } catch (error) {

    if (error instanceof Error) {
      return <SignInModalButton errorMessage={error.message}/>;
    }
  }
}
