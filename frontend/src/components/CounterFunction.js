import React, {useState } from "react";

function CounterFunction(){

    let [number, setNumber] = useState(0)

    //function

    function increment(){
        setNumber(++number)
    }

    //e=> kiynne event funtion ekk
    return(
        <div>
            <h3>function Component</h3>
            <h1>Counter = {number}</h1>
            
            <button onClick={e => increment()}>Increment</button>
        </div>
    )
}

export default CounterFunction;