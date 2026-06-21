import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../components/cartContext/cartcontext";
import "./cart.css";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    cartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty 🛒</h2>
        <Link to="/" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Cart</h2>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} className="cart-item-img" />

            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p className="cart-item-brand">Brand: {item.brand}</p>
              <h4 className="cart-item-price">
                Rs. {item.price.toLocaleString()}
              </h4>
            </div>

            <div className="cart-item-qty">
              <button onClick={() => decreaseQty(item.id)}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

            <div className="cart-item-subtotal">
              Rs. {(item.price * item.quantity).toLocaleString()}
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: Rs. {cartTotal.toLocaleString()}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;