const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const { hashPassword, comparePassword } = require('../helpers/passwordHash');
const jwt = require('jsonwebtoken');

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone, address,answer,isAdmin } = req.body;
 
  // Check if the 'answer' field is provided
 if (!answer) {
  return res.status(400).json({ message: "Answer is required" });
}

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    phone,
    address,
    answer,
    isAdmin: isAdmin || false
    
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Authenticate user & login
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate that both email and password are provided
  if (!email || !password) {
    res.status(400);
    throw new Error('Please provide both email and password');
  }

  const user = await User.findOne({ email });

  // Check if the user exists and the password is correct
  if (user && (await comparePassword(password, user.password))) {
    // Generate JWT token
    const token = jwt.sign(
      { _id: user._id, email: user.email }, // Payload: user id and email
      process.env.JWT_SECRET, // Secret key from environment variables
      { expiresIn: '30d' } // Token expires in 30 days
    );

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      isAdmin: user.isAdmin,
      token: token, // Send the token along with user data
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Get user dashboard data
// @route   GET /api/users/dashboard
// @access  Private
const getDashboardData = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    // Example of dashboard data
    const dashboardData = {
      message: 'Welcome to your Dashboard!',
      userStats: {
        totalOrders: 5, // Example: total number of orders
        totalSpend: 500, // Example: total money spent by the user
        recentActivity: 'Bought a new laptop', // Example: recent activity
      },
      userInfo: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    };

    res.json(dashboardData);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});


// @desc    Forgot Password
// @route   POST /api/users/forgot-password
// @access  Public
const forgotPasswordController = asyncHandler(async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;

    if (!email) {
      return res.status(400).send({ message: 'Email is required' });
    }
    if (!answer) {
      return res.status(400).send({ message: 'Answer is required' });
    }
    if (!newPassword) {
      return res.status(400).send({ message: 'New Password is required' });
    }

    const user = await User.findOne({ email, answer });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'Wrong Email or Answer',
      });
    }

    const hashed = await hashPassword(newPassword);
    await User.findByIdAndUpdate(user._id, { password: hashed });

    res.status(200).send({
      success: true,
      message: 'Password Reset Successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
});



// Test route
const testRoute = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Test route is working', user: req.user });
});

module.exports = { registerUser, loginUser,testRoute, getUserProfile,getDashboardData,forgotPasswordController };
