import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Swal from "sweetalert2";

const ProtectedRoutes = () => {
  const check = localStorage.getItem('loggedInUser');
  return(
     check ? (<>
      <Navbar/> <Outlet /></>) : <Navigate to='/login' />
  )
}

export default ProtectedRoutes;