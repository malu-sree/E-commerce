


// import React, { useState, useEffect } from "react";
// import UserMenu from "../components/layout/userMenu";
// import Layout from "../components/layout/layout";
// import { useAuth } from "../context/authContext"; // Make sure this context returns user
// import axios from "axios";
// import { Form, Button } from "react-bootstrap"; // Importing required components from react-bootstrap

// const Profile = () => {
//   // Destructure only user from context
//   const { user } = useAuth();

//   // State
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [message, setMessage] = useState(""); // For displaying success or error message

//   // Get user data
//   useEffect(() => {
//     if (user) {
//       const { email, name, phone, address } = user;
//       setName(name);
//       setPhone(phone);
//       setEmail(email);
//       setAddress(address);
//     }
//   }, [user]);

//   // Form submit handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Get token from localStorage (no need to parse as JSON)
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setMessage("You need to be logged in to update your profile");
//       return;
//     }

//     try {
//       const { data } = await axios.put(
//         "http://localhost:5001/api/users/profile",
//         {
//           name,
//           email,
//           password,
//           phone,
//           address,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Add token in Authorization header
//           },
//         }
//       );

//       if (data?.error) {
//         setMessage(data?.error); // Set error message
//       } else {
//         // let ls = localStorage.getItem("token");
//         // ls = JSON.parse(ls); // If the token includes user info, you can parse it again
//         // ls.user = data.updatedUser;
//         // localStorage.setItem("token", JSON.stringify(ls)); // Update the token in localStorage
//         setMessage("Profile Updated Successfully"); // Set success message
//       }
//     } catch (error) {
//       console.log(error);
//       setMessage("Something went wrong"); // Set error message on failure
//     }
//   };

//   return (
//     <Layout title={"Your Profile"}>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <UserMenu />
//           </div>
//           <div className="col-md-9">
//             <h1 className="mb-4 center">Your Profile</h1>
//             <div className="form-container">
//               {/* Use Bootstrap grid system to control form width */}
//               <div className="col-md-8 mx-auto">
//                 <Form onSubmit={handleSubmit} className="shadow-lg p-4 rounded">
//                   <Form.Group className="mb-3" controlId="formName">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       placeholder="Enter Your Name"
//                       autoFocus
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="formEmail">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Enter Your Email"
//                       disabled
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="formPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter Your Password"
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="formPhone">
//                     <Form.Label>Phone</Form.Label>
//                     <Form.Control
//                       type="text"
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                       placeholder="Enter Your Phone"
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="formAddress">
//                     <Form.Label>Address</Form.Label>
//                     <Form.Control
//                       type="text"
//                       value={address}
//                       onChange={(e) => setAddress(e.target.value)}
//                       placeholder="Enter Your Address"
//                     />
//                   </Form.Group>

//                   <Button type="submit" variant="info" className="w-100">
//                     UPDATE
//                   </Button>
//                 </Form>
//                 {message && <div className="mt-3 alert alert-info">{message}</div>} {/* Show success/error message */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Profile;



import React, { useState, useEffect } from "react";
import UserMenu from "../components/layout/userMenu";
import Layout from "../components/layout/layout";
import { useAuth } from "../context/authContext"; // Make sure this context returns user
import axios from "axios";
import { Form, Button } from "react-bootstrap"; // Importing required components from react-bootstrap

const Profile = () => {
  // Destructure only user from context
  const { user } = useAuth();

  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState(""); // For displaying success or error message
  const [messageType, setMessageType] = useState("info"); // For message styling

  // Get user data
  useEffect(() => {
    if (user) {
      const { email, name, phone, address } = user;
      setName(name);
      setPhone(phone);
      setEmail(email);
      setAddress(address);
    }
  }, [user]);

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get token from localStorage (no need to parse as JSON)
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("You need to be logged in to update your profile");
      setMessageType("danger");
      return;
    }

    try {
      const { data } = await axios.put(
        "http://localhost:5001/api/users/profile",
        {
          name,
          email,
          password,
          phone,
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token in Authorization header
          },
        }
      );

      if (data?.error) {
        setMessage(data?.error); // Set error message
        setMessageType("danger");
      } else {
        setMessage("Profile Updated Successfully"); // Set success message
        setMessageType("success");
      }
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong"); // Set error message on failure
      setMessageType("danger");
    }
  };

  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="text-center mb-4">
              <h1 className="fw-bold">
                Welcome to Your Profile
                <br />
                <span className="text-success">Update Your Details Below</span>
              </h1>
            </div>
            <div className="form-container">
              {/* Display message at the top */}
              {message && (
                <div
                  className={`alert alert-${messageType} text-center mx-auto col-md-8`}
                  role="alert"
                >
                  {message}
                </div>
              )}
              {/* Use Bootstrap grid system to control form width */}
              <div className="col-md-8 mx-auto">
                <Form onSubmit={handleSubmit} className="shadow-lg p-4 rounded">
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Your Name"
                      autoFocus
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email"
                      disabled
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Your Password"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter Your Phone"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter Your Address"
                    />
                  </Form.Group>

                  <Button type="submit" variant="success" className="w-100">
                    UPDATE
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
