import { db } from '@/database/drizzle'
import { books } from '@/database/schema'
import React from 'react'

const page = async () => {

    const allBooks = await db.select().from(books);
    console.log(allBooks)
  return (
    <div>
      This is the library page
    </div>
  )
}

export default page
