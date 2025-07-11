import React, { Component } from "react";
// import PureComp from "./PureComp";
// import RegCom from "./RegCom";
import MemoComp from "./MemoComp";

class Parentcomp extends Component{
    constructor(props){
        super(props)

        this .state ={
            name : "John"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name : "Max"
            })
        }, 1000)
    }
    render(){
        return(
            <>
            <div> Parentcomp</div>
            {/* <PureComp name = {this.state.name}/>
            <RegCom name = {this.state.name}/> */}
            <MemoComp name ={this.state.name}/>

          </>
        )
    }
}

export default Parentcomp 