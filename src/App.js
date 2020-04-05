import React, { useState } from "react";
import Tweet from "./tweet";

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      <h1 className={isRed ? "red" : ""}>Change my color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <div className="box">
        <Tweet name="John" msg="Random msg1!" />
        <Tweet name="Ann" msg="Random msg2!" />
        <Tweet name="Mark" msg="Random msg3!" />
        <Tweet name="Susan" msg="Random msg4!" />
      </div>
    </div>
  );
}

export default App;
