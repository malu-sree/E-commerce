


// import React from "react";
// import Layout from "./../components/layout/layout";
// import { useAuth } from "../context/authContext"; // Import useAuth



// const HomePage = () => {
//   const { user } = useAuth(); // Get the user from AuthContext

//   return (
//     <Layout>
//       {user ? (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//           <h1>Welcome, {user.name || "User"}!</h1>
//           <p>You are logged in. Enjoy browsing our store!</p>
//         </div>
//       ) : (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//           <h1>Welcome to Our E-commerce App!</h1>
//           <p>
//             Please <a href="/login">Login</a> or <a href="/register">Register</a> to access more features.
//           </p>
//         </div>
//       )}
//     </Layout>
//   );
// };

// export default HomePage;


import React from "react";
import Layout from "./../components/layout/layout";
import { useAuth } from "../context/authContext"; // Import useAuth
import { Link } from "react-router-dom";

const HomePage = () => {
  const { user } = useAuth(); // Get the user from AuthContext

  return (
    <Layout>
      {user ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Welcome, {user.name || "User"}!</h1>
          <p>You are logged in. Enjoy browsing our store!</p>
          {user.isAdmin ? (
            <Link to="/admin/dashboard">
              <button style={buttonStyle}>Go to Admin Dashboard</button>
            </Link>
          ) : (
            <Link to="/user/dashboard">
              <button style={buttonStyle}>Go to User Dashboard</button>
            </Link>
          )}
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Welcome to Our E-commerce App!</h1>
          <p>
            Please <a href="/login">Login</a> or <a href="/register">Register</a> to access more features.
          </p>
        </div>
      )}
    </Layout>
  );
};

// Inline styling for the button
const buttonStyle = {
  padding: "10px 20px",
  marginTop: "20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default HomePage;
