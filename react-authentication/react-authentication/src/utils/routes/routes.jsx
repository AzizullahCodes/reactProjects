//routes.jsx
import React from "react";
import {Routes,Route} from 'react-router-dom';
import SignUp from "../../pages/sign-up/sign-up";
import LogIn from "../../pages/log-in/login";
import Home from "../../pages/home/home";
import About from "../../pages/about/about";
import PublicRoutes from "../public-routes/public-routes";
import ProtectedRoutes from "../protected-routes/protected-routes";
const AppRoutes = ()=>{
    return(
        <Routes>
            {/* public-routes */}
            <Route element={<PublicRoutes/>}>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/login" element={<LogIn/>}/>

            </Route>
            {/* protected-routes */}
            <Route element={<ProtectedRoutes/>}>
 <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            </Route>
            
        </Routes>
    )
}
export default AppRoutes;