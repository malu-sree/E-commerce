



// // import React, { useState, useEffect } from "react";
// // import Layout from "../components/Layout/Layout";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const CategoryProduct = () => {
// //   const params = useParams();
// //   const navigate = useNavigate();
// //   const [products, setProducts] = useState([]);
// //   const [category, setCategory] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (params?.slug) {
// //       getPrductsByCat();
// //     }
// //   }, [params?.slug]);

// //   const getPrductsByCat = async () => {
// //     try {
// //       const { data } = await axios.get(
// //         `http://localhost:5001/api/product/product-category/${params.slug}`
// //       );
// //       setProducts(data?.products);
// //       setCategory(data?.category);
// //       setLoading(false);
// //     } catch (error) {
// //       console.log(error);
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <Layout>
// //       <div className="container mt-3">
// //         <h2 className="text-center">Category - {category?.name}</h2>
// //         <h6 className="text-center">{products?.length} result found</h6>
// //         <div className="row justify-content-center">
// //           {loading ? (
// //             <p>Loading products...</p>
// //           ) : products.length > 0 ? (
// //             products.map((product) => (
// //               <div
// //                 key={product._id}
// //                 className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
// //               >
// //                 <div className="card h-100 shadow-sm border-0">
// //                   <img
// //                     src={`http://localhost:5001/api/product/product-photo/${product._id}`}
// //                     alt={product.name}
// //                     className="card-img-top"
// //                     style={{ height: "420px", objectFit: "cover" }}
// //                   />
// //                   <div className="card-body d-flex flex-column text-center">
// //                     <h5 className="card-title">{product.name}</h5>
// //                     <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
// //                       {product.description.length > 70
// //                         ? `${product.description.substring(0, 70)}...`
// //                         : product.description}
// //                     </p>
// //                     <p className="card-text">${product.price}</p>
// //                     <div className="mt-auto">
// //                       <button
// //                         className="btn btn-info w-100"
// //                         onClick={() => navigate(`/product/${product.slug}`)}
// //                       >
// //                         View Details
// //                       </button>
// //                       <button className="btn btn-success w-100 mt-2">Add to Cart</button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <p>No products available.</p>
// //           )}
// //         </div>
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default CategoryProduct;


import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/authContext";

const CategoryProduct = () => {
  const { user } = useAuth(); // Get user data from context
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(""); // New state for messages

  // Fetch products based on category slug
  useEffect(() => {
    if (params?.slug) {
      getPrductsByCat();
    }
  }, [params?.slug]);

  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5001/api/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

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
      <div className="container mt-3">
        <h2 className="text-center">Category - {category?.name}</h2>
        <h6 className="text-center">{products?.length} result found</h6>

        {/* Message Section */}
        {message && (
          <div className="alert alert-info" role="alert">
            {message}
          </div>
        )}

        <div className="row justify-content-center">
          {loading ? (
            <p>Loading products...</p>
          ) : products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={`http://localhost:5001/api/product/product-photo/${product._id}`}
                    alt={product.name}
                    className="card-img-top"
                    style={{ height: "420px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
                      {product.description.length > 70
                        ? `${product.description.substring(0, 70)}...`
                        : product.description}
                    </p>
                    <p className="card-text">${product.price}</p>
                    <div className="mt-auto">
                      <button
                        className="btn btn-info w-100"
                        onClick={() => navigate(`/product/${product.slug}`)}
                      >
                        View Details
                      </button>
                      <button
                        className="btn btn-success w-100 mt-2"
                        onClick={() => addToCart(product._id, product.name)} // Add to cart logic
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;



