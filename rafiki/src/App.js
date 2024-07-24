import Navbar from './Navbar/index.js';
import LandingPage from './Landing-page/Index.js';
import AboutUs from '../src/AboutUs/index.js'
import Footer from '../src/Footer/index.js'
import LearnWithUs from '../src/LearnWithUs/index.js'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <AboutUs/>
      <LearnWithUs/>
      <Footer/>
     
    </div>
  );
}


export default App;