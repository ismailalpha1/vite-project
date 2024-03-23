const List = () => {
    const items = ['bannane','apple','peach','ananas'];
    
    return (
       <div>
            <p>List of fruits</p>
            <ul>
                {items.map((item , index)=>{
                    return <li>{index} {item}</li>
                })}
            </ul>
       </div>
    )
}

export default List;