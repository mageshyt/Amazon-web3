import React from 'react'
import { GoLocation } from 'react-icons/go'
import SearchBar from './SearchBar'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import SignIn from './SignIn'
const styles = {
  wrapper: 'bg-[#131921] flex items-center  justify-around  h-[60px] w-[100%]',
  logoContainer: ' flex items-center h-[30px] space-x-4 ml-2 ',
  searchBar: `flex flex-1  sm:flex mx-[0.8rem] w-max-[520px] items-center rounded-[0.8rem]`,
  RightContent: 'flex w-[250px] space-x-6 items-center',
}
const Header = () => {
  return (
    <div className={styles.wrapper}>
      {/* Logo and address -->left */}
      <div className={styles.logoContainer}>
        {/* logo */}
        <div>
          <img
            src="/images/logo.png"
            className="h-[90px]  w-[90px] object-contain"
          />
        </div>
        {/* Address */}
        <div className="mb-3 hidden md:flex ">
          <div className="flex items-center space-x-2">
            {/* location icon */}
            <GoLocation className="h-6 w-6 font-bold text-white" />
            <div className="flex flex-col">
              <span className=" text-xs text-white">Hello</span>
              <span className=" text-sm font-bold text-white">
                Select your address
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Search Bar - middle */}
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      {/* Sign In - right */}
      <div className={styles.RightContent}>
        <SignIn />
        {/* Order */}
        <Order />
        {/* Cart */}
        <Cart />
      </div>
    </div>
  )
}

const Order = () => {
  return (
    <div>
      <div className="flex flex-col ">
        <span className="text-xs text-white">Return</span>
        <span className=" text-sm font-bold text-white">&Order</span>
      </div>
    </div>
  )
}

const Cart = () => {
  return (
    <div className="relative">
      <AiOutlineShoppingCart className="h-10 w-10 font-bold text-white" />
      <div className="center absolute top-0  right-[2px] h-4 w-4 animate-bounce rounded-full bg-white text-center text-sm text-gray-500">
        <span>0</span>
      </div>
    </div>
  )
}
export default Header
