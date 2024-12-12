



// import React, { useState } from "react";
// import Layout from "../../components/layout/layout"; // Adjust the import as per your project structure
// import axios from "axios";
// import { useNavigate,useLocation } from "react-router-dom";
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
// import { useAuth } from "../../context/authContext"; // Import useAuth from AuthContext

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const { login } = useAuth(); // Destructure the login function from AuthContext
//   const navigate = useNavigate();
//   const location=useLocation();

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

//   // Form submission function
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5001/api/users/login", {
//         email,
//         password,
//       });

//       if (res && res.data.token) {
//         login(res.data); // Use login function from AuthContext
//         setMessage("Login successful!");
//         setTimeout(() => navigate(location.state || "/"), 2000); // Redirect after successful login
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
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default Login;


import React, { useState } from "react";
import Layout from "../../components/layout/layout"; // Adjust the import as per your project structure
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../context/authContext"; // Import useAuth from AuthContext

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login } = useAuth(); // Destructure the login function from AuthContext
  const navigate = useNavigate();
  const location = useLocation();

  // Inline style for form-container background
  const formContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flexDirection: "column",
    backgroundColor: "#ffdee9",
    backgroundImage: "linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%)",
    padding: "20px",
  };

  const formStyle = {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    padding: "40px",
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: "500px",
    borderRadius: "8px",
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px solid #000",
    borderRadius: "0",
    width: "100%",
    padding: "10px",
  };

  const buttonStyle = {
    border: "1px solid black",
    borderRadius: "0",
    backgroundColor: "#000",
    color: "white",
    width: "100%",
    padding: "12px",
    cursor: "pointer",
  };

  const forgotPasswordStyle = {
    marginTop: "20px",
    textAlign: "center",
    cursor: "pointer",
    color: "#007bff",
    textDecoration: "underline",
    background: "none",
    border: "none",
    fontSize: "16px",
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

        // Redirect to the previous page or the dashboard after successful login
        // setTimeout(() => navigate(location.state || "/"), 2000); 
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
        {message && (
          <div
            className="success-message"
            style={{ color: "green", fontSize: "18px", marginBottom: "20px" }}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} style={formStyle}>
          <h4
            className="title"
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: "bold",
              fontFamily: "Playfair Display, serif",
            }}
          >
            LOGIN FORM
          </h4>

          {/* Email */}
          <div
            className="mb-3"
            style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
          >
            <FaEnvelope style={{ marginRight: "10px" }} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter Your Email"
              required
              style={inputStyle}
            />
          </div>

          {/* Password */}
          <div
            className="mb-3"
            style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
          >
            <FaLock style={{ marginRight: "10px" }} />
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter Your Password"
              required
              style={inputStyle}
            />
            <div
              onClick={() => setPasswordVisible(!passwordVisible)}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={buttonStyle}
          >
            LOGIN
          </button>

          {/* Forgot Password Button */}
          <button
            type="button"
            style={forgotPasswordStyle}
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </button>

        </form>
      </div>
    </Layout>
  );
};
 export default Login;
