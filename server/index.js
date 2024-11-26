const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());

// Example route (you can replace with your routes)
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Ecommerce app</h1>');
});

// Use a different port to avoid "Address in use" error
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
