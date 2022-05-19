// component that handles click
import withCounter from "./withCounter"
const ClickCounter= props=>{

    return (
        <div>
            <button onClick={props.updateCountHandler}>{props.author} clicked {props.count} times</button>
        </div>
    )

}

export default withCounter(ClickCounter)