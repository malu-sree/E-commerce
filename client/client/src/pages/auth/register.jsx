// import React, { useState } from "react";
// import Layout from "./../../components/layout/layout";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// //import "../../styles/authStyles.css";
// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const navigate = useNavigate();

//   // form function
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/v1/auth/register", {
//         name,
//         email,
//         password,
//         phone,
//         address,
//       });
//       if (res && res.data.success) {
//         toast.success(res.data && res.data.message);
//         navigate("/login");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <Layout title="Register - Ecommer App">
//       <div className="form-container ">
//         <form onSubmit={handleSubmit}>
//           <h4 className="title">REGISTER FORM</h4>
//           <div className="mb-3">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Name"
//               required
//               autoFocus
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Email "
//               required
//             />
//           </div>
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
//           <div className="mb-3">
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Phone"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Address"
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             REGISTER
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default Register;



import React, { useState } from "react";
import Layout from "./../../components/layout/layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  // Form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace the path with the full localhost URL for your backend API
      const res = await axios.post("http://localhost:5001/api/users/register", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Inline styles
  const formContainerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "70vh",
    flexDirection: "column",
    backgroundColor: "#ffdee9",
    backgroundImage: "linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%)",
  };

  const formStyles = {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    padding: "20px",
    backgroundColor: "#fff",
  };

  const titleStyles = {
    textAlign: "center",
    marginBottom: "15px",
    fontWeight: "bold",
    fontFamily: "'Playfair Display', serif",
  };

  const inputStyles = {
    border: "none",
    borderBottom: "1px solid #000",
    borderRadius: "0",
  };

  const buttonStyles = {
    border: "1px solid black",
    borderRadius: "0",
    backgroundColor: "#000",
    color: "white",
    width: "250px",
  };

  const buttonHoverStyles = {
    border: "1px solid black",
    background: "linear-gradient(to right, #434343, #000000)",
  };

  return (
    <Layout title="Register - Ecommer App">
      <div style={formContainerStyles}>
        <form onSubmit={handleSubmit} style={formStyles}>
          <h4 style={titleStyles}>REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              style={inputStyles}
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              style={inputStyles}
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              style={inputStyles}
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              style={inputStyles}
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              style={inputStyles}
              placeholder="Enter Your Address"
              required
            />
          </div>
          <button
            type="submit"
            style={buttonStyles}
            onMouseOver={(e) => (e.target.style = buttonHoverStyles)}
            onMouseOut={(e) => (e.target.style = buttonStyles)}
          >
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
