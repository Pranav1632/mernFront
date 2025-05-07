import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";         // ✅ Added this line
import Footer from "../components/Footer";         // ✅ Added this line
import "./SignupPage.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    category: "Farmer",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const isValidPhone = /^\d{10}$/.test(formData.phone);
    if (!isValidPhone) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      const response = await fetch("https://mernback-tlij.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup successful! Please login.");
        navigate("/signup-success");

      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (err) {
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <Navbar /> {/* ✅ Added Navbar */}

      <div className="signup-container">
        <h2>Signup to Krushak</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Farmer">Farmer</option>
            <option value="Merchant">Merchant</option>
            <option value="Company">Company</option>
          </select>
          <button type="submit">Signup</button>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>

      <Footer /> {/* ✅ Added Footer */}
    </>
  );
};

export default SignupPage;
