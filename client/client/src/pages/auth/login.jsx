



// import React, { useState } from "react";
// import Layout from "../../components/layout/layout";  // Adjust the import as per your project structure
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");  // State for message display
//   const [messageType, setMessageType] = useState("");  // State to track message type ('success' or 'error')
//   const navigate = useNavigate();

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5001/api/users/login", {
//         email,
//         password,
//       });

//       if (res && res.data.token) {
//         // Save the token in localStorage (or sessionStorage, depending on your needs)
//         localStorage.setItem("token", res.data.token);

//         // Set success message
//         setMessage("Login successful!");
//         setMessageType("success");

//         // Navigate to homepage after successful login
//         setTimeout(() => navigate('/'), 2000);
//       } else {
//         // Set error message
//         setMessage(res.data.message || "Login failed.");
//         setMessageType("error");
//       }
//     } catch (error) {
//       console.log(error);
//       // Set error message if something goes wrong
//       setMessage("Something went wrong. Please try again.");
//       setMessageType("error");
//     }
//   };

//   return (
//     <Layout title="Login - E-commerce App">
//       <div className="form-container" style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
        
//         {/* Display success or error message */}
//         {message && (
//           <div 
//             className={`alert ${messageType === "success" ? "alert-success" : "alert-danger"}`} 
//             role="alert"
//             style={{ marginBottom: "20px" }}
//           >
//             {message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <h4 className="title" style={{ textAlign: "center", marginBottom: "20px" }}>
//             LOGIN FORM
//           </h4>

//           {/* Email Input */}
//           <div className="mb-3">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Email"
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-3">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Enter Your Password"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
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
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa"; // Importing icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const navigate = useNavigate();

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

  // Inline styles for the form itself
  const formStyle = {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    padding: "40px",
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: "500px",
    borderRadius: "8px",
  };

  // Inline styles for the form inputs
  const inputStyle = {
    border: "none",
    borderBottom: "2px solid #000",
    borderRadius: "0",
    width: "100%",
    padding: "10px",
  };

  // Inline styles for the button
  const buttonStyle = {
    border: "1px solid black",
    borderRadius: "0",
    backgroundColor: "#000",
    color: "white",
    width: "100%",
    padding: "12px",
    cursor: "pointer",
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
        setMessage("Login successful!");
        localStorage.setItem("token", res.data.token); // Save token in localStorage
        setTimeout(() => navigate("/"), 2000); // Redirect after successful login
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
        {message && <div className="success-message" style={{ color: "green", fontSize: "18px", marginBottom: "20px" }}>{message}</div>}
        <form onSubmit={handleSubmit} style={formStyle}>
          <h4 className="title" style={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold", fontFamily: "Playfair Display, serif" }}>LOGIN FORM</h4>

          {/* Email */}
          <div className="mb-3" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
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
          <div className="mb-3" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
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
            <div onClick={() => setPasswordVisible(!passwordVisible)} style={{ cursor: "pointer", marginLeft: "10px" }}>
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
        </form>
      </div>
    </Layout>
  );
};

export default Login;
