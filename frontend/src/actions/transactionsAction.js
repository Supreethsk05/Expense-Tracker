import axios from "axios";
import { TRANSACTIONS_CREATE_FAIL, TRANSACTIONS_CREATE_SUCESS, TRANSACTIONS_LIST_FAIL, TRANSACTIONS_LIST_REQUEST, TRANSACTIONS_LIST_SUCCESS, TRANSACTION_CREATE_REQUEST } from "../constants/transactionsConstants";

 export const listtransactions = () => async (dispatch, getState) => {

  
    try {

      dispatch({
        type: TRANSACTIONS_LIST_REQUEST,
      });

      const userInfo=localStorage.getItem("userInfo")
      const data1=JSON.parse(userInfo)
      console.log(data1["token"])

      const config = {
        headers: {
          authorization: `Bearer ${data1["token"]}`,

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




  export const createTransactionAction = (name, method, amount,description) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: TRANSACTION_CREATE_REQUEST,
      });
  
   
      const userInfo=JSON.parse(localStorage.getItem("userInfo"))

      const config = {
        Headers: {
          Authorization: `Bearer ${userInfo["token"]}`,
        },
      };
  
      const { data } = await axios.post(
        `/api/transaction/create`,
        { name, method, amount,description },
        config
      );
  
      dispatch({
        type: TRANSACTIONS_CREATE_SUCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: TRANSACTIONS_CREATE_FAIL,
        payload: message,
      });
    }
  };