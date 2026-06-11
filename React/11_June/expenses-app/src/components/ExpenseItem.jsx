import './ExpensesItem.css'
import ExpenseDate from './ExpenseDate'
const ExpenseItem = ({date, title, amount}) =>{

   
    return(
        <div className="expenses-item">
           <ExpenseDate date={date}/>
            <div className="title">
               {title}
            </div>
            <div className="amount">
                Rs. {amount}
            </div>
        </div>
    )
}
export default ExpenseItem;

//[Jan, Feb, Mar, Apr, May, Jun]
//  0    1    2    3    4    5