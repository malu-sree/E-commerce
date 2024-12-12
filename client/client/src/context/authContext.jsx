// // src/context/AuthContext.js
import React, { createContext, useState, useContext } from "react";

 export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); // Set logged-in user data
    localStorage.setItem("user", JSON.stringify(userData)); // Save to local storage
  };

  const logout = () => {
    setUser(null); // Clear user data
    localStorage.removeItem("user"); // Clear local storage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);


//src/context/AuthContext.js
// import React, { createContext, useState, useContext, useEffect } from "react";
// import axios from "axios"; // Assuming you are using axios for API requests

// const AuthContext = createContext();

// // Provider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     const savedToken = localStorage.getItem("token");
    
//     if (savedUser && savedToken) {
//       setUser(JSON.parse(savedUser));
//       setToken(savedToken); // Load the saved token from localStorage
//     }
//   }, []);

//   const login = (userData, userToken) => {
//     setUser(userData);
//     setToken(userToken); // Save the token in state
//     localStorage.setItem("user", JSON.stringify(userData)); // Save user data in localStorage
//     localStorage.setItem("token", userToken); // Save the token in localStorage
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null); // Clear the token from state
//     localStorage.removeItem("user"); // Remove user data from localStorage
//     localStorage.removeItem("token"); // Remove token from localStorage
//   };

//   // Axios configuration to include the token in headers for authenticated requests
//   const api = axios.create({
//     baseURL: "http://localhost:5001/api", // Adjust your base API URL here
//     headers: {
//       Authorization: token ? `Bearer ${token}` : "", // Include token in Authorization header
//     },
//   });

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout, api }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use AuthContext
// export const useAuth = () => useContext(AuthContext);



