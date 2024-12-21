// // // // // // import React from 'react'
// // // // // // import Layout from '../components/layout/layout'
// // // // // // const CartPage = () => {
// // // // // //   return (
// // // // // //     <Layout>
// // // // // //       <h1>your cart</h1>
// // // // // //       </Layout>
// // // // // //   )
// // // // // // }

// // // // // // export default CartPage


// // // // import React from "react";
// // // // import Layout from "../components/layout/layout"; // Updated path to Layout
// // // // import { useCart } from "../context/cart"; // Import cart context
// // // // import { useAuth } from "../context/authContext"; // Import auth context
// // // // import { useNavigate } from "react-router-dom";

// // // // const CartPage = () => {
// // // //   const auth = useAuth(); // Destructure auth state
// // // //   const [cart, setCart] = useCart(); // Destructure cart state
// // // //   const navigate = useNavigate();

// // // //   // Calculate total price
// // // //   const totalPrice = () => {
// // // //     try {
// // // //       let total = 0;
// // // //       cart?.forEach((item) => {
// // // //         total += item.price;
// // // //       });
// // // //       return total.toLocaleString("en-US", {
// // // //         style: "currency",
// // // //         currency: "USD",
// // // //       });
// // // //     } catch (error) {
// // // //       console.log(error);
// // // //       return "$0.00";
// // // //     }
// // // //   };

// // // //   // Remove item from cart
// // // //   const removeCartItem = (pid) => {
// // // //     try {
// // // //       const updatedCart = cart.filter((item) => item._id !== pid);
// // // //       setCart(updatedCart);
// // // //       localStorage.setItem("cart", JSON.stringify(updatedCart));
// // // //     } catch (error) {
// // // //       console.log(error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Layout>
// // // //       <div className="container">
// // // //         <div className="row">
// // // //           <div className="col-md-12">
// // // //             <h1 className="text-center bg-light p-2 mb-1">
// // // //               {`Explore Your World  `}
// // // //             </h1>
// // // //             <h4 className="text-center">
// // // //               {cart?.length
// // // //                 ? `You Have ${cart.length} items in your cart`
// // // //                 : "Your Cart Is Empty"}
// // // //             </h4>
// // // //           </div>
// // // //         </div>
// // // //         <div className="row">
// // // //           {/* Product List */}
// // // //           <div className="col-md-8">
// // // //             {cart?.map((product) => (
// // // //               <div key={product._id} className="row mb-2 p-3 card flex-row">
// // // //                 <div className="col-md-4">
// // // //                   <img
// // // //                     src={`http://localhost:5001/api/product/product-photo/${product._id}`}
// // // //                     alt={product.name}
// // // //                     className="card-img-top"
// // // //                     width="100px"
// // // //                     height="100px"
// // // //                   />
// // // //                 </div>
// // // //                 <div className="col-md-8">
// // // //                   <p>{product.name}</p>
// // // //                   <p>{product.description.substring(0, 30)}...</p>
// // // //                   <p>Price: {product.price}</p>
// // // //                   <button
// // // //                     className="btn btn-danger"
// // // //                     onClick={() => removeCartItem(product._id)}
// // // //                   >
// // // //                     Remove
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           {/* Cart Summary */}
// // // //           <div className="col-md-4 text-center">
// // // //             <h2>Cart Summary</h2>
// // // //             <p>Total | Checkout | Payment</p>
// // // //             <hr />
// // // //             <h4>Total: {totalPrice()}</h4>

// // // //             {auth?.user?.address ? (
// // // //               <div className="mb-3">
// // // //                 <h4>Current Address</h4>
// // // //                 <h5>{auth.user.address}</h5>
// // // //                 <button
// // // //                   className="btn btn-outline-warning"
// // // //                   onClick={() => navigate("user/dashboard/profile")}
// // // //                 >
// // // //                   Update Address
// // // //                 </button>
// // // //               </div>
// // // //             ) : (
// // // //               <div className="mb-3">
// // // //                 {auth?.token ? (
// // // //                   <button
// // // //                     className="btn btn-outline-warning"
// // // //                     onClick={() => navigate("user/dashboard/profile")}
// // // //                   >
// // // //                     Update Address
// // // //                   </button>
// // // //                 ) : (
// // // //                   <button
// // // //                     className="btn btn-outline-warning"
// // // //                     onClick={() =>
// // // //                       navigate("/login", {
// // // //                         state: { from: "/cart" }, // Redirect back to cart after login
// // // //                       })
// // // //                     }
// // // //                   >
// // // //                     Please Login to Checkout
// // // //                   </button>
// // // //                 )}
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </Layout>
// // // //   );
// // // // };

// // // // export default CartPage;


// import React from "react";
// import Layout from "../components/layout/layout";
// import { useCart } from "../context/cart";
// import { useAuth } from "../context/authContext";
// import { useNavigate } from "react-router-dom";

// const CartPage = () => {
//   const { user } = useAuth(); // Access user data from AuthContext
//   const [cart, setCart] = useCart(); // Access cart data from CartContext
//   const navigate = useNavigate();

//   // Calculate the total price of items in the cart
//   const totalPrice = () => {
//     return cart
//       .reduce((total, item) => total + item.price, 0)
//       .toLocaleString("en-US", {
//         style: "currency",
//         currency: "USD",
//       });
//   };

//   // Remove an item from the cart
//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter((item) => item._id !== productId);
//     setCart(updatedCart);
//   };

//   return (
//     <Layout>
//       <div className="container mt-4">
//         <h1 className="text-center">Your Cart</h1>
//         <div className="row">
//           {/* Cart Items */}
//           <div className="col-md-8">
//             {cart.length > 0 ? (
//               cart.map((item) => (
//                 <div
//                   key={item._id}
//                   className="card mb-3 p-3 d-flex flex-row align-items-center"
//                 >
//                   <img
//                     src={`http://localhost:5001/api/product/product-photo/${item._id}`}
//                     alt={item.name}
//                     style={{ width: "100px", height: "100px" }}
//                     className="me-3"
//                   />
//                   <div className="flex-grow-1">
//                     <h5>{item.name}</h5>
//                     <p>{item.description.substring(0, 30)}...</p>
//                     <p>Price: ${item.price}</p>
//                   </div>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => removeFromCart(item._id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <h4 className="text-center mt-4">Your cart is empty</h4>
//             )}
//           </div>

//           {/* Cart Summary */}
//           <div className="col-md-4">
//             <div className="card p-4">
//               <h2>Cart Summary</h2>
//               <hr />
//               <h4>Total: {totalPrice()}</h4>
//               {user ? (
//                 user.address ? (
//                   <div className="mt-3">
//                     <h5>Shipping Address</h5>
//                     <p>{user.address}</p>
//                     <button
//                       className="btn btn-primary mt-2"
//                       onClick={() => navigate("/checkout")}
//                     >
//                       Proceed to Checkout
//                     </button>
//                     <button
//                       className="btn btn-outline-secondary mt-2"
//                       onClick={() => navigate("/user/dashboard/profile")}
//                     >
//                       Update Address
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     className="btn btn-warning mt-3"
//                     onClick={() => navigate("/user/dashboard/profile")}
//                   >
//                     Add Address to Checkout
//                   </button>
//                 )
//               ) : (
//                 <button
//                   className="btn btn-warning mt-3"
//                   onClick={() =>
//                     navigate("/login", { state: { from: "/cart" } })
//                   }
//                 >
//                   Login to Checkout
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//      </Layout>
//   );
// };

// export default CartPage;


// import React from "react";
// import Layout from "../components/layout/layout";
// import { useCart } from "../context/cart";
// import { useAuth } from "../context/authContext";
// import { useNavigate } from "react-router-dom";

// const CartPage = () => {
//   const { user } = useAuth(); // Access user data from AuthContext
//   const [cart, setCart] = useCart(); // Access cart data from CartContext
//   const navigate = useNavigate();

//   // Calculate the total price of items in the cart
//   const totalPrice = () => {
//     return cart
//       .reduce((total, item) => total + item.price, 0)
//       .toLocaleString("en-US", {
//         style: "currency",
//         currency: "USD",
//       });
//   };

//   // Remove an item from the cart
//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter((item) => item._id !== productId);
//     setCart(updatedCart);
//   };

//   return (
//     <Layout>
//       <div className="container mt-4">
//         <h1 className="text-center">
//           {user ? `Hello, ${user.name}!` : "Your Cart"}
//         </h1>
//         <p className="text-center text-muted">
//           {cart.length > 0
//             ? `${cart.length} item${cart.length > 1 ? "s" : ""} in your cart`
//             : "Your cart is empty"}
//         </p>
//         <div className="row">
//           {/* Cart Items */}
//           <div className="col-md-8">
//             {cart.length > 0 ? (
//               cart.map((item) => (
//                 <div
//                   key={item._id}
//                   className="card mb-3 p-3 d-flex flex-row align-items-center"
//                 >
//                   <img
//                     src={`http://localhost:5001/api/product/product-photo/${item._id}`}
//                     alt={item.name}
//                     style={{ width: "100px", height: "100px" }}
//                     className="me-3"
//                   />
//                   <div className="flex-grow-1">
//                     <h5>{item.name}</h5>
//                     <p>{item.description.substring(0, 30)}...</p>
//                     <p>Price: ${item.price}</p>
//                   </div>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => removeFromCart(item._id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <h4 className="text-center mt-4">Your cart is empty</h4>
//             )}
//           </div>

//           {/* Cart Summary */}
//           <div className="col-md-4">
//             <div className="card p-4">
//               <h2>Cart Summary</h2>
//               <hr />
//               <h4>Total: {totalPrice()}</h4>
//               {user ? (
//                 user.address ? (
//                   <div className="mt-3">
//                     <h5>Shipping Address</h5>
//                     <p>{user.address}</p>
//                     <button
//                       className="btn btn-primary mt-2"
//                       onClick={() => navigate("/checkout")}
//                     >
//                       Proceed to Checkout
//                     </button>
//                     <button
//                       className="btn btn-outline-secondary mt-2"
//                       onClick={() => navigate("/user/dashboard/profile")}
//                     >
//                       Update Address
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     className="btn btn-warning mt-3"
//                     onClick={() => navigate("/user/dashboard/profile")}
//                   >
//                     Add Address to Checkout
//                   </button>
//                 )
//               ) : (
//                 <button
//                   className="btn btn-warning mt-3"
//                   onClick={() =>
//                     navigate("/login", { state: { from: "/cart" } })
//                   }
//                 >
//                   Login to Checkout
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CartPage;

// // components/CartPage.js
// import React, { useState, useEffect } from 'react';
// import { useCart } from '../context/cart'; // Import the Cart context
// import axios from 'axios'; // Axios to make API calls
// import { useAuth } from '../context/authContext'; // Assuming you have an Auth context for managing the user's authentication state
// import Layout from '../components/layout/layout';
// import { useNavigate } from 'react-router-dom';

// const CartPage = () => {
//   const { cart, setCart } = useCart(); // Access cart state from context
//   const { user } = useAuth(); // Access user data from AuthContext
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Fetch cart from the backend when user logs in
//   useEffect(() => {
//     if (user) {
//       const fetchCart = async () => {
//         try {
//           setLoading(true);
//           const token = localStorage.getItem('token'); // Get the auth token from localStorage
//           const response = await axios.get('http://localhost:5001/api/cart', {
//             headers: {
//               Authorization: `Bearer ${token}`, // Include the JWT token in headers
//             },
//           });
//           setCart(response.data.items); // Set cart data from backend to context
//         } catch (error) {
//           setError('Failed to fetch cart');
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchCart();
//     }
//   }, [user, setCart]);

//   // Add item to cart
//   const addToCart = async (productId, quantity) => {
//     if (!user) {
//       alert('You need to be logged in to add items to the cart.');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token'); // Get auth token from localStorage

//       // POST request to add item to the cart
//       const response = await axios.post(
//         'http://localhost:5001/api/cart/add-to-cart',
//         { productId, quantity },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include token for authentication
//           },
//         }
//       );

//       setCart(response.data.items); // Update cart data from the response
//     } catch (error) {
//       setError('Failed to add item to the cart');
//     }
//   };

//   // Remove item from cart
//   const removeFromCart = async (productId) => {
//     if (!user) {
//       alert('You need to be logged in to remove items from the cart.');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token'); // Get auth token from localStorage

//       // DELETE request to remove item from the cart
//       const response = await axios.delete(
//         `http://localhost:5001/api/cart/remove/${productId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include token for authentication
//           },
//         }
//       );

//       setCart(response.data.items); // Update cart data from the response
//     } catch (error) {
//       setError('Failed to remove item from the cart');
//     }
//   };

//   // Calculate the total price of items in the cart
//   const calculateTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     });
//   };

//   return (
//     <Layout>
//       <div className="cart-page">
//         <h1>Your Cart</h1>

//         {/* Error and loading handling */}
//         {error && <p className="text-danger">{error}</p>}
//         {loading && <p>Loading cart...</p>}

//         {/* Cart content */}
//         <div>
//           {cart.length > 0 ? (
//             cart.map((item) => (
//               <div key={item.productId + item.quantity} className="cart-item">
//                 <img src={`http://localhost:5001/api/product/photo/${item.productId}`} alt={item.name} />
//                 <div>
//                   <p>{item.name}</p>
//                   <p>Price: ${item.price}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <button onClick={() => removeFromCart(item.productId)}>Remove</button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>Your cart is empty</p>
//           )}
//         </div>

//         {/* Cart summary */}
//         <div className="cart-summary">
//           <h3>Total: {calculateTotalPrice()}</h3>
//           <button onClick={() => navigate('/checkout')} disabled={cart.length === 0}>
//             Proceed to Checkout
//           </button>
//         </div>

//         {/* Example of adding a product */}
//         <button onClick={() => addToCart('product-id-here', 1)}>Add Item to Cart</button>
//       </div>
//     </Layout>
//   );
// };

// export default CartPage;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/authContext"; // Assuming you have an auth context
// import Layout from "../components/layout/layout";

// const CartPage = () => {
//   const { user } = useAuth();  // Assuming user info is available in context
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(null);
//   const navigate = useNavigate();

//   // Fetch cart items when component mounts
//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5001/api/cart/${user._id}`);
//         setCartItems(response.data.cart ? response.data.cart.items : []);
//         setLoading(false);
//       } catch (err) {
//         setLoading(false);
//         setMessage("Failed to fetch cart items.");
//         console.error(err);
//       }
//     };

//     if (user) {
//       fetchCartItems();
//     } else {
//       setMessage("Please log in to view your cart.");
//     }
//   }, [user]);

//   // Remove product from cart
//   const handleRemoveFromCart = async (productId) => {
//     try {
//       const response = await axios.delete("http://localhost:5001/api/cart/remove", {
//         data: { userId: user._id, productId },
//       });
//       setCartItems(response.data.cart.items);
//     } catch (err) {
//       setMessage("Failed to remove product from cart.");
//       console.error(err);
//     }
//   };

//   // Calculate total price
//   const calculateTotalPrice = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.productId.price * item.quantity,
//       0
//     ).toLocaleString("en-US", { style: "currency", currency: "USD" });
//   };

//   return (
//     <Layout>
//       <div className="cart-page">
//         <h1>Your Cart</h1>

//         {/* Message Section */}
//         {message && <div className="alert alert-info">{message}</div>}

//         {/* Loading Indicator */}
//         {loading && <p>Loading cart items...</p>}

//         {/* Cart Items */}
//         {cartItems.length > 0 ? (
//           <div>
//             {cartItems.map((item) => (
//               <div key={item.productId._id} className="cart-item">
//                 <img
//                   src={`http://localhost:5001/api/product/photo/${item.productId._id}`}
//                   alt={item.productId.name}
//                   className="cart-item-photo"
//                   style={{ width: "100px", height: "100px", objectFit: "cover" }}
//                 />
//                 <div>
//                   <p>{item.productId.name}</p>
//                   <p>Price: ${item.productId.price}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <button onClick={() => handleRemoveFromCart(item.productId._id)}>
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>Your cart is empty.</p>
//         )}

//         {/* Cart Summary */}
//         {cartItems.length > 0 && (
//           <div className="cart-summary">
//             <h3>Total: {calculateTotalPrice()}</h3>
//             <button
//               onClick={() => navigate("/checkout")}
//               disabled={cartItems.length === 0}
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default CartPage;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext"; // Assuming you have an auth context
import Layout from "../components/layout/layout";

const CartPage = () => {
  const { user } = useAuth(); // Assuming user info is available in context
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  // Fetch cart items when component mounts
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5001/api/cart/${user._id}`);
        setCartItems(response.data.cart ? response.data.cart.items : []);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setMessage("Failed to fetch cart items.");
        console.error(err);
      }
    };

    if (user) {
      fetchCartItems();
    } else {
      setMessage("Please log in to view your cart.");
    }
  }, [user]);

  // Remove product from cart
  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await axios.delete("http://localhost:5001/api/cart/remove", {
        data: { userId: user._id, productId },
      });
      setCartItems(response.data.cart.items);
    } catch (err) {
      setMessage("Failed to remove product from cart.");
      console.error(err);
    }
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.productId.price * item.quantity,
      0
    ).toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  return (
    <Layout>
      <div className="container mt-5">
        {/* User Greeting */}
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {`Hello ${user?.name || "Guest"}`}
            </h1>
            <h4 className="text-center">
              {cartItems.length
                ? `You Have ${cartItems.length} items in your cart ${
                    user?.token ? "" : "please login to checkout"
                  }`
                : "Your Cart Is Empty"}
            </h4>
          </div>
        </div>

        {/* Cart Items */}
        <div className="row">
          <div className="col-md-8">
            {cartItems.map((item) => (
              <div key={item.productId._id} className="row mb-2 p-3 card flex-row">
                <div className="col-md-4">
                  <img
                    src={`http://localhost:5001/api/product/product-photo/${item.productId._id}`}
                    className="card-img-top"
                    alt={item.productId.name}
                    width="100px"
                    height="100px"
                    onError={(e) => (e.target.src = "/path/to/fallback-image.jpg")} // Fallback image
                  />
                </div>
                <div className="col-md-8">
                  <p>{item.productId.name}</p>
                  <p>{item.productId.description?.substring(0, 30)}</p>
                  <p>Price: ${item.productId.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromCart(item.productId._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="col-md-4 text-center">
            <h2>Cart Summary</h2>
            <p>Total | Checkout | Payment</p>
            <hr />
            <h4>Total: {calculateTotalPrice()}</h4>
            {user?.address ? (
              <>
                <div className="mb-3">
                  <h4>Current Address</h4>
                  <h5>{user?.address}</h5>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => navigate("/user/dashboard/profile")}
                  >
                    Update Address
                  </button>
                </div>
              </>
            ) : (
              <div className="mb-3">
                {user?.token ? (
                  <button
                    className="btn btn-outline-success"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-success"
                    onClick={() =>
                      navigate("/login", {
                        state: "/cart",
                      })
                    }
                  >
                    Please Login to checkout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
