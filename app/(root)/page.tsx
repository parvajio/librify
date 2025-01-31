import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async() => {
  const result = await db.select().from(users);
  
    // console.log(JSON.stringify(result, null, 2))

  return (
    <>
      <BookOverview {...sampleBooks[0]}></BookOverview>
      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      ></BookList>
    </>
  );
};

export default Home;
