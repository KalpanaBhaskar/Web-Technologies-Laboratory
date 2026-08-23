import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    let matchesPrice = true;

    if (priceRange === "Below500") {
      matchesPrice = product.price < 500;
    } else if (priceRange === "500-1000") {
      matchesPrice = product.price >= 500 && product.price <= 1000;
    } else if (priceRange === "Above1000") {
      matchesPrice = product.price > 1000;
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="container">
      <h1>Online Shopping Product Catalog</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search Product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Grocery</option>
        </select>

        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="All">All Prices</option>
          <option value="Below500">Below ₹500</option>
          <option value="500-1000">₹500 - ₹1000</option>
          <option value="Above1000">Above ₹1000</option>
        </select>
      </div>

      <h3>Products Found: {filteredProducts.length}</h3>

      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default App;