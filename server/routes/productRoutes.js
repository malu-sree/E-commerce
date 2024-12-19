// const express = require("express");
// const { createProductController,
//         getProductController,
//         getSingleProductController,
//         productPhotoController,
//         deleteProductController,
//         updateProductController
//  } = require("../controllers/productController");
// const { protect, admin } = require("../middleware/authMiddleware");
// const formidable = require("express-formidable");

// const router = express.Router();

// // Route to create a product (Admin only)
// router.post(
//   "/create-product",
//   protect, 
//   admin, 
//   formidable(), 
//   createProductController
// );

// //get products
// router.get("/get-product", getProductController);

// //single product
// router.get("/get-product/:slug", getSingleProductController);

// // Get photo by product ID
// router.get("/product-photo/:pid", productPhotoController);

// // Delete product by ID
// router.delete("/delete-product/:pid", deleteProductController);

// // Update product by ID
// router.put("/update-product/:pid", 
//     protect,
//     admin,
//     formidable(),
//     updateProductController);


// module.exports = router;


const express = require("express");
const {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  getProductsByCategoryName,
  getProducts
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");
const multer = require("multer");

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Generate a unique file name
  },
});

const upload = multer({ storage: storage }); // Ensure 'upload' is defined

const router = express.Router();

// Route to create a product (Admin only)
router.post(
  "/create-product",
  protect,
  admin,
  upload.single('photo'), // Handle file upload using multer
  createProductController
);

// Get all products
router.get("/get-product", getProductController);

// Get single product by slug
router.get("/get-product/:slug", getSingleProductController);

// Get photo by product ID
router.get("/product-photo/:pid", productPhotoController);

// Delete product by ID
router.delete("/delete-product/:pid", protect, admin, deleteProductController);

// router.get("/get-by-category-name/:categoryName", getProductsByCategoryName);
// Update product by ID
router.put(
  "/update-product/:pid",
  protect,
  admin,
  upload.single('photo'), // Handle file upload using multer
  updateProductController
);

// Route for getting paginated products
router.get("/get-product", getProducts);


module.exports = router;
