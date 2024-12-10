


import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { useAuth } from "../../context/authContext"; // Import useAuth from AuthContext

const Header = () => {
  const { user, logout } = useAuth(); // Destructure user and logout from AuthContext

  const linkStyle = {
    color: "#fff",
    fontSize: "1.2rem",
    textDecoration: "none",
  };

  const linkHoverStyle = {
    color: "#f0a500",
  };

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <GiShoppingBag style={{ fontSize: "2rem", marginRight: "8px" }} />
              <span>Ecommerce App</span>
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  style={({ isActive }) => ({
                    ...linkStyle,
                    ...(isActive ? linkHoverStyle : {}),
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/category"
                  className="nav-link"
                  style={({ isActive }) => ({
                    ...linkStyle,
                    ...(isActive ? linkHoverStyle : {}),
                  })}
                >
                  Category
                </NavLink>
              </li>
              {!user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link"
                      style={({ isActive }) => ({
                        ...linkStyle,
                        ...(isActive ? linkHoverStyle : {}),
                      })}
                    >
                      Sign up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      style={({ isActive }) => ({
                        ...linkStyle,
                        ...(isActive ? linkHoverStyle : {}),
                      })}
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <span
                      className="nav-link"
                      style={{
                        ...linkStyle,
                        cursor: "pointer",
                      }}
                      onClick={handleLogout}
                    >
                      Logout
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      className="nav-link"
                      style={{
                        color: "#f0a500",
                        fontSize: "1.2rem",
                      }}
                    >
                      Hello, {user.name || "User"}
                    </span>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink
                  to="/cart"
                  className="nav-link"
                  style={({ isActive }) => ({
                    ...linkStyle,
                    ...(isActive ? linkHoverStyle : {}),
                  })}
                >
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

