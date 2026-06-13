import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProtectedRoutes = () => {
  const check = localStorage.getItem('loggedInUser');

  useEffect(()=>{
    if (!check) {
    Swal.fire({
      title: 'Please login first!',
      icon: 'warning',
      timer: 1500,
      showConfirmButton: false
    });
    return <Navigate to='/login' />;
  }
  },[])

  return(
     check ? <Outlet /> : <Navigate to='/login' />
  )
}

export default ProtectedRoutes;