"use client";
import Link from "next/link";
import React from "react";
// import { auth, signIn, signOut } from "@/auth";
import { Button } from "./ui/button";
import { SiWikibooks } from "react-icons/si";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { cn, getInitials } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { Session } from "next-auth";

const Header = ({ session }: { session: Session }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href={"/"}>
        <div className="text-green-600 text-4xl flex items-center justify-center">
          <SiWikibooks />
        </div>
      </Link>

      <ul className="flex flex-row items-center gap-8">
        {session ? (
          <li>
            <Link href={"/my-profile"}>
              <Avatar>
                <AvatarFallback className="bg-amber-100">
                  {getInitials(session?.user?.name || "PM")}
                </AvatarFallback>
              </Avatar>
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link
                href={"/library"}
                className={cn(
                  "text-base cursor-pointer capitalize",
                  pathname === "/library" ? "bg-primary text-primary-foreground shadow hover:bg-primary/90 p-2 px-4 rounded-lg" : "text-light-100"
                )}
              >
                Library
              </Link>
            </li>
            <li>
              <Button onClick={handleSignIn}>Sign In</Button>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
