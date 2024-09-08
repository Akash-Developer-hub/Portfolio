import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS for additional styling

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar px-4">
      <Navbar.Brand as={Link} to="/" className="brand-logo">
        Akash S
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="nav-link-custom">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/skills" className="nav-link-custom">
            Skills
          </Nav.Link>
          <Nav.Link as={Link} to="/projects" className="nav-link-custom">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/internship" className="nav-link-custom">
            Internship
          </Nav.Link>
          <Nav.Link as={Link} to="/achievements" className="nav-link-custom">
            Achievements
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
