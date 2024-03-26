import { useState } from "react";

const withCounter = (Component)=>{
    const NewComponent = () =>{
        const [counter,setCounter] = useState(0);

        const handleCounter = () => {
            setCounter((oldCounter) => oldCounter + 1);
        }
        return <Component counter ={counter} handleCounter={handleCounter}/>
    }
    return NewComponent;
}
export default withCounter;