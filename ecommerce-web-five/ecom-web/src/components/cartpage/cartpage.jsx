import React, { useContext } from "react";
import cartContext from "../../context/cartContext/cartContext";
import "./CartPage.css";

const CartPage = () => {
    const { cart, removeFromCart, increaseQty, decreaseQty, cartTotal } =
        useContext(cartContext);

    // agar cart khaali hai
    if (cart.length === 0) {
        return (
            <div className="empty-cart-wrapper">
                <div className="empty-cart">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <h2>Your cart is empty</h2>
                    <p>Looks like you haven't added anything yet.</p>
                    <button className="continue-btn">Continue Shopping</button>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h2 className="cart-heading">Shopping Cart</h2>

            <div className="cart-container">
                {/* Left side - cart items */}
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="cart-item-img"
                            />

                            <div className="cart-item-details">
                                <h4>{item.name}</h4>
                                <p className="cart-item-price">
                                    Rs. {item.price}
                                </p>

                                <div className="qty-controls">
                                    <button
                                        onClick={() => decreaseQty(item.id)}
                                    >
                                        −
                                    </button>
                                    <span>{item.qty}</span>
                                    <button
                                        onClick={() => increaseQty(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="cart-item-right">
                                <p className="cart-item-subtotal">
                                    Rs. {item.price * item.qty}
                                </p>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right side - order summary */}
                <div className="cart-summary">
                    <h3>Order Summary</h3>

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

                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;