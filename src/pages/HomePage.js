import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import krushakLogo from './images/krushaklogo.jpg';
import CountUp from 'react-countup';

const HomePage = () => {
  const [rates, setRates] = useState([]);
  const [city, setCity] = useState("Satara");

  useEffect(() => {
    fetchRates();
  }, [city]);

  const fetchRates = async () => {
    try {
      const url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=10&filters[district]=${encodeURIComponent(city)}`;
      const response = await fetch(url);
      const data = await response.json();
      setRates(data.records || []);
    } catch (error) {
      console.error('Failed to fetch mandi rates:', error);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={krushakLogo} alt="Krushak Logo" className="logo-image" />
          <span className="logo-text">Krushak</span>
        </div>
        <ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/login">Login</Link></li>
  <li><Link to="/signup">Signup</Link></li>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/contact">Contact Us</Link></li> {/* ✅ Added */}
</ul>

      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Krushak</h1>
          <h2>Empowering for a better India's Agriculture Future</h2>
          
          <p>
            A fair price, excellent quality, and well-equipped marketplace platform.</p>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-box">
          <h2><CountUp end={500} duration={2} />+</h2>
          <p>Farmers Registered</p>
        </div>
        <div className="stat-box">
          <h2><CountUp end={300} duration={2} />+</h2>
          <p>Merchants Connected</p>
        </div>
        <div className="stat-box">
          <h2><CountUp end={150} duration={2} />+</h2>
          <p>Companies Partnered</p>
        </div>
      </section>

      {/* Role Cards Section */}
      <section className="card-section">
        <h2 className="section-title">Our Role</h2>
        <div className="card-container">
          {[
            {
              title: "SMOOTH PLATFORM",
              desc: "Our Aim Is To Provide Farmers Their Own Platform For Selling Their Crops At Worldwide.",
              link: "/roles/smooth-platform"
            },
            {
              title: "EXCELING THE MARKET",
              desc: "Our Aim Is to provide farmers their own market place.",
              link: "/roles/excelling-market"
            },
            {
              title: "BUILDING RELATIONSHIPS",
              desc: "We Build RELATIONSHIPS of farmers with direct consumers, merchants, sellers and exporters.",
              link: "/roles/building-relationships"
            },
            {
              title: "ECONOMIC BOOSTs",
              desc: "Empowering farming with technology, we create a sustainable and profitable future.",
              link: "/roles/economic-boost"
            },
            {
              title: "EMPOWERING FARMER",
              desc: "Empowering farmers through technology, market access, and real-time insights.",
              link: "/roles/empowering-farmer"
            },
            {
              title: "QUALITY ENSURING",
              desc: "Ensuring top-quality produce with verified sources and transparent processes.",
              link: "/roles/quality-ensuring"
            },
          ].map((card, i) => (
            <div className="role-card" key={i}>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <Link to={card.link} className="card-button">More..</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Crop Rates Section */}
      <section className="rates-section">
        <h2 className="section-title">Trending Crop Rates</h2>

        <div className="city-selector">
          <label htmlFor="city" className="city-label">Select City:</label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="city-dropdown"
          >
            <option value="Thane">Mumbai Suburban</option>
            <option value="Pune">Pune</option>
            <option value="Satara">Satara</option>
            <option value="Nashik">Nashik</option>
          </select>
        </div>

        <div className="rates-table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Crop</th>
                <th>Modal Price (₹/quintal)</th>
                <th>Market</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {rates.length > 0 ? (
                rates.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.commodity || "N/A"}</td>
                    <td>₹{item.modal_price || "N/A"}</td>
                    <td>{item.market || "N/A"}</td>
                    <td>{item.arrival_date || "N/A"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center' }}>Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Krushak</h3>
            <p>Connecting Farmers, Merchants & Companies across India.</p>
          </div>
          <div className="footer-right">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Krushak | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
