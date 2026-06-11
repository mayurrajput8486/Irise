import './App.css'
import ExpenseItem from './components/ExpenseItem'
const App = () =>{

  const expense_data = [
    { date : new Date(2026,5,2), title : '🚗 CAR EMI', amount : 25000},//0
    { date : new Date(2026,5,5), title : '🏠 HOME EMI', amount : 35000 },//1
    { date : new Date(2026,5,8), title : '🛍️ Dmart', amount : 10000 },//2
    { date : new Date(2026,5,5), title : '🛜 Wifi and Nexflix', amount : 1000 }//3
  ]

  return(
    <div className='card'>
        <h1>Expenses App</h1>
        <ExpenseItem date={expense_data[0].date} title={expense_data[0].title} amount={expense_data[0].amount}/>
        <ExpenseItem date={expense_data[1].date} title={expense_data[1].title} amount={expense_data[1].amount}/>
        <ExpenseItem date={expense_data[2].date} title={expense_data[2].title} amount={expense_data[2].amount}/>
        <ExpenseItem date={expense_data[3].date} title={expense_data[3].title} amount={expense_data[3].amount}/>
    </div>
  )
}
export default App;