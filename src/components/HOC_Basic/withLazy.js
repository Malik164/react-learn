import { Component } from "react"

const withLazy=importComponent=>{
    return class extends Component{
        state={
            component:null
        }
        componentDidMount(){
            importComponent().then(comp=>{
                this.setState({component:comp.default})
            })
        }
        render(){
            let C=this.state.component
            return(
                C?<C {...this.props}/>:'Loading...'
            )
        }
    }
}

export default withLazy