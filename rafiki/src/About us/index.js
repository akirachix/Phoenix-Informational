import './index.css';


const Rafiki = () =>{
    return(
        <div className='about'>
        <div className="mission-text">
            <h1>Mission</h1>
            <img className="mission-image" src="images/mission.png" alt="mission"/>
           <p>Our mission is to provide a trusted and</p>
<p>comprehensive online resource for</p>
<p>learners in secondary School to discover,</p>
<p>explore,  concepts and ideas.</p>
<p>We believe that education should be accessible, </p>
<p>engaging,and relevant to everyday life, and we</p>
<p>strive to make this vision a reality through our platform.</p> 
        </div>

        <div className="vision-text"> 
        <h1>Vision</h1>
        <img className="vision-image" src="/images/vision2.png" alt="vision"/>
        <p>Our vision is to create a world-class <p/>
<p>educational  environment</p>
<p>that inspires and empowers learners </p><p>
</p>of all ages to achieve their goals.</p> 
</div>

<div className='goal-text' >
    <h1>Goal</h1>
    <img className="goal-image" src="images/vision.jpg" alt="goal"></img>
    <p>Empowering learners to thrive</p>
<p>in a rapidly changing world,</p>
<p>one informative article at a time.</p>
</div>
   </div>
     
    )
};

export default Rafiki;