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

      setmessage(null)
   
        try {
          const userInfo=JSON.parse(localStorage.getItem("userInfo"))

          const config ={
              Headers : {
                Authorization: `Bearer ${userInfo["token"]}`,


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

    <MainScreen title="CREATE TRANSACTION">
    <div className="loginContainer">
  {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
  {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
  {loading && <Loading />}
      <div className='FormReg'>

        <Form onSubmit={submitHandler} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" 
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Name"
                >

                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label className='formname'>Method</Form.Label>
                <Form.Control type="text"
                className='fieldform'
                value={method}
                onChange={(e) => setmethod(e.target.value)}
                placeholder="Method">

                </Form.Control>
            </Form.Group>
            <Form.Group controlId='formBasicPasswordagain'>
              <Form.Label> Description</Form.Label>
              <Form.Control type="text"
              value={description}
              onChange={(e)=> setdescription(e.target.value)}
              placeholder="Description"></Form.Control>

            </Form.Group>
            <Form.Group controlId='formBasicName'>
              <Form.Label >Amount</Form.Label>
              <Form.Control type="float"
              value={amount}
              onChange={(e)=> setamount(e.target.value)}
              placeholder="Amount">

              </Form.Control>
            </Form.Group>
         
            <Button variant="primary" type="submit" style={{marginTop:"10px"}}>
                ADD
            </Button>
        </Form>
        </div>

      
    </div>
</MainScreen>
  )
}
 