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

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "url('https://your-image-url.com/image.jpg') no-repeat center center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Roboto', sans-serif",
        padding: "20px",
      }}
    >
      <div
        className="card shadow-lg p-5"
        style={{
          width: "600px",
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2
          className="text-center mb-5"
          style={{
            color: "#4a4a4a",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Create an Account
        </h2>
        {message && (
          <div
            className="alert text-center mb-4"
            style={{
              color: message.includes("successful") ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleRegister}>
          {/* Username */}
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

          {/* Email */}
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
          {/* Password */}
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
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <br/>
          <br/>
          {/* Confirm Password */}
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
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      edge="end"
                    >
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
          <br/>
          <br/>
        </form>
      </div>
    </div>
  );
};

export default Register;
