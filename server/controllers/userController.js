const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const { hashPassword, comparePassword } = require('../helpers/passwordHash');
const jwt = require('jsonwebtoken');

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone, address } = req.body;

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

module.exports = { registerUser, loginUser, getUserProfile };
