import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    
    /* setCount(count + 1);   
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);  */
   
   setCount((prevCount)=>prevCount + 1) //0 + 1 = 1
   setCount((prevCount)=>prevCount + 1) //1 + 1 = 2
   setCount((prevCount)=>prevCount + 1) //2 + 1 = 3
   setCount((prevCount)=>prevCount + 1) //3 + 1 = 4
   setCount((prevCount)=>prevCount + 1) //4 + 1 = 5
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={increment}>+</button>
        <button>{count}</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
