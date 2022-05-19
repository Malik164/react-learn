// let now import a pure component
// if you want to render multiple same level adjacent jsx elements use []
// import React , {Component}from "react"
import React, {PureComponent} from "react";
// if you don't want to use shouldComponentUpdate use pureComponent
// class Cycle extends Component{
class Cycle extends PureComponent{
    // shouldComponentUpdate(prevProps,nextState){
    //     console.log('Previous ',prevProps);
    //     console.log('Current; ',this.props);
    //     if (prevProps !== this.props) {
    //         // it means that props are changed so component should update
    //         return true
    //     }
    //     else
    //         return false
    // }
    render()
    {
       return <div>
            <h1>Your Remaining days! {this.props.count}</h1>
       </div>
    }
}
// const Cycle= props=>{
//     return(
//         

//     )
    
// }

// export default React.memo(Cycle)
export default Cycle