import Container from "@/components/ui/container";
import { ModeToggle } from "@/components/mode-toggle";
import UserAuthControl from "@/components/auth/user-auth-control";

import Link from "next/link";

export default function Header() {
  console.log("Header loaded");

  return (
    <header className="sm:flex sm:justify-between">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <Link href="/">
            <span className="text-xl font-bold">MyReaLog</span>
          </Link>
          <div className="flex flex-row items-center gap-4">
            <ModeToggle />
            <UserAuthControl />
          </div>
        </div>
      </Container>
    </header>
  );
}
