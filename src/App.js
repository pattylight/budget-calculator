import React,{useState} from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
const { v4: uuid } = require('uuid');

const initialExpenses = [
  {id:uuid(),charge:"rent",amount:1600},
  {id:uuid(),charge:"car",amount:2000},
  {id:uuid(),charge:"food",amount:600}
];

function App() {
  //********state values */
  //all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  //single expense
  const [charge, setCharge] = useState('');
  //single amount
  const [amount, setAmount] = useState('');
  
  //********functions */
  const handleCharge = e => {
    setCharge(e.target.value);
  };
  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(charge !== '' && amount > 0){
      const singleExpense = {id:uuid(),charge,amount};
      setExpenses([...expenses, singleExpense]);
      setCharge('');
      setAmount('');
    }
    else{
      //handle alert called
    }
  };


  return <>

  <Alert></Alert>
  <h1>Budget Calculator</h1>
  <main className="App">
  <ExpenseForm 
  charge={charge} 
  amount={amount} 
  handleAmount={handleAmount}
  handleCharge={handleCharge} 
  handleSubmit={handleSubmit}> 
  </ExpenseForm>
  <ExpenseList expenses={expenses}></ExpenseList>
  </main>
  <h1>
    total spending : <span className="total"> $ {expenses.reduce((acc, curr)=>{
      return (acc += parseInt(curr.amount));
    },0)} </span> 
  </h1>
  
  </>;
  
}

export default App;
