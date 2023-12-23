import axios from 'axios';
import { useFormik } from 'formik';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/authnticationContext';

export default function Sign() {
  const { token, setToken } = useContext(authContext);
  const navigateFunction = useNavigate();
 const LoginToAccount= async () => {
    try{
      const userData = {
      email: formikObject.values.email,
      password: formikObject.values.password,
    };
     const {data} =  await axios.post("https://clinic-api.appssquare.com/api/admin/login",userData);
    console.log(data);
     if(data.message === "Login Successfully"){
      localStorage.setItem('tkn', data.token)
      setToken(data.token);
      setTimeout(function () {
        navigateFunction('/dashbord')
      }, 1000)
     }
    }catch(err){
      console.log("error",err.response);
    };
  }
  const userData = {
    email: '',
    password: '',
  };
  const formikObject = useFormik({
    initialValues: userData,
    onSubmit: LoginToAccount
  });
  return <>
    <form onSubmit={formikObject.handleSubmit} className='sign container  w-50 flex justify-center items-center flex-col m-auto py-5'>
        <input onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} value={formikObject.values.email} type='email' placeholder='Email' id='email' className='form-control mb-3  w-50 p-1'/>
        <input onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} value={formikObject.values.password} type='password' placeholder='Password' id='password' className='form-control mb-3 w-50 p-1'/>
        <button  className='btn btn-primary' type='submit' >Login</button>
    </form> 
  </>
}
