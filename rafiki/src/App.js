
import Navbar from './Navbar/index.js';
import About from './About';
import LearnWithUs from "./LearnWithUs";
import AboutUs from '../src/AboutUs/index.js';
import Footer from '../src/Footer/index.js';
import LandingPage from './Landing-page/Index.js';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <AboutUs/>
      <About/>
      <LearnWithUs/>
      <Footer/>
     
    </div>
  );
}
export default App;



