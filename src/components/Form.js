
// handle form inputs
import { Link, useLocation,  Navigate } from "react-router-dom"
import React, { useState , createRef} from "react"


const Form = props => {

    const response=createRef()
    const [formValue,setFormValue]=useState({
        name:'',
        email:'',
        gender:'',
        language:'',
        info:'',
        accept:false
    })

    // all input form handler
    const handleChangeInputHandler=(event)=>{
        // get the previous state and update it
        console.log(event.target.type);
        let name=event.target.name
        let value=event.target.type==="checkbox"?event.target.checked:event.target.value
       
       setFormValue(prevState=>{
           return {
               ...prevState,
               [name]:value
           }
       })
    }

    // form submit handler
    const submitHandler=(e)=>{
        e.preventDefault()
        console.table(formValue);
        let str=''
        for (const key in formValue) {
            str += `<h5>${key}: ${formValue[key]}</h5>`
        }
        response.current.innerHTML=str
    }

    // get the current url
    const location=useLocation()
    // console.log(location);
    let auth=false
    
    return (
        <React.Fragment>

        {/* {auth && <Navigate to={'/'} from="/axios"/>} */}
        {auth && <Navigate to={'/'} />}
        <div className="my-2 p-2">
            <form className="  mx-auto w-75 shadow-lg form-control" style={{"borderRadius":"1em"}}>
                <div className=" my-2">
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" name="name" id="Name" className="form-control" value={formValue.name} onChange={handleChangeInputHandler}/>
                </div>
                <div className=" my-2">
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" name="email" id="email" className="form-control" value={formValue.email} onChange={handleChangeInputHandler}/>
                </div>
                <div className=" my-2" onChange={handleChangeInputHandler}>
                    <label htmlFor="gender">Gender:</label> &nbsp; &nbsp;
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
                            <label className="male" htmlFor="inlineRadio1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
                            <label className="female" htmlFor="inlineRadio2">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="other" value="other"  />
                            <label className="other" htmlFor="inlineRadio3">Other</label>
                    </div>
                </div>
            
                <div className=" my-2">
                    <label htmlFor="language">Programming Language</label>
                    <select name="language" id="language" className="form-select" value={formValue.language} onChange={handleChangeInputHandler}>
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="c++">C++</option>
                        <option value="Java">Java</option>
                    </select>
                </div>
                <div className="">
                        <label htmlFor="info">Write About Yourself:</label>
                        <textarea name="info" id="info" cols="80" rows="3" className="form-control" value={formValue.info} onChange={handleChangeInputHandler}></textarea>
                </div>
                <div className="input-group my-2">
                    <input type="checkbox" name="accept" id="accept" className="form-check-input"  checked={formValue.accept} onChange={handleChangeInputHandler}/> &nbsp; &nbsp;
                    <label htmlFor="sure">Accept all our terms and conditions</label>
                </div>
                <div className="text-center my-2">
                    <button onClick={submitHandler} className="btn btn-primary btn-lg">Submit</button>
                </div>
            </form>
            <div className="bg-secondary p-3  mt-1 w-50 mx-auto rounded text-light" >
                <h1>Your Response:</h1>
                <div ref={response}>
                    
                </div>
            </div>
        </div>
        <div>
            <h5>
            <Link
                to={{
                    pathname:'/nested/23'
                    // pathname:location.pathname+'/nested/23'
                }
                }
            >Go to Nested Link</Link>

            </h5>

        </div>
        </React.Fragment>


    )
}

export default Form