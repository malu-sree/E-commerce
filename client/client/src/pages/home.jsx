// import React from "react";
// import Layout from "./../components/layout/layout";

// const HomePage = () => {
//   return (
//     <Layout>
//       <h1>HomePage</h1>
//     </Layout>
//   );
// };

// export default HomePage;


import React from "react";
import Layout from "./../components/layout/layout";
import { useAuth } from "../context/authContext"; // Import useAuth

const HomePage = () => {
  const { user } = useAuth(); // Get the user from AuthContext

  return (
    <Layout>
      {user ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Welcome, {user.name || "User"}!</h1>
          <p>You are logged in. Enjoy browsing our store!</p>
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

export default HomePage;


