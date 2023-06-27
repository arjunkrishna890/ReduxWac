import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function NavbarPanel() {
  const cartProducts = useSelector(state=>state.cart);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link}>Products</Nav.Link>
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        
          <Nav.Link to="/cart" as={Link}>Cart{cartProducts.length}</Nav.Link>
   
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
    
  );

  
}

export default NavbarPanel