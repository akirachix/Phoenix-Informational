
// import React, { useState } from 'react';
// import './Navbar.css';
// import Logo from '../images/logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {

//   const [navbartext, setNavbar] = useState("home");
//   const [menuOpen, setMenuOpen] = useState(false); 

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen); 
//   };

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };
  
//   return (
//     <div className='navbar'>
//         <div className="nav-logo">
//             <img src={Logo} alt="Rafiki" className='logo'/>
//             <p>Rafiki</p>
//         </div>
//         <div className={`nav-menu ${menuOpen? 'open' : ''}`} onClick={toggleMenu}>
       
//             <li onClick={() => setNavbar("home")} className={navbartext === "home"? 'active' : ''}>Home {navbartext === "home" && <hr />}</li>
//             <li onClick={() => setNavbar("about")} className={navbartext === "about"? 'active' : ''}>AboutUs {navbartext === "about" && <hr />}</li>
//             <li onClick={() => setNavbar("contact")} className={navbartext === "contact"? 'active' : ''}>Contact {navbartext === "contact" && <hr />}</li>
//         </div>
//         <div className="cancel-btn" onClick={closeMenu}>
//           <FontAwesomeIcon icon={faTimes} />
//         </div>
//         <button className="icon" onClick={toggleMenu}>
//         <FontAwesomeIcon icon={faBars} />
//       </button>
    
//     </div>
//   );
// }

// export default Navbar;




import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [navbartext, setNavbar] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={Logo} alt="Rafiki" className='logo' />
        <p>Rafiki</p>
      </div>
      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
      {isMenuOpen && (
          <div className="cancel-btn" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        )}
        <li onClick={() => setNavbar("home")} className={navbartext === "home" ? 'active' : ''}>
          Home {navbartext === "home" && <hr />}
        </li>
        <li onClick={() => setNavbar("about")} className={navbartext === "about" ? 'active' : ''}>
          AboutUs {navbartext === "about" && <hr />}
        </li>
        <li onClick={() => setNavbar("contact")} className={navbartext === "contact" ? 'active' : ''}>
          Contact {navbartext === "contact" && <hr />}
        </li>
      </div>
      <button className="icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default Navbar;