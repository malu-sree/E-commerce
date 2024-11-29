const express = require('express');
const { registerUser, loginUser,testRoute,getDashboardData, getUserProfile } = require('../controllers/userController');
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

 //router.get('/dashboard', protect, getDashboardData); // Get dashboard data for the logged-in user

  //protected route auth
router.get("/dash", protect, (req, res) => {
  res.status(200).send({ ok: true });
});

 module.exports = router;
