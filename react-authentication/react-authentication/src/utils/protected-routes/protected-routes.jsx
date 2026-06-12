//protected-routes.jsx
import React from "react";
import { Outlet,Navigate } from "react-router-dom";
const ProtectedRoutes = ()=>{
    const isDataExisted = localStorage.getItem('users')

    return(
        isDataExisted ? <Outlet/> : <Navigate to='/login' />

    )

}
export default ProtectedRoutes;