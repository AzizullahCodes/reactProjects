import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map(item => (
        <div key={item.id} className="cartItem">
          <p>{item.name}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: {total}</h3>

      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
