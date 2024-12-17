import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/layout/adminMenu";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");
  const [message, setMessage] = useState(""); // Feedback message state

  // Get single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5001/api/product/get-product/${params.slug}`
      );
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setQuantity(data.product.quantity);
      setShipping(data.product.shipping ? "1" : "0");
      setCategory(data.product.category._id);
    } catch (error) {
      console.log(error);
      setMessage("Error fetching product details.");
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5001/api/category/get-categories"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      setMessage("Error fetching categories.");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Handle product update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("category", category);
      productData.append("shipping", shipping);
      if (photo) productData.append("photo", photo);

      const { data } = await axios.put(
        `http://localhost:5001/api/product/update-product/${id}`,
        productData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (data?.success) {
        setMessage("Product updated successfully.");
        navigate("/admin/dashboard/products");
      } else {
        setMessage(data?.message || "Error updating product.");
      }
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong while updating the product.");
    }
  };

  // Handle product delete
  const handleDelete = async () => {
    try {
      let answer = window.confirm("Are you sure you want to delete this product?");
      if (!answer) return;

      const { data } = await axios.delete(
        `http://localhost:5001/api/product/delete-product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the token here
          },
        }
      );
      setMessage("Product deleted successfully.");
      navigate("/admin/dashboard/products");
    } catch (error) {
      console.log(error);
      setMessage("Error deleting product.");
    }
  };

  return (
    <Layout title={"Dashboard - Update Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Update Product</h1>

            {/* Display feedback message */}
            {message && (
              <div className="alert alert-info text-center">{message}</div>
            )}

            <div className="m-1 w-75">
              {/* Category selection */}
              <div className="mb-3">
                <label>Category</label>
                <select
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  {categories?.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Upload photo */}
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>

              {/* Photo preview */}
              <div className="mb-3 text-center">
                <img
                  src={
                    photo
                      ? URL.createObjectURL(photo)
                      : `http://localhost:5001/api/product/product-photo/${id}`
                  }
                  alt="product_photo"
                  height={"200px"}
                  className="img img-responsive"
                />
              </div>

              {/* Product inputs */}
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Product name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  value={description}
                  placeholder="Product description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="Product price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="Product quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              {/* Shipping */}
              <div className="mb-3">
                <label>Shipping</label>
                <select
                  className="form-control"
                  value={shipping}
                  onChange={(e) => setShipping(e.target.value)}
                >
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpdate}>
                  Update Product
                </button>
              </div>
              <div className="mb-3">
                <button className="btn btn-danger" onClick={handleDelete}>
                  Delete Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
