import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Rs {product.price}</p>

      <div className="btns">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <button onClick={() => addToWishlist(product)}>Wishlist</button>
      </div>

      <Link to={`/product/${product.id}`}>View</Link>
    </div>
  );
}
