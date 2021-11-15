import React, { useState } from "react";
import "./counter.css";

function Counter() {
  const [value, setvalue] = useState(0)

  const increment = () => {
    setvalue(value + 1);
  };
  const decrement = () => {
    setvalue(value - 1);
  };

  return (
    <div className="counter">
      <div className="heading">
        <h1>Counter</h1>
      </div>
      <div className="content">
        <div className="box1">
          <button onClick={decrement}>-</button>
        </div>
        <div className="box2">
          <h2>{value}</h2>
        </div>
        <div className="box3">
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
