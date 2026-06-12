//publicr-routes.jsx
import React from "react";
import { Outlet,Navigate } from "react-router-dom";
const PublicRoutes = ()=>{
    const isDataExisted = localStorage.getItem('users')

    return(
        isDataExisted ? <Navigate to='/'/> : <Outlet/> 

    )

}
export default PublicRoutes;