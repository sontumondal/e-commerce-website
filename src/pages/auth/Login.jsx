import React, { memo } from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axiosInstance from './Helper'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../features/authSlice'
import { IoEyeOffOutline,IoEyeOutline } from "react-icons/io5";
import Swal from 'sweetalert2'

const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [user,setUser]=useState({
    email:"",
    password:""
  })
  const [isPassword, setIsPassword]=useState(false)
  const [error,setError]=useState({})
  const [isLoading,setIsLoading]=useState(false)
  const validation=()=>{
    let error={};
    if(!user.email){
      error.email="Email is Required";
    };
    if(!user.password){
      error.password="Password is Required";
    }
    return error;
  }

  const handleOnchangeData=(e)=>{
    let name,value;
    
    name=e.target.name;
    value=e.target.value;
    
    // console.log(value,name);
    if(name === "email"){
      if(value.length === 0){
        setError({...error,email:"Email is Required"});
        setUser({...user,email:""});
      }else{
        setUser({...user,email:value});
        setError({...error,email:""});
      };
    }
    if(name === "password"){
      if(value.length === 0){
        setError({...error,password:"Password is Required"});
        setUser({...user,password:""});
      }else{
        setUser({...user,password:value});
        setError({...error,password:""});
      };
    }
  }
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(validation())
    const formdata = new FormData();
    formdata.append("email", user.email);
    formdata.append("password", user.password);
    try {
      setIsLoading(true);
      const response = await axiosInstance.post(
        "/user/signin",
        
        formdata,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      const token = response.data.token;
      // console.log(response,"response")
      // console.log(token)
      localStorage.setItem("token", token);
        dispatch(login(token))
       setIsLoading(false);
        if(token){
          navigate("/home")
          Swal.fire({
            title: "WELCOME TO YOUR STORE",
            text: "successfully login",
            imageUrl: "images/hello.webp",
            imageWidth: 300,
            imageHeight: 150,
            imageAlt: "Custom image",
            width:"500",
          });
        }else{
          alert("Please Enter valid userid & password")
        }
      // console.log(response.data);
    } catch (error) {
      // console.error(error);
      throw error;
    }
  };
  return (
    <>
      <div className="login">
        <div className="login-form">
          <label>Login</label>
          
            <input type="email" placeholder='Enter your email as userid' value={user.email} onChange={    handleOnchangeData}  name='email'/>
           <span style={{color:"red",padding:"1rem"}}>{error.email}</span>
          
          <div className="login-password">
           <input type={isPassword ? "text" : "password"} placeholder='Enter your password' value={user.password} onChange={handleOnchangeData} name='password'/>
         <span className='password-toggle' onClick={()=> setIsPassword(prev => ! prev)}>{isPassword ? <IoEyeOutline />:  <IoEyeOffOutline />}</span>
           </div>
        
         <span style={{color:"red",padding:"1rem"}} >{error.password}</span>
        {isLoading ? (<p style={{color:"white"}}> Login ! please wait...</p>): ( <button type='submit' onClick={handleSubmit}>sign in</button>)}
         
       
         <p>Don't have any account  :  
         <NavLink to="/signup">Sign-up</NavLink> 
         </p>
        </div> 
      </div>
    </>
  )
}

export default memo(Login)
