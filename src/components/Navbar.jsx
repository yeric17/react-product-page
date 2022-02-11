
import iconCart from '../assets/images/icon-cart.svg'
import { useEffect, useState } from 'react'
import userAvatar from '../assets/images/image-avatar.png'
import React from 'react'
import iconMenu from '../assets/images/icon-menu.svg'
import './Navbar.css'


const user = {
  name: 'John Doe',
  avatar: userAvatar
}

function Navbar() {
  const [breakpoint, setBreakpoint] = useState('')
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth <= 425) {
        setBreakpoint('mobile')
      } else {
        setBreakpoint('desktop')
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
  })
  return (
    <header className="header">
      <nav className='navbar'>
        <div className='navbar-container'>
          {breakpoint === 'mobile' &&
            <button><img src={iconMenu} alt="icon-menu" /></button>
          }
          <a href='/' className='navbar-logo'>sneakers</a>
          {breakpoint === 'desktop' &&
          <ul className='navbar-nav'>
            <li><a href="/collections">Collections</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/woment">Women</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          }
        </div>
      </nav>
      <span className="shopping-cart">
        <a href="/cart"><img src={iconCart} alt="icon-cart" /></a>
      </span>

      <button className='user-avatar'>
        <img src={user.avatar} alt="user-avatar" />
      </button>

    </header>
  )

}

export default Navbar