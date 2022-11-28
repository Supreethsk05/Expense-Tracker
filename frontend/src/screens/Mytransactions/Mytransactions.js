import { Accordion ,Badge, Button, Card } from 'react-bootstrap'
import MainScreen from '../../components/MainScreen/MainScreen';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  listtransactions  from '../../actions/transactionsAction';
import { Loading } from '../../components/Loading/Loading';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

export const MyTransactions = () => {
    const dispatch=useDispatch()
    

    const transactionsList=useSelector(state=>state.transactionsList)
    const {loading,transactions,error}=transactionsList

    //const {loading , notes , error} =transactionsList
    useEffect(() => {
      
    dispatch(listtransactions())
     
      
    }, [dispatch])
    
    

  

  
  
  
  return (
 <MainScreen title="WELCOME"   ending="THANK YOU">
  <Button style={{marginLeft :10,marginBottom :6}} size="sm">
UPLOAD DATA  </Button>
{loading&&<Loading />}
{error && <ErrorMessage />}
  {
     transactions?.map((transaction)=>(
<Accordion defaultActiveKey='0' key={transaction._id}>
<div>

  <Accordion.Item  style={{size:20}} eventkey='1' size='20px'>


      <Card style={{margin:10}}>

  <Card.Header style={{
	display: ""}}>

  <span
  style={{color:"black",
  textDecoration:"none",
  flex:1,
  cursor:"pointer",
  fontsize:18,}}>
<Accordion.Header style={{size:3}}>
  <h2 style={{fontSize:6}}>

{transaction.name}
</h2>
</Accordion.Header>


      


    </span>

      <div className='cardHeader'>
        
        <Button href={`/note/${transaction._id}`} style={{marginRight:6}} size='sm' >VIEW</Button>
        <Button className='prov'  size='sm' variant="secondary" style={{marginRight:6}}>PROVENANCE</Button>
      </div>


    </Card.Header>
    <Accordion.Body  eventkey='1'>

    <Card.Body>
      <h4>
        <Badge variant="success" >
          category - {transaction.description}
        </Badge>
      </h4>
      <blockquote className='blockquote mb-0'>
        <p>
          {transaction.amount}
        </p>
        <footer className='blockquote-footer'>
          {transaction.method}
        </footer>
      </blockquote> 
    </Card.Body>
    </Accordion.Body>

   </Card>

   </Accordion.Item>

   </div> 

  </Accordion>

     ))
  }
  <center>

     <Button href='/' variant='dark'> GO TO HOME </Button>

  </center>


  
 </MainScreen>
    );
}; 
