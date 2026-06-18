import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./Cart.css";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your Cart Is Empty</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-details">

                <h3>{item.name}</h3>

                <p>
                  Price: Rs. {item.price}
                </p>

                <div className="quantity-box">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>

              </div>
            </div>
          ))}

          <div className="total-section">
            <h2>
              Total: Rs. {totalPrice}
            </h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;