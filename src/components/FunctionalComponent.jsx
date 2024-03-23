import React from "react";
const FunctionalComponent = () =>{
    const [data,setData] = React.useState('react');
    
    const handleClick = (course)=>{
        console.log('tete te tte');
        setData(course);
    }
    return (
        <div>
            <h1>Functional components</h1>
            <button type='button' onClick={()=>handleClick('vue')}>Click me</button>
            <span>state : {data}</span>
        </div>
    )
}

export default FunctionalComponent;