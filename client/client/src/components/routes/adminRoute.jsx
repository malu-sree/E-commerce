import { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext"; // Assuming context is in 'authContext'
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/layout/spinner"; // Assuming you have a Spinner component

const AdminPrivateRoute = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminAuth = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/users/admin-auth"); // Adjusted path
        if (response.data.ok) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
          navigate("/login"); // Redirect to login if not an admin
        }
      } catch (error) {
        console.error("Admin authentication failed:", error);
        setIsAdmin(false);
        navigate("/login"); // Redirect to login if there's an error
      }
    };

    if (auth?.token) {
      checkAdminAuth();
    } else {
      setIsAdmin(false);
      navigate("/login"); // Redirect to login if there's no token
    }
  }, [auth?.token, navigate]);

  return isAdmin ? <Outlet /> : <Spinner />; // Show Spinner while checking admin authentication
};

export default AdminPrivateRoute;
