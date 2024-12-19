


// // // import React from "react";
// // // import Layout from "./../components/layout/layout";
// // // import { useAuth } from "../context/authContext"; // Import useAuth
// // // import { Link } from "react-router-dom";

// // // const HomePage = () => {
// // //   const { user } = useAuth(); // Get the user from AuthContext

// // //   return (
// // //     <Layout>
// // //       {user ? (
// // //         <div style={{ textAlign: "center", marginTop: "50px" }}>
// // //           <h1>Welcome, {user.name || "User"}!</h1>
// // //           <p>You are logged in. Enjoy browsing our store!</p>
// // //           {user.isAdmin ? (
// // //             <Link to="/admin/dashboard">
// // //               <button style={buttonStyle}>Go to Admin Dashboard</button>
// // //             </Link>
// // //           ) : (
// // //             <Link to="/user/dashboard">
// // //               <button style={buttonStyle}>Go to User Dashboard</button>
// // //             </Link>
// // //           )}
// // //         </div>
// // //       ) : (
// // //         <div style={{ textAlign: "center", marginTop: "50px" }}>
// // //           <h1>Welcome to Our E-commerce App!</h1>
// // //           <p>
// // //             Please <a href="/login">Login</a> or <a href="/register">Register</a> to access more features.
// // //           </p>
// // //         </div>
// // //       )}
// // //     </Layout>
// // //   );
// // // };

// // // // Inline styling for the button
// // // const buttonStyle = {
// // //   padding: "10px 20px",
// // //   marginTop: "20px",
// // //   backgroundColor: "#007bff",
// // //   color: "white",
// // //   border: "none",
// // //   borderRadius: "5px",
// // //   cursor: "pointer",
// // //   fontSize: "16px",
// // // };

// // // export default HomePage;




// import React, { useState, useEffect } from "react";
// import Layout from "./../components/layout/layout";
// import { useAuth } from "../context/authContext";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const HomePage = () => {
//   const { user } = useAuth();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Fetch all products
//   const getAllProducts = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.get("http://localhost:5001/api/product/get-product");
//       setLoading(false);
//       setProducts(data.products);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   // Fetch products when component mounts
//   useEffect(() => {
//     if (user) {
//       getAllProducts();
//     }
//   }, [user]);

//   return (
//     <Layout>
//       {user ? (
//         <div className="container-fluid">
//           <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h1>Welcome, {user.name || "User"}!</h1>
//             <p>You are logged in. Enjoy browsing our store!</p>
//             {user.isAdmin ? (
//               <Link to="/admin/dashboard">
//                 <button className="btn btn-primary mt-3">Go to Admin Dashboard</button>
//               </Link>
//             ) : (
//               <Link to="/user/dashboard">
//                 <button className="btn btn-primary mt-3">Go to User Dashboard</button>
//               </Link>
//             )}
//           </div>

//           <div className="row mt-3">
//             <div className="col-md-12">
//               <h2 className="text-center">Shop by Your Choice</h2>
//               <div className="row justify-content-center">
//                 {loading ? (
//                   <p>Loading products...</p>
//                 ) : products.length > 0 ? (
//                   products.map((product) => (
//                     <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
//                       <div className="card h-100 shadow-sm border-0">
//                         <img
//                           src={`http://localhost:5001/api/product/product-photo/${product._id}`}
//                           alt={product.name}
//                           className="card-img-top"
//                           style={{ height: "250px", objectFit: "cover" }}
//                         />
//                         <div className="card-body d-flex flex-column text-center">
//                           <h5 className="card-title">{product.name}</h5>
//                           <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
//                             {product.description.length > 70
//                               ? `${product.description.substring(0, 70)}...`
//                               : product.description}
//                           </p>
//                           <p className="card-text">${product.price}</p>
//                           <div className="mt-auto">
//                             <button
//                               className="btn btn-info w-100"
//                               onClick={() => navigate(`/product/${product.slug}`)}
//                             >
//                               View Details
//                             </button>
//                             <button
//                               className="btn btn-success w-100 mt-2"
//                             >
//                               Add to Cart
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No products available.</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//           <h1>Welcome to Our E-commerce App!</h1>
//           <p>
//             Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to access more features.
//           </p>
//         </div>
//       )}
//     </Layout>
//   );
// };

// export default HomePage;

// import React, { useState, useEffect } from "react";
// import Layout from "./../components/layout/layout";
// import { useAuth } from "../context/authContext";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import img from "../images/cover.jpg"

// const HomePage = () => {
//   const { user } = useAuth();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Fetch all products
//   const getAllProducts = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.get("http://localhost:5001/api/product/get-product");
//       setLoading(false);
//       setProducts(data.products);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   // Fetch products when component mounts
//   useEffect(() => {
//     if (user) {
//       getAllProducts();
//     }
//   }, [user]);

//   return (
//     <Layout>
//       {user ? (
//         <div className="container-fluid">
//           {/* Carousel Section */}
//           <div id="welcomeCarousel" className="carousel slide" data-bs-ride="carousel">
//             <div
//               className="carousel-inner"
//               style={{
               
//                 alignItems: "center",
//                 justifyContent: "center",
//                 height: "400px", // Increased height
//                 background: `url ${img}`,
//                 backgroundSize: "cover",
//               }}
//             >
//               <div className="carousel-item active text-center">
//                 <div
//                   style={{
//                     marginTop: "50px",
//                     color: "#fff",
//                     background: "rgba(0,0,0,0.5)",
//                     padding: "20px",
//                     borderRadius: "10px", // Optional: To give a rounded effect to the content
//                   }}
//                 >
//                   <h1>Welcome, {user.name || "User"}!</h1>
//                   <p>You are logged in. Enjoy browsing our store!</p>
//                   {user.isAdmin ? (
//                     <Link to="/admin/dashboard">
//                       <button className="btn btn-primary mt-3">Go to Admin Dashboard</button>
//                     </Link>
//                   ) : (
//                     <Link to="/user/dashboard">
//                       <button className="btn btn-primary mt-3">Go to User Dashboard</button>
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product Section */}
//           <div className="row mt-3">
//             <div className="col-md-12">
//               <h2 className="text-center">Shop by Your Choice</h2>
//               <div className="row justify-content-center">
//                 {loading ? (
//                   <p>Loading products...</p>
//                 ) : products.length > 0 ? (
//                   products.map((product) => (
//                     <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
//                       <div className="card h-100 shadow-sm border-0">
//                         <img
//                           src={`http://localhost:5001/api/product/product-photo/${product._id}`}
//                           alt={product.name}
//                           className="card-img-top"
//                           style={{ height: "250px", objectFit: "cover" }}
//                         />
//                         <div className="card-body d-flex flex-column text-center">
//                           <h5 className="card-title">{product.name}</h5>
//                           <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
//                             {product.description.length > 70
//                               ? `${product.description.substring(0, 70)}...`
//                               : product.description}
//                           </p>
//                           <p className="card-text">${product.price}</p>
//                           <div className="mt-auto">
//                             <button
//                               className="btn btn-info w-100"
//                               onClick={() => navigate(`/product/${product.slug}`)}
//                             >
//                               View Details
//                             </button>
//                             <button className="btn btn-success w-100 mt-2">Add to Cart</button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No products available.</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//           <h1>Welcome to Our E-commerce App!</h1>
//           <p>
//             Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to access more features.
//           </p>
//         </div>
//       )}
//     </Layout>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from "react";
import Layout from "./../components/layout/layout";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../images/c6.jpg";

const HomePage = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch all products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("http://localhost:5001/api/product/get-product");
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // Fetch products when component mounts
  useEffect(() => {
    if (user) {
      getAllProducts();
    }
  }, [user]);

  return (
    <Layout>
      {user ? (
        <div className="container-fluid">
          {/* Carousel Section */}
          <div id="welcomeCarousel" className="carousel slide" data-bs-ride="carousel">
            <div
              className="carousel-inner"
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: "400px", // Increased height
                background: `url(${img}) `,
                backgroundSize: "cover",
              }}
            >
              <div className="carousel-item active text-center">
                <div
                  // style={{
                  //   marginTop: "50px",
                  //   color: "#fff",
                  //   background: "rgba(0,0,0,0.5)",
                  //   padding: "20px",
                  //   borderRadius: "10px", // Optional: To give a rounded effect to the content
                  // }}
                >
                  <h1 style={{color:"#fff"}}>Welcome, {user.name || "User"}!</h1>
                  <p style={{color:"#fff"}}>You are logged in. Enjoy browsing our store!</p>
                  {user.isAdmin ? (
                    <Link to="/admin/dashboard">
                      <button className="btn btn-primary mt-3">Go to Admin Dashboard</button>
                    </Link>
                  ) : (
                    <Link to="/user/dashboard">
                      <button className="btn btn-primary mt-3">Go to User Dashboard</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Product Section */}
          <div className="row mt-3">
            <div className="col-md-12">
              <h2 className="text-center">Shop by Your Choice</h2>
              <div className="row justify-content-center">
                {loading ? (
                  <p>Loading products...</p>
                ) : products.length > 0 ? (
                  products.map((product) => (
                    <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
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
                            <button className="btn btn-success w-100 mt-2">Add to Cart</button>
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
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Welcome to Our E-commerce App!</h1>
          <p>
            Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to access more features.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
