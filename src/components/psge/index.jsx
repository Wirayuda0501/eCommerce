import Browse from "../../Browse"
import Navigation from "../../../public/Navigation"
import { Link } from 'react-router-dom';

function Index() {

  function handleHamburgerClose() {
    const menu = document.querySelector('.hamburger-menu');
    if (menu) {
      menu.style.display = 'none';
    }
  }

  return (
  <main className="container">
      <Navigation />

      <section className='background-image'>
        <article>
          {/* kosong */}
        </article>
        <article className='card'>
          <p>
            New Arrival
          </p>
          <h1>Discover Our New Collection</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam.</p>
          <button>Buy Now</button>
        </article>
      </section>

      <div className="hamburger-menu">
        <div className="close" onClick={handleHamburgerClose}>
          <span>&#10005;</span>
        </div>
        <ul className="nav-menu">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ul className='nav-icons'>
          <li><img src="/account.png" alt="account" /> Account</li>
          <li><img src="/search.png" alt="search" /> Search</li>
          <li><img src="/like.png" alt="like" /> Like</li>
          <li><img src="/shop.png" alt="shop" /> Shop</li>
        </ul>
      </div>
      {/* <Browse /> */}
    </main>)
}

export default Index