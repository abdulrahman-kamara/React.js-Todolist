import React, { useState } from "react";


import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  //Using  multiple  state 

  const [entedTitle, setEntedTitle] = useState('');
  const [entedAmount, setEntedAmount] = useState('');
  const [entedDate, setEntedDate] = useState('');

  //Using only one parent state 
  // const [userInput, setUserInput] = useState({
  //   entedTitle: '',
  //   entedAmount: '',
  //   entedDate: ''
  // });

  const titleChangeHolder = (event) => {
    setEntedTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   entedTitle: event.target.value
    // });
    // Using a function in the state by mentioning the previous state
    // setUserInput((prevState) => {
    //   return {...prevState, entedTitle: event.target.value}
    // });

  };
  const amountChangeHolder = (event) => {
    setEntedAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   entedAmount: event.target.value
    // });
  };
  const dateChangeHolder = (event) => {
     setEntedDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   entedDate: event.target.value
    // });
  }
const submitHandler = (event) => {
  event.preventDefault();

  // We use the two way binding
  const expenseData = {

    title: entedTitle,
    amount: entedAmount,
    date: new Date(entedDate)
  };
 props.onSaveExpense(expenseData); 
setEntedTitle('');
setEntedAmount('');
setEntedDate('');


};

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"
          value={entedTitle}
          onChange={titleChangeHolder} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number"
           min="0.01"
            step="0.01"
            value={entedAmount}
            onChange={amountChangeHolder}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"
           min="2019-01-01"
            max="2022-12-31" 
            value={entedDate}
            onChange={dateChangeHolder}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancle</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
};
export default ExpenseForm;
