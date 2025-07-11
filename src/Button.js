import styled from 'styled-component'

const Button = styled.div
`
height:50px;
width:100px;
cursor:pointer1
text-decoration:none;
color:blue;
background-color:${(props)=> props.bg === 'green'? 'green':'yello'}
margin:auto;
font-size:2rem
`
export default Button;