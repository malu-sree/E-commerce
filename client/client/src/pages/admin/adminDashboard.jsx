// import React from 'react'
// import Layout from '../../components/layout/layout'
// import AdminMenu from '../../components/layout/adminMenu'
// function AdminDashboard() {
//   return (
//     <div>

      
//        <Layout title={"Dashboard - Ecommerce App"}>
//       <h1> admin Dashborad Page</h1>
//     </Layout>
//     </div>
//   )
// }

//  export default AdminDashboard


// import React from "react";
// import Layout from "../../components/layout/layout"; // Ensure this points to your Layout component
// import AdminMenu from "../../components/layout/adminMenu";


// const AdminDashboard = () => {
//   return (
//     <Layout>
//       <div className="container mt-4">
//         <div className="row">
//           {/* Admin Menu */}
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>

//           {/* Admin Content */}
//           <div className="col-md-9">
//             <h1>Welcome to the Admin Dashboard</h1>
//             <p>Select an option from the menu to manage categories, products, or users.</p>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AdminDashboard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function AdminDashboard() {
//   const [adminData, setAdminData] = useState(null);

//   useEffect(() => {
//     const fetchAdminData = async () => {
//       try {
//         const response = await axios.get('/api/v1/admin/dashboard', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         setAdminData(response.data);
//       } catch (error) {
//         console.error('Error fetching admin data', error);
//       }
//     };
//     fetchAdminData();
//   }, []);

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       {adminData ? (
//         <div>
//           <h2>Admin Info: {adminData.name}</h2>
//           <p>Total Users: {adminData.totalUsers}</p>
//           <p>Total Orders: {adminData.totalOrders}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default AdminDashboard;

import React from "react";
import AdminMenu from "../../components/layout/adminMenu"; // Admin navigation menu
import Layout from "../../components/Layout/Layout"; // General layout component
import { useAuth } from "../../context/authContext"; // Import custom authentication context

const AdminDashboard = () => {
  const auth = useAuth(); // Destructure user data from auth context

  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          {/* Sidebar Menu */}
          <div className="col-md-3">
            <AdminMenu />
          </div>

          {/* Admin Details */}
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>Admin Name: {auth?.user?.name || "N/A"}</h3>
              <h3>Admin Email: {auth?.user?.email || "N/A"}</h3>
              <h3>Admin Contact: {auth?.user?.phone || "N/A"}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
