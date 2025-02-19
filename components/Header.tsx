import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signOut } from "@/auth";
import { Button } from "./ui/button";

const Header = () => {

  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href={"/"}>
        <Image
          src={"/icons/logo.svg"}
          alt="logo"
          width={40}
          height={40}
        ></Image>
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          {/* <Link
            href={"/library"}
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            Library
          </Link> */}
        </li>
        <li>
          <form
            action={async () => {
              "use server";

              await signOut();
            }}
            className="mb-10"
          >
            <Button>Log Out</Button>
          </form>

          {/* <Link href={"/my-profile"}>
            <Avatar>
              <AvatarFallback className="bg-amber-100">{getInitials(session?.user?.name || "PM")}</AvatarFallback>
            </Avatar>
          </Link> */}
        </li>
      </ul>
    </header>
  );
};

export default Header;
