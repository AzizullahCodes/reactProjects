import React from "react";
import { CartProvider } from "./components/cartContext/cartcontext";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import AppRoutes from "./utils/routes/routes";
import SearchProvider from "./context/searchContext/searchContextData";
const App = ()=>{
  return(
   
      
       <SearchProvider>
         <BrowserRouter>
    {/* <Navbar/> */}
    <AppRoutes/>
    </BrowserRouter>
       </SearchProvider>
   
   
  )
}
export default App;