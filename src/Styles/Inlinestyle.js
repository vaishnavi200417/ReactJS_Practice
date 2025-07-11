import React from "react";

function Inlinestyle(){
    const heading ={
        color:'Red',
        fontSize : '45px'
    }
    return(
        <>
         <div>Inlinestyle</div>
        <h2 style={heading}>This is inline style</h2>
        </>
       
    )
}

export default Inlinestyle