import { auth, signOut } from "@/auth";
import BookList from "@/components/BookList";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth()

  if(!session){
    redirect("/sign-in")
  }
  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        <Button>Log Out</Button>
      </form>

      <BookList
        title="Borrowed Books"
        books={sampleBooks}
        containerClassName="mt-28"
      ></BookList>
    </>
  );
};

export default page;
