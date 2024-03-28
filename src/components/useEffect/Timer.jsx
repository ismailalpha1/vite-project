import { useState , useEffect } from "react";

const Timer = () => {
    const [timer,setTimer] = useState(new Date());
    const interval =  useEffect(() => {
        setInterval(()=>{
            setTimer(new Date);
        },1000);

        return() => {
            console.log('test');
            clearInterval(interval);
            console.log(interval);
        }
    }, [])

            
    return (
        <div>
            <h1>The time is : {timer.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Timer;