import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Items from './Items'

function Home() {

    const [filters, setFilters] = useState('')

  return (
    <>
        <SearchBar setFilters={setFilters}/>
        <Items filters={filters}/>
    </>
  )
}

export default Home