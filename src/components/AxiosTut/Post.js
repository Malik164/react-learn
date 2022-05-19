import React, { Component } from 'react'
import axios from 'axios'

export default class Post extends Component {
    state={
        data:null
    }
    componentDidUpdate(prevProps,prevState){
      if (prevProps.id===this.props.id || prevState.date === this.state.data) {
          return
      }  
      axios.get(`posts/${this.props.id}`).then(response=>{
        this.setState({data:response.data})
      })
    }
  render() {
      const {id}=this.props
    return (
        <div className="w-50 mx-auto p-3 rounded shadow-lg bg-primary text-light text-center">
            {!id?
            <p>Please Select a Post above!</p>:
            <div>

                <h3>{this.state.data?.title}</h3>   
                <p>{this.state.data?.body}</p>
            </div>
            }
        </div>
    )
  }
}
