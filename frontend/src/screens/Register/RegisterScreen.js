import { Button,Col,Form,Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Loading } from "../../components/Loading/Loading";
import { useEffect } from "react";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import MainScreen from "../../components/MainScreen/MainScreen";
import "./RegisterScreen.css"
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
    const [email, setemail] = useState("")
const [passwordagain, setpasswordagain] = useState("")
const [fullname, setfullname] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState(false)
    const [loading, setLoading] = useState(false)
  return (
    <MainScreen title="REGISTER PAGE">
        <div className='formforregister'>
         
            <Form>
              <h3>
                Enter your details
              </h3>
            <Form.Group controlId="formfullname">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text"
                    value={fullname}
                    placeholder="Enter name">

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" 
                    value={email}
                    placeholder="Enter email"
                    >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                    value={password}
                    placeholder="Enter password">

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicagainPassword">
                    <Form.Label>Enter password again</Form.Label>
                    <Form.Control type="password"
                    value={passwordagain}
                    placeholder="Enter password again">

                    </Form.Control>
                </Form.Group>
         
                <Button variant="primary" type="submit" >
                    REGISTER
                </Button>
            </Form>
            <Col>
            Already a user.<a href="/login" > Sign in Here</a>
            </Col>
        </div>
    </MainScreen>
  )
}
