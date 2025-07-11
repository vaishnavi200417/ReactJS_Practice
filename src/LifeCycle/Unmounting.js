import React, { Component } from "react";

 class Unmounting extends Component{
    constructor(props){
        super(props)

        this.state ={
            first :"Hello"
        }
    }
    ComponentDidMount(){
        this.timeID= setInterval(()=>{
            console.log("Doing somrthing");
        },1000)
    }
    ComponentWillUnmount(){
        clearInterval(this.timeID)
        console.log('compount is about unmount')
        this.ComponentIsMounted = false
    }
    render(){
        return(
            <>
            <div>Unmounting</div>
            </>
        )
    }
}

export default Unmounting