import { useReducer } from "react";

const initialState = {
    counter:0
};

const reducer = (state , action) => {
    switch(action.type) {
        case "incriment":
            return {counter : state.counter + action.value};
        case "decriment":
            return {counter : state.counter - action.value};
        default:
            return state;
    }
}

const ComplexCounter = () =>{
    const [state,dispatch] = useReducer(reducer,initialState);

    return (
        <div>
            <button onClick={()=>dispatch({type : 'decriment' , value : 2})}>-</button>            
            <span>Counter : {state.counter}</span>
            <button onClick={()=>dispatch({type : 'incriment' , value : 2})}>+</button>
        </div>
    )
}

export default ComplexCounter;