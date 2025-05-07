import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import './RoleDetail.css';
import relationshipImg from "../images/image3.avif";

const BuildingRelationships = () => {
  return (
    <div className="role-detail">
      <Navbar />

      <div className="role-header">
        <h1>BUILDING RELATIONSHIPS</h1>
        <p>Connecting farmers with buyers to create trust and long-term success.</p>
      </div>

      <div className="role-content">
        <img src={relationshipImg} alt="Building Relationships" className="role-photo" />
        <p className="role-description">
          We build strong relationships between farmers and consumers, merchants, exporters, and retailers. Our platform
          bridges the gap to improve trust, transparency, and long-term collaboration.
        </p>
      </div>

      <div className="role-footer">
        <a href="/">Back to Home</a>
      </div>

      <Footer />
    </div>
  );
};

export default BuildingRelationships;
