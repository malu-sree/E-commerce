


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../components/layout/layout";
import { useAuth } from "../context/authContext"; // Importing the Auth context

function ProductDetails() {
  const navigate = useNavigate();
  const { user } = useAuth(); // Get user data from context
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [message, setMessage] = useState(""); // For showing messages
  const params = useParams(); // Get the slug from the route

  // Fetch product details
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5001/api/product/get-product/${params.slug}`
      );
      setProduct(data?.product); // Set the fetched product

      // Ensure product and category exist before calling getSimilarProduct
      if (data?.product?._id && data?.product?.category?._id) {
        getSimilarProduct(data.product._id, data.product.category._id);
      } else {
        console.error("Product or category data is missing.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch similar products
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5001/api/product/similar-products/${pid}/${cid}`
      );
      setRelatedProducts(data?.products || []); // Set related products
    } catch (error) {
      console.log(error);
    }
  };

  // Use useEffect to fetch data on component mount
  useEffect(() => {
    if (params.slug) {
      getProduct();
    }
  }, [params.slug]);

  // Add to cart functionality
  const addToCart = async (productId, productName) => {
    if (!user) {
      setMessage("You need to be logged in to add items to the cart.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("Please log in to add items to the cart.");
        return;
      }

      const response = await axios.post(
        "http://localhost:5001/api/cart/add",
        { userId: user._id, productId, quantity: 1 }, // Pass productId and userId
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setMessage(`${productName} has been added to the cart successfully!`);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      setMessage("Failed to add item to cart. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="container mt-4">
        {product ? (
          <>
            <div className="row">
              <div className="col-md-6">
                <img
                  src={`http://localhost:5001/api/product/product-photo/${product._id}`}
                  alt={product.name}
                  className="card-img-top"
                />
              </div>
              <div className="col-md-6">
                <h1 className="text-center">Product Details</h1>
                <h3>Name: {product.name}</h3>
                <h6>Description: {product.description}</h6>
                <h3>Price: ${product.price}</h3>
                <h4>Category: {product.category?.name || "N/A"}</h4>
                <br />
                <button
                  className="btn btn-success"
                  onClick={() => addToCart(product._id, product.name)} // Add to Cart button
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Message Section */}
            {message && (
              <div className="alert alert-info mt-3" role="alert">
                {message}
              </div>
            )}

            {/* Similar Products Section */}
            <div className="mt-5">
              <h3>Similar Products</h3>
              <div className="row">
                {relatedProducts.length > 0 ? (
                  relatedProducts.map((p) => (
                    <div className="col-md-4" key={p._id}>
                      <div className="card m-2" style={{ width: "18rem" }}>
                        <img
                          src={`http://localhost:5001/api/product/product-photo/${p._id}`}
                          className="card-img-top"
                          alt={p.name}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{p.name}</h5>
                          <p className="card-text">
                            {p.description
                              ? p.description.substring(0, 30)
                              : "No description available"}...
                          </p>
                          <p className="card-text">$ {p.price}</p>
                          <button
                            className="btn btn-info ms-1"
                            onClick={() => navigate(`/product/${p.slug}`)}
                          >
                            View Details
                          </button>
                          <button
                            className="btn btn-success ms-1"
                            onClick={() => addToCart(p._id, p.name)} // Add to Cart button for similar products
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No similar products found.</p>
                )}
              </div>
            </div>
          </>
        ) : (
          <h4>Loading product details...</h4>
        )}
      </div>
    </Layout>
  );
}

export default ProductDetails;

