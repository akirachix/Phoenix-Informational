
import './index.css'
import Image from '../images/happystudents.jpg'

const LearnWithUs = ()=>{
    return(
        <div className='all-section'>
            <h1 className="heading">
                Learn With Us 
            </h1 >
            <section className="learnWithUs">
             <img src={Image} alt="studying" className="image"></img>
             <section className="text">
               <p>Learning students are happy students.
                   Happy students make happy parents.
                   We give parents a hand while
                   giving students the tools to succeed. </p>
             </section>
            </section>
        </div>
    )
  }
  export default LearnWithUs;