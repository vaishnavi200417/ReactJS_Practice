import React, { Component } from 'react'
import axios from 'axios'

class DeleteAxios extends Component{
    constructor(props){
        super(props)

        this.state = {
            title :""

        }
    }
    handlechange=(e)=>{
        this.setState({
            title : e.target.value
        })

    }

    handleSubmit=(e)=>{
        e.preventDefault()
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.state.title}`)
        .then(response=>{
            console.log(response);
            console.log(response.data);
        })
        .catch(err=>{
            console.log(err);
        })

    }
    render(){
        return(
            
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label>Posttitle</label>
                    <input type ='text'  onChange={this.handlechange}></input>
                    <button type='submit'>submit</button>
                </form>
            </div>
            
          
        )
    }
}

export default DeleteAxios
