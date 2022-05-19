import React, {useEffect} from "react";

const UseEffectTut=props=>{
    // use effect is a hook that call in every render method
    useEffect(()=>{
        console.log('[useEffectTut] useAffect method called');
        // it return method that is called when this componenet is removed
        return (()=>{
            console.log('useEffect[] return method called');
        })
    },[])
    // in second parameter you passed dependency on which it will remove
    // second useaffect that will execute every render method
    // useEffect(()=>{
    //     console.log('[useEffect()] second method called');
    //     // let timerId=setTimeout(()=>{
    //     //     alert('UseEffect Method Called')
    //     // },1000)
    //     return ()=>{
    //         console.log('timer id is cleared!');
    //         // clearTimeout(timerId)
    //     }
    // },)

    return (
        <div>
            <h1>{props.count} Count.</h1>
            <div>
                <h1>{props.name}</h1>
                <button onClick={props.countHandler}>Increase Count</button>
            </div>
        </div>
    )
}

export default UseEffectTut