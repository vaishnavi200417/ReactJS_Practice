import React, { Component } from "react";
import LifeCycle2 from "./LifeCycle2";

class LifeCycle1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'John'
        }
        console.log("LifeCycle1 constructor");
    }

    static getDrivedStateFromProps(Props, state) {
        console.log("LifeCycle1 getDrivedStateFromProps method")
        return null;
    }
    componentDidMount() {
        console.log("LifeCycle1 componentdid mount method")
    }

    shouldComponentUpdate() {
        console.log("LifeCycle1 shouldComponentUpdate method")
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("LifeCycle1 getSnapshotBeforeUpdate method")
        return null
    }
    componentDidUpdate() {
        console.log("LifeCycle1 componentDidUpdate method")
    }
    changeState = () => {
        this.setState({
            name: "Max"
        })

    }


    render() {
        console.log("LifeCycle1 render stage");
        return (
            <>
                <div>LifeCycle1</div>
                <button onClik={this.changeState}>change state</button>

                <LifeCycle2 />
            </>
        )
    }

}

export default LifeCycle1