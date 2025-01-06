const express = require('express');
const router = express.Router();
const { createOrder, getUserOrders,getAllOrders,updateOrderStatus } = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

// POST /api/orders: Create a new order (protected route)
router.post('/create', protect, createOrder);

// GET /api/orders/:userId: Get all orders for a specific user (protected route)
router.get('/:userId', protect, getUserOrders);

// GET /api/orders: Get all orders (admin route)
router.get('/', protect, admin, getAllOrders);

// PATCH /api/orders/:orderId: Update order status (admin route)
router.put('/:orderId', protect, admin, updateOrderStatus);

module.exports = router;
