import React, { useContext } from 'react'
import { authContext } from '../../Context/authnticationContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
    const {token} =useContext(authContext);
    if(localStorage.getItem("tkn") === null){
        return <Navigate to="/Signin" /> 
    }
  return <>
   {children}
  </>
}
