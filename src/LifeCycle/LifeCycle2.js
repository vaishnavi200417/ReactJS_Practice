import React, { Component } from "react";

class LifeCycle2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Msg: "Hello"
        }
        console.log("LifeCycle2 constructor");
    }

    static getDrivedStateFromProps(Props, state) {
        console.log("LifeCycle2 getDrivedStateFromProps method")
        return null;
    }
    componentDidMount() {
        console.log("LifeCycle2 componentdid mount method")
    }
    shouldComponentUpdate() {
        console.log("LifeCycle2 shouldComponentUpdate method")
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("LifeCycle2 getSnapshotBeforeUpdate method")
        return null
    }
    componentDidUpdate() {
        console.log("LifeCycle2 componentDidUpdate method")
    }
    render() {
        console.log("LifeCycle2 render stage");
        return (
            <>
                <div>LifeCycle2</div>
                {/* <button onClik={this.changeState}>change state</button> */}
            </>

        )
    }

}

export default LifeCycle2