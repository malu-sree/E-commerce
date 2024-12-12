// import { useState, useEffect } from "react";
// import { useAuth } from "../../context/authContext"; // Assuming context is in 'authContext'
// import { Outlet, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Spinner from "../../components/layout/spinner"; // Assuming you have a Spinner component

// const AdminPrivateRoute = () => {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const { auth } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkAdminAuth = async () => {
//       try {
//         const response = await axios.get("http://localhost:5001/api/users/admin-auth"); // Adjusted path
//         if (response.data.ok) {
//           setIsAdmin(true);
//         } else {
//           setIsAdmin(false);
//           navigate("/login"); // Redirect to login if not an admin
//         }
//       } catch (error) {
//         console.error("Admin authentication failed:", error);
//         setIsAdmin(false);
//         navigate("/login"); // Redirect to login if there's an error
//       }
//     };

//     if (auth?.token) {
//       checkAdminAuth();
//     } else {
//       setIsAdmin(false);
//       navigate("/login"); // Redirect to login if there's no token
//     }
//   }, [auth?.token, navigate]);

//   return isAdmin ? <Outlet /> : <Spinner />; // Show Spinner while checking admin authentication
// };

// export default AdminPrivateRoute;


import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/authContext'; // Import the AuthContext

function PrivateRoute({ adminOnly }) {
  const { user } = useContext(AuthContext); // Access user data from context

  // Redirect to login if not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If it's an admin route, check if the user is an admin
  if (adminOnly && !user.isAdmin) {
    return <Navigate to="/user/dashboard" />;
  }

  // If it's a user route, check if the user is logged in (adminOnly will be false)
  if (!adminOnly && user.isAdmin) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
