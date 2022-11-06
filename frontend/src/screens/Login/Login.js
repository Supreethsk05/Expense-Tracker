import { Button,Col,Form,Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Loading } from "../../components/Loading/Loading";
import { useEffect } from "react";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import MainScreen from "../../components/MainScreen/MainScreen";
//import './LoginScreen.css'

export const LoginScreen = ({history}) => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState(false)
    const [loading, setLoading] = useState(false)

    


return(
    <MainScreen title="LOGIN PAGE">
        <div className="loginContainer">
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          { loading && <Loading /> }
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email ADDRESS</Form.Label>
                    <Form.Control type="email" 
                    value={email}
                    placeholder="Enter Email"
                    >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>PassWord</Form.Label>
                    <Form.Control type="password"
                    value={password}
                    placeholder="Enter Password">

                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    LOGIN
                </Button>
            </Form>
            <Row className="py-3">
                <Col>
                New user? <a href='/register'>Register Here</a>
                </Col>
            </Row>
        </div>
    
    </MainScreen>
)
}