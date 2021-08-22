import HSF from './Components/hsf';
import NCR from './Components/ncr';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import ParticlesBg from 'particles-bg';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import home_logo from './images/home_logo.png'
import git_logo from './images/GitHub-Mark-Light-32px.png'
import linked_logo from './images/linkedin-icon-18-256.png'
import './Components/style/App.css';

function App() {
  return (
    <div className="App">
      <div className="section" id="home">
      <NavBar logo={home_logo} git={git_logo} linked={linked_logo}></NavBar>
        <Home/>
        <ParticlesBg type="circle" num={5} color="#a52a2a" bg={true}/>  
     
      </div>
      
      <div className="section" id="about-me">
        <p>about me</p>
      </div>
      <div className="section" id="my-stack">
        <p>My stack</p>
      </div>
      <div className="section" id="co-op">
        <p>Co-op</p>
      </div>
      <div className="section" id="school">
        <p>school</p>
      </div>
      <div className="section" id="extra-curriculars">
        <p>extra-curriculars</p>
      </div>
      <div className="section" id="contact-me">
        <p>contact me</p>
      </div>


    </div>
  );
}
export default App;
