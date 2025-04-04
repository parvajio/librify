import BookList from "@/components/BookList";
import SearchHero from "@/components/SearchHero";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { cn } from "@/lib/utils";
import { ilike, or, sql } from "drizzle-orm";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: { page?: string; search?: string };
}) => {
  const PAGE_SIZE = 12;
  const params = await searchParams;
  const currentPage = params.page ? parseInt(params.page, 10) : 1;
  const offset = (currentPage - 1) * PAGE_SIZE;
  const searchQuery = params.search || "";

  const allBooks = await db
    .select()
    .from(books)
    .where(
      searchQuery
        ? or(
            ilike(books.title, `%${searchQuery}%`),
            ilike(books.author, `%${searchQuery}%`),
            ilike(books.genre, `%${searchQuery}%`)
          )
        : undefined
    )
    .limit(PAGE_SIZE)
    .offset(offset);

  const totalBook = await db
    .select({ count: sql<number>`COUNT(*)` })
    .from(books)
    .where(
      searchQuery
        ? or(
            ilike(books.title, `%${searchQuery}%`),
            ilike(books.author, `%${searchQuery}%`),
            ilike(books.genre, `%${searchQuery}%`)
          )
        : undefined
    );
  // console.log(totalBook);
  const totalPages = Math.ceil(Number(totalBook[0].count) / PAGE_SIZE);
  // console.log(totalPages);

  return (
    <section className="text-white">
      <SearchHero></SearchHero>
      <BookList
        title={searchQuery ? `Search result for "${searchQuery}"` : "Books"}
        books={allBooks}
        containerClassName="mt-28"
      ></BookList>

      {/* pagination */}
      <div className="w-full flex justify-center gap-2 mt-10">
        {Array.from({ length: totalPages }, (v, i) => (
          <div
            key={i}
            className={cn(
              currentPage - 1 == i
                ? "bg-primary text-black p-2 rounded-md"
                : "border border-primary p-2 rounded-md"
            )}
          >
            <a
              href={`?page=${i + 1}${searchQuery ? `&search=${searchQuery}` : ""}`}
            >
              {i + 1}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
