import React from 'react';
import laptops from '../../data/laptops/images/laptop-data';
import ProductCard from '../../components/product-cards/prouductCards';
import './laptops.css'

const LaptopPage = () => {
  return (
    <div className="products-container">
      {
        laptops.map((laptops) => (
          <ProductCard
            key={laptops.id}
            id={laptops.id} 
            image={laptops.image}
            title={laptops.title}
            brand={laptops.brand}
            price={laptops.price}
            rating={laptops.rating}
          />
        ))
      }
    </div>
  );
};

export default LaptopPage;