import React,{useState, useEffect} from 'react';
import styles from '../App.module.css';
import Cycle from '../components/lifeCycle';
import  RefTut  from '../components/RefTut';
import UseEffectTut from '../components/useEffectTut';
import Wrapped from '../components/wrapped';
/*
--------------- HOC BASIC PRACTICE----------------
HOC is just for reusing the same logic across all over and enhacned component
*/
// import ClickCounter from '../components/HOC_Basic/clickCounter';
// import HoverCounter from '../components/HOC_Basic/HoverCounter';
// import CovidCard from './CovidCard';

// ----------------- CONTEXT API PRACTICE---------------------------
import ContextTut from '../context/ContextTut';
import ListApi from '../context/ListApi';
import Theme from '../components/Theme';
import List from '../components/List/List';
function Home() {
  const [count,setCount]=useState(0)
  const [visible,setVisible]=useState(false)
  const [theme,setTheme]=useState(true)
  const [data,setData]=useState({
      isLoading:true,
      list:[],
      error:null
  })
  const visibleHandler=()=>{
    let v=visible
    v=!visible
    setVisible(v)
  }
  const countHandler=()=>{
    let n=count;
    n++;
    setCount(n)
  }
  const themeHandler=()=>{
    setTheme((prevTheme=> {
      console.log(prevTheme);
     return !prevTheme
    }))
  }

  // fetch the universities list api
  useEffect(()=>{
      async function fetchList() {
        try {
          const data= await fetch('http://universities.hipolabs.com/search?country=pakistan')
        const list= await data.json()
        // update the state variable
        setData((prevProps)=>{
          return {
            isLoading:false,
            list,
            error:null
          }
        })
        } catch (error) {
        console.log('Catch block executed!');
          setData({
            isLoading:false,
            list:null,
            error:'Something Went Wrong! Please try again Later..! '
          })
        }
        
      }
      fetchList()
  },[])
  return (
    <div className={styles.App}>

      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* {/* <h1>Covid Cases</h1> */}
      {/* <CovidCard />  */}
      {
      (visible)?
      <UseEffectTut count={count} countHandler={countHandler} name='Adnan Malik' />:null}
      <h1>Life Cycle Test Component</h1>
      <Cycle count={count}/>
      <button className='btn btn-primary' onClick={visibleHandler}>{(!visible)?'Fetch My Employies':'Hide Employies'}</button>
      {(visible)?<Wrapped  />:null}
      <RefTut valid='String Passed!' />
      <ContextTut.Provider value={{theme,themeUpdater:themeHandler}}>
        <Theme/>  
      </ContextTut.Provider>

      <ListApi.Provider value={{isLoading:data.isLoading,list:data.list,error:data.error}}>
        <List/>
      </ListApi.Provider>

      
      
    </div>
  );
}

export default Home;
