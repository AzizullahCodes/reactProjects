import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import AppRoutes from "./utils/routes/routes";
import SearchProvider from "./context/searchContext/searchContextData";
import AddToCart from "./context/cartContext/cartContextData";
const App = ()=>{
  return(
   
      
       <AddToCart>
        <SearchProvider>
         <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
       </SearchProvider>
   
   
       </AddToCart>
  )
}
export default App;