import React from 'react';
import smartWatches from '../../data/smart-watches/images/smart-watches';
import ProductCard from '../../components/product-cards/prouductCards';
import './smartwatch.css'

const SmartwatchesPage = () => {
  return (
    <div className="products-container">
      {
        smartWatches.map((smartWatches) => (
          <ProductCard
            key={smartWatches.id}
            id={smartWatches.id} 
            image={smartWatches.image}
            title={smartWatches.title}
            brand={smartWatches.brand}
            price={smartWatches.price}
            rating={smartWatches.rating}
          />
        ))
      }
    </div>
  );
};

export default SmartwatchesPage;