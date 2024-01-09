import Container from "@/components/ui/container";
import { ModeToggle } from "@/components/mode-toggle";
import ProfileButton from "./profile-button";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <Link href="/" className="ml-4 lg:ml-0">
            <h1 className="text-xl font-bold">MyReaLog</h1>
          </Link>
          <div className="flex flex-row items-center gap-4">
            <ModeToggle />
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  );
}
