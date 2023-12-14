//  Discussion on useState hook

import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  // let counter = 5;
  let addValue = () => {
    if (counter < 20) {
      //if condition is used for counter not exceeding 20
      setCounter(counter + 1);
    }
    // console.log("clicked", counter);
  };

  let removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter} </button>
      <br />
      <button onClick={removeValue}>Remove Value {counter} </button>
      <p>Counter: {counter}</p>
    </>
  );
}

export default App;
