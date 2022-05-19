import React, {useState, useEffect} from "react"
import styles from "../HOC_Api/loader.module.css"
const withHOC=( WrappedComponent)=> {
    return props=>{

        const [users,setUsers]=useState([])
        const [isloading,setLoading]= useState(true)
        useEffect(()=>{
            (async function fetchDate() {
                const data= await fetch('https://randomuser.me/api/?results=5')
            const response= await data.json()
            setUsers(response)
            setLoading(false)
            })()
            

        },[])
        // use fetch api
        return(
            <div>
                {
                    (isloading)? <div className={styles.loader}></div>:<WrappedComponent {...props} users={users} />
                }
        </div>
        )

        
    }
}

export default withHOC