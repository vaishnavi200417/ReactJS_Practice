import { useState, useEffect } from "react"
import React from 'react'

function CountApp() {
    const [count, setCount] = useState(0)

    const useDocumenttitle = title => {
        useEffect(() => {
            document.title = `count ${count}`
        })
    }
   useDocumenttitle(count)



    return (
        <>
            <div>CountApp</div>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Count</button>
        </>


    )
}

export default CountApp