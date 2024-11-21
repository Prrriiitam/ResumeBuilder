import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate=useNavigate();

    const [data,setData]=useState({
        email:"",
        password:""
    });
    const handleChange=(e)=>{
        setData({...data,[e.target.name]: e.target.value });

    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            const response=await axios.post("http://localhost:8000/api/login",data);
            console.log(response.data);
            window.alert("Login Successfull");
            navigate('/')
        }catch(e){
            console.log(e);
            window.alert("Invalid Credentials");
            navigate('/register');

        }

   }
  return (
    <div className="auth-form-container">
        <h1>Login</h1>
<form method='POST' onSubmit={handleSubmit}>
        <div class="form-group">
        <label for="Email1">Phone or Email address </label>
        <input type="email" name='email' onChange={handleChange} class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter number or email" />
    </div>
    <div class="form-group">
        <label for="Password1">Password</label>
        <input type="password" name='password' onChange={handleChange} class="form-control" id="password" placeholder="Password" />
    </div>
    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
        <button type="submit" class="btn btn-primary" >Submit</button>
</form>

      <Link to="/register" className="link-btn">
        Don't have an account? Register here
      </Link>
 </div>
  )
}

export default Login

