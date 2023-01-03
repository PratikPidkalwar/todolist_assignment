import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
function Register() {
    const [username,setUsernamae]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
const data={
    name:username,
    password,
    phone,
    email

}
const url=`http://localhost:3001/register`
const postdata=async()=>{
    try{
        const response= await axios.post(url,data)
        console.log(response.data)
}
    catch(e){
        console.log(e)
    }}

    const setformdata=(e)=>{
        e.preventDefault()
        postdata()
       console.log(data)
    }
  return (
    <>
    <div>
        <div>
            <form>
                <label htmlFor='UserNmae'>UserNamee</label>
                <input type='text' id='UserNmae' value={username} onChange={(e)=>{setUsernamae(e.target.value)}} placeholder='UserNmae'/>
                <br/>
                <label htmlFor='Email'>Email</label>
                <input type='email' id='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                <br/>
                <label htmlFor='Phone'>Phone</label>
                <input type='text' id='Phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Phone'/>
                <br/>
                <label htmlFor='Password'>Password</label>
                <input type='password' id='Password'  value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
                
                <button onClick={setformdata}>register</button>
                <p>Account bana hai to aage bado<span>&nbsp; <NavLink to="/">Login</NavLink></span></p>
            </form>
        </div>
    </div>
    </>
  )
}

export default Register