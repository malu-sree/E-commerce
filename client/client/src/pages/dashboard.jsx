// // src/pages/Dashboard.jsx
// import React, { useEffect } from "react";
// import Layout from "../components/layout/layout";
// import { useAuth } from "../context/authContext";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const { user } = useAuth(); // Get the user data from AuthContext
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       // If no user is logged in, redirect to login page
//       navigate("/login");
//     }
//   }, [user, navigate]);

//   return (
//     <Layout title="Dashboard - Ecommerce App">
//       <div className="dashboard-container" style={{ padding: "20px" }}>
//         <h1>Welcome to Your Dashboard</h1>
//         {user && (
//           <div>
//             <h3>Hello, {user.name}</h3>
//             <p>Email: {user.email}</p>
//             <p>Role: {user.role}</p>
//             <hr />
//             {user.role === "admin" ? (
//               <div>
//                 <h4>Admin Dashboard</h4>
//                 <p>You can manage the platform from here.</p>
//                 <ul>
//                   <li>Manage Users</li>
//                   <li>Manage Products</li>
//                   <li>View Orders</li>
//                   <li>Analytics</li>
//                 </ul>
//               </div>
//             ) : (
//               <div>
//                 <h4>User Dashboard</h4>
//                 <p>Here you can manage your account and orders.</p>
//                 <ul>
//                   <li>View Orders</li>
//                   <li>Manage Profile</li>
//                   <li>Change Password</li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Dashboard;



// src/pages/dashboard/DashboardPage.js
import React from "react";
import Layout from "./../components/layout/layout";
const Dashboard = () => {
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <h1>Dashborad Page</h1>
    </Layout>
  );
};

export default Dashboard;
