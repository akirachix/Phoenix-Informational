import React from 'react';
import './index.css';
import Students from '../images/students.avif'

const LandingPage = () => {
  return (
    <div className='container'>
      <div className='landing-page-text'>
        <h1>Learn with Rafiki</h1>
        <p>Get the feel of a real 
          <br/>classroom</p>
        
        
        <div className='get-started'>
            <button>Get Started</button>
        </div> 
      </div>

      <div className='landing-page-image'>
        <img src={Students} alt='Two Learners' className='image-students'/>
      </div>
    </div>
  );
}

export default LandingPage;
