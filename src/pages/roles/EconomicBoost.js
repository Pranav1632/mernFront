import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import './RoleDetail.css';
import economicImg from "../images/image5.webp";

const EconomicBoost = () => {
  return (
    <div className="role-detail">
      <Navbar />

      <div className="role-header">
        <h1>ECONOMIC BOOST</h1>
        <p>Driving growth in agriculture through technology and innovation.</p>
      </div>

      <div className="role-content">
        <img src={economicImg} alt="Economic Boost" className="role-photo" />
        <p className="role-description">
          We aim to boost the agricultural economy through digital tools, smart analytics, and efficient supply chains
          that ensure better returns for all stakeholders.
        </p>
      </div>

      <div className="role-footer">
        <a href="/">Back to Home</a>
      </div>

      <Footer />
    </div>
  );
};

export default EconomicBoost;
