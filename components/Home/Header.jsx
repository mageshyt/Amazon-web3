import React from 'react'
import Logo from '../../assets/logo.png'
const styles = {
  header: 'bg-[#131921] h-[30px] w-full',
}
const Header = () => {
  return (
    <div className={styles.header}>
      {/* Logo -->left */}
      <div>
        <img source={Logo} />
      </div>
    </div>
  )
}

export default Header
