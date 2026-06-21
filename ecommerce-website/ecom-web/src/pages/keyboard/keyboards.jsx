import React from 'react';
import keyboards from '../../data/keyboards/images/keboards-data';
import ProductCard from '../../components/product-cards/prouductCards';
import './keyboards.css'

const KeyboardPage = () => {
  return (
    <div className="products-container">
      {
        keyboards.map((keyboards) => (
          <ProductCard
            key={keyboards.id}
            id={keyboards.id} 
            image={keyboards.image}
            title={keyboards.title}
            brand={keyboards.brand}
            price={keyboards.price}
            rating={keyboards.rating}
          />
        ))
      }
    </div>
  );
};

export default KeyboardPage;