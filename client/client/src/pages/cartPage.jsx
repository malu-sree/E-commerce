



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/authContext"; // Assuming you have an auth context
// import Layout from "../components/layout/layout";

// const CartPage = () => {
//   const { user } = useAuth(); // Assuming user info is available in context
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
//       <div className="container mt-5">
//         {/* User Greeting */}
//         <div className="row">
//           <div className="col-md-12">
//             <h1 className="text-center bg-light p-2 mb-1">
//               {`Hello ${user?.name || "Guest"}`}
//             </h1>
//             <h4 className="text-center">
//               {cartItems.length
//                 ? `You Have ${cartItems.length} items in your cart ${
//                     user?.token ? "" : "please login to checkout"
//                   }`
//                 : "Your Cart Is Empty"}
//             </h4>
//           </div>
//         </div>

//         {/* Cart Items */}
//         <div className="row">
//           <div className="col-md-8">
//             {cartItems.map((item) => (
//               <div key={item.productId._id} className="row mb-2 p-3 card flex-row">
//                 <div className="col-md-4">
//                   <img
//                     src={`http://localhost:5001/api/product/product-photo/${item.productId._id}`}
//                     className="card-img-top"
//                     alt={item.productId.name}
//                     width="100px"
//                     height="100px"
//                     onError={(e) => (e.target.src = "/path/to/fallback-image.jpg")} // Fallback image
//                   />
//                 </div>
//                 <div className="col-md-8">
//                   <p>{item.productId.name}</p>
//                   <p>{item.productId.description?.substring(0, 30)}</p>
//                   <p>Price: ${item.productId.price}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => handleRemoveFromCart(item.productId._id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Cart Summary */}
//           <div className="col-md-4 text-center">
//             <h2>Cart Summary</h2>
//             <p>Total | Checkout | Payment</p>
//             <hr />
//             <h4>Total: {calculateTotalPrice()}</h4>
//             {user?.address ? (
//               <>
//                 <div className="mb-3">
//                   <h4>Current Address</h4>
//                   <h5>{user?.address}</h5>
//                   <button
//                     className="btn btn-outline-success"
//                     onClick={() => navigate("/user/dashboard/profile")}
//                   >
//                     Update Address
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div className="mb-3">
//                 {user?.token ? (
//                   <button
//                     className="btn btn-outline-success"
//                     onClick={() => navigate("/dashboard/user/profile")}
//                   >
//                     Update Address
//                   </button>
//                 ) : (
//                   <button
//                     className="btn btn-outline-success"
//                     onClick={() =>
//                       navigate("/login", {
//                         state: "/cart",
//                       })
//                     }
//                   >
//                     Please Login to checkout
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
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
    return cartItems
      .reduce(
        (total, item) => total + item.productId.price * item.quantity,
        0
      )
      .toLocaleString("en-US", { style: "currency", currency: "USD" });
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
                <button
                  className="btn btn-info mt-3"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout
                </button>
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

