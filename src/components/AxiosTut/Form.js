import axios from "axios"
import { useState } from "react"
import Alert from "../Alert"

const Form = props => {
    const [value, setValue] = useState({
        title: '',
        content: '',
    })
    const [loading, setLoading] = useState(false)
    const [ok, setOk] = useState(null)
    const inputChangeHanlder = event => {
        let name = event.target.name
        let value = event.target.value
        setValue(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    const submitHandler = (event) => {
        event.preventDefault()
        setLoading(true)

        axios.post('/posts/', value).then(response => {
            setOk(true)
            setValue({ title: '', content: '' })
            setLoading(false)
        }).catch(e => {
            console.log(e.message);
        })

    }
    const toggleOkHandler = () => {
        setOk(prevOk => !prevOk)
    }
    return (
        <div>
            {!ok ?
                <form className="form-control my-3 rounded shadow-lg w-50 mx-auto">
                    <h5 className="text-primary">Make a Post Request:</h5>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Title:</span>
                        <input name="title" value={value.title} onChange={inputChangeHanlder} type="text" className="form-control" placeholder="Username" aria-label="title goes here..." aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Content:</span>
                        <textarea name="content" value={value.content} onChange={inputChangeHanlder} id="" cols="80" rows="2" className="form-control" required></textarea>
                    </div>
                    <button onClick={submitHandler} className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading ?<><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                   &nbsp; Loading...</> :'Submit'}
                    </button>
                </form> :
                <div className="mx-auto w-50 my-2 rounded">

                    <Alert
                        type="success"
                        message="201 Successfully Create a Post"
                    />
                    <div className="text-center">
                        <button className="btn btn-primary my-2" onClick={toggleOkHandler}

                        >Submit Again
                        </button>

                    </div>
                </div>
            }
        </div>
    )
}

export default Form