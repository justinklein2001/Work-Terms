import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style/NavBar.css';


function NavBar(props) {
    return (
        <Navbar 
            bg="my-red" 
            variant="dark"
            fixed="top"
            expand="md">

            {/*Custom Home Logo*/}
            <Navbar.Brand className="align-left-logo" href="#home">
                <img src={props.logo} className="logo" height="35px" alt="home logo" width="35px"/>       
            </Navbar.Brand>

            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav className="me-auto">
                    
                    <Nav.Link href="#about-me">About Me</Nav.Link>    
                    <Nav.Link href="#my-stack">My Stack</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#co-op">Co-Op</Nav.Link>  
                    <Nav.Link href="#extra-curriculars">Extra-Curriculars</Nav.Link>
                    <Nav.Link href="#contact-me">Contact Me</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Item>
                        <Nav.Link className="justify-content-end" href="https://github.com/justinklein2001">
                            <img src={props.git} height="20px" alt="github" width="20px"/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="align-right-logo" href="https://www.linkedin.com/in/justinklein2001/">
                            <img src={props.linked} height="20px" alt="linked in" width="20px"/>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                
            </Navbar.Collapse>

            
        </Navbar>
    );
}
export default NavBar;