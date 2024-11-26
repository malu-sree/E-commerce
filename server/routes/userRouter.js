const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
// const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser); // Register user
router.post('/login', loginUser); // Login user
// router.get('/profile', protect, getUserProfile); // Get user profile (requires auth)

module.exports = router;
