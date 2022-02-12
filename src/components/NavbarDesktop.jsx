

import logo from '../assets/images/logo.svg'
import userAvatar from '../assets/images/image-avatar.png'
import React from 'react'


const user = {
    name: 'John Doe',
    avatar: userAvatar
}

function NavbarMobile() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <a href='/' className='navbar-logo'><img src={logo} alt="logo" /></a>

                <ul className='navbar-nav'>
                    <li><a href="/collections">Collections</a></li>
                    <li><a href="/men">Men</a></li>
                    <li><a href="/woment">Women</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

            </div>
        </nav>
    )

}

export default NavbarMobile