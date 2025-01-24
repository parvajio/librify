import React from 'react'
import BookCard from '@/components/BookCard'

interface Props{
    title: string,
    books: Book[],
    containerClassName: string
}

const BookList = ({title, books, containerClassName}: Props) => {
  return (
    <section>
        <h2 className='font-bebas-neue text-4xl text-light-100'>
            {title}
        </h2>

        <ul className='book-list'>
          {books.map((book)=>(
            <BookCard key={book.id} {...book}></BookCard>
          ))}
        </ul>
    </section>
  )
}

export default BookList