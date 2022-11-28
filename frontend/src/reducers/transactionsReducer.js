import { TRANSACTIONS_LIST_FAIL, TRANSACTIONS_LIST_REQUEST, TRANSACTIONS_LIST_SUCCESS } from "../constants/transactionsConstants";

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