
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import SignUp from "../../pages/sign-up/sign-up";
import LogIn from "../../pages/log-in/login";
import Home from "../../pages/home/home";
import ProductDetailPage from "../../pages/productDetail/productDetailPage";
import CartPage from "../../components/cartpage/cartpage";
// Route Guards
import PublicRoutes from "../public-routes/public-routes";
import ProtectedRoutes from "../protected-routes/protected-routes";
import CheckoutPage from "../../pages/checkoutPage/checkoutPage";
import OrderSuccess from "../../pages/orderSuccessPage/orderSuccessPage";

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
      
        <Route path="/" element={<Home/>}/>
        <Route path="/productDetailPage/:uid" element={<ProductDetailPage/>}/>
        <Route path="/cartpage" element={<CartPage/>}/>
        <Route path="/checkoutPage" element={<CheckoutPage/>}/>
        <Route path="/orderSuccessPage" element={<OrderSuccess/>}/>
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