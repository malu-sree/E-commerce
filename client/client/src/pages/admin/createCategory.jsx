// import React from "react";
// import Layout from "./../../components/Layout/Layout";
// import AdminMenu from "./../../components/layout/adminMenu";

// const CreateCategory = () => {
//   return (
//     <Layout title={"Dashboard - Create Category"}>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <h1>Create Category</h1>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };


// import React, { useEffect, useState } from "react";
// import Layout from "./../../components/Layout/Layout";
// import AdminMenu from "./../../components/layout/adminMenu";
// import CategoryForm from "../../components/form/categoryForm";
// import axios from "axios";

// const CreateCategory = () => {
//   const [categories, setCategories] = useState([]);
//   const [error, setError] = useState(null); // State to hold error message
  
//   // Get all categories
//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5001/api/category/get-categories");
//       if (data.success) {
//         setCategories(data.category);
//       } else {
//         setError("Failed to fetch categories."); // Set error message if categories not fetched
//       }
//     } catch (error) {
//       console.log(error);
//       setError("Something went wrong while fetching categories."); // Set error message if there's a network or other issue
//     }
//   };

//   useEffect(() => {
//     getAllCategory();
//   }, []);

//   return (
//     <Layout title={"Dashboard - Categories"}>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <h1>Categories</h1>

//             {/* Display error message if something went wrong */}
//             {error && <div className="alert alert-danger">{error}</div>}

//             {/* Table to display categories */}
//             <table className="table table-bordered">
//               <thead>
//                 <tr>
//                   <th>Category Name</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {categories.length > 0 ? (
//                   categories.map((c) => (
//                     <tr key={c._id}>
//                       <td>{c.name}</td>
//                       <td>
//                         <button className="btn btn-primary btn-sm">Edit</button>
//                         <button className="btn btn-danger btn-sm ms-2">Delete</button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="2">No categories found</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CreateCategory;

import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/layout/adminMenu";
import CategoryForm from "../../components/form/categoryForm"; // Assuming you have a form component
import axios from "axios";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null); // State to hold error message
  const [message, setMessage] = useState(null); // State to hold success message
  const [value, setValue] = useState(""); // State to hold category name

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("http://localhost:5001/api/category/get-categories");
      if (data.success) {
        setCategories(data.category);
      } else {
        setError("Failed to fetch categories.");
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong while fetching categories.");
    }
  };

  // Handle category form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve the token from localStorage or wherever it is stored
    const token = localStorage.getItem("token");  // Replace with your token storage method

    try {
      const { data } = await axios.post(
        "http://localhost:5001/api/category/create-category",
        { name: value },
        {
          headers: {
            Authorization: `Bearer ${token}`,  // Attach token to Authorization header
          },
        }
      );

      if (data?.success) {
        setMessage(`${value} is created successfully`); // Set success message
        setValue(""); // Clear the input field
        getAllCategory(); // Refresh categories
      } else {
        setError(data.message || "Failed to create category");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        setError("Unauthorized. Please log in again.");
        // Optionally, redirect to login page or logout
      } else {
        setError("Something went wrong in input form");
      }
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <Layout title={"Dashboard - Categories"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Categories</h1>

            {/* Display success or error message */}
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Category creation form */}
            <CategoryForm value={value} setValue={setValue} handleSubmit={handleSubmit} />

            {/* Table to display categories */}
            <table className="table table-bordered mt-3">
              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.length > 0 ? (
                  categories.map((c) => (
                    <tr key={c._id}>
                      <td>{c.name}</td>
                      <td>
                        <button className="btn btn-primary btn-sm">Edit</button>
                        <button className="btn btn-danger btn-sm ms-2">Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2">No categories found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
