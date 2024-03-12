import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonRev from '../button';

const staticNavbarData = [
  { "name": "Platform", "id": 1 },
  { "name": "Solutions", "id": 2 },
  { "name": "Company", "id": 3 },
  { "name": "Resources", "id": 4 },
  { "name": "Contact", "id": 5 }
];

function NavbarRev() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">
          <img src='../Revnue-Sticky-Logo.png' alt="Revnue" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {staticNavbarData.map(item => (
              <NavDropdown title={item.name} id={`nav-dropdown-${item.id}`} key={item.id}>
                <NavDropdown.Item href={`#action/${item.id}.1`}>Test 1</NavDropdown.Item>
                <NavDropdown.Item href={`#action/${item.id}.2`}>Test 2</NavDropdown.Item>
                <NavDropdown.Item href={`#action/${item.id}.3`}>Test 3</NavDropdown.Item>
              </NavDropdown>
            ))}
            <ButtonRev />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarRev;
