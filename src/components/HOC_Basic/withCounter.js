import React, {Component} from "react";

const withCounter= WrappedComponent=>{
    class newComponent extends Component{
        constructor(props){
            super(props)
            console.log('[withCounter] Constructor Called');
            this.state={
                count:0
            }
        }
        // 2nd life cycle method
        static getDerivedStateFromProps( props,state){
            console.log('[withCounter] getDerivedStateFromProps Called');
            // console.log(props);
            // console.log(state);
            return state
        }
        // most importatnt called before render when updates
        shouldComponentUpdate(nextProps,nextState){
            // console.log(nextProps);
            // console.log(nextState);
            console.log('[withCounter] shouldComponentUpdate Called');
            // if wants update return true or return false
            return true
        }

        // called after render method 
        getSnapshotBeforeUpdate(prevProps, prevState){
            console.log(prevProps);
            console.log(prevState);
            console.log('[withCounter] getSnapshotBeforeUpdate Called');
            // it returns that message we can get in 
            // console.log(window);
            // whatever i return here i can access that in componentDidUpdate method
            return window.location.href
            }
        // called after componentDidUpdate 
        componentDidUpdate(prevProps, prevState, snapshot){
            console.log('[withCounter] componentDidUpdate Called');
            console.log(snapshot);
        }
        updateCountHandler=()=>{
            this.setState(prevState=>{
                return {count:prevState.count+1}
            })
        }

        render(){
            console.log('[withCounter] Render Called');
            const {count}= this.state
            return <WrappedComponent {...this.props} author="Adnan Malik" count={count} updateCountHandler={this.updateCountHandler} />
        }

    }
    return newComponent
}
export default withCounter