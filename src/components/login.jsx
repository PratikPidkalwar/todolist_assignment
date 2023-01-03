import React,{useState} from 'react'
import { NavLink , useNavigate,useLocation} from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const [email,setEmail]=useState("");
    
    console.log(email)
    const [password,setPassword]=useState("")
    const data={email,password}

    const navigate=useNavigate()
    const location=useLocation()
    console.log(location)
    const from =location.state?.from?.pathname ||"/"

    const url=`http://localhost:3001/login`
const postdata=async()=>{
    try{
        const response= await axios.post(url,data)
        console.log(response.data)
        sessionStorage.setItem("token",JSON.stringify(response?.data?.token))
        navigate(from,{replace:true})
}
    catch(e){
        console.log(e)
    }}

    const login=(e)=>{
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
                <input type='text' id='UserNmae' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='UserNmae'/>
                <br/>
                <label htmlFor='Password'>Password</label>
                <input type='password' id='Password'  value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
                <button onClick={login}>Login</button>
                <p>Agar apke pass account nhi hai banao <span>&nbsp; <NavLink to="/register">Register</NavLink></span></p>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login