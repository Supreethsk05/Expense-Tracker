import { TRANSACTIONS_CREATE_FAIL, TRANSACTIONS_CREATE_SUCESS, TRANSACTIONS_LIST_FAIL, TRANSACTIONS_LIST_REQUEST, TRANSACTIONS_LIST_SUCCESS, TRANSACTION_CREATE_REQUEST } from "../constants/transactionsConstants";

export const transactionListReducer =(state={transactions:[]},action)=>{
    switch(action.type){
        case TRANSACTIONS_LIST_REQUEST:
            return {loading :true}
        case TRANSACTIONS_LIST_SUCCESS:
            return{loading:false,transactions:action.payload};
        case TRANSACTIONS_LIST_FAIL:
            return{loading:false,error:action.payload}
        default:
            return state;
    }

}
export const transactionCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case TRANSACTION_CREATE_REQUEST:
        return { loading: true };
      case TRANSACTIONS_CREATE_SUCESS:
        return { loading: false, success: true };
      case TRANSACTIONS_CREATE_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };