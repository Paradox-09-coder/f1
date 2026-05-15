import React from 'react';
import '../Home.css';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header>
        <div className='container'>
          <div className='header_one'>
            <p className='header_p'>Race Series</p>
            <nav className='header_nav'>
              <p className='header_p'>Authentics</p>
              <p className='header_p'>Store</p>
              <p className='header_p'>Tickets</p>
              <p className='header_p'>Hospitality</p>
              <p className='header_p'>Experiences</p>
              <img src='/public/icon/f1tv.png' alt='' className='tv' />
              <button className='header_btn1'>Sign In</button>
              <button className='header_btn2'>Subscribe</button>
            </nav>
          </div>
          <div className='header_two'>
            <div className='header-nav_flex'>
              <Link to='/'>
                <img src='/public/icon/vektor.png' alt='' className='logo' />
              </Link>
              <nav className='header_nav2'>
                <Link to="/schedule">
                <p className='navbar_p'>
                  Schedule <img src='/public/icon/Border.png' alt='' className='border' />
                </p>
                </Link>
                <p className='navbar_p'>
                  Results <img src='/public/icon/Border.png' alt='' className='border' />
                </p>
                <p className='navbar_p'>
                  News <img src='/public/icon/Border.png' alt='' className='border' />
                </p>
                <NavLink to='/drivers' className='navbar_p'>
                  Drivers <img src='/public/icon/Border.png' alt='' className='border' />
                </NavLink>
                <p className='navbar_p'>
                  Teams <img src='/public/icon/Border.png' alt='' className='border' />
                </p>
                <p className='navbar_p'>
                  Fantasy & Gaming <img src='/public/icon/Border.png' alt='' className='border' />
                </p>
                <p className='navbar_p'>
                  F1 Members' Area <img src='/public/icon/Border.png' alt='' className='border' />
                </p>
              </nav>
            </div>
            <img src='/public/icon/fifa.png' alt='' className='fifa' />
          </div>
        </div>
        <div className="header_tree">
          <img src="/icon/Link.png" alt="" className="canada" />
          <div className="header_flag">
            <img src="/icon/tag.png" alt="" className="tag" />
            <p className='header_paragraph'>
              MY TIME
            </p>
            <p className='header_paragraph'>
              17:09
            </p>
            <img src="/icon/tagSecond.2e30a59c.webp.png" alt="" className="tag" />
          </div>
        </div>
      </header>
    </div>
  );
}
