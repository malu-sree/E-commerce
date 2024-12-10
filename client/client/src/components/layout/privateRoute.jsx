


// // src/components/layout/privateRoute.jsx
// import { useState, useEffect } from "react";
// import { useAuth } from "../../context/authContext"; // Ensure this import is correct
// import { Outlet } from "react-router-dom";
// import axios from "axios";
// import Spinner from "./spinner";

// export default function PrivateRoute() {
//   const [ok, setOk] = useState(false);
//   const { token } = useAuth(); // Destructure token from useAuth

//   useEffect(() => {
//     const authCheck = async () => {
//       const res = await axios.get("http://localhost:5001/api/users/dash", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`, // Use token in the Authorization header
//         },
//       });

//       if (res.data.ok) {
//         setOk(true);
//       } else {
//         setOk(false);
//       }
//     };

//     if (token) {
//       authCheck();
//     }
//   }, [token]);

//   return ok ? <Outlet /> : <Spinner />;
// }


// import { useState, useEffect } from "react";
// import { useAuth } from "../../context/authContext"; // Ensure this import is correct
// import { Outlet, Route, Routes } from "react-router-dom";
// import axios from "axios";
// import Spinner from "./spinner";
// import About from "../../pages/about";
// import Dashboard from "../../pages/dashboard";

// export default function PrivateRoute() {
//   const [ok, setOk] = useState(false);
//   const { token } = useAuth(); // Destructure token from useAuth

//   useEffect(() => {
//     const authCheck = async () => {
//       try {
//         const res = await axios.get("http://localhost:5001/api/users/dash", {
//           headers: {
//             Authorization: `Bearer ${token || localStorage.getItem('token')}`, // Use token from context or fallback to localStorage
//           },
//         });

//         if (res.data.ok) {
//           setOk(true);
//         } else {
//           setOk(false);
//         }
//       } catch (error) {
//         console.error(error.response ? error.response.data : error.message);
//         setOk(false); // If error occurs, don't allow access to the private route
//       }
//     };

//     if (token || localStorage.getItem('token')) {
//       authCheck();
//     }
//   }, [token]); // Add token as dependency to re-run effect on token change

//   return (
//     <>
//     <a href="/dashboard/abouts">Abouts</a>
//     <a href="/dashboard/dashs">dashboard</a>
//     <Routes>
//       <Route path="/abouts" element={<About/>}/>
//     </Routes>
//     <Routes>
//       <Route path="/dashs" element={<Dashboard/>}/>
//     </Routes>
//     </>
//   )

// }



