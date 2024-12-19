



// import React, { useState, useEffect } from "react";
// import AdminMenu from "../../components/layout/adminMenu";
// import Layout from "./../../components/Layout/Layout";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [message, setMessage] = useState(""); // State to manage messages

//   // Get all products
//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5001/api/product/get-product");
//       setProducts(data.products);
//       setMessage(""); // Clear any previous messages if successful
//     } catch (error) {
//       console.error(error);
//       setMessage("Something went wrong while fetching products.");
//     }
//   };

//   // Lifecycle method
//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   return (
//     <Layout>
//       <div className="row">
//         {/* Admin Menu Section */}
//         <div className="col-md-3">
//           <AdminMenu />
//         </div>

//         {/* Product Display Section */}
//         <div className="col-md-9">
//           <h1 className="text-center mb-4">All Products List</h1>

//           {/* Display the message when there's an error */}
//           {message && <div className="alert alert-danger text-center">{message}</div>}

//           {/* Products list */}
//           <div className="row">
//             {products?.map((p) => (
//               <div key={p._id} className="col-md-4 mb-4">
//                 <Link
//                   to={`admin/dashboard/products/${p.slug}`}
//                   className="text-decoration-none text-dark"
//                 >
//                   <div className="card h-100 shadow-sm border-0">
//                     <img
//                       src={`http://localhost:5001/api/product/product-photo/${p._id}`}
//                       className="card-img-top"
//                       alt={p.name}
//                       style={{ height: "320px", objectFit: "cover" }} // Increased height
//                     />
//                     <div className="card-body d-flex flex-column">
//                       <h5 className="card-title">{p.name}</h5>
//                       <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
//                         {p.description.length > 70
//                           ? `${p.description.substring(0, 70)}...`
//                           : p.description}
//                       </p>
//                       <div className="mt-auto">
//                         <button className="btn btn-primary w-100">View Details</button>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>

//           {/* Handle empty product list */}
//           {products.length === 0 && !message && (
//             <p className="text-center mt-4">No products found</p>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Products;


import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/layout/adminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState(""); // State to manage messages

  // Get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5001/api/product/get-product");
      setProducts(data.products);
      setMessage(""); // Clear any previous messages if successful
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong while fetching products.");
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="row">
        {/* Admin Menu Section */}
        <div className="col-md-3">
          <AdminMenu />
        </div>

        {/* Product Display Section */}
        <div className="col-md-9">
          <h1 className="text-center mb-4">All Products List</h1>

          {/* Display the message when there's an error */}
          {message && <div className="alert alert-danger text-center">{message}</div>}

          {/* Products list */}
          <div className="row">
            {products?.map((p) => (
              <div key={p._id} className="col-md-4 mb-4">
                <Link
                  to={`/admin/dashboard/update-product/${p.slug}`} // Redirect to update page
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src={`http://localhost:5001/api/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
                        {p.description.length > 70
                          ? `${p.description.substring(0, 70)}...`
                          : p.description}
                      </p>
                      <div className="mt-auto">
                        <button className="btn btn-primary w-100">Update Product</button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Handle empty product list */}
          {products.length === 0 && !message && (
            <p className="text-center mt-4">No products found</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
