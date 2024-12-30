// // import React from "react";
// // import UserMenu from "../components/layout/userMenu";
// // import Layout from "../components/Layout/Layout";
// // const Orders = () => {
// //   return (
// //     <Layout title={"Your Orders"}>
// //       <div className="container-flui p-3 m-3">
// //         <div className="row">
// //           <div className="col-md-3">
// //             <UserMenu />
// //           </div>
// //           <div className="col-md-9">
// //             <h1>All Orders</h1>
// //           </div>
// //         </div>
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default Orders;




// // import React, { useState, useEffect } from "react";
// // import UserMenu from "../components/layout/userMenu";
// // import Layout from "../components/Layout/Layout";
// // import axios from "axios";
// // import { useAuth } from "../context/authContext"; // Import the auth context

// // const Orders = () => {
// //   const { user } = useAuth(); // Fetch user details from the auth context
// //   const [orders, setOrders] = useState([]); // State to store user orders
// //   const [loading, setLoading] = useState(false); // Loading state
// //   const [error, setError] = useState(""); // Error message

// //   // Function to fetch orders
// //   const fetchOrders = async () => {
// //     setLoading(true);
// //     setError(""); // Reset error message

// //     // Fetch token from localStorage
// //     const token = localStorage.getItem("token"); // Get token from localStorage

// //     // Check if user and token are available
// //     if (!user || !token) {
// //       setError("You need to log in to view your orders.");
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       // Fetch orders from backend
// //       const response = await axios.get(`http://localhost:5001/api/orders/${user._id}`, {
// //         headers: {
// //           Authorization: `Bearer ${token}`, // Pass the token in headers
// //         },
// //       });

// //       if (response.data.success) {
// //         setOrders(response.data.orders); // Set orders data
// //       } else {
// //         setError("Failed to fetch orders.");
// //       }
// //     } catch (err) {
// //       if (err.response?.status === 401) {
// //         setError("Session expired. Please log in again.");
// //       } else {
// //         setError("An error occurred while fetching orders.");
// //       }
// //       console.error(err);
// //     } finally {
// //       setLoading(false); // Hide loading state
// //     }
// //   };

// //   useEffect(() => {
// //     if (user) {
// //       fetchOrders(); // Fetch orders when the component loads
// //     }
// //   }, [user]); // Fetch orders again if the user changes

// //   return (
// //     <Layout title="Your Orders">
// //       <div className="container-fluid p-3 m-3">
// //         <div className="row">
// //           <div className="col-md-3">
// //             <UserMenu />
// //           </div>
// //           <div className="col-md-9">
// //             <h1>All Orders</h1>
// //             {loading ? (
// //               <p>Loading orders...</p>
// //             ) : error ? (
// //               <p className="text-danger">{error}</p>
// //             ) : orders.length > 0 ? (
// //               <div>
// //                 {orders.map((order, index) => (
// //                   <div key={index} className="card mb-3">
// //                     <div className="card-body">
// //                       <h5>Order #{order._id}</h5>
// //                       <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
// //                       <p><strong>Items:</strong></p>
// //                       <ul>
// //                         {order.items.map((item, idx) => (
// //                           <li key={idx}>
// //                             {item.productId.name} - {item.quantity} × ₹{item.productId.price}
// //                           </li>
// //                         ))}
// //                       </ul>
// //                       <p><strong>Total:</strong> ₹{order.totalPrice}</p>
// //                       <p><strong>Status:</strong> {order.status || "Pending"}</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             ) : (
// //               <p>No orders found.</p>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default Orders;



// import React, { useState, useEffect } from "react";
// import UserMenu from "../components/layout/userMenu";
// import Layout from "../components/Layout/Layout";
// import axios from "axios";
// import { useAuth } from "../context/authContext"; // Import the auth context

// const Orders = () => {
//   const { user } = useAuth(); // Fetch user details from the auth context
//   const [orders, setOrders] = useState([]); // State to store user orders
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(""); // Error message

//   // Function to fetch orders
//   const fetchOrders = async () => {
//     setLoading(true);
//     setError(""); // Reset error message

//     // Fetch token from localStorage
//     const token = localStorage.getItem("token"); // Get token from localStorage

//     // Check if user and token are available
//     if (!user || !token) {
//       setError("You need to log in to view your orders.");
//       setLoading(false);
//       return;
//     }

//     try {
//       // Fetch orders from backend
//       const response = await axios.get(`http://localhost:5001/api/orders/${user._id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Pass the token in headers
//         },
//       });

//       if (response.data.success) {
//         setOrders(response.data.orders); // Set orders data
//       } else {
//         setError("Failed to fetch orders.");
//       }
//     } catch (err) {
//       if (err.response?.status === 401) {
//         setError("Session expired. Please log in again.");
//       } else {
//         setError("An error occurred while fetching orders.");
//       }
//       console.error(err);
//     } finally {
//       setLoading(false); // Hide loading state
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       fetchOrders(); // Fetch orders when the component loads
//     }
//   }, [user]); // Fetch orders again if the user changes

//   return (
//     <Layout title="Your Orders">
//       <div className="container-fluid p-3 m-3">
//         <div className="row">
//           <div className="col-md-3">
//             <UserMenu />
//           </div>
//           <div className="col-md-9">
//             <h1>All Orders</h1>
//             {loading ? (
//               <p>Loading orders...</p>
//             ) : error ? (
//               <p className="text-danger">{error}</p>
//             ) : orders.length > 0 ? (
//               <div>
//                 {orders.map((order, index) => (
//                   <div key={index} className="card mb-3">
//                     <div className="card-body">
//                       <h5>Order #{order._id}</h5>
//                       <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
//                       <p><strong>Status:</strong> {order.status || "Pending"}</p>
                      
//                       <div className="row">
//                         {order.items.map((item, idx) => (
//                           <div key={idx} className="col-md-4 mb-3">
//                             <div className="card">
//                               <img 
//                                 src={`http://localhost:5001/api/product/product-photo/${item.productId._id}`} 
//                                 className="card-img-top" 
//                                 alt={item.productId.name} 
//                                 style={{ height: "200px", objectFit: "cover" }}
//                               />
//                               <div className="card-body">
//                                 <h5 className="card-title">{item.productId.name}</h5>
//                                 <p className="card-text">{item.productId.description.substring(0, 50)}...</p>
//                                 <p><strong>Price:</strong> ₹{item.productId.price}</p>
//                                 <p><strong>Quantity:</strong> {item.quantity}</p>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No orders found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Orders;


import React, { useState, useEffect } from "react";
import UserMenu from "../components/layout/userMenu";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../context/authContext"; // Import the auth context

const Orders = () => {
  const { user } = useAuth(); // Fetch user details from the auth context
  const [orders, setOrders] = useState([]); // State to store user orders
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message

  // Function to fetch orders
  const fetchOrders = async () => {
    setLoading(true);
    setError(""); // Reset error message

    // Fetch token from localStorage
    const token = localStorage.getItem("token"); // Get token from localStorage

    // Check if user and token are available
    if (!user || !token) {
      setError("You need to log in to view your orders.");
      setLoading(false);
      return;
    }

    try {
      // Fetch orders from backend
      const response = await axios.get(`http://localhost:5001/api/orders/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in headers
        },
      });

      if (response.data.success) {
        setOrders(response.data.orders); // Set orders data
      } else {
        setError("Failed to fetch orders.");
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setError("Session expired. Please log in again.");
      } else {
        setError("An error occurred while fetching orders.");
      }
      console.error(err);
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrders(); // Fetch orders when the component loads
    }
  }, [user]); // Fetch orders again if the user changes

  return (
    <Layout title="Your Orders">
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>All Orders</h1>
            {loading ? (
              <p>Loading orders...</p>
            ) : error ? (
              <p className="text-danger">{error}</p>
            ) : orders.length > 0 ? (
              <div>
                {orders.map((order, index) => {
                  // Calculate total price of the order
                  const totalOrderPrice = order.items.reduce((total, item) => total + item.productId.price * item.quantity, 0);
                  return (
                    <div key={index} className="card mb-3">
                      <div className="card-body">
                        <h5>Order #{order._id}</h5>
                        <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                        <p><strong>Status:</strong> {order.status || "Pending"}</p>
                        
                        <div className="row">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="col-md-4 mb-3">
                              <div className="card">
                                <img 
                                  src={`http://localhost:5001/api/product/product-photo/${item.productId._id}`} 
                                  className="card-img-top" 
                                  alt={item.productId.name} 
                                  style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                  <h5 className="card-title">{item.productId.name}</h5>
                                  <p className="card-text">{item.productId.description.substring(0, 50)}...</p>
                                  <p><strong>Price:</strong> ₹{item.productId.price}</p>
                                  <p><strong>Quantity:</strong> {item.quantity}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-3">
                          <h5><strong>Total Price: ₹{totalOrderPrice}</strong></h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>No orders found.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
