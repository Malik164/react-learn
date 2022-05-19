// import React, { Component } from 'react'
import PropTypes from "prop-types"
import React,{ createRef }  from "react"

const RefTut=props=>{
    const inputElm=createRef()
    const clickHandler=()=>{
        inputElm.current.focus()
    }
    return(
        <div>
            <h1>{props.valid}</h1>
             <input type="text" name="uname" id="uname" ref={inputElm}/>
           <button onClick={clickHandler}>Focus Input</button>
        </div>
    )
}


//  class RefTut extends Component {
//     constructor(props){
//         super(props)
//         this.inputRef=React.createRef()
//     }
//     componentDidMount(){
//         // now in current you can get that referred input element
//     }
//     clickHanlder=()=>{
//         this.inputRef.current.focus()
//         this.inputRef.current.value='start typing...'
//     }
//   render() {
//     return (
//         <div>
//             <input type="text" name="uname" id="uname" ref={this.inputRef}/>
//             <button onClick={this.clickHanlder}>Focus Input</button>
//         </div>
//     )
//   }
// }

RefTut.propTypes={
    valid:PropTypes.string.isRequired,
    
}
export default RefTut