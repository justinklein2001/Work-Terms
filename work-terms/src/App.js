import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import CarouselWork from './Components/CarouselWork';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import ParticlesBg from 'particles-bg';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import home_logo from './images/home_logo.png';
import git_logo from './images/GitHub-Mark-Light-32px.png';
import linked_logo from './images/linkedin-icon-18-256.png';
import about_img from './images/justin2.jpg';
import ec_1 from './images/hackathon.png';
import ec_2 from './images/wizards.png';
import ec_3 from './images/gkic.png';
import ec_4 from './images/singer.jpg';
import './Components/style/App.css';
import AboutMe from './data/AboutMe';
import MyStack from './data/MyStack';
import ExtraCurriculars from './data/ExtraCurriculars';
import Education from './data/Education';
import { useState } from 'react';
import Section5 from './Components/Section5';
import Footer from './Components/Footer';


function App() {

  //settomg the information
  const [about] = useState(AboutMe);
  const [stack] = useState(MyStack);
  const [education] = useState(Education);
  const [extraCurriculars] = useState(ExtraCurriculars);


  return (
    <div className="App">
      <div className="section" id="home">
      <NavBar logo={home_logo} git={git_logo} linked={linked_logo}></NavBar>
        <Home/>
        <ParticlesBg type="circle" num={5} color="#a52a2a" bg={true}/>  
     
      </div>
      
      <div className="" id="about-me">
        <Section1 data={about} img={about_img}/>
      </div>
      <div className="" id="my-stack">
        <Section2 data={stack} />
      </div>
      <div className="" id="education">
        <Section3 data={education} img={about_img}/>
      </div>
      
      <div className="" id="co-op">
        <CarouselWork/>
      </div>

      <div className="" id="extra-curriculars">
        <Section4 
          data={extraCurriculars} 
          img1={ec_1}
          img2={ec_2}
          img3={ec_3}
          img4={ec_4}
        />
      </div>
      <div className="" id="contact-me">
        <Section5/>
      </div>
      <Footer linked={linked_logo} git={git_logo}/>


    </div>
  );
}
export default App;
