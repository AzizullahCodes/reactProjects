import { useParams } from "react-router-dom";

import { products } from "../../data/products";

import ProductCard from "../../components/ProductCard/ProductCard";

import "./Category.css";

function Category() {

  const { categoryName } = useParams();

  const filteredProducts =
    products.filter(
      (product) =>
        product.category === categoryName
    );

  return (
    <div className="category-page">

      <h1>
        {categoryName.toUpperCase()}
      </h1>

      <div className="products-grid">

        {filteredProducts.map(
          (product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )
        )}

      </div>

    </div>
  );
}

export default Category;