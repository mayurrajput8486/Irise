import { useEffect, useState } from "react";

const Sideeffect = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [second, setSecond] = useState(0)

  /* const handleClick = () =>{
        setCount((prev)=>prev + 1)
    } */

  //useEffect() hook -
  /* useEffect(()=>{
        console.log('Welcome !!!');
    }) */

  /*  useEffect(() => {
    console.log("useEffect Hook Call !!!");
  }, []); */

  /* This effect is run when count change */
  /* useEffect(()=>{
    console.log('useEffect run when count change !!!!');
  },[count ]) */

  useEffect(()=>{
    const interval = setInterval(()=>{
        setSecond(second + 1)
        //setSecond((prevSecond)=>prevSecond + 1)
    },1000)

    //cleanup function 
    return ()=>{
        clearInterval(interval)
    }
  },[second])

  return (
    <div>
      <h2>Understand the side effects </h2>
      <div>
        <div>Value - {count}</div>
        <button onClick={() => setCount((prev) => prev + 1)}>Add +1</button>
      </div>
      <br />
      <div>
        <div>Typed Data - {text}</div>
        <input
          type="text"
          placeholder="Enter Value"
          value={text}
          onChange={(event)=>setText(event.target.value)}
        />
      </div>
      <div>
        <p>Seconds - {second}</p>
      </div>
    </div>
  );
};

export default Sideeffect;
