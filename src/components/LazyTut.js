import { lazy, Suspense } from "react"
// import CovidCard from "./CovidCard"

const LazyC=lazy(()=>import("./CovidCard"))

const LazyTut=props=>{
    
    return(
        <div className="container p-3 my-2">
            <h1>Lazy Components</h1>
            <div className="text-center" style={{"maxHeight":"70vh","overflow":"auto"}}>
            <Suspense fallback={<div>loading....</div>}>
            <div className="w-75 mx-auto">
            {/* <img src={'https://www.pexels.com/photo/cottages-in-the-middle-of-beach-753626/'} alt="ballons" className="img-fluid" /> */}

            </div>
            <LazyC/>

            </Suspense>

            </div>
        </div>
    )
}
export default LazyTut