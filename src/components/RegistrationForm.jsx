import { useState } from "react"
const RegistrationForm = () => {
    const [data , setData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        gender:'',
        aggrement:false,    
    });
    const handleChange = (e) => {
        if(e.target.type === 'checkbox')
        {
            setData((oldData) => ({ ...oldData, [e.target.name] : e.target.checked }))
        }else{
            setData((oldData) => ({ ...oldData, [e.target.name] : e.target.value }))
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
       <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id='name' value={data.name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id='email' value={data.email} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id='password' value={data.password} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id='confirmPassword' value={data.confirmPassword} onChange={handleChange}/>
                </div>
                <div>
                    <select name="country" value={data.country} onChange={handleChange}>
                        <option value="MAROC">MAROC</option>
                        <option value="USA">USA</option>
                        <option value="GERMANY">GARMANY</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Gender</label><br/>
                    <label htmlFor="gender">Male</label>
                    <input type="radio" name="gender" value='male' onChange={handleChange}/>
                    <br />
                    <label htmlFor="gender">Female</label>
                    <input type="radio" name="gender" value='female' onChange={handleChange}/>
                </div>
                <div>
                <div>
                    <label htmlFor="aggrement">Aggrement</label>
                    <input type="checkbox" name="aggrement" checked={data.aggrement} onChange={handleChange}/>
                </div>
                </div>
                <div>
                    <button type='submit'>Done</button>
                </div>
            </form>
       </div> 
    )
}

export default RegistrationForm;