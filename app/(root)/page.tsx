import { auth } from "@/auth";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import OurBlogs from "@/components/OurBlogs";
import { db } from "@/database/drizzle";
import { books, users } from "@/database/schema";
import { desc } from "drizzle-orm";

const Home = async () => {
  const session = await auth();

  const latestBooks = (await db
    .select()
    .from(books)
    .limit(13)
    .orderBy(desc(books.createAt))) as Book[];

  return (
    <>
      <BookOverview
        {...latestBooks[0]}
        userId={session?.user?.id as string}
      ></BookOverview>
      <BookList
        title="Latest Books"
        books={latestBooks.slice(1)}
        containerClassName="mt-28"
      ></BookList>
      <OurBlogs></OurBlogs>
    </>
  );
};

export default Home;
