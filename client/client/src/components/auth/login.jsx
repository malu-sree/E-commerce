import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Button, TextField, CircularProgress, Box, InputAdornment, IconButton } from "@mui/material";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      setMessage("Login successful!");
    } catch (err) {
      setMessage("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const waveStyle = {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    overflow: "hidden",
  };

  const waveAnimation = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "200%",
    height: "200%",
    background: "radial-gradient(circle, rgba(0, 0, 0, 0.5) 25%, white 100%)",
    animation: "move-waves 8s linear infinite",
    zIndex: 1,
  };

  const waveAnimationAfter = {
    ...waveAnimation,
    animationDelay: "4s",
  };

  const loginContainerStyle = {
    position: "relative",
    zIndex: 2,
    width: "400px",
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
  };

  const loginTitleStyle = {
    textAlign: "center",
    color: "#333",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const formFieldStyle = {
    marginBottom: "20px",
  };

  const submitButtonStyle = {
    backgroundColor: "#6a11cb",
    fontWeight: "bold",
    fontSize: "1rem",
    padding: "8px 16px",
    transition: "background-color 0.3s ease",
  };

  const submitButtonHoverStyle = {
    backgroundColor: "#4e0da6",
  };

  const alertStyle = {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const alertSuccessStyle = {
    color: "green",
  };

  const alertErrorStyle = {
    color: "red",
  };

  return (
    <div style={waveStyle}>
      <div style={waveAnimation} />
      <div style={waveAnimationAfter} />
      <div style={loginContainerStyle}>
        <h2 style={loginTitleStyle}>Login</h2>
        {message && (
          <div
            style={{
              ...alertStyle,
              ...(message.includes("successful") ? alertSuccessStyle : alertErrorStyle),
            }}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div style={formFieldStyle}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaEnvelope color="#6a11cb" />
                  </InputAdornment>
                ),
              }}
              required
            />
          </div>

          {/* Password Field */}
          <div style={formFieldStyle}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLock color="#6a11cb" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? (
                        <AiFillEye color="#6a11cb" />
                      ) : (
                        <AiFillEyeInvisible color="#6a11cb" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />
          </div>

          {/* Submit Button */}
          <Box display="flex" justifyContent="center" marginTop="20px">
            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{
                ...submitButtonStyle,
                ":hover": submitButtonHoverStyle,
              }}
            >
              {loading ? <CircularProgress size={20} color="inherit" /> : "Login"}
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Login;
