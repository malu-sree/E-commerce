const express = require('express');
const router = express.Router();
const { createOrder, getUserOrders } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

// POST /api/orders: Create a new order (protected route)
router.post('/create', protect, createOrder);

// GET /api/orders/:userId: Get all orders for a specific user (protected route)
router.get('/:userId', protect, getUserOrders);

module.exports = router;
