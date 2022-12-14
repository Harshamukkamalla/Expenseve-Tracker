import React, {useContext}from 'react';
import Transaction from '../Components/Transaction';

import {GlobalContext} from '../Context/GlobalState';


const TransactionList = () => {
  const {transaction}  = useContext(GlobalContext);
  


  return (
    <>
      <h3 className="underline">History</h3>
      
      <ul id="list" className="list">
        {transaction.map(transaction => (<Transaction key={transaction.id} transaction = {transaction}/>))}
        
      </ul>
    </>
  )
}

export default TransactionList
