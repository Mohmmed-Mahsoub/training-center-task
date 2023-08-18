import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Navbar expand="lg" bg="body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/" exact>
          Training Center
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/showAllCourses">
              All Courses
            </Nav.Link>
            <Nav.Link as={NavLink} to="/showAllStudents">
              All Users
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
