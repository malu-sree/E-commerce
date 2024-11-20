import React from 'react';
import { Link } from 'react-router-dom';  // To link to product details page

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`}>
        <img src={product.imageUrl} alt={product.name} />
        <div className="product-card-details">
          <h3>{product.name}</h3>
          <p>{product.description.substring(0, 100)}...</p>
          <p><strong>Price: ${product.price}</strong></p>
        </div>
      </Link>
      <button>Add to Cart</button> {/* Button to add to cart, functionality can be added later */}
    </div>
  );
};

export default ProductCard;
