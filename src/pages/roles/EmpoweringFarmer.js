import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import './RoleDetail.css';
import empowerImg from "../images/image4.avif";

const EmpoweringFarmer = () => {
  return (
    <div className="role-detail">
      <Navbar />

      <div className="role-header">
        <h1>EMPOWERING FARMER</h1>
        <p>Providing tools and insights to help farmers make smarter decisions.</p>
      </div>

      <div className="role-content">
        <img src={empowerImg} alt="Empowering Farmer" className="role-photo" />
        <p className="role-description">
          Empowering farmers through real-time insights, market access, logistics support, and transparency to help
          them make better-informed decisions.
        </p>
      </div>

      <div className="role-footer">
        <a href="/">Back to Home</a>
      </div>

      <Footer />
    </div>
  );
};

export default EmpoweringFarmer;
