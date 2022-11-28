import axios from "axios";
import { TRANSACTIONS_LIST_FAIL, TRANSACTIONS_LIST_REQUEST, TRANSACTIONS_LIST_SUCCESS } from "../constants/transactionsConstants";

 const listtransactions = () => async (dispatch, getState) => {

  
    try {

      dispatch({
        type: TRANSACTIONS_LIST_REQUEST,
      });
      
      const userInfo=JSON.parse(localStorage.getItem("userInfo"))
      
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo["token"]}`,
        }
      };


  
      const { data } = await axios.get(`/api/transaction`,config);
  
      dispatch({
        
        type:  TRANSACTIONS_LIST_SUCCESS,
        payload: data,
      });

    } catch (error) {

      console.log(`${error} Hello`)
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: TRANSACTIONS_LIST_FAIL,
        payload: message,
      });

    }
  };
export default listtransactions;