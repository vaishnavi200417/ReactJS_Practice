import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            UserId: "",
            title: "",
            body: ""
        }
    } 
    changeHandler=(e)=>{
        this.setState({
         [e.target.name] :e.target.value
        })
    }

    handleSubmit=(e)=>{
        alert(this.state.UserId)
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(Response=>{
            console.log(Response);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        const{UserId,title,body} = this.state
        return (
            <>
                <div>PostForm</div>
                <from onSubmit={this.handleSubmit}> 
                    <div>
                        <label>UserId :</label>
                        <input type='number' name='UserId' value={UserId} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <label>Title :</label>
                        <input type='text' name='title' value={title} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <label>Body :</label>
                        <input type='text'  name='body' value={body} onChange={this.changeHandler}></input>
                    </div>
                    <input type='submit'/>  
                </from>
            </>
        )
    }
}

export default PostForm