import React from 'react'
import 'remixicon/fonts/remixicon.css'
const SearchBar_Employee = () => {
  return (
    <form className="relative mt-10">
        <div className="relative">
            <input type="search" placeholder='Search Employee' className="w-full p-4 rounded-md style__search pl-10 " />
            <i className="ri-search-line  absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
    </form>
  )
}

export default SearchBar_Employee;