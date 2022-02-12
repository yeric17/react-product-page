

import logo from '../assets/images/logo.svg'
import {useState } from 'react'
import userAvatar from '../assets/images/image-avatar.png'
import React from 'react'
import iconMenu from '../assets/images/icon-menu.svg'
import iconClose from '../assets/images/icon-close.svg'
import './NavbarMobile.css'


const user = {
    name: 'John Doe',
    avatar: userAvatar
}

function NavbarMobile() {
    const [active, setActive] = useState(false)
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <button onClick={()=>setActive(!active)} className='navbar-container_btn'><img src={iconMenu} alt="icon-menu" /></button>
                <a href='/' className='navbar-logo'><img src={logo} alt="logo" /></a>
                {active &&
                    <ul className='navbar-nav-mobile'>
                        <li className='navbar-nav-mobile_item'><button className='navbar_close-btn' onClick={()=>{setActive(false)}}><img src={iconClose} alt="icon-close" /></button></li>
                        <li className='navbar-nav-mobile_item'><a onClick={()=>{setActive(false)}} href="/">Collections</a></li>
                        <li className='navbar-nav-mobile_item'><a onClick={()=>{setActive(false)}} href="/">Men</a></li>
                        <li className='navbar-nav-mobile_item'><a onClick={()=>{setActive(false)}} href="/">Women</a></li>
                        <li className='navbar-nav-mobile_item'><a onClick={()=>{setActive(false)}} href='/'>About</a></li>
                        <li className='navbar-nav-mobile_item'><a onClick={()=>{setActive(false)}} href="/">Contact</a></li>
                    </ul>
                }
            </div>
        </nav>
    )

}

export default NavbarMobile