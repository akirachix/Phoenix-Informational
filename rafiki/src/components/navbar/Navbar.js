// import React, { useState } from 'react';
// import './Navbar.css';
// import Logo from '../images/logo.png'


// const Navbar = () => {

 

//     const [navbartext, setNavbar] = useState("home")

  
 
//   return (
  
//     <div className='navbar'>
//         <div className="nav-logo">
//             <img src={Logo} alt=" " className='logo'/><p>Rafiki</p>

//         </div>
//            <ul className="nav-menu">
//             <li onClick={() => setNavbar("home")}>Home {navbartext === "home" && <hr />}</li>
//             <li onClick={() => setNavbar("about")}>About Us {navbartext === "about" && <hr />}</li>
//             <li onClick={() => setNavbar("contact")}>Contact {navbartext === "contact" && <hr />}</li>
//            </ul>
//            <button className="icon" onClick={Navbar}>
//       <i className="fa fa-bars"></i>
//     </button>

//     </div>
    
    
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../images/logo.png';
import { slide as Menu } from 'react-burger-menu';

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
            <i className="fa-solid fa-bars"></i>
        </button>
    </div>
  );
}

export default Navbar;




     