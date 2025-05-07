import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import './RoleDetail.css';
import excellingImg from "../images/image2.jpg";

const ExcellingMarket = () => {
  return (
    <div className="role-detail">
      <Navbar />

      <div className="role-header">
        <h1>EXCELLING THE MARKET</h1>
        <p>
          Empowering farmers with control over pricing and access to a fair, competitive marketplace.
        </p>
      </div>

      <div className="role-content">
        <img src={excellingImg} alt="Excelling Market" className="role-photo" />
        <p className="role-description">
          We aim to empower farmers with their own marketplace. This increases their control over pricing and ensures
          their produce reaches genuine buyers in a competitive and fair environment.
        </p>
      </div>

      <div className="role-footer">
        <a href="/">Back to Home</a>
      </div>

      <Footer />
    </div>
  );
};

export default ExcellingMarket;
