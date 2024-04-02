import { useReducer } from "react";

const initialState = 0;

const reducer = (state , action) => {
    switch(action) {
        case "incriment":
            return state + 1;
        case "decriment":
            return state - 1;
        default:
            return state;
    }
}

const UseReducer = () =>{
    const [counter,dispatch] = useReducer(reducer,initialState);

    return (
        <div>
            <button onClick={()=>dispatch('decriment')}>-</button>            
            <span>Counter : {counter}</span>
            <button onClick={()=>dispatch('incriment')}>+</button>
        </div>
    )
}

export default UseReducer;