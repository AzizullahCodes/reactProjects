import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all"
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div>
      <h2>Products</h2>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="mobile">Mobile</option>
        <option value="laptop">Laptop</option>
        <option value="accessories">Accessories</option>
      </select>

      <div className="grid">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
