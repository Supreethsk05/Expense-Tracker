import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand>
          <Nav.Link href="/">
          
          EXPENSE TRACKER

          </Nav.Link>
         
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/mynotes">
              Transactions

            </Nav.Link> 
            <Nav.Link href="link">Your Name</Nav.Link>
            <NavDropdown title="TOOLS" id="basic-nav-dropdown"  >
              <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
             } } href="/" 
             >Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form >
            <FormControl type="text"  placeholder=" Search" className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
