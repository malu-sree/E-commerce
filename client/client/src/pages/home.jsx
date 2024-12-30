

// // // // import React, { useState, useEffect } from "react";
// // // // import Layout from "./../components/layout/layout";
// // // // import { useAuth } from "../context/authContext";
// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import axios from "axios";
// // // // import "bootstrap/dist/css/bootstrap.min.css";
// // // // import img from "../images/cover.jpg"

// // // // const HomePage = () => {
// // // //   const { user } = useAuth();
// // // //   const [products, setProducts] = useState([]);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const navigate = useNavigate();

// // // //   // Fetch all products
// // // //   const getAllProducts = async () => {
// // // //     try {
// // // //       setLoading(true);
// // // //       const { data } = await axios.get("http://localhost:5001/api/product/get-product");
// // // //       setLoading(false);
// // // //       setProducts(data.products);
// // // //     } catch (error) {
// // // //       setLoading(false);
// // // //       console.log(error);
// // // //     }
// // // //   };

// // // //   // Fetch products when component mounts
// // // //   useEffect(() => {
// // // //     if (user) {
// // // //       getAllProducts();
// // // //     }
// // // //   }, [user]);

// // // //   return (
// // // //     <Layout>
// // // //       {user ? (
// // // //         <div className="container-fluid">
// // // //           {/* Carousel Section */}
// // // //           <div id="welcomeCarousel" className="carousel slide" data-bs-ride="carousel">
// // // //             <div
// // // //               className="carousel-inner"
// // // //               style={{
               
// // // //                 alignItems: "center",
// // // //                 justifyContent: "center",
// // // //                 height: "400px", // Increased height
// // // //                 background: `url ${img}`,
// // // //                 backgroundSize: "cover",
// // // //               }}
// // // //             >
// // // //               <div className="carousel-item active text-center">
// // // //                 <div
// // // //                   style={{
// // // //                     marginTop: "50px",
// // // //                     color: "#fff",
// // // //                     background: "rgba(0,0,0,0.5)",
// // // //                     padding: "20px",
// // // //                     borderRadius: "10px", // Optional: To give a rounded effect to the content
// // // //                   }}
// // // //                 >
// // // //                   <h1>Welcome, {user.name || "User"}!</h1>
// // // //                   <p>You are logged in. Enjoy browsing our store!</p>
// // // //                   {user.isAdmin ? (
// // // //                     <Link to="/admin/dashboard">
// // // //                       <button className="btn btn-primary mt-3">Go to Admin Dashboard</button>
// // // //                     </Link>
// // // //                   ) : (
// // // //                     <Link to="/user/dashboard">
// // // //                       <button className="btn btn-primary mt-3">Go to User Dashboard</button>
// // // //                     </Link>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Product Section */}
// // // //           <div className="row mt-3">
// // // //             <div className="col-md-12">
// // // //               <h2 className="text-center">Shop by Your Choice</h2>
// // // //               <div className="row justify-content-center">
// // // //                 {loading ? (
// // // //                   <p>Loading products...</p>
// // // //                 ) : products.length > 0 ? (
// // // //                   products.map((product) => (
// // // //                     <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
// // // //                       <div className="card h-100 shadow-sm border-0">
// // // //                         <img
// // // //                           src={`http://localhost:5001/api/product/product-photo/${product._id}`}
// // // //                           alt={product.name}
// // // //                           className="card-img-top"
// // // //                           style={{ height: "250px", objectFit: "cover" }}
// // // //                         />
// // // //                         <div className="card-body d-flex flex-column text-center">
// // // //                           <h5 className="card-title">{product.name}</h5>
// // // //                           <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
// // // //                             {product.description.length > 70
// // // //                               ? `${product.description.substring(0, 70)}...`
// // // //                               : product.description}
// // // //                           </p>
// // // //                           <p className="card-text">${product.price}</p>
// // // //                           <div className="mt-auto">
// // // //                             <button
// // // //                               className="btn btn-info w-100"
// // // //                               onClick={() => navigate(`/product/${product.slug}`)}
// // // //                             >
// // // //                               View Details
// // // //                             </button>
// // // //                             <button className="btn btn-success w-100 mt-2">Add to Cart</button>
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   ))
// // // //                 ) : (
// // // //                   <p>No products available.</p>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       ) : (
// // // //         <div style={{ textAlign: "center", marginTop: "50px" }}>
// // // //           <h1>Welcome to Our E-commerce App!</h1>
// // // //           <p>
// // // //             Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to access more features.
// // // //           </p>
// // // //         </div>
// // // //       )}
// // // //     </Layout>
// // // //   );
// // // // };

// // // // export default HomePage;


// // // import React, { useState, useEffect } from "react";
// // // import Layout from "./../components/layout/layout";
// // // import { useAuth } from "../context/authContext";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import "bootstrap/dist/css/bootstrap.min.css";
// // // import img from "../images/c6.jpg";

// // // const HomePage = () => {
// // //   const { user } = useAuth();
// // //   const [products, setProducts] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const navigate = useNavigate();

// // //   // Fetch all products
// // //   const getAllProducts = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const { data } = await axios.get("http://localhost:5001/api/product/get-product");
// // //       setLoading(false);
// // //       setProducts(data.products);
// // //     } catch (error) {
// // //       setLoading(false);
// // //       console.log(error);
// // //     }
// // //   };

// // //   // Fetch products when component mounts
// // //   useEffect(() => {
// // //     if (user) {
// // //       getAllProducts();
// // //     }
// // //   }, [user]);

// // //   return (
// // //     <Layout>
// // //       {user ? (
// // //         <div className="container-fluid">
// // //           {/* Carousel Section */}
// // //           <div id="welcomeCarousel" className="carousel slide" data-bs-ride="carousel">
// // //             <div
// // //               className="carousel-inner"
// // //               style={{
// // //                 alignItems: "center",
// // //                 justifyContent: "center",
// // //                 height: "400px", // Increased height
// // //                 background: `url(${img}) `,
// // //                 backgroundSize: "cover",
// // //               }}
// // //             >
// // //               <div className="carousel-item active text-center">
// // //                 <div
// // //                   // style={{
// // //                   //   marginTop: "50px",
// // //                   //   color: "#fff",
// // //                   //   background: "rgba(0,0,0,0.5)",
// // //                   //   padding: "20px",
// // //                   //   borderRadius: "10px", // Optional: To give a rounded effect to the content
// // //                   // }}
// // //                 >
// // //                   <h1 style={{color:"#fff"}}>Welcome, {user.name || "User"}!</h1>
// // //                   <p style={{color:"#fff"}}>You are logged in. Enjoy browsing our store!</p>
// // //                   {user.isAdmin ? (
// // //                     <Link to="/admin/dashboard">
// // //                       <button className="btn btn-primary mt-3">Go to Admin Dashboard</button>
// // //                     </Link>
// // //                   ) : (
// // //                     <Link to="/user/dashboard">
// // //                       <button className="btn btn-primary mt-3">Go to User Dashboard</button>
// // //                     </Link>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Product Section */}
// // //           <div className="row mt-3">
// // //             <div className="col-md-12">
// // //               <h2 className="text-center">Shop by Your Choice</h2>
// // //               <div className="row justify-content-center">
// // //                 {loading ? (
// // //                   <p>Loading products...</p>
// // //                 ) : products.length > 0 ? (
// // //                   products.map((product) => (
// // //                     <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
// // //                       <div className="card h-100 shadow-sm border-0">
// // //                         <img
// // //                           src={`http://localhost:5001/api/product/product-photo/${product._id}`}
// // //                           alt={product.name}
// // //                           className="card-img-top"
// // //                           style={{ height: "420px", objectFit: "cover" }}
// // //                         />
// // //                         <div className="card-body d-flex flex-column text-center">
// // //                           <h5 className="card-title">{product.name}</h5>
// // //                           <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
// // //                             {product.description.length > 70
// // //                               ? `${product.description.substring(0, 70)}...`
// // //                               : product.description}
// // //                           </p>
// // //                           <p className="card-text">${product.price}</p>
// // //                           <div className="mt-auto">
// // //                             <button
// // //                               className="btn btn-info w-100"
// // //                               onClick={() => navigate(`/product/${product.slug}`)}
// // //                             >
// // //                               View Details
// // //                             </button>
// // //                             <button className="btn btn-success w-100 mt-2">Add to Cart</button>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   ))
// // //                 ) : (
// // //                   <p>No products available.</p>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       ) : (
// // //         <div style={{ textAlign: "center", marginTop: "50px" }}>
// // //           <h1>Welcome to Our E-commerce App!</h1>
// // //           <p>
// // //             Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to access more features.
// // //           </p>
// // //         </div>
// // //       )}
// // //     </Layout>
// // //   );
// // // };

// // // export default HomePage;



// // import React, { useState, useEffect } from "react";
// // import Layout from "./../components/layout/layout";
// // import { useAuth } from "../context/authContext";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { useCart } from "../context/cart";
// // import img from "../images/c6.jpg";

// // const HomePage = () => {
// //   const { user } = useAuth();
// //   const [cart, setCart] = useCart();
// //   const [products, setProducts] = useState([]);
// //   const [successMessage, setSuccessMessage] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   const getAllProducts = async () => {
// //     try {
// //       setLoading(true);
// //       const { data } = await axios.get("http://localhost:5001/api/product/get-product");
// //       setProducts(data.products);
// //     } catch (error) {
// //       console.error(error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     if (user) {
// //       getAllProducts();
// //     }
// //   }, [user]);

// //   const handleAddToCart = (product) => {
// //     const isProductInCart = cart.some((item) => item._id === product._id);

// //     if (!isProductInCart) {
// //       setCart([...cart, product]);
// //       setSuccessMessage(`${product.name} added to cart!`);
// //     } else {
// //       setSuccessMessage(`${product.name} is already in the cart!`);
// //     }

// //     setTimeout(() => setSuccessMessage(""), 3000);
// //   };

// //   return (
// //     <Layout>
// //       {user ? (
// //         <div className="container-fluid">
// //           {/* Carousel Section */}
// //           <div id="welcomeCarousel" className="carousel slide" data-bs-ride="carousel">
// //             <div
// //               className="carousel-inner"
// //               style={{
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 height: "400px",
// //                 background: `url(${img}) no-repeat center center`,
// //                 backgroundSize: "cover",
// //               }}
// //             >
// //               <div className="carousel-item active text-center">
// //                 <div>
// //                   <h1 style={{ color: "#fff" }}>Welcome, {user.name || "User"}!</h1>
// //                   <p style={{ color: "#fff" }}>You are logged in. Enjoy browsing our store!</p>
// //                   {user.isAdmin ? (
// //                     <Link to="/admin/dashboard">
// //                       <button className="btn btn-primary mt-3">Go to Admin Dashboard</button>
// //                     </Link>
// //                   ) : (
// //                     <Link to="/user/dashboard">
// //                       <button className="btn btn-primary mt-3">Go to User Dashboard</button>
// //                     </Link>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {successMessage && (
// //             <div className="alert alert-success text-center mt-3">{successMessage}</div>
// //           )}

// //           {/* Product Section */}
// //           <div className="row mt-3">
// //             <div className="col-md-12">
// //               <h2 className="text-center">Shop by Your Choice</h2>
// //               <div className="row justify-content-center">
// //                 {loading ? (
// //                   <p>Loading products...</p>
// //                 ) : products.length > 0 ? (
// //                   products.map((product) => (
// //                     <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
// //                       <div className="card h-100 shadow-sm border-0">
// //                         <img
// //                           src={`http://localhost:5001/api/product/product-photo/${product._id}`}
// //                           alt={product.name}
// //                           className="card-img-top"
// //                           style={{ height: "420px", objectFit: "cover" }}
// //                         />
// //                         <div className="card-body d-flex flex-column text-center">
// //                           <h5 className="card-title">{product.name}</h5>
// //                           <p className="card-text">${product.price}</p>
// //                           <div className="mt-auto">
// //                             <button
// //                               className="btn btn-info w-100"
// //                               onClick={() => navigate(`/product/${product.slug}`)}
// //                             >
// //                               View Details
// //                             </button>
// //                             <button
// //                               className="btn btn-success w-100 mt-2"
// //                               onClick={() => handleAddToCart(product)
                        
// //                               }

// //                             >
// //                               Add to Cart
// //                             </button>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <p>No products available.</p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ) : (
// //         <div className="text-center mt-5">
// //           <h1>Welcome to Our E-commerce App!</h1>
// //           <p>
// //             Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to access
// //             more features.
// //           </p>
// //         </div>
// //       )}
// //     </Layout>
// //   );
// // };

// // export default HomePage;


// // import React, { useState, useEffect } from "react";
// // import Layout from "./../components/layout/layout";
// // import { useAuth } from "../context/authContext";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { useCart } from "../context/cart";
// // import img from "../images/c6.jpg";

// // const HomePage = () => {
// //   const { user } = useAuth();
// //   const [cart, setCart] = useCart();
// //   const [products, setProducts] = useState([]);
// //   const [successMessage, setSuccessMessage] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   // Load cart from localStorage when the component mounts
// //   useEffect(() => {
// //     const storedCart = JSON.parse(localStorage.getItem("cart"));
// //     if (storedCart) {
// //       setCart(storedCart);
// //     }
// //   }, [setCart]);

// //   // Save cart to localStorage whenever it changes
// //   useEffect(() => {
// //     localStorage.setItem("cart", JSON.stringify(cart));
// //   }, [cart]);

// //   // Fetch all products
// //   const getAllProducts = async () => {
// //     try {
// //       setLoading(true);
// //       const { data } = await axios.get("http://localhost:5001/api/product/get-product");
// //       setProducts(data.products);
// //     } catch (error) {
// //       console.error(error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Initialize products on component mount
// //   useEffect(() => {
// //     if (user) {
// //       getAllProducts();
// //     }
// //   }, [user]);

// //   // Handle adding a product to the cart
// //   const handleAddToCart = (product) => {
// //     const isProductInCart = cart.some((item) => item._id === product._id);

// //     if (!isProductInCart) {
// //       const updatedCart = [...cart, product];
// //       setCart(updatedCart); // Updates the state and triggers the localStorage sync
// //       setSuccessMessage(`${product.name} added to cart!`);
// //     } else {
// //       setSuccessMessage(`${product.name} is already in the cart!`);
// //     }

// //     setTimeout(() => setSuccessMessage(""), 3000);
// //   };

// //   return (
// //     <Layout>
// //       {user ? (
// //         <div className="container-fluid">
// //           {/* Carousel Section */}
// //           <div id="welcomeCarousel" className="carousel slide" data-bs-ride="carousel">
// //             <div
// //               className="carousel-inner"
// //               style={{
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 height: "400px",
// //                 background: `url(${img}) no-repeat center center`,
// //                 backgroundSize: "cover",
// //               }}
// //             >
// //               <div className="carousel-item active text-center">
// //                 <div>
// //                   <h1 style={{ color: "#fff" }}>Welcome, {user.name || "User"}!</h1>
// //                   <p style={{ color: "#fff" }}>You are logged in. Enjoy browsing our store!</p>
// //                   {user.isAdmin ? (
// //                     <Link to="/admin/dashboard">
// //                       <button className="btn btn-primary mt-3">Go to Admin Dashboard</button>
// //                     </Link>
// //                   ) : (
// //                     <Link to="/user/dashboard">
// //                       <button className="btn btn-primary mt-3">Go to User Dashboard</button>
// //                     </Link>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Success Message */}
// //           {successMessage && (
// //             <div className="alert alert-success text-center mt-3">{successMessage}</div>
// //           )}

// //           {/* Product Section */}
// //           <div className="row mt-3">
// //             <div className="col-md-12">
// //               <h2 className="text-center">Shop by Your Choice</h2>
// //               <div className="row justify-content-center">
// //                 {loading ? (
// //                   <p>Loading products...</p>
// //                 ) : products.length > 0 ? (
// //                   products.map((product) => (
// //                     <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
// //                       <div className="card h-100 shadow-sm border-0">
// //                         <img
// //                           src={`http://localhost:5001/api/product/product-photo/${product._id}`}
// //                           alt={product.name}
// //                           className="card-img-top"
// //                           style={{ height: "420px", objectFit: "cover" }}
// //                         />
// //                         <div className="card-body d-flex flex-column text-center">
// //                           <h5 className="card-title">{product.name}</h5>
// //                           <p className="card-text">${product.price}</p>
// //                           <div className="mt-auto">
// //                             <button
// //                               className="btn btn-info w-100"
// //                               onClick={() => navigate(`/product/${product.slug}`)}
// //                             >
// //                               View Details
// //                             </button>
// //                             <button
// //                               className="btn btn-success w-100 mt-2"
// //                               onClick={() => handleAddToCart(product)}
// //                             >
// //                               Add to Cart
// //                             </button>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <p>No products available.</p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ) : (
// //         <div className="text-center mt-5">
// //           <h1>Welcome to Our E-commerce App!</h1>
// //           <p>
// //             Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to access
// //             more features.
// //           </p>
// //         </div>
// //       )}
// //     </Layout>
// //   );
// // };

// // export default HomePage;


// // import React, { useState, useEffect } from "react";
// // import Layout from "../components/layout/layout";
// // import { useAuth } from "../context/authContext";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { useCart } from "../context/cart"; // Correctly import the useCart hook
// // import img from "../images/c6.jpg";

// // const HomePage = () => {
// //   const { user } = useAuth();
// //   const { cart, setCart } = useCart(); // Destructure cart and setCart from useCart
// //   const [products, setProducts] = useState([]);
// //   const [successMessage, setSuccessMessage] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   // Load cart from localStorage when the component mounts
// //   useEffect(() => {
// //     const storedCart = JSON.parse(localStorage.getItem("cart"));
// //     if (storedCart) {
// //       setCart(storedCart);
// //     }
// //   }, [setCart]);

// //   // Save cart to localStorage whenever it changes
// //   useEffect(() => {
// //     localStorage.setItem("cart", JSON.stringify(cart));
// //   }, [cart]);

// //   // Fetch all products
// //   const getAllProducts = async () => {
// //     try {
// //       setLoading(true);
// //       const { data } = await axios.get("http://localhost:5001/api/product/get-product");
// //       setProducts(data.products);
// //     } catch (error) {
// //       console.error(error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Initialize products on component mount
// //   useEffect(() => {
// //     if (user) {
// //       getAllProducts();
// //     }
// //   }, [user]);

// //   // Handle adding a product to the cart
// //   const handleAddToCart = (product) => {
// //     const isProductInCart = cart.some((item) => item._id === product._id);

// //     if (!isProductInCart) {
// //       const updatedCart = [...cart, product];
// //       setCart(updatedCart); // Updates the state and triggers the localStorage sync
// //       setSuccessMessage(`${product.name} added to cart!`);
// //     } else {
// //       setSuccessMessage(`${product.name} is already in the cart!`);
// //     }

// //     setTimeout(() => setSuccessMessage(""), 3000);
// //   };

// //   return (
// //     <Layout>
// //       {user ? (
// //         <div className="container-fluid">
// //           {/* Carousel Section */}
// //           <div id="welcomeCarousel" className="carousel slide" data-bs-ride="carousel">
// //             <div
// //               className="carousel-inner"
// //               style={{
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 height: "400px",
// //                 background: `url(${img}) no-repeat center center`,
// //                 backgroundSize: "cover",
// //               }}
// //             >
// //               <div className="carousel-item active text-center">
// //                 <div>
// //                   <h1 style={{ color: "#fff" }}>Welcome, {user.name || "User"}!</h1>
// //                   <p style={{ color: "#fff" }}>You are logged in. Enjoy browsing our store!</p>
// //                   {user.isAdmin ? (
// //                     <Link to="/admin/dashboard">
// //                       <button className="btn btn-primary mt-3">Go to Admin Dashboard</button>
// //                     </Link>
// //                   ) : (
// //                     <Link to="/user/dashboard">
// //                       <button className="btn btn-primary mt-3">Go to User Dashboard</button>
// //                     </Link>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Success Message */}
// //           {successMessage && (
// //             <div className="alert alert-success text-center mt-3">{successMessage}</div>
// //           )}

// //           {/* Product Section */}
// //           <div className="row mt-3">
// //             <div className="col-md-12">
// //               <h2 className="text-center">Shop by Your Choice</h2>
// //               <div className="row justify-content-center">
// //                 {loading ? (
// //                   <p>Loading products...</p>
// //                 ) : products.length > 0 ? (
// //                   products.map((product) => (
// //                     <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
// //                       <div className="card h-100 shadow-sm border-0">
// //                         <img
// //                           src={`http://localhost:5001/api/product/product-photo/${product._id}`}
// //                           alt={product.name}
// //                           className="card-img-top"
// //                           style={{ height: "420px", objectFit: "cover" }}
// //                         />
// //                         <div className="card-body d-flex flex-column text-center">
// //                           <h5 className="card-title">{product.name}</h5>
// //                           <p className="card-text">${product.price}</p>
// //                           <div className="mt-auto">
// //                             <button
// //                               className="btn btn-info w-100"
// //                               onClick={() => navigate(`/product/${product.slug}`)}
// //                             >
// //                               View Details
// //                             </button>
// //                             <button
// //                               className="btn btn-success w-100 mt-2"
// //                               onClick={() => handleAddToCart(product)}
// //                             >
// //                               Add to Cart
// //                             </button>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <p>No products available.</p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ) : (
// //         <div className="text-center mt-5">
// //           <h1>Welcome to Our E-commerce App!</h1>
// //           <p>
// //             Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to access
// //             more features.
// //           </p>
// //         </div>
// //       )}
// //     </Layout>
// //   );
// // };

// // export default HomePage;



// // import React, { useState, useEffect } from "react";
// // import Layout from "../components/layout/layout";
// // import { useAuth } from "../context/authContext";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { useCart } from "../context/cart"; // Correctly import the useCart hook
// // import img from "../images/c6.jpg";

// // const HomePage = () => {
// //   const { user } = useAuth();
// //   const { cart, setCart } = useCart(); // Destructure cart and setCart from useCart
// //   const [products, setProducts] = useState([]);
// //   const [successMessage, setSuccessMessage] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   // Load cart from localStorage when the component mounts
// //   useEffect(() => {
// //     const storedCart = JSON.parse(localStorage.getItem("cart"));
// //     if (storedCart) {
// //       setCart(storedCart);
// //     }
// //   }, [setCart]);

// //   // Save cart to localStorage whenever it changes
// //   useEffect(() => {
// //     localStorage.setItem("cart", JSON.stringify(cart));
// //   }, [cart]);

// //   // Fetch all products
// //   const getAllProducts = async () => {
// //     try {
// //       setLoading(true);
// //       const { data } = await axios.get("http://localhost:5001/api/product/get-product");
// //       setProducts(data.products);
// //     } catch (error) {
// //       console.error(error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Initialize products on component mount
// //   useEffect(() => {
// //     if (user) {
// //       getAllProducts();
// //     }
// //   }, [user]);

// //   // Handle adding a product to the cart
// //   const handleAddToCart = (product) => {
// //     const isProductInCart = cart.some((item) => item._id === product._id);

// //     if (!isProductInCart) {
// //       const updatedCart = [...cart, product];
// //       setCart(updatedCart); // Updates the state and triggers the localStorage sync
// //       setSuccessMessage(`${product.name} added to cart!`);
// //     } else {
// //       setSuccessMessage(`${product.name} is already in the cart!`);
// //     }

// //     setTimeout(() => setSuccessMessage(""), 3000);
// //   };

// //   // Redirect to CartPage after adding an item
// //   const handleGoToCart = () => {
// //     navigate('/cart'); // Navigate to the CartPage
// //   };

// //   return (
// //     <Layout>
// //       {user ? (
// //         <div className="container-fluid">
// //           {/* Carousel Section */}
// //           <div id="welcomeCarousel" className="carousel slide" data-bs-ride="carousel">
// //             <div
// //               className="carousel-inner"
// //               style={{
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 height: "400px",
// //                 background: `url(${img}) no-repeat center center`,
// //                 backgroundSize: "cover",
// //               }}
// //             >
// //               <div className="carousel-item active text-center">
// //                 <div>
// //                   <h1 style={{ color: "#fff" }}>Welcome, {user.name || "User"}!</h1>
// //                   <p style={{ color: "#fff" }}>You are logged in. Enjoy browsing our store!</p>
// //                   {user.isAdmin ? (
// //                     <Link to="/admin/dashboard">
// //                       <button className="btn btn-primary mt-3">Go to Admin Dashboard</button>
// //                     </Link>
// //                   ) : (
// //                     <Link to="/user/dashboard">
// //                       <button className="btn btn-primary mt-3">Go to User Dashboard</button>
// //                     </Link>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Success Message */}
// //           {successMessage && (
// //             <div className="alert alert-success text-center mt-3">{successMessage}</div>
// //           )}

// //           {/* Product Section */}
// //           <div className="row mt-3">
// //             <div className="col-md-12">
// //               <h2 className="text-center">Shop by Your Choice</h2>
// //               <div className="row justify-content-center">
// //                 {loading ? (
// //                   <p>Loading products...</p>
// //                 ) : products.length > 0 ? (
// //                   products.map((product) => (
// //                     <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
// //                       <div className="card h-100 shadow-sm border-0">
// //                         <img
// //                           src={`http://localhost:5001/api/product/product-photo/${product._id}`}
// //                           alt={product.name}
// //                           className="card-img-top"
// //                           style={{ height: "420px", objectFit: "cover" }}
// //                         />
// //                         <div className="card-body d-flex flex-column text-center">
// //                           <h5 className="card-title">{product.name}</h5>
// //                           <p className="card-text">${product.price}</p>
// //                           <div className="mt-auto">
// //                             <button
// //                               className="btn btn-info w-100"
// //                               onClick={() => navigate(`/product/${product.slug}`)}
// //                             >
// //                               View Details
// //                             </button>
// //                             <button
// //                               className="btn btn-success w-100 mt-2"
// //                               onClick={() => handleAddToCart(product)}
// //                             >
// //                               Add to Cart
// //                             </button>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <p>No products available.</p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Go to Cart Button */}
// //           <button className="btn btn-primary mt-4" onClick={handleGoToCart}>
// //             Go to Cart
// //           </button>
// //         </div>
// //       ) : (
// //         <div className="text-center mt-5">
// //           <h1>Welcome to Our E-commerce App!</h1>
// //           <p>
// //             Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to access
// //             more features.
// //           </p>
// //         </div>
// //       )}
// //     </Layout>
// //   );
// // };

// // export default HomePage;



// // import React, { useState, useEffect } from "react";
// // import Layout from "./../components/layout/layout";
// // import { useAuth } from "../context/authContext";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { useCart } from "../context/cart";
// // import img from "../images/c6.jpg";

// // const HomePage = () => {
// //   const { user, logout } = useAuth();
// //   const { cart, setCart } = useCart();
// //   const [products, setProducts] = useState([]);
// //   const [successMessage, setSuccessMessage] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   // Fetch the cart from the backend when the component mounts
// //   useEffect(() => {
// //     if (user) {
// //       const fetchCart = async () => {
// //         try {
// //           const response = await axios.get("http://localhost:5001/api/cart", {
// //             headers: {
// //               Authorization: `Bearer ${localStorage.getItem("token")}`, // Auth token for authenticated request
// //             },
// //           });
// //           setCart(response.data.items); // Update the cart state
// //         } catch (error) {
// //           console.error("Error fetching cart", error);
// //         }
// //       };
// //       fetchCart();
// //     }
// //   }, [user, setCart]);

// //   // Fetch all products
// //   const getAllProducts = async () => {
// //     try {
// //       setLoading(true);
// //       const { data } = await axios.get("http://localhost:5001/api/product/get-product");
// //       setProducts(data.products);
// //     } catch (error) {
// //       console.error(error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Initialize products on component mount
// //   useEffect(() => {
// //     if (user) {
// //       getAllProducts();
// //     }
// //   }, [user]);

// //   // Handle adding a product to the cart
// //   const handleAddToCart = async (product) => {
// //     const isProductInCart = cart.some((item) => item._id === product._id);

// //     if (!isProductInCart) {
// //       const updatedCart = [...cart, product];
// //       setCart(updatedCart); // Update state
// //       // Sync with backend
// //       try {
// //         await axios.post(
// //           "http://localhost:5001/api/cart/add-to-cart",
// //           { productId: product._id },
// //           {
// //             headers: {
// //               Authorization: `Bearer ${localStorage.getItem("token")}`, // Send token
// //             },
// //           }
// //         );
// //         setSuccessMessage(`${product.name} added to cart!`);
// //       } catch (error) {
// //         console.error("Error adding to cart", error);
// //         setSuccessMessage("Failed to add to cart");
// //       }
// //     } else {
// //       setSuccessMessage(`${product.name} is already in the cart!`);
// //     }

// //     setTimeout(() => setSuccessMessage(""), 3000);
// //   };

// //   // Handle user logout
// //   const handleLogout = () => {
// //     logout(); // Call logout function from context
// //     setCart([]); // Clear cart state
// //     localStorage.removeItem("cart"); // Remove cart from localStorage
// //     localStorage.removeItem("token"); // Remove token from localStorage
// //     navigate("/"); // Redirect to homepage
// //   };

// //   return (
// //     <Layout>
// //       {user ? (
// //         <div className="container-fluid">
// //           {/* Carousel Section */}
// //           <div id="welcomeCarousel" className="carousel slide" data-bs-ride="carousel">
// //             <div
// //               className="carousel-inner"
// //               style={{
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 height: "400px",
// //                 background: `url(${img}) no-repeat center center`,
// //                 backgroundSize: "cover",
// //               }}
// //             >
// //               <div className="carousel-item active text-center">
// //                 <div>
// //                   <h1 style={{ color: "#fff" }}>Welcome, {user.name || "User"}!</h1>
// //                   <p style={{ color: "#fff" }}>You are logged in. Enjoy browsing our store!</p>
// //                   {user.isAdmin ? (
// //                     <Link to="/admin/dashboard">
// //                       <button className="btn btn-primary mt-3">Go to Admin Dashboard</button>
// //                     </Link>
// //                   ) : (
// //                     <Link to="/user/dashboard">
// //                       <button className="btn btn-primary mt-3">Go to User Dashboard</button>
// //                     </Link>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Success Message */}
// //           {successMessage && (
// //             <div className="alert alert-success text-center mt-3">{successMessage}</div>
// //           )}

// //           {/* Product Section */}
// //           <div className="row mt-3">
// //             <div className="col-md-12">
// //               <h2 className="text-center">Shop by Your Choice</h2>
// //               <div className="row justify-content-center">
// //                 {loading ? (
// //                   <p>Loading products...</p>
// //                 ) : products.length > 0 ? (
// //                   products.map((product) => (
// //                     <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
// //                       <div className="card h-100 shadow-sm border-0">
// //                         <img
// //                           src={`http://localhost:5001/api/product/product-photo/${product._id}`}
// //                           alt={product.name}
// //                           className="card-img-top"
// //                           style={{ height: "420px", objectFit: "cover" }}
// //                         />
// //                         <div className="card-body d-flex flex-column text-center">
// //                           <h5 className="card-title">{product.name}</h5>
// //                           <p className="card-text">${product.price}</p>
// //                           <div className="mt-auto">
// //                             <button
// //                               className="btn btn-info w-100"
// //                               onClick={() => navigate(`/product/${product.slug}`)}
// //                             >
// //                               View Details
// //                             </button>
// //                             <button
// //                               className="btn btn-success w-100 mt-2"
// //                               onClick={() => handleAddToCart(product)}
// //                             >
// //                               Add to Cart
// //                             </button>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <p>No products available.</p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Logout Button */}
// //           <button className="btn btn-danger mt-3" onClick={handleLogout}>
// //             Logout
// //           </button>
// //         </div>
// //       ) : (
// //         <div className="text-center mt-5">
// //           <h1>Welcome to Our E-commerce App!</h1>
// //           <p>
// //             Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to access
// //             more features.
// //           </p>
// //         </div>
// //       )}
// //     </Layout>
// //   );
// // };

// // export default HomePage;




// import React, { useState, useEffect } from "react";
// import Layout from "./../components/layout/layout";
// import { useAuth } from "../context/authContext";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useCart } from "../context/cart";
// import img from "../images/c6.jpg";

// const HomePage = () => {
//   const { user } = useAuth();
//   const [cart, setCart] = useCart();
//   const [products, setProducts] = useState([]);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Load cart from localStorage when the component mounts
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart"));
//     if (storedCart) {
//       setCart(storedCart);
//     }
//   }, [setCart]);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // Fetch all products
//   const getAllProducts = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.get("http://localhost:5001/api/product/get-product");
//       setProducts(data.products);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Initialize products on component mount
//   useEffect(() => {
//     if (user) {
//       getAllProducts();
//     }
//   }, [user]);

//   // Handle adding a product to the cart
//   const handleAddToCart = (product) => {
//     const isProductInCart = cart.some((item) => item._id === product._id);

//     if (!isProductInCart) {
//       const updatedCart = [...cart, product];
//       setCart(updatedCart); // Updates the state and triggers the localStorage sync
//       setSuccessMessage(`${product.name} added to cart!`);
//     } else {
//       setSuccessMessage(`${product.name} is already in the cart!`);
//     }

//     setTimeout(() => setSuccessMessage(""), 3000);
//   };

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
//                 height: "400px",
//                 background: `url(${img}) no-repeat center center`,
//                 backgroundSize: "cover",
//               }}
//             >
//               <div className="carousel-item active text-center">
//                 <div>
//                   <h1 style={{ color: "#fff" }}>Welcome, {user.name || "User"}!</h1>
//                   <p style={{ color: "#fff" }}>You are logged in. Enjoy browsing our store!</p>
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

//           {/* Success Message */}
//           {successMessage && (
//             <div className="alert alert-success text-center mt-3">{successMessage}</div>
//           )}

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
//                           style={{ height: "420px", objectFit: "cover" }}
//                         />
//                         <div className="card-body d-flex flex-column text-center">
//                           <h5 className="card-title">{product.name}</h5>
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
//                               onClick={() => handleAddToCart(product)}
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
//         <div className="text-center mt-5">
//           <h1>Welcome to Our E-commerce App!</h1>
//           <p>
//             Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to access
//             more features.
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
// import img from "../images/c6.jpg";

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
//                 background: `url(${img}) `,
//                 backgroundSize: "cover",
//               }}
//             >
//               <div className="carousel-item active text-center">
//                 <div
//                   // style={{
//                   //   marginTop: "50px",
//                   //   color: "#fff",
//                   //   background: "rgba(0,0,0,0.5)",
//                   //   padding: "20px",
//                   //   borderRadius: "10px", // Optional: To give a rounded effect to the content
//                   // }}
//                 >
//                   <h1 style={{color:"#fff"}}>Welcome, {user.name || "User"}!</h1>
//                   <p style={{color:"#fff"}}>You are logged in. Enjoy browsing our store!</p>
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
//                           style={{ height: "420px", objectFit: "cover" }}
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
  const [message, setMessage] = useState(""); // New state for messages
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
      console.error("Error fetching products:", error);
      setMessage("Error fetching products. Please try again later.");
    }
  };

  // Add to cart
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
        { userId: user._id, productId, quantity: 1 },  // Include userId in the body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Add to Cart Response:', response);  // Log the response
      if (response.status === 200) {
        setMessage(`${productName} has been added to the cart successfully!`);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      setMessage("Failed to add item to cart. Please try again.");
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
                height: "400px",
                background: `url(${img})`,
                backgroundSize: "",
              }}
            >
              <div className="carousel-item active text-center">
                <h1 style={{ color: "#fff" }}>Welcome, {user.name || "User"}!</h1>
                <p style={{ color: "#fff" }}>You are logged in. Enjoy browsing our store!</p>
                {user.isAdmin ? (
                  <Link to="/admin/dashboard">
                    <button className="btn btn-success mt-3">Go to Admin Dashboard</button>
                  </Link>
                ) : (
                  <Link to="/user/dashboard">
                    <button className="btn btn-success mt-3">Go to Your Dashboard</button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Message Section */}
          {message && (
            <div className="alert alert-info" role="alert">
              {message}
            </div>
          )}

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
                            <button
                              className="btn btn-success w-100 mt-2"
                              onClick={() => addToCart(product._id, product.name)} // Pass product name here
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
