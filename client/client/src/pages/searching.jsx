


import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext"; // Importing the Auth context
import axios from "axios";

const Search = () => {
  const [values] = useSearch(); // Use values directly; setValues isn't used here
  const { user } = useAuth(); // Get user data from context
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [message, setMessage] = React.useState(""); // For showing messages

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
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length} products`}
          </h6>
          <div className="row mt-4">
            {values?.results.map((p) => (
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
                        : "No description available"}
                      ...
                    </p>
                    <p className="card-text"> $ {p.price}</p>
                    <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      View Details
                    </button>
                    <button
                      className="btn btn-success ms-1"
                      onClick={() => addToCart(p._id, p.name)} // Add to Cart button
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {message && (
          <div className="alert alert-info mt-3" role="alert">
            {message}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Search;
