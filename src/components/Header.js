import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar bg="dark" expand="lg" className="nav-bar">
      <Container>
        <Navbar.Brand className="name-cls">APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-items">
            <Nav.Link>
              <Link to={"/employees"}>Employees</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/addworkitem"}>Add Work Item</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/workitems"}>Work Items</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
