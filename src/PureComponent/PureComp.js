import React, { PureComponent } from "react";

class PureComp extends PureComponent {
    render() {
        console.log("This is pure component ")

        return (
            <>
                <div> This is PureComp</div>
                <h3>My name is {this.props.name}</h3>

            </>
        )
    }
}

export default PureComp