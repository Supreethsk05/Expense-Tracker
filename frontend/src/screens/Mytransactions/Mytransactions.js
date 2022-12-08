import { Accordion ,Badge, Button, Card } from 'react-bootstrap'
import MainScreen from '../../components/MainScreen/MainScreen';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {deleteTransactionAction, listtransactions } from '../../actions/transactionsAction';
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
    
    

  

  
    const transactiondelete = useSelector((state) => state.transactiondelete);
    const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
    } = transactiondelete;

    const deleteHandler = (id) => {
      console.log(id)
      if (window.confirm("Are you sure?")) {
        dispatch(deleteTransactionAction(id));

      }
    };
  
  return (
 <MainScreen title="WELCOME"   ending="THANK YOU">
  <Button style={{marginLeft :10,marginBottom :6}} size="sm" href="/create">
ADD TRANSACTION  </Button>
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
  <h2 style={{fontSize:16}}>

{transaction.name}
</h2>
</Accordion.Header>


      


    </span>

      <div className='cardHeader'>
        
        <Button style={{marginRight:6}} size='sm'onClick={()=>deleteHandler(transaction._id)} >DELETE</Button>
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
