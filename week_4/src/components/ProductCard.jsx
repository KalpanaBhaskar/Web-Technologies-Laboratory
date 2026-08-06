function ProductCard({ product }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <p>Price: ₹{product.price}</p>

      <p>Quantity: {product.quantity}</p>

      <p>
        {product.quantity === 0 ? (
          <span className="out">Out of Stock</span>
        ) : (
          <span className="in">In Stock</span>
        )}
      </p>
    </div>
  );
}

export default ProductCard;