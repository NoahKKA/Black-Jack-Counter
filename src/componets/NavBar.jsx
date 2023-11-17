import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Collapse } from 'react-bootstrap/Collapse';
import { useState } from 'react';

export default function NavBar() {
  const [opne, setOpen] = useState(false)

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="/">Black Jack Counter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/tutorial">Tutorial</Nav.Link>
            <NavDropdown title="Counting" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">What is Counting?</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Where do I start?
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Statistics</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
