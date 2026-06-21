
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import SignUp from "../../pages/sign-up/sign-up";
import LogIn from "../../pages/log-in/login";
// import Home from "../../pages/home/home";
// import About from "../../pages/about/about";
// import Contact from "../../pages/contact/contact";
import ProductDetailPage from "../../pages/productDetailPage/productDetailPage";
import MobilePage from "../../pages/mobile/mobile";
import LaptopPage from "../../pages/laptop/laptop";
import CameraPage from "../../pages/camera/camera";
import SmartwatchesPage from "../../pages/smartwatch/smartwatch";
import KeyboardPage from "../../pages/keyboard/keyboards";
import CartPage from "../../components/cartpage/cartpage";
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
        <Route path="/" element={<MobilePage />} />
        <Route path="/laptops" element={<LaptopPage />} />
        <Route path="/keyboards" element={<KeyboardPage />} />
        <Route path="/camera" element={<CameraPage />} />
        <Route path="/smartwatch" element={<SmartwatchesPage />} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/product/:id" element={<ProductDetailPage />} />
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