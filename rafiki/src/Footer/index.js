

import './index.css'


const Footer = () =>{
    return(
        <div>
            <section className='Container'>
            <section  className='footerWhole'>
            <section>
            <h2>Contact Us</h2>
            <p>+254 7012435678</p>
            <p>+254 790234567</p>
            <p>westlands Highway</p>
            <p>Postal Address</p>
            <p>20500</p>
            </section>

            <section>
            <h2>About Us</h2>
            <p>Vision</p>
            <p>Mission</p>
            <p>Goals</p>
            </section>

             <section>
            <h2>Connect With Us</h2>
            <img src="/images/instagram.png" alt='Instagram Icon' className='Icon'  ></img>
            <img src="/images/facebook.png" alt='Facebook Icon' className='Icon'></img>
            <img src="/images/twitter.png" alt='Twitter Icon' className='Icon'></img>
            <img src="/images/linkedin.png" alt='LinkedIn Icon' className='Icon'></img>
            </section>
            </section>
 

            <p className='copyright' > © Rafiki 2024</p>
                </section>
            </div>
    )
    }

export default Footer;
