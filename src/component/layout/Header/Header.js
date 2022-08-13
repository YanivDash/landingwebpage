/* eslint-disable jsx-a11y/anchor-is-valid */
import { GrInstagram } from 'react-icons/gr';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImSearch } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Header.css';
import logo from './Logo.png';
import { useState } from 'react';
import { Fragment } from 'react';

const Header = () => {
  const offset = 50;

  const [menuBtn, setMenuBtn] = useState(false);
  const [navbarClass, setNavbarClass] = useState('');

  const toggelMenuBtn = () => {
    menuBtn ? setMenuBtn(false) : setMenuBtn(true);
  };

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > offset) {
      setNavbarClass('navbar-active');
    } else {
      setNavbarClass('');
    }
  });

  return (
    <Fragment>
      <header>
        <nav id="navbar" className={navbarClass}>
          <div className={menuBtn ? 'menu-open menu' : 'menu'}>
            <div>
              <img src={logo} className="weblogo" alt="Logo" />
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Whats new</a>
                </li>
                <li>
                  <a href="#">Categories</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Store</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <ul className="social-media">
                <li>
                  <a href="">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="">
                    <GrInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                </li>
              </ul>
              <form>
                <div className="input-wrap">
                  <input type="search" placeholder="Search..." />
                  <button type="submit">
                    <ImSearch className="fa-bars" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="container">
            <a href="#" className="brand">
              Navbar
            </a>
            <div className="container-inner">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <form>
                <div className="input-wrap">
                  <input type="search" placeholder="Search..." />
                  <button type="submit">
                    <ImSearch className="fa-bars" />
                  </button>
                </div>
              </form>
            </div>
            <div className="menu-bar">
              <GiHamburgerMenu onClick={toggelMenuBtn} className=" menu-btn" />
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
