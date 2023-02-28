import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../media/logo.png';

function Navbarr() {
  return (
 
    <Navbar expand="lg" className='Navbarr'>
      <Container>
        <Navbar.Brand href="#home" className='NavbarBrand'><img src={logo} style={{width:'100%',
      height:'7vh'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{marginLeft:'auto',marginRight:'auto'}}  >
            <Nav.Link className="navbarLinks"><Link id="routeLink" to='/'>HOME</Link></Nav.Link>
            <Nav.Link className="navbarLinks"><Link id="routeLink" to='/projects'>OUR PROJECTS</Link></Nav.Link>
            <Nav.Link className="navbarLinks"><Link id="routeLink" to='/portfolio'>PORTFOLIO</Link></Nav.Link>
            <Nav.Link className="navbarLinks"><Link id="routeLink" to='/products'>OUR PRODUCTS</Link></Nav.Link>
            <NavDropdown title="COMPANY" style={{color:'black'}} id="basic-nav-dropdown">
              <NavDropdown.Item ><Link id="routeLink" to='/aboutUs'>About Us</Link></NavDropdown.Item>
              <NavDropdown.Item  >
                <Link id="routeLink" to='/testimonials'>Testimonials</Link>
              </NavDropdown.Item>
              <NavDropdown.Item  ><Link id="routeLink" to='/career'>Career</Link></NavDropdown.Item>
              <NavDropdown.Item  >
              <Link id="routeLink" to='/contact'>Contact Us</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="blogsLink" className="navbarLinks"><Link id="routeLink" to='/blogs'>BLOGS</Link></Nav.Link>
          </Nav>
        <div className='navButtons'>
        <Button id="btn1">CONTACT US</Button>
        <Button id="btn2">GET A PROPOSAL</Button>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 

export default Navbarr