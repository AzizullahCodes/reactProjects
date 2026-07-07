// import React, { useContext, useState } from "react";
// import cartContext from "../../context/cartContext/cartContext";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import "./checkoutPage.css";


// const CheckoutPage = () => {
//     const { cart, cartTotal, clearCart } = useContext(cartContext);
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         city: "",
//         paymentMethod: "cod",
//     });

//     // input change handler
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     // agar cart empty hai to checkout page pe kuch na dikhao
//     if (cart.length === 0) {
//         return (
//             <div className="checkout-empty">
//                 <h2>Your cart is empty</h2>
//                 <p>Add some products before checkout.</p>
//                 <button onClick={() => navigate("/")}>Go to Home</button>
//             </div>
//         );
//     }

//     // form submit handler
//     const handlePlaceOrder = (e) => {
//         e.preventDefault();

//         // simple validation
//         if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.city) {
//             Swal.fire({
//                 icon: "warning",
//                 title: "Missing Details",
//                 text: "Please fill all the fields before placing order.",
//             });
//             return;
//         }

//         // generate random order id
//         const orderId = Math.floor(100000 + Math.random() * 900000);

//         // order object (future me isko localStorage/order history me save kar sakte ho)
//         const order = {
//             orderId,
//             customer: formData,
//             items: cart,
//             total: cartTotal,
//             date: new Date().toLocaleString(),
//         };

//         console.log("Order Placed:", order);

//         // cart clear karo
//         clearCart();

//         // order success page pe navigate karo, orderId state ke sath
//         navigate("/order-success", { state: { orderId, total: order.total } });
//     };

//     return (
//         <div className="checkout-page">
//             <h2 className="checkout-heading">Checkout</h2>

//             <div className="checkout-container">
//                 {/* Left - Shipping form */}
//                 <form className="checkout-form" onSubmit={handlePlaceOrder}>
//                     <h3>Shipping Details</h3>

//                     <div className="form-group">
//                         <label>Full Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder="Enter your full name"
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label>Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Enter your email"
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label>Phone Number</label>
//                         <input
//                             type="text"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             placeholder="Enter your phone number"
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label>Address</label>
//                         <input
//                             type="text"
//                             name="address"
//                             value={formData.address}
//                             onChange={handleChange}
//                             placeholder="House no, street, area"
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label>City</label>
//                         <input
//                             type="text"
//                             name="city"
//                             value={formData.city}
//                             onChange={handleChange}
//                             placeholder="Enter your city"
//                         />
//                     </div>

//                     <h3>Payment Method</h3>

//                     <div className="payment-options">
//                         <label className="payment-option">
//                             <input
//                                 type="radio"
//                                 name="paymentMethod"
//                                 value="cod"
//                                 checked={formData.paymentMethod === "cod"}
//                                 onChange={handleChange}
//                             />
//                             Cash on Delivery
//                         </label>

//                         <label className="payment-option">
//                             <input
//                                 type="radio"
//                                 name="paymentMethod"
//                                 value="card"
//                                 checked={formData.paymentMethod === "card"}
//                                 onChange={handleChange}
//                             />
//                             Credit / Debit Card
//                         </label>
//                     </div>

//                     <button type="submit" className="place-order-btn" onClick={()=>navigate('/orderSuccessPage')}>
//                         Place Order
//                     </button>
//                 </form>

//                 {/* Right - Order summary */}
//                 <div className="checkout-summary">
//                     <h3>Order Summary</h3>

//                     <div className="checkout-items">
//                         {cart.map((item) => (
//                             <div key={item.id} className="checkout-item">
//                                 <img src={item.image} alt={item.name} />
//                                 <div className="checkout-item-info">
//                                     <p className="item-name">{item.name}</p>
//                                     <p className="item-qty">Qty: {item.qty}</p>
//                                 </div>
//                                 <p className="item-price">Rs. {item.price * item.qty}</p>
//                             </div>
//                         ))}
//                     </div>

//                     <hr />

//                     <div className="summary-row">
//                         <span>Subtotal</span>
//                         <span>Rs. {cartTotal}</span>
//                     </div>

//                     <div className="summary-row">
//                         <span>Shipping</span>
//                         <span>Free</span>
//                     </div>

//                     <hr />

//                     <div className="summary-row total-row">
//                         <span>Total</span>
//                         <span>Rs. {cartTotal}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CheckoutPage;


import React, { useContext, useState } from "react";
import cartContext from "../../context/cartContext/cartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./checkoutPage.css";

const CheckoutPage = () => {
    const { cart, cartTotal, clearCart } = useContext(cartContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        paymentMethod: "cod",
    });

    // input change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // agar cart empty hai to checkout page pe kuch na dikhao
    if (cart.length === 0) {
        return (
            <div className="checkout-empty">
                <h2>Your cart is empty</h2>
                <p>Add some products before checkout.</p>
                <button onClick={() => navigate("/")}>Go to Home</button>
            </div>
        );
    }

    // form submit handler
    const handlePlaceOrder = (e) => {
        e.preventDefault();

        // simple validation
        const { name, email, phone, address, city } = formData;
        if (!name || !email || !phone || !address || !city) {
            Swal.fire({
                icon: "warning",
                title: "Missing Details",
                text: "Please fill all the fields before placing order.",
            });
            return;
        }

        // dummy order id (random) - future me backend se aayega
        const orderId = Math.floor(100000 + Math.random() * 900000);

        // dummy order object
        const order = {
            orderId,
            customer: formData,
            items: cart,
            total: cartTotal,
            date: new Date().toLocaleString(),
        };

        console.log("Order Placed:", order);

        // cart clear karo aur success page pe navigate karo
        clearCart();
        navigate("/order-success", { state: { orderId, total: order.total } });
    };

    return (
        <div className="checkout-page">
            <h2 className="checkout-heading">Checkout</h2>

            <div className="checkout-container">
                {/* Left - Shipping form */}
                <form className="checkout-form" onSubmit={handlePlaceOrder}>
                    <h3>Shipping Details</h3>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="House no, street, area"
                        />
                    </div>

                    <div className="form-group">
                        <label>City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Enter your city"
                        />
                    </div>

                    <h3>Payment Method</h3>

                    <div className="payment-options">
                        <label className="payment-option">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="cod"
                                checked={formData.paymentMethod === "cod"}
                                onChange={handleChange}
                            />
                            Cash on Delivery
                        </label>

                        <label className="payment-option">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="card"
                                checked={formData.paymentMethod === "card"}
                                onChange={handleChange}
                            />
                            Credit / Debit Card
                        </label>
                    </div>

                    <button type="submit" className="place-order-btn" onClick={()=>navigate('/orderSuccessPage')}>
                        Place Order
                    </button>
                </form>

                {/* Right - Order summary */}
                <div className="checkout-summary">
                    <h3>Order Summary</h3>

                    <div className="checkout-items">
                        {cart.map((item) => (
                            <div key={item.id} className="checkout-item">
                                <img src={item.image} alt={item.name} />
                                <div className="checkout-item-info">
                                    <p className="item-name">{item.name}</p>
                                    <p className="item-qty">Qty: {item.qty}</p>
                                </div>
                                <p className="item-price">Rs. {item.price * item.qty}</p>
                            </div>
                        ))}
                    </div>

                    <hr />

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>Rs. {cartTotal}</span>
                    </div>

                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>

                    <hr />

                    <div className="summary-row total-row">
                        <span>Total</span>
                        <span>Rs. {cartTotal}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;