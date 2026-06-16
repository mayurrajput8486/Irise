import './App.css'
import ExpenseItem from './components/ExpenseItem'
const App = () =>{

  const expense_data = [
    { id: 1, date : new Date(2026,5,2), title : '🚗 CAR EMI', amount : 25000},//0
    { id: 2, date : new Date(2026,5,5), title : '🏠 HOME EMI', amount : 35000 },//1
    { id: 3, date : new Date(2026,5,8), title : '🛍️ Dmart', amount : 10000 },//2
    { id: 4, date : new Date(2026,5,5), title : '🛜 Wifi and Netflix', amount : 1000 },//3
    { id: 5, date : new Date(2026, 5, 10), title : 'Shopping', amount : 15000}, //4
    { id: 6, date : new Date(2026, 5, 11), title : 'Cylinder', amount : 950}, //5
    { id: 7, date : new Date(2026, 5 , 12), title : 'Electricity Bill', amount : 2300}
    
  ]

  return(
    <div className='card'>
        <h1 className='text-center text-2xl'>Monthly Expenses</h1>
        {/* 
        <ExpenseItem date={expense_data[0].date} title={expense_data[0].title} amount={expense_data[0].amount}/>
        <ExpenseItem date={expense_data[1].date} title={expense_data[1].title} amount={expense_data[1].amount}/>
        <ExpenseItem date={expense_data[2].date} title={expense_data[2].title} amount={expense_data[2].amount}/>
        <ExpenseItem date={expense_data[3].date} title={expense_data[3].title} amount={expense_data[3].amount}/>
        <ExpenseItem date={expense_data[4].date} title={expense_data[4].title} amount={expense_data[4].amount}/> */}
        {
          expense_data.map((expense)=>{
            return(
              <ExpenseItem key={expense.id}
                  date={expense.date}
                  title={expense.title}
                  amount={expense.amount}
              />
            )
          })
        }
    </div>
  )
}
export default App;