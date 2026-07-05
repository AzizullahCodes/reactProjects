import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./orderSuccess.css";

const OrderSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // checkout page se navigate karte waqt state me orderId aur total bheja tha
    const { orderId, total } = location.state || {};

    // agar koi seedha URL type karke aa jaye without state, to usko cart pe bhej do
    if (!orderId) {
        return (
            <div className="success-wrapper">
                <div className="success-card">
                    <h2>No order found</h2>
                    <p>Looks like you reached this page directly.</p>
                    <button className="continue-btn" onClick={() => navigate("/")}>
                        Go to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="success-wrapper">
            <div className="success-card">
                <div className="success-icon">
                    <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 12l2.5 2.5L16 9" />
                    </svg>
                </div>

                <h2>Order Placed Successfully!</h2>
                <p className="success-msg">
                    Thank you for shopping with us. Your order has been confirmed.
                </p>

                <div className="order-info">
                    <div className="order-info-row">
                        <span>Order ID</span>
                        <span className="order-id">#{orderId}</span>
                    </div>
                    <div className="order-info-row">
                        <span>Total Amount</span>
                        <span>Rs. {total}</span>
                    </div>
                    <div className="order-info-row">
                        <span>Payment Method</span>
                        <span>Cash on Delivery</span>
                    </div>
                </div>

                <p className="delivery-note">
                    You will receive a confirmation call/email shortly regarding delivery.
                </p>

                <div className="success-actions">
                    <button className="continue-btn" onClick={() => navigate("/")}>
                        Continue Shopping
                    </button>
                    <button className="orders-btn" onClick={() => navigate("/orders")}>
                        View My Orders
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;