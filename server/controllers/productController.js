const productModel = require("../models/productModel");
const fs = require("fs");
const slugify = require("slugify");

const createProductController = async (req, res) => {
  try {
    const { name, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;

    // Validation
    if (!name) {
      return res.status(400).json({ success: false, error: "Name is required" });
    }
    if (!description) {
      return res.status(400).json({ success: false, error: "Description is required" });
    }
    if (!price) {
      return res.status(400).json({ success: false, error: "Price is required" });
    }
    if (!category) {
      return res.status(400).json({ success: false, error: "Category is required" });
    }
    if (!quantity) {
      return res.status(400).json({ success: false, error: "Quantity is required" });
    }
    if (photo && photo.size > 1000000) {
      return res.status(400).json({
        success: false,
        error: "Photo is required and should be less than 1MB",
      });
    }

    // Create product
    const product = new productModel({ ...req.fields, slug: slugify(name) });

    // Handle photo
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }

    await product.save();
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error,
      message: "Error creating product",
    });
  }
};


// Get all products
const getProductController = async (req, res) => {
    try {
      const products = await productModel
        .find({})
        .populate("category") // Populates category field with category details
        .select("-photo") // Exclude photo field from the result
        .limit(12) // Return only the latest 12 products
        .sort({ createdAt: -1 }); // Sort by latest created
  
      res.status(200).send({
        success: true,
        countTotal: products.length, // Total number of products returned
        message: "All Products fetched successfully",
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in getting products",
        error: error.message,
      });
    }
  };
  // Get single product by slug
const getSingleProductController = async (req, res) => {
    try {
      const product = await productModel
        .findOne({ slug: req.params.slug }) // Find product by slug
        .select("-photo") // Exclude photo field from the response
        .populate("category"); // Populate the category details
  
      if (!product) {
        return res.status(404).send({
          success: false,
          message: "Product not found",
        });
      }
  
      res.status(200).send({
        success: true,
        message: "Single Product Fetched",
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while getting single product",
        error: error.message,
      });
    }
  };
  // Get photo of a product
const productPhotoController = async (req, res) => {
    try {
      const product = await productModel.findById(req.params.pid).select("photo");
      if (product && product.photo && product.photo.data) {
        res.set("Content-type", product.photo.contentType); // Set the content type for the photo
        return res.status(200).send(product.photo.data); // Send the photo data as a response
      } else {
        res.status(404).send({
          success: false,
          message: "Photo not found",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while getting photo",
        error: error.message,
      });
    }
  };

  // Delete product
const deleteProductController = async (req, res) => {
    try {
      const product = await productModel.findByIdAndDelete(req.params.pid).select("-photo");
      if (!product) {
        return res.status(404).send({
          success: false,
          message: "Product not found",
        });
      }
      res.status(200).send({
        success: true,
        message: "Product Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while deleting product",
        error,
      });
    }
  };
  // Update product
const updateProductController = async (req, res) => {
    try {
      const { name, description, price, category, quantity, shipping } =
        req.fields;
      const { photo } = req.files;
  
      // Validation
      switch (true) {
        case !name:
          return res.status(500).send({ error: "Name is Required" });
        case !description:
          return res.status(500).send({ error: "Description is Required" });
        case !price:
          return res.status(500).send({ error: "Price is Required" });
        case !category:
          return res.status(500).send({ error: "Category is Required" });
        case !quantity:
          return res.status(500).send({ error: "Quantity is Required" });
        case photo && photo.size > 1000000:
          return res
            .status(500)
            .send({ error: "Photo is Required and should be less than 1MB" });
      }
  
      const product = await productModel.findByIdAndUpdate(
        req.params.pid,
        { ...req.fields, slug: slugify(name) },
        { new: true }
      );
      if (photo) {
        product.photo.data = fs.readFileSync(photo.path);
        product.photo.contentType = photo.type;
      }
      await product.save();
      res.status(201).send({
        success: true,
        message: "Product Updated Successfully",
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in updating product",
      });
    }
  };
  
  
module.exports = { createProductController,getProductController,getSingleProductController,productPhotoController,deleteProductController,updateProductController };
