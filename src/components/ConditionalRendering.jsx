import { useState } from "react";
const ConditionalRendering = () => {
    const [course, useCourse] = useState('react');
    return (
        <div>
            <span>Conditional Rendering</span>
            {course == 'react' ? <span>This is {course} course</span> : <span>This is {course} course</span>}
        </div>
    )
}

// export default ConditionalRendering;

const Authentification = () => {
    const [isLoged, setIsLoged] = useState(false);

    const handleLogin = () => {
        setIsLoged(true)
    }

    const handleLogout = () => {
        setIsLoged(false)
    }

    let text = null;

    if(!isLoged){
        text = 'Please press the button to login'
    }else{
        text = 'Welcome User'
    }

    return (
        <div>
            <span>{text}</span>
            {
                isLoged == false ? (
                    <button type="button" onClick={handleLogin}>Login</button>
                ) : (
                    <button type="button" onClick={handleLogout}>Logout</button>
                )
            }
        </div>
    )
}

export default Authentification;