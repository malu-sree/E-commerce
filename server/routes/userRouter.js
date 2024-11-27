const express = require('express');
const { registerUser, loginUser,testRoute, getUserProfile } = require('../controllers/userController');
// const { protect } = require('../middleware/authMiddleware');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser); // Register user
router.post('/login', loginUser); // Login user
// router.get('/profile', protect, getUserProfile); // Get user profile (requires auth)
router.get('/test', protect, testRoute);

router.get('/admin', protect, admin, (req, res) => {
    res.json({ message: "Welcome Admin!" });
  });
module.exports = router;
