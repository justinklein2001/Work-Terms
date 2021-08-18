import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function NavigationBar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Work Terms</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="hsf">H&S</Nav.Link>
            <Nav.Link href="ncr">NCR</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavigationBar;