import { useState } from "react";
const Logicstate = () => {
  //const [greet, setGreet] = useState('Welcome')
  //const [num, setNum] = useState(50)
  //const [fruits, setFruits] = useState(["banana", "apple", "orange"]);
  const [user,setUser] = useState({name : 'Mayur',age : 25})


  //change welcome ----> Hello Everyone...
  //change 50 -----> 100
  //add mango in array
  const handleState = () => {
    //setGreet('Hello Everyone...')
    //setNum(100)
    //setFruits('mango') //Error -  fruits.map is not a function
    //setFruits([...fruits, 'mango','grapes'])
    //new copy - [banana, apple, orange, mango, grapes]

    setUser({
      //name : 'APurva',
      ...user,
      age  : 30
    })
  };

  const divstyle = {
    width: "200px",
    height: "150px",
    backgroundColor: "white",
    borderRadius: "10px",
    marginBottom: "10px",
    display: "flex",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  };
  return (
    <div>
      <h2>Learn State in depth</h2>
      {/* <div style={divstyle}> {greet} </div> */}
      {/* <div style={divstyle}> {num} </div> */}
      {/* {fruits.map((fruit, index) => {
        return (
          <ul key={index}>
            <li>{fruit}</li>
          </ul>
        );
      })} */}
      {/* <div style={divstyle}> {fruits} </div>  */}
       <div style={divstyle}> {user.name} - {user.age} </div> 
      <button onClick={handleState}>Handle State</button>
    </div>
  );
};

export default Logicstate;
