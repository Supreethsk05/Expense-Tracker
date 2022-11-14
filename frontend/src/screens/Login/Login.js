import { Button,Col,Form,Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import MainScreen from "../../components/MainScreen/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { loginuser } from "../../actions/userActions";
//import './LoginScreen.css'

export const LoginScreen = ({history}) => {
        const [email, setemail] = useState("")
        const [password, setpassword] = useState("")
        const dispatch=useDispatch()

        const userLogin= useSelector(state=>state.userLogin)
        const {loading,error,userInfo}=userLogin

        useEffect(()=>{

            if(userInfo){
                history.push('/mypage')
            }
        },[history,userInfo]
        )
    
        
        const submitHandler = async(e) => {
    
          e.preventDefault();
          dispatch(loginuser(email,password))
          console.log("HELLO")
        
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