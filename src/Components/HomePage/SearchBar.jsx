import React, { useState } from 'react'

function SearchBar({setFilters}) {
    const [searchText, setSearchText] = useState('')

    const handleChange=(event)=>{
        setSearchText(event.target.value)
        setFilters(event.target.value)
    }

  return (
    <>
        <div className='container w-full mt-10'>
            <div>
                <input value={searchText} onChange={handleChange} type="text" className='w-96 p-1 ml-24 rounded-l-lg' name="" id="" />
                <button  className='w-28 bg-teal-800 rounded-r-lg border-white hover:bg-teal-700 transation delay-150 ease-in-out text-white absolute p-1'>Search</button>
            </div>
        </div>
    </>
  )
}

export default SearchBar