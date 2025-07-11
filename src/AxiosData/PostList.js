import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component{
    constructor(props){
        super(props)

        this.state ={
            posts : [],
            error : ''
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            console.log(response);
            this.setState({
                posts : response.data
            })
        })
        .catch(error=>{
            console.log(error);
            this.setState({
                errorMsg:"Error while fetching data"
            })
        })
    
    }
    render(){
        const{posts,errorMsg} = this.state
        return(
            <>
            <div>PostList
                {posts.length ? posts.map(Post=>
                    <h4 key={Post.id}>{Post.title}</h4>
                ): null
            }
            {
                errorMsg ? <h1>{errorMsg}</h1> : null
            }
            </div>
            
            </>
        )
    }
}

export default PostList
