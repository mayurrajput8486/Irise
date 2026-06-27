import Parent from "./components/Parent";
import { Fullname, Personinfo } from "./context/Context";
const App = () => {
  const person = {
    name : 'Rohit Sharma',
    age : 39,
    city : 'Nagpur'
  }
  return (
    <div>
      <h1>Learn Context API</h1>
      <Fullname.Provider value="Virat Kohli">
        <Personinfo.Provider value={person}>
            <Parent />
        </Personinfo.Provider>
      </Fullname.Provider>
    </div>
  );
};

export default App;
