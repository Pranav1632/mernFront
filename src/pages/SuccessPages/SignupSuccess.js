// src/pages/SuccessPages/SignupSuccess.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./SuccessPage.css"; // Create this CSS file for styling

const SignupSuccess = () => {
  return (
    <>
      <Navbar />

      <div className="success-container">
        <h1>Signup Successful! 🎉</h1>
        <p>Thank you for joining Krushak. You can now log in and start using the platform.</p>
        <Link to="/login" className="success-button">
          Go to Login
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default SignupSuccess;
