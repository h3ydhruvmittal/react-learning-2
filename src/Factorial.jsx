import { useMemo, useState } from "react";

export function Factorial() {
    const [input, setInput] = useState(0);

    const calculateFactorial = useMemo(()=>{
        let factorial = 1;
        for(let i=1;i<=input;i++){
        factorial = factorial*i;
        }
        return factorial;
    },[input]);
    
    return(
    <div>
        <input 
            type="number" 
            value={input}
            onChange={(e)=> setInput(Number(e.target.value))}
        ></input>
        <div>The Factorial is:{calculateFactorial}</div>
    </div>
  )
}

export default Factorial;