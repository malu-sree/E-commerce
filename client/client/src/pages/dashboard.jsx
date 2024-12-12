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



// // src/pages/dashboard/DashboardPage.js
// import React from "react";
// import Layout from "./../components/layout/layout";
// const Dashboard = () => {
//   return (
//     <Layout title={"Dashboard - Ecommerce App"}>
//       <h1>Dashborad Page</h1>
//     </Layout>
//   );
// };

// export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function UserDashboard() {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get('/api/v1/user/dashboard', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error('Error fetching user data', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   return (
//     <div>
//       <h1>User Dashboard</h1>
//       {userData ? (
//         <div>
//           <h2>User Info: {userData.name}</h2>
//           <p>Email: {userData.email}</p>
//           <p>Phone: {userData.phone}</p>
//           <p>Address: {userData.address}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default UserDashboard;

import React from "react";
import Layout from "../components/Layout/Layout";
import UserMenu from "../components/layout/userMenu";
import { useAuth } from "../context/authContext";
const Dashboard = () => {
  const auth = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>Name: {auth?.user?.name}</h3>
              <h3>Eamil: {auth?.user?.email}</h3>
              <h3>Address: {auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;