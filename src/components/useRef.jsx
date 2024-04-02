import { useState,useEffect, useRef} from "react";

const UseRef = () => {
    const [input,setInput] = useState( {name:'',email:'',password:''});
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
        console.log('rtrt');
    },[])
    const handleChange = (e) =>{
        setInput((prev)=>({...prev,[e.target.name]:e.target.value}));
    };

    return (
        <div>
            <p>This is useRef</p>
            <input ref={inputRef} type="text" name="name" value={input.name} onChange={handleChange} /><br />
            <input ref={inputRef} type="text" name="email" value={input.email} onChange={handleChange} /><br />
            <input ref={inputRef} type="password" name="passwprd" value={input.password} onChange={handleChange} /><br />
        </div>
    )
}

export default UseRef;