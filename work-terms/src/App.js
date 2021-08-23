import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import ParticlesBg from 'particles-bg';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import home_logo from './images/home_logo.png'
import git_logo from './images/GitHub-Mark-Light-32px.png'
import linked_logo from './images/linkedin-icon-18-256.png'
import about_img from './images/temp.jpg'
import './Components/style/App.css';
import AboutMe from './data/AboutMe';
import MyStack from './data/MyStack';
import { useState } from 'react';

function App() {

  //settomg the information
  const [about] = useState(AboutMe);
  const [stack] = useState(MyStack);


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
      <div className="" id="co-op">
        <Section1 data={about} img={about_img}/>
      </div>
      <div className="" id="school">
        <Section1 data={about} img={about_img}/>
      </div>
      <div className="" id="extra-curriculars">
        <Section1 data={about} img={about_img}/>
      </div>
      <div className="" id="contact-me">
        <Section1 data={about} img={about_img}/>
      </div>


    </div>
  );
}
export default App;
