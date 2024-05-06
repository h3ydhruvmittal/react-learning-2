import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [counter,setCounter] = useState(0);
  let sum=0;
  function calcSum(inputVal){
    for(let i=0;i<=inputVal;i++){
      sum= sum+i;
    }
    return sum;
  }
  return (
  <div>
    <input type="text" name="inputVal" onChange={(e)=> setInputValue(e.target.value)}/>
    <br /><br />
    Sum is: {calcSum(inputValue)}
    <br /><br />
    <button onClick={() => {
      setCounter(counter+1)
    }}>Count is {counter}</button>
  </div>
    
  )
}

export default App;
