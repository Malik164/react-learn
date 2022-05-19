import Navbar from "./components/Navbar"
import  "./App.module.css"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import Home from "./Pages/Home"
import ReactForms from "./Pages/ReactForms"
import AxiosTut from "./Pages/AxiosTut"
import ParamsTut from "./Pages/paramsTut"
import Test from "./components/Nested/Test"
import LazyTut from "./components/LazyTut"
const App = props => {
  return (
    <div>
    <BrowserRouter>

    <Navbar/>
    <Routes>
    
      <Route path="/" element={<Home/>}></Route>
      
      <Route path="/forms" element={<ReactForms/>}></Route>
      <Route path="/axios" element={<AxiosTut/>}></Route>
      <Route
        path="/search"
        element={<ParamsTut/>}
      >
      

      </Route>
      <Route
        path="/lazy"
        element={<LazyTut/>}
      >

      </Route>
      <Route
      path="/nested/:id"
      element={<Test/>}
      >
        </Route> 
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default  App

