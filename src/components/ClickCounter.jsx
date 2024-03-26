import withCounter from "./HOC/WithCounter";

const ClickCounter = ({counter,handleCounter}) => {
    return (
        <div>
            <button onClick={handleCounter}>Clicked {counter} times</button>
        </div>
    )
}

export default withCounter(ClickCounter);