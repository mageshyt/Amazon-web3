import React from 'react'
import { GoLocation } from 'react-icons/go'
const styles = {
  header: 'bg-[#131921] flex items-center  h-[60px] w-full',
  logoContainer: ' flex items-center justify-around h-[30px] w-[300px] ',
}
const Header = () => {
  return (
    <div className={styles.header}>
      {/* Logo and address -->left */}
      <div className={styles.logoContainer}>
        {/* logo */}
        <div>
          <img
            src="/images/logo.png"
            className="h-[90px] w-[90px] object-contain"
          />
        </div>
        {/* Address */}
        <div className="mb-3 flex ">
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
        {/* Search Bar */}
      </div>
    </div>
  )
}

export default Header
