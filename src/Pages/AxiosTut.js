import React, { Component } from 'react'
import axios from 'axios'

import Loader from '../components/Loader'
import Alert from '../components/Alert'
// import Post from '../components/AxiosTut/Post'
import Form from '../components/AxiosTut/Form'
import withLazy from '../components/HOC_Basic/withLazy'
const AsynComp=withLazy(()=>{
    return import("../components/AxiosTut/Post")
})
class AxiosTut extends Component {
    state = {
        isLoading: true,
        data: null,
        hasError: false,
        selectedId:null
    }
    componentDidMount() {
        // grab the data
        axios.get('posts/').then(response => {
            if (response.status === 200) {
                let requiredData = response.data.slice(0, 4)
                this.setState({ data: requiredData, isLoading: false, hasError: false })
            }
        }).catch(e => {
            this.setState({
                hasError: e.message,
                isLoading: false,
            })
        })


    }

    postClickHandler=id=>{
        this.setState({selectedId:id})
    }
    render() {
        let { data, isLoading, hasError } = this.state
        if (isLoading) {
            return <Loader />
        }
        if (hasError) {
            return <Alert
                type="danger"
                message={hasError}
            />
        }
        return (
            <div>
                <h3 className="text-center text-primary">Axious Web Requests</h3>
                <div className="row g-3 mw-100 p-2">
                    {data.map(post => (
                        <div key={post.id} className="col-md-3 text-center rounded p-1" >
                            <div className="card" style={{"height":"17rem","maxHeight":"17rem","overflow":"auto",cursor:"pointer"}} onClick={this.postClickHandler.bind(null,post.id)}>
                                <div className="card-title">
                                    <h5>{post.title}</h5>
                                </div>
                                <div className="card-body">
                                    {post.body}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <AsynComp id={this.state.selectedId}/>
                <Form/>
            </div>
        )
    }
}

export default AxiosTut