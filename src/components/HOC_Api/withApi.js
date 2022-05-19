import React , {Component} from "react";
import styles from "./loader.module.css"
const withApi = (WrappedComponent,url)=>{

    class NewComponent extends Component{
        // state 
        state={
            isLoading:false,
            data:null
        }
        // call api and deals with spinner
        componentDidMount(){
            this.setState({isLoading:true})
            // fetch the data from api 
            fetch(url).then(res=>res.json()).then(data=>{
                this.setState({isLoading:false,data:data})
            })
        }
        render(){
            const {isLoading,data}= this.state
            if(isLoading){
                return(
                    <div className={styles.loader}></div>
                )
            }
            if (data == null) {
                return <p>Something went wrong!</p>
            }
            return (<WrappedComponent  {...this.props} data={data} />)
        }
    }

    return NewComponent

}

export default withApi