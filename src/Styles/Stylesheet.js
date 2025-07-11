import React from "react";
import myStyle from './myStyle.css'

function Stylesheet(props){
    let className = props.Primary ? "Primary" : ""
    return(
        <>
        <div>Stylesheet</div>
        <h1 class = {className}>Hello World</h1>
        </>
    )
}

export default Stylesheet