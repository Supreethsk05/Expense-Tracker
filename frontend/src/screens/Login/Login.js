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
    
        
        const submitHandler = async(e) => {
            e.preventDefault()
            // console.log(email,password)
            try {
                const config ={
                    Headers : {
                        "Content-type":"application/json",
                    },
                }
                setLoading(true)
                  const {data} =await axios.post("/api/users/login",{
                    email,
                    password,
                    
                  },
                  config
                  )
                  console.log(data)
                  localStorage.setItem('userInfo',JSON.stringify(data))
                setLoading(false)
            } catch (error) {
                seterror(error.response.data.message)
                setLoading(false)
                
            }
        
        }

    


return(
    <MainScreen title="LOGIN PAGE">
        <div className="loginContainer">
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          { loading && <Loading /> }
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email ADDRESS</Form.Label>
                    <Form.Control type="email" 
                    onChange={(e)=>setemail(e.target.value)}
                    value={email}
                    placeholder="Enter Email"
                    >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>PassWord</Form.Label>
                    <Form.Control type="password"
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
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