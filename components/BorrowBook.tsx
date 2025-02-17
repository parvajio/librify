"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';

interface Props {
    userId : string;
    bookId : string;
    borrowingEligibility: {
        isEligible: boolean;
        message: string;
    }
}

const BorrowBook = ({userId, bookId, borrowingEligibility: {isEligible, message}}: Props) => {
    const router = useRouter();
    const [borrowing, setBorrowing] = useState(false);

    const handleBorrow = async ()=>{
        if(!isEligible){
            toast({
                title: "Error",
                description: message,
                variant: "destructive"
            })
        }

        setBorrowing(true);

        try {
            
        } catch (error) {
            toast({
                title: "Error",
                description: "An error occured while borrowing the book",
                variant: "destructive"
            })
        } finally{
            setBorrowing(false)
        }
    }

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