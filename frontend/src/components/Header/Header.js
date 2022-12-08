import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { useEffect } from "react";
import {useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../../actions/userActions'

const Header = () => {
  const history = useHistory()
  const dispatch =useDispatch()
  const userLogin =useSelector((state)=>state.userLogin)
  const  userInfo  = localStorage.getItem("userInfo");
  const data1=JSON.parse(userInfo)
  useEffect(() => {}, [userInfo]);

  
  const logoutHandler = () =>{
   dispatch(logout())
   history.push("/")
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/mypage">EXPENSE TRACKER</Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        
        <Nav>
          {userInfo ? (
            <>
              <Nav.Link href="/mytransactions">My transaction</Nav.Link>
              <NavDropdown
                title={`${data1["name"]}`}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/profile">
                  {/* <img
                    alt=""
                    src={`${userInfo.pic}`}
                    width="25"
                    height="25"
                    style={{ marginRight: 10 }}
                  /> */}
                  My Profile
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) :(
            <Nav.Link href="/login">Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}


export default Header;
