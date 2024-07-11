import './index.css';


const AboutUs = () =>{
    return(
        <div>

        <div className="about-text" >
        <h1>About Us</h1> 
        </div>
        <div className='about'>
       
        <div className="mission-text">
            <h1>Mission</h1>
            <img className="mission-image" src="image/mission.png" alt="mission"/>
           <p className='mission'>Our mission is to provide a trusted and
             comprehensive online resources for
             learners in secondary schools to discover and explore concepts.
             We believe that education should be accessible,
             engaging, and relevant to everyday life. We
             strive to make this vision a reality through our platform.</p> 
        </div>

        <div className="vision-text"> 
        <h1>Vision</h1>
        <img className="vision-image" src="/image/vision2.png" alt="vision"/>
        <p className='vision'>Our vision is to create a world-class
         educational environment that inspire and empowers learners of 
          all ages to achieve their goals.</p> 

</div>

<div className='goal-text' >
    <h1>Goal</h1>
    <img className="goal-image" src="image/goal.jpg" alt="goal"></img>
    <p className='goal'>To empower learners to thrive
in a rapidly changing world.
</p>
</div>
   </div>
   </div>
     
    )
};

export default AboutUs;