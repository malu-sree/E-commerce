import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get product ID from URL
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();  // Get product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error('Error fetching product:', err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading product details...</div>;

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p><strong>Price: ${product.price}</strong></p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
