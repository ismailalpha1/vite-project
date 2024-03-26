import { useState } from "react";
const Form = () => {
    const [course,setCourse] = useState("");
    const [description,setDescription] = useState("");
    const [country,setcountry] = useState("");
    const [aggrement,setaggrement] = useState(false);

    const handleChange = (event) =>{
        if(event.target.name === "course")
        {
            setCourse(event.target.value);
        }else if(event.target.name === "description")
        {
            setDescription(event.target.value);
        }else if(event.target.name === "country")
        {
            setcountry(event.target.value);
        }else if(event.target.name === "aggrement")
        {
            setaggrement(event.target.checked);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(course);
        console.log(description);
        console.log(country);
        console.log(aggrement);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name='course' value={course} onChange={handleChange}/>
                <label htmlFor="description">Description</label>
                <textarea id='description' name='description' value={description} onChange={handleChange}/>
                <select name="country" id="Country" value={country} onChange={handleChange}>
                    <option value="Maroc">Maroc</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                </select>
                <input type="checkbox" name="aggrement" checked={aggrement} onChange={handleChange}/>
                <input type="submit" value='Done'/>
            </form>
        </div>
    )
}

export default Form;