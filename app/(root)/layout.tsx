import { auth } from "@/auth";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  // const session = await auth();
  // if (!session) {
  //   redirect("/sign-in");
  // }

  return (
    <main className="root-container">
      <div className="bg-black !w-full backdrop-blur-sm bg-opacity-10 px-5 sm:px-10 md:px-16">
          <div className="mx-auto max-w-7xl">
            <Header></Header>

            <div className="mt-20 pb-20">{children}</div>
          </div>
      </div>
    </main>
  );
};

export default layout;
