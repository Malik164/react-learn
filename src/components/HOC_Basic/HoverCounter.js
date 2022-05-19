
import withCounter from "./withCounter"
const HoverCounter= props=>{
    return (
        <div>
            <h2 onMouseOver={props.updateCountHandler}>{props.name} Hovered over {props.count} times</h2>
        </div>
    )
}

export default withCounter(HoverCounter)