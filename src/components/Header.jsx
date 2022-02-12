
import { useEffect, useState } from 'react'
import userAvatar from '../assets/images/image-avatar.png'
import React from 'react'
import NavbarMobile from './NavbarMobile'
import NavbarDesktop from './NavbarDesktop'
import ShoppingCart from './ShoppingCart'




import './Header.css'


const user = {
  name: 'John Doe',
  avatar: userAvatar
}

function Header() {
  const [breakpoint, setBreakpoint] = useState('')
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth <= 500) {
        setBreakpoint('mobile')
      } else {
        setBreakpoint('desktop')
      }
      console.log(windowWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
  })

  return (
    <header className="header">
      <nav className='navbar'>
        <div className='navbar-container'>
          {breakpoint === 'mobile' &&
            <NavbarMobile />
          }
          {breakpoint === 'desktop' &&
            <NavbarDesktop />
          }
        </div>
      </nav>
      <ShoppingCart />

      <button className='user-avatar'>
        <img src={user.avatar} alt="user-avatar" />
      </button>

    </header>
  )

}

export default Header