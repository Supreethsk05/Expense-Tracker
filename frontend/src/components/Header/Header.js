import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../../actions/userActions'

const Header = () => {
  const history = useHistory()
  const dispatch =useDispatch()
  const userLogin =useSelector((state)=>state.userLogin)
  const { userInfo } =userLogin;
  
  const logouthandler = () =>{
   dispatch(logout())
   history.push("/")
  }
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Transactions" id="basic-nav-dropdown"  >
              <NavDropdown.Item href="/mytransactions">View transactions</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item 
             href="/create"
             >CreateTransaction</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Navbar.Collapse>


     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="link">Your Name</Nav.Link>
            <NavDropdown title="TOOLS" id="basic-nav-dropdown"  >
              <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logouthandler
             } 
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
