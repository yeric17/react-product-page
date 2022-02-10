
import iconCart from '../assets/images/icon-cart.svg'
import userAvatar from '../assets/images/image-avatar.png'
import iconMenu from '../assets/images/icon-menu.svg'
import './Navbar.css'

const user = {
  name: 'John Doe',
  avatar: userAvatar
}

function Navbar() {
  return (
    <header className="header">
      <nav className='navbar'>
        <div className='navbar-container'>
          <button><img src={iconMenu} alt="icon-menu" /></button>
          <a href='/' className='navbar-logo'>sneakers</a>
          <ul className='navbar-nav'>
            <li><a href="/collections">Collections</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/woment">Women</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <span className="shopping-cart">
        <a href="/cart"><img src={iconCart} alt="icon-cart" /></a>
      </span>
      <span>
        <button>
          <img src={user.avatar} alt="user-avatar" />
        </button>
      </span>
    </header>
  )
}

export default Navbar