import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/layout/adminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all orders
  const fetchOrders = async () => {
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token"); // Get admin token
      const response = await axios.get("http://localhost:5001/api/orders", {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in headers
        },
      });

      if (response.data.success) {
        setOrders(response.data.orders); // Set orders data
      } else {
        setError("Failed to fetch orders.");
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setError("Unauthorized access. Please log in as admin.");
      } else {
        setError("An error occurred while fetching orders.");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Update order status
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:5001/api/orders/${orderId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
      } else {
        alert("Failed to update order status.");
      }
    } catch (err) {
      console.error("Error updating order status:", err);
      alert("An error occurred while updating the order status.");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Layout title="Admin Dashboard - Manage Orders">
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
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
                  const totalOrderPrice = order.items.reduce(
                    (total, item) => total + item.productId.price * item.quantity,
                    0
                  );
                  return (
                    <div key={index} className="card mb-3">
                      <div className="card-body">
                        <h5>Order #{order._id}</h5>
                        <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                        <p><strong>User:</strong> {order.userId.name || "Unknown"}</p>
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
                                  <p><strong>Price:</strong> ₹{item.productId.price}</p>
                                  <p><strong>Quantity:</strong> {item.quantity}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-3">
                          <h5><strong>Total Price: ₹{totalOrderPrice}</strong></h5>
                          <div className="mt-3">
                            <label htmlFor={`status-${order._id}`}>Update Status:</label>
                            <select
                              id={`status-${order._id}`}
                              className="form-select"
                              value={order.status}
                              onChange={(e) =>
                                updateOrderStatus(order._id, e.target.value)
                              }
                            >
                              <option value="Pending">Pending</option>
                              <option value="Processing">Processing</option>
                              <option value="Shipped">Shipped</option>
                              <option value="Delivered">Delivered</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </div>
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

export default AdminOrder;
