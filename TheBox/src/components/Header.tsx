import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import random from "../assets/logoipsum-253.svg";
import '../styles/header.scss'

function Header() {
  return (
    <>
      <Navbar fixed="top" expand="lg" className="navigation">
        <Container>
          <Navbar.Brand className="navigation__logo">
            <img src={random} alt="Random" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navigation__menu" />
          <Navbar.Collapse id="navigation__menu">
            <Nav className="me-auto">
              <Nav.Link href="#" className="ms-5">Home</Nav.Link>
              <Nav.Link href="#" className="ms-5">About Us</Nav.Link>
              <Nav.Link href="#" className="ms-5">Projects</Nav.Link>
              <Nav.Link href="#" className="ms-5">Services</Nav.Link>
              <Nav.Link href="#" className="ms-5">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
