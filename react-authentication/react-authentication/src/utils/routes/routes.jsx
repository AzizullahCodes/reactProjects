// //routes.jsx
// import React from "react";
// import {Routes,Route} from 'react-router-dom';
// import SignUp from "../../pages/sign-up/sign-up";
// import LogIn from "../../pages/log-in/login";
// import Home from "../../pages/home/home";
// import About from "../../pages/about/about";
// import Contact from "../../pages/contact/contact";
// import PublicRoutes from "../public-routes/public-routes";
// import ProtectedRoutes from "../protected-routes/protected-routes";
// const AppRoutes = ()=>{
//     return(
//         <Routes>
//             {/* public-routes */}
//             <Route element={<PublicRoutes/>}>
//             <Route path="/sign-up" element={<SignUp/>}/>
//             <Route path="/login" element={<LogIn/>}/>

//             </Route>
//             {/* protected-routes */}
//             <Route element={<ProtectedRoutes/>}>
//  <Route path="/" element={<Home/>}/>
//             <Route path="/about" element={<About/>}/>
//             <Route path="/contact" element={<Contact/>}/>
//             </Route>
            
//         </Routes>
//     )
// }
// export default AppRoutes;


import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import SignUp from "../../pages/sign-up/sign-up";
import LogIn from "../../pages/log-in/login";
import Home from "../../pages/home/home";
import About from "../../pages/about/about";
import Contact from "../../pages/contact/contact";

// Route Guards
import PublicRoutes from "../public-routes/public-routes";
import ProtectedRoutes from "../protected-routes/protected-routes";

const AppRoutes = () => {
  // const isLoggedIn = localStorage.getItem("users"); 
  const check = localStorage.getItem('loggedInUser')

  return (
    <Routes>

      {/* PUBLIC ROUTES (only for non-logged users) */}
      <Route element={<PublicRoutes />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Route>

      {/* PROTECTED ROUTES (only for logged users) */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>


      {/* ✅ CATCH-ALL ROUTE (IMPORTANT FIX) */}
      <Route
        path="*"
        element={
          check ? (
            <Navigate to="/" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

    </Routes>
  );
};

export default AppRoutes;