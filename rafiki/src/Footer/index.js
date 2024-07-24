import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import Linkedin from '../images/linkedin.png'


const Footer = () =>{
    return(
        <div>
            <div className='footer'>
            <div className='footercontent'>

            <div>
            <h2 className='heading2'>Contact Us</h2>
            <div className='contactUs'>
            <p>+254 7012435678</p>
            <p>+254 790234567</p>
            <p>Westlands Highway</p>
            <p>Postal Address</p>
            <p>20500</p>
            </div>
            
            </div>

            <div className='aboutus'>
            <h2 className='heading2'>About Us</h2>
            <p ><a href='vision' className='link'>Vision</a></p>
            <p ><a href='mission' className='link'>Mission</a></p>
            <p ><a href='goal' className='link'>Goals</a></p>
            </div>
             
             
        <div className='footer-icons'>
            <h2>Contact</h2>
            <div className='t'>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </div>
        </div>
            </div>
 

            <p className='copyright' > © Rafiki 2024</p>
                </div>
                </div>
    )
    }

export default Footer;
