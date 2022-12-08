import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import { transactionDeleteReducer, userLoginReducer, userRegisterReducer ,userUpdateReducer} from "./reducers/userReducer";
import { transactionListReducer } from "./reducers/transactionsReducer";

const reducer =combineReducers({
 userLogin :userLoginReducer,
 userRegister:userRegisterReducer,
 transactionsList:transactionListReducer,
 userUpdate: userUpdateReducer,
  transactiondelete: transactionDeleteReducer,



})

const initialState ={};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;