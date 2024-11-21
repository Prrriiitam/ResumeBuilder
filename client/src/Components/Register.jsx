import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register=  ()=>{
    const navigate = useNavigate();

    const [formdata,setFormData]=useState({
        name:'',
        phone:'',
        email:'',
        password:'',
        cpassword:''

    });
    const handleChange=(e)=>{
      setFormData({...formdata,[e.target.name]:e.target.value})
    }

    const handleSubmit=async (e)=>{
     e.preventDefault();   
     
     try{
        const response= await axios.post('http://localhost:8000/api/register', formdata);
        window.alert("Registered Successfully");
        navigate("/");
        console.log(response.data);
        }catch(e){
        window.alert("Register unsuccessfull");
        console.error({error: e});
        }
   }

  
    return(
        <>
        <div className="auth-form-container">
        <h1>Register</h1>
    <form method="POST" onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter your full name" onChange={handleChange}/>
        </div>
        <div className="form-group">
        <label htmlFor="number">Phone</label>
        <input type="number" name="phone" className="form-control" id="phone" aria-describedby="emailHelp" placeholder="Enter your phone number"  onChange={handleChange} />
        </div>
        <div className="form-group">
        <label htmlFor="Email1">Email address</label>
        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"  onChange={handleChange} />
        </div>
        <div className="form-group">
        <label htmlFor="Password1">Password</label>
        <input type="password" name="password" className="form-control" id="password" placeholder="Password"  onChange={handleChange}/>
        </div>
        <div className="form-group">
        <label htmlFor="Password1">Confirm Password</label>
        <input type="password" name="cpassword" className="form-control" id="cpassword" placeholder="Confirm your Password" onChange={handleChange} />
        </div>
        <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div><br />
        <button  type="submit" className="btn btn-primary" >Submit</button>
    </form>
    <Link to="/login" className="link-btn">
        Already have an account? Login here
    </Link>
    </div>
        </>
    )
}
export default Register; 