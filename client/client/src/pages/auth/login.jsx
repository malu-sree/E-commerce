


// import React, { useState } from "react";
// import Layout from "../../components/layout/layout"; // Adjust the import as per your project structure
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
// import { useAuth } from "../../context/authContext"; // Import useAuth from AuthContext

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const { login } = useAuth(); // Destructure the login function from AuthContext
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Inline style for form-container background
//   const formContainerStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     minHeight: "100vh",
//     flexDirection: "column",
//     backgroundColor: "#ffdee9",
//     backgroundImage: "linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%)",
//     padding: "20px",
//   };

//   const formStyle = {
//     boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
//     padding: "40px",
//     backgroundColor: "#fff",
//     width: "100%",
//     maxWidth: "500px",
//     borderRadius: "8px",
//   };

//   const inputStyle = {
//     border: "none",
//     borderBottom: "2px solid #000",
//     borderRadius: "0",
//     width: "100%",
//     padding: "10px",
//   };

//   const buttonStyle = {
//     border: "1px solid black",
//     borderRadius: "0",
//     backgroundColor: "#000",
//     color: "white",
//     width: "100%",
//     padding: "12px",
//     cursor: "pointer",
//   };

//   const forgotPasswordStyle = {
//     marginTop: "20px",
//     textAlign: "center",
//     cursor: "pointer",
//     color: "#007bff",
//     textDecoration: "underline",
//     background: "none",
//     border: "none",
//     fontSize: "16px",
//   };

//   // Form submission function
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5001/api/users/login", {
//         email,
//         password,
//       });

//       if (res && res.data.token) {
//         // Store the token in localStorage
//         localStorage.setItem("token", res.data.token);
//         localStorage.setItem('isAdmin', res.data.isAdmin);

//         // Optionally, store the user data in context or update the global state
//         login(res.data);

//         setMessage("Login successful!");

//         if (res.data.isAdmin) {
//           navigate('/admin/dashboard');
//         } else {
//           navigate('/user/dashboard');
//         }

//         // Redirect to the previous page or the dashboard after successful login
//         // setTimeout(() => navigate(location.state || "/"), 2000); 
//       } else {
//         setMessage(res.data?.message || "Failed to login.");
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <Layout title="Login - E-commerce App">
//       <div className="form-container" style={formContainerStyle}>
//         {message && (
//           <div
//             className="success-message"
//             style={{ color: "green", fontSize: "18px", marginBottom: "20px" }}
//           >
//             {message}
//           </div>
//         )}
//         <form onSubmit={handleSubmit} style={formStyle}>
//           <h4
//             className="title"
//             style={{
//               textAlign: "center",
//               marginBottom: "20px",
//               fontWeight: "bold",
//               fontFamily: "Playfair Display, serif",
//             }}
//           >
//             LOGIN FORM
//           </h4>

//           {/* Email */}
//           <div
//             className="mb-3"
//             style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
//           >
//             <FaEnvelope style={{ marginRight: "10px" }} />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//               placeholder="Enter Your Email"
//               required
//               style={inputStyle}
//             />
//           </div>

//           {/* Password */}
//           <div
//             className="mb-3"
//             style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
//           >
//             <FaLock style={{ marginRight: "10px" }} />
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control"
//               placeholder="Enter Your Password"
//               required
//               style={inputStyle}
//             />
//             <div
//               onClick={() => setPasswordVisible(!passwordVisible)}
//               style={{ cursor: "pointer", marginLeft: "10px" }}
//             >
//               {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="btn btn-primary"
//             style={buttonStyle}
//           >
//             LOGIN
//           </button>

//           {/* Forgot Password Button */}
//           <button
//             type="button"
//             style={forgotPasswordStyle}
//             onClick={() => navigate("/forgot-password")}
//           >
//             Forgot Password?
//           </button>

//         </form>
//       </div>
//     </Layout>
//   );
// };
//  export default Login;

import React, { useState } from "react";
import Layout from "../../components/layout/layout"; 
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../context/authContext"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login } = useAuth(); 
  const navigate = useNavigate();
  const location = useLocation();

  // Inline style for form-container background
  const formContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(45deg, #f5f5f5, #e0e0e0)", // Light gradient background
  };

  const formStyle = {
    backgroundColor: "#ffffff", // White form background for contrast
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Slightly more pronounced shadow
    width: "100%",
    maxWidth: "450px",
  };

  const inputStyle = {
    border: "1px solid #f0a500", // Amber color border
    borderRadius: "4px",
    padding: "12px 15px",
    marginBottom: "20px",
    width: "100%",
    backgroundColor: "#f1f1f1", // Light grey background for inputs
  };

  const buttonStyle = {
    backgroundColor: "black", // Amber background for the button
    border: "1px solid #f0a500",
    borderRadius: "4px",
    padding: "12px 15px",
    width: "100%",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const forgotPasswordStyle = {
    marginTop: "15px",
    textAlign: "center",
    cursor: "pointer",
    color: "#f0a500", // Amber color for "Forgot Password?"
    fontSize: "14px",
  };

  // Form submission function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/users/login", {
        email,
        password,
      });

      if (res && res.data.token) {
        // Store the token in localStorage
        localStorage.setItem("token", res.data.token);
        localStorage.setItem('isAdmin', res.data.isAdmin);

        // Optionally, store the user data in context or update the global state
        login(res.data);

        setMessage("Login successful!");

        if (res.data.isAdmin) {
          navigate('/admin/dashboard');
        } else {
          navigate('/user/dashboard');
        }

      } else {
        setMessage(res.data?.message || "Failed to login.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <Layout title="Login - E-commerce App">
      <div className="form-container" style={formContainerStyle}>
        <div className="card shadow-sm" style={formStyle}>
          <h1 className="text-center mb-4" style={{ color: "black" }}>
            Login - E-commerce App
          </h1>
          
          {message && (
            <div
              className="alert alert-success"
              style={{ color: "green", marginBottom: "20px", textAlign: "center" }}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ color: "black" }}>
                <FaEnvelope /> Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter your email"
                required
                style={inputStyle}
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ color: "black" }}>
                <FaLock /> Password
              </label>
              <div className="d-flex align-items-center">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter your password"
                  required
                  style={inputStyle}
                />
                <div
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  style={{ cursor: "pointer", marginLeft: "10px", color: "#f0a500" }}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-primary btn-block"
              style={buttonStyle}
            >
              LOGIN
            </button>

            {/* Forgot Password */}
            <div style={forgotPasswordStyle}>
              <a href="/forgot-password" className="text-decoration-none" style={{ color: "#f0a500" }}>
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
