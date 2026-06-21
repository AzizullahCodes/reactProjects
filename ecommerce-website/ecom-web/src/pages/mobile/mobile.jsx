import React from 'react';
import mobiles from '../../data/mobiles/images/mobile-data';
import ProductCard from '../../components/product-cards/prouductCards';
import './mobile.css'

const MobilePage = () => {
  return (
    <div className="products-container">
      {
        mobiles.map((mobile) => (
          <ProductCard
            key={mobile.id}
            id={mobile.id} 
            image={mobile.image}
            title={mobile.title}
            brand={mobile.brand}
            price={mobile.price}
            rating={mobile.rating}
          />
        ))
      }
    </div>
  );
};

export default MobilePage;