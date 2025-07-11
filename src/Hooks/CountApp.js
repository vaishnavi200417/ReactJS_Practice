import { useState,useEffect} from "react"
import React from 'react'

function CountApp(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title = `count ${count}`
    })
    return(
        <>
        <div>CountApp</div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Count</button>
        </>
        
        
    )
}

export default CountApp