import React from "react";

function MemoComp (name){
    console.log("This is function component n which memo will work");
    return (
        <>
        <div>{name}</div>
        </>
    )
}


export default React.memo (MemoComp)