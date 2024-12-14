const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRouter');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require("./routes/productRoutes");
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const cors = require('cors');


// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors())
// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }))




// API Routes
app.use('/api/users', userRoutes);
app.use('/api/category', categoryRoutes); // Category routes
app.use("/api/product", productRoutes);


// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

// Root Route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Ecommerce App</h1>');
});

// Error Handling Middleware (optional)
// app.use((err, req, res, next) => {
//   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//   res.status(statusCode).json({
//     message: err.message,
//     stack: process.env.NODE_ENV === 'production' ? null : err.stack,
//   });
// });

// Set a dynamic port or fallback to 5001
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

