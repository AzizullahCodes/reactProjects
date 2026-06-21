import React from 'react';
import cameras from '../../data/cameras/images/camera-data';
import ProductCard from '../../components/product-cards/prouductCards';
import './cameras.css'

const CameraPage = () => {
  return (
    <div className="products-container">
      {
        cameras.map((cameras) => (
          <ProductCard
            key={cameras.id}
            id={cameras.id} 
            image={cameras.image}
            title={cameras.title}
            brand={cameras.brand}
            price={cameras.price}
            rating={cameras.rating}
          />
        ))
      }
    </div>
  );
};

export default CameraPage;