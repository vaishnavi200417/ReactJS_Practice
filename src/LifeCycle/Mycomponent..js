import React from "react";

 class Mycomponent extends Component{
    constructor(props){
        super(props)

        this.state ={
            hasError : false,
            data : {}
    }
    }
    ComponentDidMount(){
        try{
            throw new Error ("Error is components")
        }catch(error){
            this.setstate({hasError:false})
            console.error("Error is mycomponents");
        }
    }

    render(){
        if(this.state.hasError){
            return<h1>somrthing went wrong in Mycomponent</h1>
        }
        return(
            <>  
            <div>Mycomponent</div>
            </>
        )
    }
}

export default Mycomponent