// import React from "react";
// import { Link } from "react-router-dom";
// import Layout from "./../components/layout/layout";

// const Pagenotfound = () => {
//   return (
//     <Layout>
//       <div className="pnf">
//         <h1 className="pnf-title">404</h1>
//         <h2 className="pnf-heading">Oops ! Page Not Found</h2>
//         <Link to="/" className="pnf-btn">
//           Go Back
//         </Link>
//       </div>
//     </Layout>
//   );
// };

// export default Pagenotfound;

import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/layout/layout";

const Pagenotfound = () => {
  const pnfContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
    padding: "20px",
  };

  const titleStyle = {
    fontSize: "8rem",
    fontWeight: "bold",
    color: "#e74c3c", // Red for the 404 error code for emphasis
    marginBottom: "20px",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "500",
    color: "#333",
    marginBottom: "30px",
  };

  const buttonStyle = {
    padding: "12px 25px",
    fontSize: "1.2rem",
    fontWeight: "600",
    backgroundColor: "#3498db", // Blue color for the button
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    transition: "all 0.3s ease-in-out",
  };

  const buttonHoverStyle = {
    backgroundColor: "#2980b9", // Darker blue on hover
  };

  return (
    <Layout>
      <div className="pnf" style={pnfContainer}>
        <h1 className="pnf-title" style={titleStyle}>404</h1>
        <h2 className="pnf-heading" style={headingStyle}>Oops! Page Not Found</h2>
        <Link
          to="/"
          className="pnf-btn"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
