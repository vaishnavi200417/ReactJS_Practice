import React, { PureComponent } from "react";

class RegCom extends PureComponent {
    render(){
        console.log("This is regular component");
        return(
            <>
            <div>RegCom</div>
            <h3>My name is {this.props.name} i am from regular component</h3>
            </>
        )
    }
}

export default RegCom