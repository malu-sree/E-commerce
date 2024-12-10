import React, { useState } from "react";
import Layout from "./../../components/layout/layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Inline styles
  const formContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flexDirection: "column",
    backgroundColor: "#f9f9f9",
    padding: "20px",
  };

  const formStyle = {
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 4px 12px",
    padding: "30px",
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "8px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const messageStyle = {
    color: error ? "red" : "green",
    marginBottom: "15px",
    fontSize: "14px",
  };

  // Form submission function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const res = await axios.post("http://localhost:5001/api/users/forgot-password", {
        email,
        newPassword,
        answer,
      });

      if (res && res.data.success) {
        setMessage(res.data.message || "Password reset successful!");
        setTimeout(() => navigate("/login"), 2000); // Navigate to login after success
      } else {
        setError(res.data.message || "Failed to reset password.");
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <Layout title="Forgot Password - E-commerce APP">
      <div style={formContainerStyle}>
        {message && <div style={messageStyle}>{message}</div>}
        <form onSubmit={handleSubmit} style={formStyle}>
          <h4 style={{ textAlign: "center", marginBottom: "20px" }}>RESET PASSWORD</h4>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
            style={inputStyle}
          />

          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter Your Favorite Sport Name"
            required
            style={inputStyle}
          />

          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter Your New Password"
            required
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
