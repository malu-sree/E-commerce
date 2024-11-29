// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// // Create the root element for the app
// const root = createRoot(document.getElementById('root'));

// root.render(
//   <StrictMode>
//     <BrowserRouter> {/* Wrap the App component with BrowserRouter */}
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext"; // Import AuthProvider
import "./index.css"; // Import global styles

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap the app with AuthProvider */}
      <BrowserRouter> {/* Wrap the app with BrowserRouter */}
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
