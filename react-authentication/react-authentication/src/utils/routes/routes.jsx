//routes.jsx
import React from "react";
import {Routes,Route} from 'react-router-dom';
import SignUp from "../../pages/sign-up/sign-up";
import LogIn from "../../pages/log-in/login";
import Home from "../../pages/home/home";
import About from "../../pages/about/about";
const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
        </Routes>
    )
}
export default AppRoutes;