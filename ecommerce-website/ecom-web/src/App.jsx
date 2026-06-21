import React from "react";
import { CartProvider } from "./components/cartContext/cartcontext";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import AppRoutes from "./utils/routes/routes";
const App = ()=>{
  return(
    <CartProvider>
      <BrowserRouter>
    <Navbar/>
    <AppRoutes/>
    </BrowserRouter>
    </CartProvider>
   
  )
}
export default App;