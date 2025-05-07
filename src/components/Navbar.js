// src/components/Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import krushakLogo from "../pages/images/krushaklogo.jpg";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={krushakLogo} alt="Krushak Logo" className="logo-image" />
        <span className="logo-text">Krushak</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className={location.pathname === "/signup" ? "active" : ""}>
            Signup
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
