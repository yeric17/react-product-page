

import logo from '../assets/images/logo.svg'
import userAvatar from '../assets/images/image-avatar.png'
import { useLocation } from 'react-router-dom'
import React from 'react'
import './NavbarDesktop.css'

const user = {
    name: 'John Doe',
    avatar: userAvatar
}

function NavbarMobile() {
    const { pathname } = useLocation()
    return (
        <nav className='navbar-desktop'>
            <div className='navbar-desktop_container'>
                <a href='/' className='navbar-logo'><img src={logo} alt="logo" /></a>
                <ul className='navbar-nav'>
                    <li className={`navbar-nav_item${pathname === '/collections'?' active':''}`}><a href="/">Collections</a></li>
                    <li className={`navbar-nav_item${pathname === '/men'?' active':''}`}><a href="/">Men</a></li>
                    <li className={`navbar-nav_item${pathname === '/'?' active':''}`}><a href="/">Women</a></li>
                    <li className={`navbar-nav_item${pathname === '/about'?' active':''}`}><a href='/'>About</a></li>
                    <li className={`navbar-nav_item${pathname === '/contact'?' active':''}`}><a href="/">Contact</a></li>
                </ul>

            </div>
        </nav>
    )

}

export default NavbarMobile