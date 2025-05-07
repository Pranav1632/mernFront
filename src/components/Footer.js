// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Krushak</h3>
          <p>Connecting Farmers, Merchants & Companies across India.</p>
        </div>
        <div className="footer-right">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Krushak | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
