import React, { Component } from "react";

 class Errorhandling extends Component{
    constructor(props){
        super(props)

        this.state ={
            hasError : true
        }
    }
    ComponentDidCatch(error,errorInfo){
        this.setstat({hasError:true})
        console.error("Error caught by comp ",error,errorInfo);
    }
    render(){
        if(this.state.hasError){
            return<h1>somrthing went wrong....</h1>
        }
        return(
            <>
            <div>Errorhandling</div>
            </>
        )
    }
}

export default Errorhandling