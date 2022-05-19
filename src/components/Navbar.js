import { createRef} from "react"
import { NavLink,useNavigate} from "react-router-dom"


const Navbar=()=>{
    const input=createRef()
    let navigate=useNavigate()
    const clickHandler=e=>{
        e.preventDefault()
        if (!input.current.value.length) 
        return 
        // history.push()
        navigate(`/search?q=${input.current.value.trim()}`)
        // history.replace()
        // navigate(`/search?q=${input.current.value.trim()}`, {replace:true})
        // clear input after search
        // input.current.value='' 
        
    }
     
    return(

    <nav>
        <ul>
            <li><NavLink 
            to={{
                pathname:'/',
                search:'?page=home',
                hash:'home',
                
            }}>Home</NavLink>
            </li>
            <li><NavLink to="/forms">Forms</NavLink></li>
            <li><NavLink to="/axios">Web Requests</NavLink></li>
            <li><NavLink  to="/lazy">Code Split</NavLink></li>
            <li>
                {/* <form action={`/search`} method="get"> */}
                <form  method="" className="d-flex">
                <input className="form-control" type="search" ref={input} name="q" id="q" placeholder="search  here" />
                <button className="btn btn-sm btn-primary" type="submit" onClick={clickHandler}>Search</button>

                </form>
               
            </li>
        </ul>
    </nav>
)}
export default Navbar
/**
 *  <Link to={{
                    pathname:'/'+txt
                }
                }>
                </Link>
 */