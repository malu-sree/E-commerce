// // Cart Schema (Example using MongoDB)
// const mongoose = require('mongoose');

// const cartItemSchema = new mongoose.Schema({
//   productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
//   quantity: { type: Number, required: true },
// });

// const cartSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   items: [cartItemSchema],
// });

// const Cart = mongoose.model('Cart', cartSchema);


// models/cartModel.js
const mongoose = require('mongoose');

// Define the schema for a cart item
const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true }, // Reference to the Product model
  quantity: { type: Number, required: true, default: 1 }, // Quantity of the product in the cart
});

// Define the schema for the cart
const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true }, // Reference to the User model
  items: [cartItemSchema], // Array of items in the cart
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt timestamps
});

// Create a Cart model based on the schema
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
