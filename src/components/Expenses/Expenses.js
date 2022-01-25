import React, { useState} from "react";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter"
import ExpenseList from "./ExpenseList";




const  Expenses = (props) => {
const [filteredYear, setFilteredYear] = useState('2020');

const filterChangeHandle = selectedYear => {
  setFilteredYear(selectedYear)
}
const filterExpenses = props.product.filter((expense) => {

return expense.date.getFullYear().toString() === filteredYear
})



    return(
        <div className="expenses">
<ExpenseFilter 
selected={filteredYear}
 onChangeFilter={filterChangeHandle}
 />
 {/* // javascript will check if this condition is meet, if yes? it will pass on to the next option */}

<ExpenseList product={filterExpenses}/>

    
      </div>
    )

}
export default Expenses;
