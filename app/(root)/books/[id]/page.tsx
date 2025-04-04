import { auth } from "@/auth";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import BookVideo from "@/components/BookVideo";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  // fatch data based on id
  const [bookDetails] = await db
    .select()
    .from(books)
    .where(eq(books.id, id))
    .limit(1);

  if (!bookDetails) {
    redirect("/404");
  }

  const { genre } = bookDetails;
  const similarBook = await db
    .select()
    .from(books)
    .where(eq(books.genre, genre));

  return (
    <>
      <BookOverview
        {...bookDetails}
        userId={session?.user?.id as string}
      ></BookOverview>

      <div className="book-details">
        <div className="flex-[1.5]">
          <section className="flex flex-col gap-7">
            <h3>Video</h3>
            <BookVideo videoUrl={bookDetails.videoUrl}></BookVideo>
          </section>

          {/* <summary></summary> */}

          <section className="mt-10 flex flex-col gap-7">
            <h3>Summary</h3>
            <div className="space-y-5 text-xl text-lime-100">
              {bookDetails.summary.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </section>
        </div>

        {/* similar books */}
        <div className="flex-1">
          <BookList
            title="Similer Books"
            books={similarBook}
            containerClassName=""
          ></BookList>
        </div>
      </div>
    </>
  );
};

export default page;
