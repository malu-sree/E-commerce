import React, { useState } from "react";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { Button, CircularProgress, Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setMessage("Registration successful! You can now log in.");
    } catch (error) {
      setMessage("Error during registration. Please try again.");
    } finally {
      setLoading(false);
    }
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
    width: "600px",
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
  };

  const loginTitleStyle = {
    textAlign: "center",
    color: "#333",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "30px",
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
        <h2 style={loginTitleStyle}>Create an Account</h2>
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
        <form onSubmit={handleRegister}>
          {/* Username Field */}
          <div className="mb-4">
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaUserAlt color="#6a11cb" />
                  </InputAdornment>
                ),
              }}
            />
          </div>
            <br/>
            <br/>
          {/* Email Field */}
          <div className="mb-4">
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
            />
          </div>
             <br/>
             <br/>
          {/* Password Field */}
          <div className="mb-4">
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
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
            <br/>
            <br/>
          {/* Confirm Password Field */}
          <div className="mb-4">
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLock color="#6a11cb" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
            <br/>
            <br/>
          {/* Submit Button */}
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{
                backgroundColor: "#6a11cb",
                ":hover": {
                  backgroundColor: "#4e0da6",
                },
                padding: "8px 20px",
                fontWeight: "bold",
                fontSize: "0.9rem",
              }}
            >
              {loading ? <CircularProgress size={20} color="inherit" /> : "Register"}
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Register;
