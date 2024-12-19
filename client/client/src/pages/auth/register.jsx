




// import React, { useState } from "react";
// import Layout from "./../../components/layout/layout";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";  // Importing icons

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [message, setMessage] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);  // State for password visibility
//   const [answer, setAnswer] = useState("");
//   const navigate = useNavigate();

//   // Inline style for form-container background
//   const formContainerStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     minHeight: "100vh",
//     flexDirection: "column",
//     backgroundColor: "#ffdee9",
//     backgroundImage: "linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%)",
//     padding: "20px"
//   };

//   // Inline styles for the form itself
//   const formStyle = {
//     boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
//     padding: "40px",
//     backgroundColor: "#fff",
//     width: "100%",
//     maxWidth: "500px",
//     borderRadius: "8px",
//   };

//   // Inline styles for the form inputs
//   const inputStyle = {
//     border: "none",
//     borderBottom: "2px solid #000",
//     borderRadius: "0",
//     width: "100%",
//     padding: "10px",
//   };

//   // Inline styles for the button
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
//       const res = await axios.post("http://localhost:5001/api/users/register", {
//         name,
//         email,
//         password,
//         phone,
//         address,
//         answer
//       });
//       if (res && res.status === 201) {
//         setMessage("User registered successfully!");
//         setTimeout(() => navigate("/login"), 2000);
//       } else {
//         setMessage(res.data?.message || "Failed to register.");
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <Layout title="Register - E-commerce App">
//       <div className="form-container" style={formContainerStyle}>
//         {message && <div className="success-message" style={{ color: "green", fontSize: "18px", marginBottom: "20px" }}>{message}</div>}
//         <form onSubmit={handleSubmit} style={formStyle}>
//           <h4 className="title" style={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold", fontFamily: "Playfair Display, serif" }}>REGISTER FORM</h4>

//           {/* Name */}
//           <div className="mb-3" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
//             <FaUser style={{ marginRight: "10px" }} />
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="form-control"
//               placeholder="Enter Your Name"
//               required
//               style={inputStyle}
//             />
//           </div>

//           {/* Email */}
//           <div className="mb-3" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
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

//           {/* Phone */}
//           <div className="mb-3" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
//             <FaPhone style={{ marginRight: "10px" }} />
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="form-control"
//               placeholder="Enter Your Phone"
//               required
//               style={inputStyle}
//             />
//           </div>

//           {/* Address */}
//           <div className="mb-3" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
//             <FaMapMarkerAlt style={{ marginRight: "10px" }} />
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="form-control"
//               placeholder="Enter Your Address"
//               required
//               style={inputStyle}
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-3" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
//           <FaLock style={{ marginRight: "10px" }} />
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control"
//               placeholder="Enter Your Password"
//               required
//               style={inputStyle}
//             />
//             <div onClick={() => setPasswordVisible(!passwordVisible)} style={{ cursor: "pointer", marginLeft: "10px" }}>
//               {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//             </div>
//           </div>

//           <div className="mb-3" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
//             <input
//               type="text"
//               value={answer}
//               onChange={(e) => setAnswer(e.target.value)}
//               className="form-control"
            
//               placeholder="What is Your Favorite sports"
//               required
//               style={inputStyle}
//             />
//    </div>
//           <button
//             type="submit"
//             className="btn btn-primary"
//             style={buttonStyle}
//           >
//            SIGN UP
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default Register;



import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEye, FaEyeSlash, FaLock, FaRegQuestionCircle } from "react-icons/fa"; // Updated icon import

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // Inline style for form-container background
  const formContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(45deg, #f5f5f5, #e0e0e0)", // Light gradient background
  };

  // Inline styles for the form itself
  const formStyle = {
    backgroundColor: "#ffffff", // White form background for contrast
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Slightly more pronounced shadow
    width: "100%",
    maxWidth: "450px",
  };

  // Inline styles for the form inputs
  const inputStyle = {
    border: "1px solid #f0a500", // Amber color border
    borderRadius: "4px",
    padding: "12px 15px",
    marginBottom: "20px",
    width: "100%",
    backgroundColor: "#f1f1f1", // Light grey background for inputs
  };

  // Inline styles for the button
  const buttonStyle = {
    backgroundColor: "black", // White background for button
    border: "1px solid #f0a500", // Amber border for button
    borderRadius: "4px",
    padding: "12px 15px",
    width: "100%",
    color: "#fff", // Black text color for the button
    fontWeight: "bold",
    cursor: "pointer",
  };

  // Form submission function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/users/register", {
        name,
        email,
        password,
        phone,
        address,
        answer
      });
      if (res && res.status === 201) {
        setMessage("User registered successfully!");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage(res.data?.message || "Failed to register.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <Layout title="Register - E-commerce App">
      <div className="form-container" style={formContainerStyle}>
        {message && <div className="success-message" style={{ color: "green", fontSize: "18px", marginBottom: "20px" }}>{message}</div>}
        <form onSubmit={handleSubmit} style={formStyle}>
          <h4 className="title" style={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold", fontFamily: "Playfair Display, serif", color: "black" }}>Sign Up- - E-commerce App</h4>

          {/* Name */}
          <div className="mb-3" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
            <FaUser style={{ marginRight: "10px", color: "black" }} />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter Your Name"
              required
              style={inputStyle}
            />
          </div>

          {/* Email */}
          <div className="mb-3" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
            <FaEnvelope style={{ marginRight: "10px", color: "black" }} />
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

          {/* Phone */}
          <div className="mb-3" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
            <FaPhone style={{ marginRight: "10px", color: "black" }} />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="Enter Your Phone"
              required
              style={inputStyle}
            />
          </div>

          {/* Address */}
          <div className="mb-3" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
            <FaMapMarkerAlt style={{ marginRight: "10px", color: "black" }} />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              placeholder="Enter Your Address"
              required
              style={inputStyle}
            />
          </div>

          {/* Password */}
          <div className="mb-3" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <FaLock style={{ marginRight: "10px", color: "black" }} />
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter Your Password"
              required
              style={inputStyle}
            />
            <div onClick={() => setPasswordVisible(!passwordVisible)} style={{ cursor: "pointer", marginLeft: "10px", color: "#f0a500" }}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {/* Security Answer */}
          <div className="mb-3" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
            <FaRegQuestionCircle style={{ marginRight: "10px", color: "black" }} />
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              placeholder="What is Your Favorite Sport?"
              required
              style={inputStyle}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary"
            style={buttonStyle}
          >
            SIGN UP
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
