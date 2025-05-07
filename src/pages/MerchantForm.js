import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./FormPage.css";
import "./MerchantForm.css";

const MerchantForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productName: "",
    productType: "",
    requiredQuantity: "",
    minPrice: "",
    maxPrice: "",
    productWeight: "",
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
      const response = await fetch("https://mernback-tlij.onrender.com/api/forms/merchant", {
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
        navigate("/merchant-success");
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
      <div className="form-container" style={{ backgroundColor: "#f8e8d3" }}>
        <h2>Merchant Form</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required readOnly />
          <input type="email" name="email" placeholder="Email(valid)" value={formData.email} onChange={handleChange} required readOnly />
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required readOnly />
          <input type="text" name="productName" placeholder="Required Product Name" value={formData.productName} onChange={handleChange} required />
          <input type="text" name="productType" placeholder="Product Type" value={formData.productType} onChange={handleChange} required />
          <input type="number" name="requiredQuantity" placeholder="Required Quantity(quintal)" value={formData.requiredQuantity} onChange={handleChange} required />
          <input type="number" name="minPrice" placeholder="Min expected Price(per Quintal)" value={formData.minPrice} onChange={handleChange} required />
          <input type="number" name="maxPrice" placeholder="Max expected Price(per Quintal)" value={formData.maxPrice} onChange={handleChange} required />
          <input type="text" name="productWeight" placeholder="Transportation(By Own,By Farmer..etc)" value={formData.productWeight} onChange={handleChange} required />
          <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required></textarea>
          <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default MerchantForm;
