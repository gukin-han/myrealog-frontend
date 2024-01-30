import { cookies } from "next/headers";

import ProfileButton from "@/components/profile-button";
import SignInModalButton from "@/components/signin-modal-button";
import * as actions from "@/actions";

export default async function UserAuthControl() {
  console.log("UserAuthControl loaded");
  const accessToken = cookies().get("accessToken");
  if (!accessToken || accessToken.value === "") return <SignInModalButton />;

  try {
    const data = await actions.getMe(accessToken.value);
    console.log(data);

    return (
      <ProfileButton
        username={data.username}
        displayName={data.displayName}
        avatarUrl={data.avatarUrl}
      />
    );
  } catch (error) {
    // console.error(error); // muted
    return <SignInModalButton />;
  }
}
