// // cartContextData.jsx
// import React, { useState } from "react";
// import cartContext from "./cartContext";

// const AddToCart = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     // simple function — product ko cart array mein add karega
//     const cartFun = (product) => {
//         setCart([...cart, product]);
//     };

//     return (
//         <cartContext.Provider value={{ cart, cartFun }}>
//             {children}
//         </cartContext.Provider>
//     );
// };

// export default AddToCart;

import React, { useState } from "react";
import cartContext from "./cartContext";

const AddToCart = ({ children }) => {
    const [cart, setCart] = useState([]);

    // product ko cart mein add karega
    // agar product already cart mein hai, toh sirf quantity +1 karega
    const cartFun = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            increaseQty(product.id);
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    };

    // cart se product remove karega
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    // quantity ek se increase karega
    const increaseQty = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    // quantity ek se decrease karega (1 se kam nahi hone dega)
    const decreaseQty = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        );
    };

    // poora cart empty kar dega (checkout/order place hone ke baad use hota hai)
    const clearCart = () => {
        setCart([]);
    };

    // total items count (badge ke liye)
    const cartCount = cart.reduce((total, item) => total + item.qty, 0);

    // total price (sab products ka)
    const cartTotal = cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
    );

    return (
        <cartContext.Provider
            value={{
                cart,
                cartFun,
                removeFromCart,
                increaseQty,
                decreaseQty,
                cartCount,
                cartTotal,
                clearCart,
            }}
        >
            {children}
        </cartContext.Provider>
    );
};

export default AddToCart;