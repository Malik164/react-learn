import { useSearchParams } from "react-router-dom";

const ParamsTut=props=>{
    let [s]=useSearchParams()
    let query=s.get('q')
    return(
        <div className="container my-5">
            <h1>You searched for : {query} </h1>
        </div>
    )
}
export default ParamsTut