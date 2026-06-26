// cartContextData.jsx
import React, { useState } from "react";
import cartContext from "./cartContext";

const AddToCart = ({ children }) => {
    const [cart, setCart] = useState([]);

    // simple function — product ko cart array mein add karega
    const cartFun = (product) => {
        setCart([...cart, product]);
    };

    return (
        <cartContext.Provider value={{ cart, cartFun }}>
            {children}
        </cartContext.Provider>
    );
};

export default AddToCart;