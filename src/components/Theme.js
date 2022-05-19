// import React, {useContext} from "react"
import ContextTut from "../context/ContextTut"

import React, { Component } from 'react'

export default class Theme extends Component {
    // to use context define a static property
    static contextType=ContextTut
    render() {
        let styleObj = {
            backgroundColor: this.context.theme ? '#eee' : '#5c5858',
            color: this.context.theme ? 'grey' : '#ccc',
            width: '30vw',
            margin: '2em auto',
            height: '30vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
        return (
            <div style={styleObj}>
                <button onClick={this.context.themeUpdater}>
                    {(this.context.theme) ? 'Dark ' : 'Light '}
                    Mode
                </button>
            </div>
        )
    }
}


// const Theme=props=>{
//     const context=useContext(ContextTut)
//     let styleObj={
//         backgroundColor:context.theme?'#eee':'#5c5858',
//         color:context.theme?'grey':'#ccc',
//         width:'30vw',
//         margin:'2em auto',
//         height:'30vh',
//         display:'flex',
//         justifyContent:'center',
//         alignItems:'center'
//     }
//     return(

//         <div style={styleObj}>
//             <button onClick={context.themeUpdater}>
//                 {(context.theme)?'Dark ':'Light '}
//                  Mode
//                  </button>
//         </div>
//     )
// }

// export default Theme


