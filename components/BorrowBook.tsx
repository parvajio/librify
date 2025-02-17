"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

interface Props {
    userId : string;
    bookId : string;
    borrowingEligibility: {
        isEligible: boolean;
        message: string;
    }
}

const BorrowBook = ({userId, bookId, borrowingEligibility}: Props) => {
  return (
    <Button className="book-overview_btn">
          <Image src="/icons/book.svg" alt="book" width={20} height={20} />
          <p className="font-bebas-neue text-xl text-dark-100">
            {"Borrow Book"}
          </p>
        </Button>
  )
}

export default BorrowBook