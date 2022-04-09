import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineCaretDown } from 'react-icons/ai'
const styles = {
  searchBar:
    'bg-[#fff] flex items-center  justify-around  h-[40px] rounded-xl w-[100%]',
  input: 'h-full w-full ml-2 bg-transparent outline-none',
  searchIconBox:
    'bg-yellow-500 h-[40px]  flex items-center w-[40px] justify-center rounded-r-xl  cursor-pointer',
  label: 'flex h-[40px]  outline-none ',
}
const SearchBar = () => {
  return (
    <div className={'w-full'}>
      <div className={styles.searchBar}>
        <div className="">
          <SelectCategory />
        </div>
        <input
          type="text"
          className={styles.input}
          placeholder="Search for a place"
        />
        {/* Search Icon */}

        <div className={styles.searchIconBox}>
          <BsSearch className="h-6 w-6 text-black" />
        </div>
      </div>
    </div>
  )
}

const SelectCategory = () => {
  return (
    <div className="flex h-full w-14 items-center justify-center rounded-l-xl bg-[#dadada] ">
      <label className={styles.label}>
        <select className=" w-10 rounded-l-xl  bg-[#dadada]  text-center outline-none">
          <option value="All">All</option>
          <option value="">books</option>
          <option value="">Alexa Skills</option>
          <option value="">Electronics</option>
          <option value="">Furniture</option>
        </select>
      </label>
      <AiOutlineCaretDown className="mr-2 h-6 w-6 text-black" />
    </div>
  )
}
export default SearchBar
