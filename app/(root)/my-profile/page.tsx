import { signOut } from "@/auth";
import BookList from "@/components/BookList";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";
import React from "react";

const page = () => {
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
