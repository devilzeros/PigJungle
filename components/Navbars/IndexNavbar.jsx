import React from "react";
import Link from "next/link";
// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col } from 'react-bootstrap';


export default function IndexNavbar() {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <Navbar className="header-area header-sticky wow slideInDown" expand="lg">
        <Container >
          <Navbar.Brand href="/">
            <Image src={'images/iodesign.png'} alt="logo-nav" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="main-nav">
              <Nav.Link href="/" className="font-bold">Home</Nav.Link>
              <Nav.Link href="/gallery" className="font-bold">gallery</Nav.Link>
              <Nav.Link href="/catalog" className="font-bold">catalog</Nav.Link>
              <div className="main-red-button-hover">
                <Nav.Link href="/contact" className="font-bold">Contact Us Now</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
