import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function Navbarr() {
  return (
 
    <Navbar bg="light" expand="lg" className='Navbarr'>
      <Container>
        <Navbar.Brand href="#home" className='NavbarBrand'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{marginLeft:'auto'}}  >
            <Nav.Link href="#home" className="navbarLinks">HOME</Nav.Link>
            <Nav.Link href="#link" className="navbarLinks">OUR PROJECTXS</Nav.Link>
            <Nav.Link href="#link" className="navbarLinks">PORTFOLIO</Nav.Link>
            <Nav.Link href="#link" className="navbarLinks">OUR PRODUCTS</Nav.Link>
          </Nav>
        <div className='navButtons'>
        <Button>CONTACT US</Button>
        <Button>GET A PROPOSAL</Button>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 

export default Navbarr