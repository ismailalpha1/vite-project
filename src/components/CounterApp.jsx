import { useState } from "react"
const CounterApp = () => {
    const [counter, setCounter] = useState(0);
    
    const handleInc = () => {
        setCounter((newCounter) => {
            return newCounter + 1;
        })
    }

    const handleDec = () => {
        setCounter((oldCounter) => {
            return oldCounter - 1;
        })
    }

    const handleReset = () => {
        setCounter(0);
    }

    return (
        <div>
           {counter >0 ? <button type='button' onClick={handleDec}>-</button> : null}
            <span>{counter}</span>
            <button type='button' onClick={handleInc}>+</button>
            <div>
                <button type="button" onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default CounterApp;