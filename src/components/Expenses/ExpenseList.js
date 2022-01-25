import './ExpenseList.css'
import ExpenseProduct from './ExpenseProduct';


const ExpenseList = props => {
    if(props.product.length === 0 ){
return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    
    }

    return <ul className='expenses-list'>

{props.product.map((expense) => (
        <ExpenseProduct
         key={expense.id}
         title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />)
        )}
    </ul>
};

export default ExpenseList;