import React from 'react'
import { Form} from 'react-bootstrap'
import { useState } from 'react'
import MainScreen from '../../components/MainScreen/MainScreen'
import {Button,Col,Row} from 'react-bootstrap'
import { Loading } from '../../components/Loading/Loading'

//import './RegisterScreen.css'
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'
import { registerUser } from '../../actions/userActions'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'



export const RegisterScreen = ({history}) => {
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("") 
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else dispatch(registerUser(name, email, password));
  };

   



  return (

    <MainScreen title="REGISTER">
    <div className="loginContainer">
  {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
  {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
  {loading && <Loading />}
      <div className='FormReg'>

        <Form onSubmit={submitHandler} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="email" 
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter Email"
                >

                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label className='formname'>PASSWORD</Form.Label>
                <Form.Control type="password"
                className='fieldform'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Enter Password">

                </Form.Control>
            </Form.Group>
            <Form.Group controlId='formBasicPasswordagain'>
              <Form.Label>CONFIRM PASSWORD</Form.Label>
              <Form.Control type="password"
              value={confirmPassword}
              onChange={(e)=> setconfirmPassword(e.target.value)}
              placeholder="confirm password"></Form.Control>

            </Form.Group>
            <Form.Group controlId='formBasicName'>
              <Form.Label >FULL NAME</Form.Label>
              <Form.Control type="name"
              value={name}
              onChange={(e)=> setname(e.target.value)}
              placeholder="Enter your name">

              </Form.Control>
            </Form.Group>
         
            <Button variant="primary" type="submit" className='sbutton'>
                REGISTER
            </Button>
        </Form>
        </div>

        <Row className="py-3">
            <Col>
            Already a user? <a href='/login'>Login</a>
            </Col>
        </Row>
    </div>
</MainScreen>
  )
}
 