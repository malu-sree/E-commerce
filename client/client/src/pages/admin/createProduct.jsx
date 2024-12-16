// import React from "react";
// import Layout from "../../components/layout/layout";
// import AdminMenu from "./../../components/layout/adminMenu";

// const CreateProduct = () => {
//   return (
//     <Layout title={"Dashboard - Create Product"}>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <h1>Create Product</h1>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CreateProduct;



// import React, { useEffect, useState } from "react";
// import Layout from "../../components/layout/layout";
// import AdminMenu from "./../../components/layout/adminMenu";
// import axios from "axios";

// const CreateProduct = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(""); // State for the selected category
//   const [message, setMessage] = useState(null); // For success messages
//   const [error, setError] = useState(null); // For error messages

//   // Get all categories
//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5001/api/category/get-categories");
//       if (data?.success) {
//         setCategories(data?.category);
//         // setMessage("Categories fetched successfully.");
//       } else {
//          setError("Failed to fetch categories.");
//       }
//     } catch (error) {
//       console.error(error);
//       setError("Something went wrong while getting categories.");
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!selectedCategory) {
//       setError("Please select a category.");
//       return;
//     }

//     // Add your API logic for creating a product here
//     console.log("Selected Category:", selectedCategory);
//     // setMessage(`Product created under category: ${selectedCategory}`);
//     setError(null);
//   };

//   useEffect(() => {
//     getAllCategory();
//   }, []);

//   return (
//     <Layout title={"Dashboard - Create Product"}>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <h1>Create Product</h1>

//             {/* Display success or error messages */}
//             {message && <div className="alert alert-success">{message}</div>}
//             {error && <div className="alert alert-danger">{error}</div>}

//             {/* Product creation form */}
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="category" className="form-label">
//                   Select Category:
//                 </label>
//                 <select
//                   id="category"
//                   className="form-select"
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                 >
//                   <option value="">-- Choose a category --</option>
//                   {categories.map((category) => (
//                     <option key={category._id} value={category.name}>
//                       {category.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Add other product fields like name, price, etc., here */}
//               <button type="submit" className="btn btn-primary">
//                 Create Product
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CreateProduct;


// import React, { useEffect, useState } from "react";
// import Layout from "../../components/layout/layout";
// import AdminMenu from "../../components/layout/adminMenu";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CreateProduct = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(""); // Store category ID
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [photo, setPhoto] = useState(null);
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState(null); // For success messages
//   const navigate = useNavigate();

//   // Get all categories
//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get(
//         "http://localhost:5001/api/category/get-categories"
//       );
//       if (data?.success) {
//         setCategories(data.category);
//       } else {
//         setError("Failed to fetch categories.");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong while fetching categories.");
//     }
//   };

//   // Handle product creation
//   const handleCreate = async (e) => {
//     e.preventDefault();

//     // Validate form inputs
//     if (!name || !description || !price || !quantity || !selectedCategory) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     try {
//       const productData = new FormData();
//       productData.append("name", name);
//       productData.append("description", description);
//       productData.append("price", price);
//       productData.append("quantity", quantity);
//       productData.append("photo", photo);
//       productData.append("category", selectedCategory); // Send category ID

//       const token = localStorage.getItem("token"); // Retrieve auth token
//       const { data } = await axios.post(
//         "http://localhost:5001/api/product/create-product",
//         productData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Send token in headers
//           },
//         }
//       );

//       if (data?.success) {
//         setMessage("Product Created Successfully");
//         navigate("/admin/dashboard/products");
//       } else {
//         setError(data?.message || "Failed to create product");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong while creating the product.");
//     }
//   };

//   useEffect(() => {
//     getAllCategory();
//   }, []);

//   return (
//     <Layout title={"Dashboard - Create Product"}>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <h1>Create Product</h1>

//             {/* Display error or success messages */}
//             {message && <div className="alert alert-success">{message}</div>}
//             {error && <div className="alert alert-danger">{error}</div>}

//             {/* Product creation form */}
//             <form onSubmit={handleCreate}>
//               {/* Name */}
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">
//                   Product Name:
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="form-control"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Description */}
//               <div className="mb-3">
//                 <label htmlFor="description" className="form-label">
//                   Description:
//                 </label>
//                 <textarea
//                   id="description"
//                   className="form-control"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   required
//                 ></textarea>
//               </div>

//               {/* Price */}
//               <div className="mb-3">
//                 <label htmlFor="price" className="form-label">
//                   Price:
//                 </label>
//                 <input
//                   type="number"
//                   id="price"
//                   className="form-control"
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Quantity */}
//               <div className="mb-3">
//                 <label htmlFor="quantity" className="form-label">
//                   Quantity:
//                 </label>
//                 <input
//                   type="number"
//                   id="quantity"
//                   className="form-control"
//                   value={quantity}
//                   onChange={(e) => setQuantity(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Photo Upload and Preview */}
//               <div className="mb-3">
//                 <label className="btn btn-outline-secondary col-md-12">
//                   {photo ? photo.name : "Upload Photo"}
//                   <input
//                     type="file"
//                     name="photo"
//                     accept="image/*"
//                     onChange={(e) => setPhoto(e.target.files[0])}
//                     hidden
//                   />
//                 </label>
//               </div>
//               <div className="mb-3">
//                 {photo && (
//                   <div className="text-center">
//                     <img
//                       src={URL.createObjectURL(photo)}
//                       alt="product_photo"
//                       height={"200px"}
//                       className="img img-responsive"
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* Category */}
//               <div className="mb-3">
//                 <label htmlFor="category" className="form-label">
//                   Select Category:
//                 </label>
//                 <select
//                   id="category"
//                   className="form-select"
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                   required
//                 >
//                   <option value="">-- Choose a category --</option>
//                   {categories.map((category) => (
//                     <option key={category._id} value={category._id}>
//                       {category.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Submit Button */}
//               <button type="submit" className="btn btn-primary">
//                 Create Product
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CreateProduct;
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import AdminMenu from "../../components/layout/adminMenu";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // Store category ID
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [photo, setPhoto] = useState(null);
  const [shipping, setShipping] = useState("");  // New state for shipping option
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null); // For success messages
  const navigate = useNavigate();

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5001/api/category/get-categories"
      );
      if (data?.success) {
        setCategories(data.category);
      } else {
        setError("Failed to fetch categories.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching categories.");
    }
  };

  // Handle product creation
  const handleCreate = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!name || !description || !price || !quantity || !selectedCategory || shipping === "") {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", selectedCategory); // Send category ID
      productData.append("shipping", shipping); // Send shipping option

      const token = localStorage.getItem("token"); // Retrieve auth token
      const { data } = await axios.post(
        "http://localhost:5001/api/product/create-product",
        productData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in headers
          },
        }
      );

      if (data?.success) {
        setMessage("Product Created Successfully");
        navigate("/admin/dashboard/products");
      } else {
        setError(data?.message || "Failed to create product");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while creating the product.");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>

            {/* Display error or success messages */}
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Product creation form */}
            <form onSubmit={handleCreate}>
              {/* Category */}
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Select Category:
                </label>
                <select
                  id="category"
                  className="form-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  required
                >
                  <option value="">-- Choose a category --</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Shipping */}
              <div className="mb-3">
                <label htmlFor="shipping" className="form-label">
                  Shipping:
                </label>
                <select
                  id="shipping"
                  className="form-select"
                  value={shipping}
                  onChange={(e) => setShipping(e.target.value)}
                  required
                >
                  <option value="">Select Shipping</option>
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </div>

              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Product Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Description */}
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description:
                </label>
                <textarea
                  id="description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              {/* Price */}
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price:
                </label>
                <input
                  type="number"
                  id="price"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              {/* Quantity */}
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="form-control"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>

              {/* Photo Upload and Preview */}
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
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary">
                Create Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;

