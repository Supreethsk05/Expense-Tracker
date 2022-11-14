import React from 'react'
import { Form} from 'react-bootstrap'
import { useState } from 'react'
import MainScreen from '../../components/MainScreen/MainScreen'
import {Button,Col,Row} from 'react-bootstrap'
import { Loading } from '../../components/Loading/Loading'
import axios from 'axios'

//import './RegisterScreen.css'
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'

export const Expenses = () => {
  const [name, setname] = useState("")
  const [method, setmethod] = useState("")
  const [description, setdescription] = useState("")
  const [amount, setamount] = useState("") 

  const[message,setmessage]=useState(null)

  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)



  const submitHandler = async(e) => {
    e.preventDefault()
//    console.log(email)
 seterror(null)
    console.log(email,password)

      setmessage(null)
   
        try {
          const config ={
              Headers : {
                  "Content-type":"application/json",
              },
          };
          setloading(true)
        //  console.log("ll")
            const {data} =await axios.post("/api/transaction/create",
            {name,method,description,amount}
            ,
            config
            )
            console.log(data)
          localStorage.setItem('transaction added',JSON.stringify(data))
          setloading(false)
      } catch (error) {
          seterror(error.response.data.message)
          setloading(false)
          
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
                <Form.Label>name</Form.Label>
                <Form.Control type="email" 
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Enter Email"
                >

                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label className='formname'>method</Form.Label>
                <Form.Control type="password"
                className='fieldform'
                value={method}
                onChange={(e) => setmethod(e.target.value)}
                placeholder="Enter Password">

                </Form.Control>
            </Form.Group>
            <Form.Group controlId='formBasicPasswordagain'>
              <Form.Label> description</Form.Label>
              <Form.Control type="password"
              value={description}
              onChange={(e)=> setdescription(e.target.value)}
              placeholder="confirm password"></Form.Control>

            </Form.Group>
            <Form.Group controlId='formBasicName'>
              <Form.Label >amount</Form.Label>
              <Form.Control type="name"
              value={amount}
              onChange={(e)=> setamount(e.target.value)}
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
 