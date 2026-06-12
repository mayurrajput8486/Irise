import "./Counter.css";
import { useState } from "react";
const Counter = () => {
  const [cart, setCart] = useState(0);

  const increment = () => {
    setCart(cart + 1);
    //setCart((prev)=> prev + 1)
  };

  const decrement = () => {
    if (cart > 0) {
      setCart(cart - 1);
    }
  };

  return (
    <div className="cart">
      <h2>Add to Cart</h2>
      <div className="btngroup">
        <button className="increment" onClick={increment}>
          +
        </button>
        <button className="cartValue">{cart}</button>
        <button className="decrement" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
