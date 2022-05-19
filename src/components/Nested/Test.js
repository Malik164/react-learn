import { useParams } from "react-router"


const Test=props=>{
    const {id}=useParams()

    return(
        <div>
            <h1>Test with id {id} </h1>
        </div>
    )
}

export default Test