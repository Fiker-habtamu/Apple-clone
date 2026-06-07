import React from "react";
import logo from "../commonResource/images/icons/logo-sm.png";
import search from "../commonResource/images/icons/search-icon-sm.png";
import cart from "../commonResource/images/icons/cart-sm.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-dark sticky-top">
        <Container className="p-20">
          <Navbar.Brand as={Link} to="/" className="mr-5">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/mac/" className="text-white mr-5">
                Mac
              </Nav.Link>
              <Nav.Link as={Link} to="/iphone/" className="text-white mr-5">
                iphone
              </Nav.Link>
              <Nav.Link as={Link} to="/ipad/" className="text-white mr-5">
                ipad
              </Nav.Link>
              <Nav.Link as={Link} to="/watch/" className="text-white mr-5">
                watch
              </Nav.Link>
              <Nav.Link as={Link} to="/tv/" className="text-white mr-5">
                tv
              </Nav.Link>
              <Nav.Link as={Link} to="/Music/" className="text-white mr-5">
                Music
              </Nav.Link>
              <Nav.Link as={Link} to="/Support/" className="text-white mr-5">
                Support
              </Nav.Link>
              <Nav.Link as={Link} to="/search/" className="text-white mr-5">
                <img src={search} />
              </Nav.Link>
              <Nav.Link as={Link} to="/cart/" className="text-white mr-5">
                <img src={cart} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
