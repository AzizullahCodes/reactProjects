import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useCart } from '../cartContext/cartcontext';

const ProductCard = ({ id, image, title, brand, price, rating }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart({ id, image, title, brand, price, rating });
  };

  return (
    <Link to={`/product/${id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image">
          <img src={image} alt={title} />
        </div>

        <div className="product-content">
          <h3>{title}</h3>
          <p className="brand">Brand: <span>{brand}</span></p>
          <p className="rating">⭐ {rating}</p>
          <h2 className="price">Rs. {price.toLocaleString()}</h2>

          <button className="cart-btn" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;