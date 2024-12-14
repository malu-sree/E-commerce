const express = require("express");
const { createProductController,
        getProductController,
        getSingleProductController,
        productPhotoController,
        deleteProductController,
        updateProductController
 } = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");
const formidable = require("express-formidable");

const router = express.Router();

// Route to create a product (Admin only)
router.post(
  "/create-product",
  protect, 
  admin, 
  formidable(), 
  createProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

// Get photo by product ID
router.get("/product-photo/:pid", productPhotoController);

// Delete product by ID
router.delete("/delete-product/:pid", deleteProductController);

// Update product by ID
router.put("/update-product/:pid", 
    protect,
    admin,
    formidable(),
    updateProductController);


module.exports = router;
