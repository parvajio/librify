import { Book } from "lucide-react";
import Link from "next/link";
import React from "react";
import BookCover from "./BookCover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const BookCard = ({
  id,
  title,
  genre,
  coverColor,
  coverUrl,
  isLoanedBook = false,
}: Book) => {
  return (
    <li className={cn(isLoanedBook && "sm:w-52 w-full border")}>
      <Link
        href={`/books/${id}`}
        className={cn(isLoanedBook && "flex flex-col items-center w-full")}
      >
        <BookCover coverColor={coverColor} coverImage={coverUrl} variant="medium"></BookCover>

        <div className={cn( "mt-4",!isLoanedBook && "sm:max-w-40 max-w-20")}>
          <h3 className="book-title">{title}</h3>
          <p className="book-genre">{genre}</p>
        </div>

        {isLoanedBook && (
        <div className="mt-3 w-full">
          <div className="book-loaned">
            <Image
              src="/icons/calendar.svg"
              alt="calendar"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-light-100">11 days left to return</p>
          </div>

          <Button className="book-btn">Download receipt</Button>
        </div>
      )}
      </Link>
    </li>
  );
};

export default BookCard;
