//publicr-routes.jsx
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { Outlet,Navigate } from "react-router-dom";
const PublicRoutes = ()=>{
    const isDataExisted = localStorage.getItem('users')
    let check = localStorage.getItem('loggedInUser');
    useEffect(()=>{
        if (check) {
        Swal.fire({
          title: 'Please logout  first!',
          icon: 'warning',
          timer: 1500,
          showConfirmButton: false
        });
        return <Navigate to='/' />;
      }
    },[])

    return(
        // isDataExisted ? <Navigate to='/'/> : <Outlet/>  
        check ? <Navigate to='/'/> : <Outlet/>

    )

}
export default PublicRoutes;