



// import React, { useState, useEffect } from "react";
// import { useAuth } from "../context/authContext";
// import axios from "axios";
// import Layout from "../components/layout/layout";

// const CheckoutPage = () => {
//   const { user } = useAuth(); // Fetch user details from context
//   const [address, setAddress] = useState("");
//   const [message, setMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false); // For showing a loading state while the request is being processed

//   useEffect(() => {
//     // Prefill address if available in the user context
//     if (user && user.address) {
//       setAddress(user.address);
//     }
//   }, [user]);

//   const handleCheckout = async () => {
//     if (!user) {
//       setMessage("You must be logged in to place an order.");
//       return;
//     }

//     if (!address.trim()) {
//       setMessage("Please provide a valid delivery address.");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/orders/create",
//         {
//           userId: user._id,
//           address,
//           paymentMethod: "Cash on Delivery",
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`, // Pass the token in the request headers
//           },
//         }
//       );

//       if (response.data.success) {
//         setMessage("Order placed successfully!");
//       } else {
//         setMessage("Failed to place the order. Please try again.");
//       }
//     } catch (err) {
//       setMessage("An error occurred while processing your order.");
//       console.error(err);
//     } finally {
//       setIsLoading(false); // Hide the loading state after the request completes
//     }
//   };

//   return (
//     <Layout title="Checkout">
//       <div className="container mt-5">
//         <h1>Checkout</h1>
//         <div className="mb-3">
//           <label htmlFor="address" className="form-label">
//             Delivery Address
//           </label>
//           <textarea
//             id="address"
//             className="form-control"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             rows="4"
//           ></textarea>
//         </div>
//         <button
//           className="btn btn-primary"
//           onClick={handleCheckout}
//           disabled={!address.trim() || isLoading}
//         >
//           {isLoading ? "Processing..." : "Confirm Order"}
//         </button>
//         {message && <p className="mt-3 text-success">{message}</p>}
//       </div>
//     </Layout>
//   );
// };

// export default CheckoutPage;



import React, { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import axios from "axios";
import Layout from "../components/layout/layout";

const CheckoutPage = () => {
  const { user } = useAuth(); // Fetch user details from context
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery"); // Default payment method

  useEffect(() => {
    // Prefill address if available in the user context
    if (user && user.address) {
      setAddress(user.address);
    }
  }, [user]);

  const handleCheckout = async () => {
    if (!user) {
      setMessage("You must be logged in to place an order.");
      return;
    }

    if (!address.trim()) {
      setMessage("Please provide a valid delivery address.");
      return;
    }

    setIsLoading(true);
    try {
      if (paymentMethod === "Razorpay") {
        // Initialize Razorpay payment
        const orderResponse = await axios.post(
          "http://localhost:5001/api/orders/create",
          {
            userId: user._id,
            address,
            paymentMethod,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (orderResponse.data.success) {
          const options = {
            key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
            amount: orderResponse.data.order.totalPrice * 100, // Razorpay expects the amount in paise
            currency: "INR",
            name: "Your E-commerce Store",
            description: "Order Payment",
            order_id: orderResponse.data.order.razorpayOrderId, // Razorpay Order ID
            handler: async (response) => {
              try {
                // Capture payment on the backend
                const captureResponse = await axios.post(
                  "http://localhost:5001/api/orders/capture",
                  {
                    paymentId: response.razorpay_payment_id,
                    orderId: orderResponse.data.order._id,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }
                );

                if (captureResponse.data.success) {
                  setMessage("Payment successful! Order placed.");
                } else {
                  setMessage("Payment captured failed. Please try again.");
                }
              } catch (err) {
                console.error(err);
                setMessage("An error occurred during payment processing.");
              }
            },
            theme: { color: "#3399cc" },
          };

          const razorpay = new window.Razorpay(options);
          razorpay.open();
        }
      } else {
        // Cash on Delivery
        const response = await axios.post(
          "http://localhost:5001/api/orders/create",
          {
            userId: user._id,
            address,
            paymentMethod,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data.success) {
          setMessage("Order placed successfully!");
        } else {
          setMessage("Failed to place the order. Please try again.");
        }
      }
    } catch (err) {
      setMessage("An error occurred while processing your order.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout title="Checkout">
      <div className="container mt-5">
        <h1>Checkout</h1>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Delivery Address
          </label>
          <textarea
            id="address"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="4"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Payment Method</label>
          <div>
            <label className="form-check-label me-3">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={paymentMethod === "Cash on Delivery"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-check-input"
              />
              Cash on Delivery
            </label>
            <label className="form-check-label">
              <input
                type="radio"
                name="paymentMethod"
                value="Razorpay"
                checked={paymentMethod === "Razorpay"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-check-input"
              />
              Razorpay
            </label>
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={handleCheckout}
          disabled={!address.trim() || isLoading}
        >
          {isLoading ? "Processing..." : "Confirm Order"}
        </button>
        {message && <p className="mt-3 text-success">{message}</p>}
      </div>
    </Layout>
  );
};

export default CheckoutPage;
