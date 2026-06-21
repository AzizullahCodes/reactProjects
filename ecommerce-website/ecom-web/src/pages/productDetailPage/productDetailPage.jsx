import React from 'react';
import { useParams, Link } from 'react-router-dom';
import allProducts from '../../data/combineData/combineData';
import { useCart } from '../../components/cartContext/cartcontext';
import './productDetail.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = allProducts.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="detail-not-found">
        <h2>Product not found</h2>
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  const { image, title, brand, price, rating } = product;

  return (
    <div className="detail-container">
      <div className="detail-image">
        <img src={image} alt={title} />
      </div>

      <div className="detail-info">
        <h1>{title}</h1>
        <p className="detail-brand">Brand: <span>{brand}</span></p>
        <p className="detail-rating">⭐ {rating}</p>
        <h2 className="detail-price">Rs. {price.toLocaleString()}</h2>

        <button
          className="detail-add-btn"
          onClick={() => addToCart({ id: product.id, image, title, brand, price, rating })}
        >
          Add To Cart
        </button>

        <Link to="/cart" className="detail-view-cart">
          View Cart →
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailPage;