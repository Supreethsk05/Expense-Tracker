import React, { useEffect } from 'react'
import { Form} from 'react-bootstrap'
import { useState } from 'react'
import MainScreen from '../../components/MainScreen/MainScreen'
import {Button} from 'react-bootstrap'
import { Loading } from '../../components/Loading/Loading'
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { createTransactionAction } from '../../actions/transactionsAction'

export const Expenses = (history) => {
  const [name, setname] = useState("")
  const [method, setmethod] = useState("")
  const [description, setdescription] = useState("")
  const [amount, setamount] = useState("")


  
  const dispatch = useDispatch();



  const transactionCreate = useSelector((state) => state.transactionCreate || {});
  const { loading,transaction, error } = transactionCreate;
  console.log(transaction)
  
  useEffect(() => {
    
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createTransactionAction(name, method, amount,description));
    if (!name || !method || !amount) return;

  };
    
   



  return (

    <MainScreen title="CREATE TRANSACTION">
    <div className="loginContainer">
  {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
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
         
            <Button variant="primary" type="submit" style={{marginTop:"10px"}} >
                ADD
            </Button>
        </Form>
        </div>

      
    </div>
</MainScreen>
  )
}
 