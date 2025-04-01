import React from 'react'
import SearchForm from './SearchForm'

const SearchHero = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center my-20'>
      <p className='uppercase mb-3'>Discover Your Next Great Read.</p>
      <p className='text-4xl font-bold'>Explore and Search for</p>
      <p className='text-4xl font-bold'>Any Book In Our Library.</p>
      {/* search  */}
      <SearchForm />
    </div>
  )
}

export default SearchHero
