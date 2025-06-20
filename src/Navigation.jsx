import React from 'react';
import { Link } from 'react-router-dom';
 
function Navigation() {
  // const [showMenu, setShowMenu] = useState(false);

  function handleHamburgerClick() {
    const menu = document.querySelector('.hamburger-menu');
    if (menu) {
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    }
  }
  
  return (
    <div className='wrapper'>
      <nav className="navigation">
        <img src="/logo.png" alt="logo perusahaan" />
        <div className="hamburger" onClick={handleHamburgerClick}>
          <span>&#9776;</span>
        </div>

        <ul className='nav-menu'>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ul className='nav-icons'>
          <li><img src="/account.png" alt="account" /></li>
          <li><img src="/search.png" alt="seacrh" /></li>
          <li><img src="/like.png" alt="like" /></li>
          <li><img src="/shop.png" alt="shop" /></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;