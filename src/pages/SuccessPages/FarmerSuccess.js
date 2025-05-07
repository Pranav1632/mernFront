import React from "react";
import { Link } from "react-router-dom";

const FarmerSuccess = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎉 Farmer Form Submitted Successfully!</h1>
      <Link to="/" style={styles.button}>Go to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#d4edda",
    color: "#155724",
    padding: "40px",
    borderRadius: "10px",
    textAlign: "center",
    margin: "50px auto",
    maxWidth: "600px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
  }
};

export default FarmerSuccess;
