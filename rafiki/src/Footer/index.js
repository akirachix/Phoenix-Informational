

import './index.css'


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

             <div>
            <h2 className='heading2'>Connect With Us</h2>
            <div className='connect'>
            <img src="images/instagram.png" alt='Instagram Icon' className='icon'  ></img>
            <img src="images/facebook.png" alt='Facebook Icon' className='icon'></img>
            <img src="images/twitter.png" alt='Twitter Icon' className='icon'></img>
            <img src="images/linkedin.svg" alt='LinkedIn Icon' className='icon'></img>
            </div>
            </div>
            </div>
 

            <p className='copyright' > © Rafiki 2024</p>
                </div>
            </div>
    )
    }

export default Footer;
