import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id == id);

  const { addToCart } = useContext(CartContext);

  if (!product) return <p>Not found</p>;

  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
