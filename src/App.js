import React from 'react';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransactions from './Components/AddTransactions';
import './index.css';

import { GlobalProvider } from '../src/Context/GlobalState';

import './App.css';

function App() {
  return (
    <center>
      
        <GlobalProvider className="tracker">
          <div className="container">
          <Header/>
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransactions/>
          </div>
        </GlobalProvider>

    </center>
  );
}

export default App;
