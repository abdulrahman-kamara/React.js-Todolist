import React from "react";
// We use state inside our components functions
// and shouldn't be called inside a nestted function
// In usetatae the first value is a pointer(which is the corrent value) and the second value is function

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


function ExpenseProduct(props) {
  // function clickedHandler
//  const [title, setTitle]  = useState(props.title)

 

  // const clickHandler = () => {
  //   setTitle('Updated!!');
  //   console.log(title)
  // }
  

  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-description"></div>
      <h2>{props.title}</h2>
      <div className="expense-amount">{props.amount}</div>
      
    </Card>
  );
}
export default ExpenseProduct;
