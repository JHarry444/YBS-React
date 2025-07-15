import { useState } from "react";

function Counter() {
    // getCount + setCount
    //  DO NOT mutate the state directly
    const [count, setCount] = useState(0);

    // setCount(count + 1) GOOD
    // count++ VERY BAD

    return (<>
        <input type="number" value={count} readOnly />
        <button onClick={() => setCount(count + 1)}>+1</button>
        <p>{new Date().toISOString()}</p>

    </>);
}

export default Counter;