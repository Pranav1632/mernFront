import React from "react";
import Navbar from "../../components/Navbar"; // Navbar from components
import Footer from "../../components/Footer"; // Footer from components
import './RoleDetail.css'; // Shared role detail styling
import qualityImg from "../images/image6.png"; // Adjusted image path

const QualityEnsuring = () => {
  return (
    <div className="role-detail">
      <Navbar /> {/* Navbar included */}

      <div className="role-header">
        <h1>QUALITY ENSURING</h1>
        <p>We guarantee only top-quality produce reaches buyers through verified processes.</p>
      </div>

      <div className="role-content">
        <img src={qualityImg} alt="Quality Ensuring" className="role-photo" />
        <p className="role-description">
          We ensure only high-quality, certified produce reaches the market. Every product undergoes
          validation and tracking, building trust and satisfaction among buyers. Our commitment to quality
          safeguards both farmers and consumers by providing transparency across the supply chain.
        </p>
      </div>

      <div className="role-footer">
        <a href="/">Back to Home</a>
      </div>

      <Footer /> {/* Footer included */}
    </div>
  );
};

export default QualityEnsuring;
