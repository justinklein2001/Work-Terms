import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/Home.css';
import {  Button } from 'react-bootstrap';
import resume from '../files/Justin_Klein_Resume_Website.pdf' 
function Home() {

    
return (
    <div className="home-page">
        <h1 className="fs-1">Hi! I'm Justin Klein</h1>
        <h4 className="mt-3">I love solving problems.</h4>
        <div className="mt-4">
            <Button 
                className="bg-my-red-btn fs-6"
                href="#contact-me"
            >
                Contact Me
            </Button>{' '}
            <Button 
                className="bg-my-red-btn fs-6"
                href={resume}
            >
                Résumé
            </Button>
        </div>
    </div>
);
}
export default Home;