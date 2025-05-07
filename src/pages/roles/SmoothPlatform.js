import React from "react";
import Navbar from "../../components/Navbar"; // Assuming Navbar is in components
import Footer from "../../components/Footer"; // Assuming Footer is in components
import './RoleDetail.css'; // Assuming the CSS for role details is here
import smoothPlatformImg from "../images/image1.jpg"; // Adjust path for your image

const SmoothPlatform = () => {
  return (
    <div className="role-detail">
      <Navbar /> {/* Using existing Navbar */}
      
      <div className="role-header">
        <h1>SMOOTH PLATFORM</h1>
        <p>Providing farmers with a seamless platform for selling their crops globally.</p>
        
      </div>

      <div className="role-content">
        <img src={smoothPlatformImg} alt="Smooth Platform" className="role-photo" />
        <p className="role-description">
          Our platform aims to give farmers the power to sell their crops directly to a global market, cutting down intermediaries
          and maximizing profits. The platform is designed to be user-friendly and efficient, making it accessible for farmers at all levels.
        </p>
      </div>

      <div className="role-footer">
        <a href="/">Back to Home</a>
      </div>

      <Footer /> {/* Using existing Footer */}
    </div>
  );
};

export default SmoothPlatform;
