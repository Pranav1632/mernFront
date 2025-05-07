import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";         // ✅ Added this line
import Footer from "../components/Footer";         // ✅ Added this line
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://mernback-tlij.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login Successful!");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        if (data.user.category === "Farmer") {
          navigate("/farmer-form");
        } else if (data.user.category === "Merchant") {
          navigate("/merchant-form");
        } else if (data.user.category === "Company") {
          navigate("/company-form");
        }
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <Navbar /> {/* ✅ Added Navbar */}

      <div className="login-container">
        <h2>Login to Krushak</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            Don’t have an account? <a href="/signup">Signup</a>
          </p>
        </form>
      </div>

      <Footer /> {/* ✅ Added Footer */}
    </>
  );
};

export default LoginPage;
