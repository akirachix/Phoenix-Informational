import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../images/logo.png'

const Navbar = () => {

    const [navbartext, setNavbar] = useState("home")

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={Logo} alt=" " className='logo'/><p>Rafiki</p>

        </div>
           <ul className="nav-menu">
            <li onClick={() => setNavbar("home")}>Home {navbartext === "home" && <hr />}</li>
            <li onClick={() => setNavbar("about")}>About Us {navbartext === "about" && <hr />}</li>
            <li onClick={() => setNavbar("contact")}>Contact {navbartext === "contact" && <hr />}</li>
           </ul>
        
        
    </div>
    
  );
}

export default Navbar;
