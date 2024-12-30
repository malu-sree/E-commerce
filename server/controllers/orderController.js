const Order = require("../models/orderModel");
const Cart = require("../models/cartModel");
const User = require("../models/userModel");

// Create a new order
const createOrder = async (req, res) => {
  const { userId, address, paymentMethod } = req.body;

  try {
    // Validate user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Fetch cart for the user
    const cart = await Cart.findOne({ userId }).populate("items.productId");
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    // Calculate total price
    const totalPrice = cart.items.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0
    );

    // Create order
    const order = new Order({
      userId,
      items: cart.items,
      address,
      paymentMethod,
      totalPrice,
    });

    // Save order
    await order.save();

    // Clear cart after order
    cart.items = [];
    await cart.save();

    res.status(201).json({ success: true, message: "Order placed successfully", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to place the order" });
  }
};

// // Fetch user orders
const getUserOrders = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ userId }).populate("items.productId");
    res.status(200).json({ success: true, orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};


// const getUserOrders = async (req, res) => {
//     const { userId } = req.params;
  
//     try {
//       // Check if user exists
//       const userExists = await User.findById(userId);
//       if (!userExists) {
//         return res.status(404).json({ success: false, message: "User not found" });
//       }
  
//       // Fetch orders
//       const orders = await Order.find({ user: userId }).populate("items.productId");
  
//       if (!orders) {
//         return res.status(404).json({ success: false, message: "No orders found." });
//       }
  
//       res.status(200).json({ success: true, orders });
//     } catch (err) {
//       console.error("Error fetching orders:", err);
//       res.status(500).json({ success: false, error: "Failed to fetch orders" });
//     }
//   };
  
module.exports = { createOrder, getUserOrders };
