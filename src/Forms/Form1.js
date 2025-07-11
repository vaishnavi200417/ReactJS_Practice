import React, { Component } from "react";

class Form1 extends Component {
    constructor(props){
        super(props)

        this.state ={
            UserName : "",
            Comments : "",
            Courses : "NODE"


        }
    }


    handleUsername=(event)=>{
        this.setState({
            UserName : event.target.value
        })

    }

    handleComment=(event)=>{
        this.setState({
            Comments : event.target.value
        })

    }

        handleCourses=(event)=>{
        this.setState({
            Comments : event.target.value
        })

    }

    handleSubmit=(event)=>{
        alert(`My name is : ${this.state.UserName} and ${this.state.Comments} and my course is${this.state.Courses}`)
        event.preventDefault()
    }


    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName :</label>
                    <input type='text' value ={this.state.UserName} onChange={this.handleUsername}></input>
                </div><br></br>
                 <div>
                    <label>Textarea :</label>
                    <textarea type="text" value ={this.state.Comments} onChange={this.handleComment}></textarea>
                </div><br></br>
                 <div> 
                    <label>Courses :</label>
                    <select value ={this.state.Courses} onChange={this.handleCourses}>
                        <option value="MERN">MERN</option>
                        <option value="MEAN">MEAN</option>
                        <option value="REACT">REACT</option>
                        <option value="NODE">NODE</option>
                    </select>
                </div><br></br>
                <div>
                    <button type='submit'>Submit</button>
                </div>
                </form>
            </>
        )
    }
}

export default Form1