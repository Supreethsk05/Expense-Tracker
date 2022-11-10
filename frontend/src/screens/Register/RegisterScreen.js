import React from 'react'
import { Form} from 'react-bootstrap'
import { useState } from 'react'
import MainScreen from '../../components/MainScreen/MainScreen'
import {Button,Col,Row} from 'react-bootstrap'
import { Loading } from '../../components/Loading/Loading'
import axios from 'axios'

//import './RegisterScreen.css'
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'

export const RegisterScreen = () => {
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("") 

  const[message,setmessage]=useState(null)

  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)


  const [fileName, setFileName] = useState("Upload Boundary File");

  const submitHandler = async(e) => {
    e.preventDefault()
//    console.log(email)
 seterror(null)
    console.log(email,password)
    if(password !== confirmPassword)
    {
      setmessage('PASSWORD DO NOT MATCH')
    }
    else{
      setmessage(null)
   
        try {
          const config ={
              Headers : {
                  "Content-type":"application/json",
              },
          };
          setloading(true)
        //  console.log("ll")
            const {data} =await axios.post("/api/users",
            {name,email,password}
            ,
            config
            )
            console.log(data)
          localStorage.setItem('userInfo',JSON.stringify(data))
          setloading(false)
      } catch (error) {
          seterror(error.response.data.message)
          setloading(false)
          
      }
      }

    }
   



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
         
            <Button variant="primary" type="submit">
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
 