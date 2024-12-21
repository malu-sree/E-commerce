// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const {
    addProductToCart,
    getCartItems,
    removeProductFromCart
} = require('../controllers/cartController');

// Add a product to the cart
router.post('/add', addProductToCart);

// Get all items in the cart for a specific user
router.get('/:userId', getCartItems);

// Remove a product from the cart
router.delete('/remove', removeProductFromCart);

module.exports = router;

