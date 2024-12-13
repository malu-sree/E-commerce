const categoryModel = require("../models/categoryModel");
const slugify = require("slugify");

const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;

    // Validation for name
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }

    // Check if the category already exists
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: false,
        message: "Category already exists",
      });
    }

    // Create a new category
    const category = await new categoryModel({
      name,
      slug: slugify(name, { lower: true, strict: true }),
    }).save();

    res.status(201).send({
      success: true,
      message: "New category created",
      category,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating category",
    });
  }
};


// New updateCategoryController
const updateCategoryController = async (req, res) => {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const category = await categoryModel.findByIdAndUpdate(
        id,
        { name, slug: slugify(name) },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "Category Updated Successfully",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while updating category",
      });
    }
  };

  // New categoryControlller (Fetch All Categories)
const categoryControlller = async (req, res) => {
    try {
      const category = await categoryModel.find({});
      res.status(200).send({
        success: true,
        message: "All Categories List",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all categories",
      });
    }
  };

  // New singleCategoryController (Fetch Single Category by Slug)
const singleCategoryController = async (req, res) => {
    try {
      const category = await categoryModel.findOne({ slug: req.params.slug });
      if (!category) {
        return res.status(404).send({
          success: false,
          message: "Category not found",
        });
      }
      res.status(200).send({
        success: true,
        message: "Get Single Category Successfully",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single Category",
      });
    }
  };

  // New deleteCategoryController (Delete Category by ID)
const deleteCategoryController = async (req, res) => {
    try {
      const { id } = req.params;
      const category = await categoryModel.findById(id);
      if (!category) {
        return res.status(404).send({
          success: false,
          message: "Category not found",
        });
      }
      await categoryModel.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Category Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while deleting category",
        error,
      });
    }
  };

module.exports = { createCategoryController,updateCategoryController,categoryControlller,singleCategoryController,deleteCategoryController };
