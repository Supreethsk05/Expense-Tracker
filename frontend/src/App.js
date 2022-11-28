import './App.css';
import React from 'react';

import Header from './components/Header/Header';
import  Footer  from './components/Footer/Footer';
import { BrowserRouter,Route} from 'react-router-dom';
import   HomePage  from './screens/HomePage/HomePage';
import { LoginScreen } from './screens/Login/Login';
import { RegisterScreen } from './screens/Register/RegisterScreen';
import { LandingPage } from './screens/LandingPage/LandingPage';
import { Expenses } from './screens/Expenses/Expenses';
import { MyTransactions } from './screens/Mytransactions/Mytransactions';


const App=()=> (
<BrowserRouter>
    <Header />
    <main >
    
     <Route  path="/" component={HomePage} exact />
     <Route path="/login" component={LoginScreen} exact />
     <Route path="/register" component={RegisterScreen} exact />
     <Route path="/mypage" component={LandingPage} exact />
     <Route path="/create" component={Expenses} exact/>
     <Route path="/mytransactions" component={MyTransactions} exact />


     
          

            

    </main>

    <Footer />
</BrowserRouter>



  );


export default App;
