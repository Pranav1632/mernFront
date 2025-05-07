import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./FormPage.css";
import "./FarmerForm.css";

const FarmerForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cropName: "",
    cropType: "",
    quantity: "",
    productionArea: "",
    minPrice: "",
    maxPrice: "",
    deliveryMethod: "",
    address: "",
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setFormData((prev) => ({
        ...prev,
        name: savedUser.name || "",
        email: savedUser.email || "",
        phone: savedUser.phone || "",
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://mernback-tlij.onrender.com/api/forms/farmer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        alert("Form submitted successfully!");
        navigate("/farmer-success");
      } else {
        alert(data.message || "Error submitting form");
      }
    } catch (err) {
      setLoading(false);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container" style={{ backgroundColor: "#d3f8d3" }}>
        <h2>Farmer Form</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name(as per adhar)" value={formData.name} onChange={handleChange} required readOnly />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required readOnly />
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required readOnly />
          <input type="text" name="cropName" placeholder="Crop Name" value={formData.cropName} onChange={handleChange} required />
          <input type="text" name="cropType" placeholder="Crop Type" value={formData.cropType} onChange={handleChange} required />
          <input type="number" name="quantity" placeholder="Quantity(quintal)" value={formData.quantity} onChange={handleChange} required />
          <input type="number" name="productionArea" placeholder="Production Area(acres)" value={formData.productionArea} onChange={handleChange} required />
          <input type="number" name="minPrice" placeholder="Min Expected Price(per Quintal)" value={formData.minPrice} onChange={handleChange} required />
          <input type="number" name="maxPrice" placeholder="Max Expected Price(per Quintal)" value={formData.maxPrice} onChange={handleChange} required />
          <input type="text" name="deliveryMethod" placeholder="Transport Method(By Own,By Farmer..etc)" value={formData.deliveryMethod} onChange={handleChange} required />
          <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required></textarea>
          <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default FarmerForm;
