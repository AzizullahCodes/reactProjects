//publicr-routes.jsx
import React from "react";
import { Outlet,Navigate } from "react-router-dom";
const PublicRoutes = ()=>{
    const isDataExisted = localStorage.getItem('user')

    return(
        isDataExisted ? <Navigate to='/'/> : <Outlet/> 

    )

}
export default PublicRoutes;