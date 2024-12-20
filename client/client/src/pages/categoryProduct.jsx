// // import React, { useState, useEffect } from "react";
// // import Layout from "../components/Layout/Layout";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // const CategoryProduct = () => {
// //   const params = useParams();
// //   const navigate = useNavigate();
// //   const [products, setProducts] = useState([]);
// //   const [category, setCategory] = useState([]);

// //   useEffect(() => {
// //     if (params?.slug) getPrductsByCat();
// //   }, [params?.slug]);
// //   const getPrductsByCat = async () => {
// //     try {
// //       const { data } = await axios.get(
// //         `http://localhost:5001/api/product/product-category/${params.slug}`
// //       );
// //       setProducts(data?.products);
// //       setCategory(data?.category);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <Layout>
// //       <div className="container mt-3">
// //         <h4 className="text-center">Category - {category?.name}</h4>
// //         <h6 className="text-center">{products?.length} result found </h6>
// //         <div className="row">
// //           <div className="col-md-9 offset-1">
// //             <div className="d-flex flex-wrap">
// //               {products?.map((p) => (
// //                 <div
// //                   className="card m-2"
// //                   style={{ width: "18rem" }}
// //                   key={p._id}
// //                 >
// //                   <img
// //                     src={`http://localhost:5001/api/product/product-photo/${p._id}`}
// //                     className="card-img-top"
// //                     alt={p.name}
// //                   />
// //                   <div className="card-body">
// //                     <h5 className="card-title">{p.name}</h5>
// //                     <p className="card-text">
// //                       {p.description.substring(0, 30)}...
// //                     </p>
// //                     <p className="card-text"> $ {p.price}</p>
// //                     <button
// //                       className="btn btn-info ms-1"
// //                       onClick={() => navigate(`/product/${p.slug}`)}
// //                     >
// //                       View Details
// //                     </button>
// //                     <button className="btn btn-secondary ms-1">
// //                       ADD TO CART
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //             {/* <div className="m-2 p-3">
// //             {products && products.length < total && (
// //               <button
// //                 className="btn btn-warning"
// //                 onClick={(e) => {
// //                   e.preventDefault();
// //                   setPage(page + 1);
// //                 }}
// //               >
// //                 {loading ? "Loading ..." : "Loadmore"}
// //               </button>
// //             )}
// //           </div> */}
// //           </div>
// //         </div>
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default CategoryProduct;


// import React, { useState, useEffect } from "react";
// import Layout from "../components/Layout/Layout";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const CategoryProduct = () => {
//   const params = useParams();
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [category, setCategory] = useState([]);

//   useEffect(() => {
//     if (params?.slug) getPrductsByCat();
//   }, [params?.slug]);

//   const getPrductsByCat = async () => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:5001/api/product/product-category/${params.slug}`
//       );
//       setProducts(data?.products);
//       setCategory(data?.category);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Layout>
//       <div className="container mt-3">
//         <h4 className="text-center">Category - {category?.name}</h4>
//         <h6 className="text-center">{products?.length} result found </h6>
//         <div className="row">
//           <div className="col-md-9 offset-1">
//             <div className="d-flex flex-wrap">
//               {products?.map((p) => (
//                 <div
//                   className="card m-2 col-md-4 col-lg-3"
//                   key={p._id}
//                 >
//                   <img
//                     src={`http://localhost:5001/api/product/product-photo/${p._id}`}
//                     className="card-img-top"
//                     alt={p.name}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{p.name}</h5>
//                     <p className="card-text">
//                       {p.description.substring(0, 30)}...
//                     </p>
//                     <p className="card-text"> $ {p.price}</p>
//                     <button
//                       className="btn btn-info ms-1"
//                       onClick={() => navigate(`/product/${p.slug}`)}
//                     >
//                       View Details
//                     </button>
//                     <button className="btn btn-secondary ms-1">
//                       ADD TO CART
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CategoryProduct;



import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.slug) {
      getPrductsByCat();
    }
  }, [params?.slug]);

  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5001/api/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <h2 className="text-center">Category - {category?.name}</h2>
        <h6 className="text-center">{products?.length} result found</h6>
        <div className="row justify-content-center">
          {loading ? (
            <p>Loading products...</p>
          ) : products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={`http://localhost:5001/api/product/product-photo/${product._id}`}
                    alt={product.name}
                    className="card-img-top"
                    style={{ height: "420px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
                      {product.description.length > 70
                        ? `${product.description.substring(0, 70)}...`
                        : product.description}
                    </p>
                    <p className="card-text">${product.price}</p>
                    <div className="mt-auto">
                      <button
                        className="btn btn-info w-100"
                        onClick={() => navigate(`/product/${product.slug}`)}
                      >
                        View Details
                      </button>
                      <button className="btn btn-success w-100 mt-2">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
