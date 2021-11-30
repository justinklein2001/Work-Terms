import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/Footer.css';
import {Container, Row } from 'react-bootstrap';


function Footer(props) {

    
return (

<Container className="footer-bg" fluid id="footer">
    <Row>        
        <h5>&copy; Copyright 2021, Justin Klein<br/>
        Developed using React.js & React-Bootstrap<br/>
        v1.0 of the site can be seen <a className="old" href="https://github.com/justinklein2001/Website">here</a></h5>
    </Row>
    <Row>
        <div>
            <a href="https://github.com/justinklein2001">
                <img src={props.git} height="20px" alt="github" width="20px"/>
            </a>
            {' '}
            <a href="https://www.linkedin.com/in/justinklein2001/">
            <img src={props.linked} height="20px" alt="linked in" width="20px"/>
            </a> 
        </div>
    </Row>
</Container>
);
}
export default Footer;