

import userAvatar from '../assets/images/image-avatar.png'
import React from 'react'
import NavbarMobile from './NavbarMobile'
import NavbarDesktop from './NavbarDesktop'
import ShoppingCart from './ShoppingCart'

import {useBreakpoint} from './media-querys/MeidaQuery'

import './Header.css'


const user = {
  name: 'John Doe',
  avatar: userAvatar
}


function Header() {
  const breakpoint = useBreakpoint()
  return (
    <header className="header">
      {breakpoint === 'mobile' &&
        <NavbarMobile />
      }
      {breakpoint === 'desktop' &&
        <NavbarDesktop />
      }

      <ShoppingCart />

      <button className='user-avatar'>
        <img src={user.avatar} alt="user-avatar" />
      </button>

    </header>
  )

}

export default Header