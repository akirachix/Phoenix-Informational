

import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [navbartext, setNavbar] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={Logo} alt="Rafiki" className='logo'/>
            <p>Rafiki</p>
        </div>
        <div className={`nav-menu ${menuOpen? 'open' : ''}`} onClick={toggleMenu}>
       
            <li onClick={() => setNavbar("home")} className={navbartext === "home"? 'active' : ''}>Home {navbartext === "home" && <hr />}</li>
            <li onClick={() => setNavbar("about")} className={navbartext === "about"? 'active' : ''}>About Us {navbartext === "about" && <hr />}</li>
            <li onClick={() => setNavbar("contact")} className={navbartext === "contact"? 'active' : ''}>Contact {navbartext === "contact" && <hr />}</li>
        </div>
        <button className="icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}

export default Navbar;




     