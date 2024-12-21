const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRouter');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require('./routes/cartRoutes'); 
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
app.use('/api/cart', cartRoutes); // Use the cart routes for '/api/cart' endpoint

// app.get('/api/product/get-by-category/:categoryId', async (req, res) => {
//   try {
//     const { categoryId } = req.params;
//     const products = await Product.find({ category: categoryId }); // Assuming your Product model has a `category` field
//     res.json({ success: true, products });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Error fetching products', error });
//   }
// });



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

