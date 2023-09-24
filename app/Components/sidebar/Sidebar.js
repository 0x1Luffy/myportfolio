"use client"
import React, { useState } from 'react';
import "./Sidebar.css";


const Sidebar = () => {

  const [toggle, showMenu] = useState(false);
  return (
   <>
    <aside className={toggle ? "aside show-menu" : "aside"}>
    <a href='#home' className='nav__logo'>
    <img src='https://i.ibb.co/w7NMgzw/User-Image.jpg' alt='sideLogo' />
    </a>

    <nav className='nav'>
      <div className='nav__menu'>
      <ul className='nav__list'>
        <li className='nav__item'>

          <a href='#home' className='nav__link'>
             <i className="icon-home"></i>
          </a>
        </li>

        <li className='nav__item'>
          <a href='#about' className='nav__link'>
          <i className="icon-user"></i>
          </a>
        </li>

        <li className='nav__item'>
          <a href='#resume' className='nav__link'>
          <i className="icon-graduation"></i>
          </a>
        </li>

        <li className='nav__item'>
          <a href='#work' className='nav__link'>
          <i className="icon-trophy"></i>
          </a>
        </li>

        <li className='nav__item'>
          <a href='#contact' className='nav__link'>
          <i className="icon-paper-plane"></i>
          </a>
        </li>


      </ul>

      </div>
    </nav>

    <div className='nav__footer'>
      <span className='copyright'>&copy; 2023 - 2024.</span>
      <span className='copyright'>&copy; Chetan-Kesare.</span>
    </div>

   </aside>


   <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
    <i className='icon-menu'></i>
   </div>
   </>
  );
}

export default Sidebar