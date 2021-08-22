import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/Home.css';
import {  Button } from 'react-bootstrap';

function Home() {

    
return (
    <div className="home-page">
        <h1 className="fs-1">Hi! I'm Justin Klein</h1>
        <h2 className="mt-3">I build cool stuff.</h2>
        <div className="mt-4">
            <Button 
                className="bg-my-red fs-6"
                href="#contact-me"
            >
                Contact Me
            </Button>{' '}
            <Button 
                className="bg-my-red fs-6"
                href=""
            >
                Résumé
            </Button>
        </div>
    </div>
);
}
export default Home;