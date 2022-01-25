import {React, useState }from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEdinting] = useState(false);

const saveExpenseDateHandle = (enteredExpenseData) =>{

const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
};
props.onAddExpense(expenseData);
};

const startEditingHandler = () =>{
    setIsEdinting(true)
};
const stopEditingHandler = () =>{
    setIsEdinting(false)
    }
    

return (
    
        <div className="new-expense">
            {!isEditing &&
            (<button onClick={startEditingHandler}>Add New Expense</button>)
            }
       
       {isEditing && 
       (
           <ExpenseForm 
           onSaveExpense={saveExpenseDateHandle}
           onCancel={stopEditingHandler}
           />
           
       )
       }
    </div>
)



}
export default NewExpense;