
import { useContext} from "react"
import ListApi from "../../context/ListApi"
import "./list.css"

const List=props=>{
    const context= useContext(ListApi)
    let domList=<h3>'Loading....':</h3>
    if (context.error) {
       domList=<h2>{context.error}</h2>
    }
    if (context.list) {
        domList=<table >
        <thead>
        <tr>
        <th>#</th>
        <th>Name:</th>
        <th>Country:</th>
        <th>Province:</th>
        <th>Website:</th>
        </tr>
        </thead>
        <tbody>
            {context.list.map((elm,index)=><tr key={index}>
                <th>{index+1}</th>
                <td>{elm.name}</td>
                <td>{elm.country}</td>
                <td>{elm['state-province']?elm['state-province']:'Not Given'}</td>
                <td>
                    <a href={elm.web_pages}>{elm.domains[0]}</a>
                </td>
            </tr>)}
        </tbody>
    </table>
    }
    return (
       <div style={{textAlign:'center',margin:'2em auto'}} className="list-table">
            <h1>Pakistan Universites List</h1>
            {domList}
        </div>
    )
}
export default List