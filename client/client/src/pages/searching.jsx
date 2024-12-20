// import React from "react";
// import Layout from "./../components/Layout/Layout";
// import { useSearch } from "../context/search";

// const Search = () => {
//   const [values, setValues] = useSearch();

//   return (
//     <Layout title={"Search results"}>
//       <div className="container">
//         <div className="text-center">
//           <h1>Search Results</h1>
//           <h6>
//             {values?.results.length < 1
//               ? "No Products Found"
//               : `Found ${values?.results.length} products`}
//           </h6>
//           <div className="row mt-4">
//             {values?.results.map((p) => (
//               <div className="col-md-4" key={p._id}>
//                 <div className="card m-2" style={{ width: "18rem" }}>
//                   <img
//                     src={`http://localhost:5001/api/product/product-photo/${p._id}`}
//                     className="card-img-top"
//                     alt={p.name}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{p.name}</h5>
//                     <p className="card-text">
//                       {p.description
//                         ? p.description.substring(0, 30)
//                         : "No description available"}
//                       ...
//                     </p>
//                     <p className="card-text"> $ {p.price}</p>
//                     <button className="btn btn-primary ms-1">
//                       View Details
//                     </button>
//                     <button className="btn  btn-success ms-1">
//                       ADD TO CART
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Search;

import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [values] = useSearch(); // Use values directly; setValues isn't used here
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length} products`}
          </h6>
          <div className="row mt-4">
            {values?.results.map((p) => (
              <div className="col-md-4" key={p._id}>
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`http://localhost:5001/api/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                      {p.description
                        ? p.description.substring(0, 30)
                        : "No description available"}
                      ...
                    </p>
                    <p className="card-text"> $ {p.price}</p>
                    <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      View Details
                    </button>
                    <button className="btn btn-success ms-1">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
