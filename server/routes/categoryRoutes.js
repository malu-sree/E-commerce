const express = require("express");
const { 
    createCategoryController,
    updateCategoryController,
    categoryControlller,
    singleCategoryController,
    deleteCategoryController
} = require("../controllers/categoryController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// Protected and admin-only route to create a category
router.post("/create-category", protect, admin, createCategoryController);

// Update a category (Admin Only)
router.put("/update-category/:id", protect, admin, updateCategoryController);


router.get("/get-categories", categoryControlller);

// Get a single category by slug (No authentication required)
router.get("/get-category/:slug", singleCategoryController);

// Delete a category by ID (Admin Only)
router.delete("/delete-category/:id", protect, admin, deleteCategoryController);


module.exports = router;
