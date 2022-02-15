

import logo from '../assets/images/logo.svg'
import userAvatar from '../assets/images/image-avatar.png'
import React from 'react'
import './NavbarDesktop.css'

const user = {
    name: 'John Doe',
    avatar: userAvatar
}

function NavbarMobile() {
    return (
        <nav className='navbar-desktop'>
            <div className='navbar-desktop_container'>
                <a href='/' className='navbar-logo'><img src={logo} alt="logo" /></a>
                <ul className='navbar-nav'>
                    <li className='navbar-nav_item'><a href="/">Collections</a></li>
                    <li className='navbar-nav_item'><a href="/">Men</a></li>
                    <li className='navbar-nav_item'><a href="/">Women</a></li>
                    <li className='navbar-nav_item'><a href='/'>About</a></li>
                    <li className='navbar-nav_item'><a href="/">Contact</a></li>
                </ul>

            </div>
        </nav>
    )

}

export default NavbarMobile