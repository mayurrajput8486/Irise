import Hello from "./components/Hello";
import Users from "./components/Users";
import Expenses from './components/Expenses'

function App() {
  return (
    <div style={{ border: "1px solid ", backgroundColor: "yellow" }}>
      <h1>Lets Start with React...</h1>
      <Hello stu_name="Aftab " enroll="FullStack Java" />
      <Hello stu_name="Rohit" enroll="React" />
      <Hello stu_name="Pavan" enroll="Python FullStack" />

      <Users username="Virat Kohli" isPresent="No" />
      <Users username="Rohit Sharma" isPresent="No" />
      <Users username="Rajat Patidar" />

      <Expenses title="Home EMI" amount={35000}/>
      <Expenses title="Petrol" amount={110}/>
      <Expenses title="Wifi" />

      {/* title= 'Home Emi' amount - 35000 */}
      {/* title= "Petrol"  amount - 100*/}
      {/* title = 'wifi" amount -*/}

    </div>
  );
}
export default App;
