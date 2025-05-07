import React from 'react';
import { Link } from 'react-router-dom';
import './css/AboutPage.css';
import teacherImg from './images/facultyMBN.jpg';
import teacherImg2 from './images/facultyNDG.jpeg';
import pranavImg from './images/pranav2.jpg';
import johnImg from './images/aditya.jpg';
import janeImg from './images/krushna.jpg';
import rahulImg from './images/vinay.jpg';
import snehaImg from './images/shivam.jpg';
import visit1 from './images/visit1.jpg';
import visit2 from './images/visit2.jpg';
import visit3 from './images/visit3.jpg';
import visit4 from './images/visit4.jpg';
import visit5 from './images/visit5.jpg';
import visit6 from './images/visit6.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  const developers = [
    {
      name: "Pranav Gaikwad",
      role: "Developer",
      Age: "20",
      email: "pranavgaikwad1632@gmail.com",
      image: pranavImg
    },
    {
      name: "Aditya Hole",
      role: "Designer",
      Age: "19",
      email: "aadihole78@gmail.com",
      image: johnImg
    },
    {
      name: "Krushna Dhawale",
      role: "Web Data",
      Age: "19",
      email: "dhawalekrushna2113@gmail.com",
      image: janeImg
    },
    {
      name: "Vinay Gole",
      role: "Web Data",
      Age: "19",
      email: "vinaygole06@gmail.com",
      image: rahulImg
    },
    {
      name: "Shivam Dongare",
      role: "Project/Model manager",
      Age: "19",
      email: "shivamdongare1607@gmail.com",
      image: snehaImg
    },
  ];

  const visits = [
    { image: visit1, caption: "Conversation With Farmer" },
    { image: visit2, caption: "Understanding The Agriculture System" },
    { image: visit3, caption: "Interaction with Suppliers" },
    { image: visit4, caption: "Local Merchant and Workers" },
    { image: visit5, caption: "Designated Merchant Workshops" },
    { image: visit6, caption: "Understanding Wasted Of Product" },
  ];

  return (
    <div className="about-page">
      <Navbar />

      <header className="about-header">
        <h1>About Krushak</h1>
        <p>Your trusted partner in modern agriculture.</p>
      </header>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          Krushak aims to digitally connect Farmers, Merchants, and Companies
          across India. We empower them with real-time crop insights, transparent
          pricing, and a reliable trading platform.
        </p>
      </section>

      <section className="about-section">
        <h2>Meet Our Mentors</h2>

        <div className="mentor-card">
          <img src={teacherImg} alt="Prof. M.B. Nigade" className="mentor-photo" />
          <div className="mentor-info">
            <p><strong>Central Committee:</strong> Workshop</p>
            <p><strong>Nodal Officer:</strong> Prof. M.B. Nigade</p>
            <p><strong>Designation:</strong> Assistant Workshop Superintendent</p>
            <p><strong>Qualification:</strong> UG (Mechanical), M.E. (Digital Systems), pursuing PhD</p>
            <p><strong>Experience:</strong> 11 Years</p>
            <p><strong>Contact:</strong> +91 98815 09104</p>
            <p><strong>Email:</strong> mahesh.nigade@aissmsioit.org</p>
          </div>
        </div>

        <div className="mentor-card">
          <img src={teacherImg2} alt="Prof. N.D. Gaikwad" className="mentor-photo" />
          <div className="mentor-info">
            <p><strong>Central Committee:</strong> Workshop</p>
            <p><strong>Nodal Officer:</strong> Prof. N.D. Gaikwad</p>
            <p><strong>Designation:</strong> Assistant Workshop Superintendent</p>
            <p><strong>Qualification:</strong> -</p>
            <p><strong>Experience:</strong> -</p>
            <p><strong>Contact:</strong> +91 94210 55660</p>
            <p><strong>Email:</strong> -</p>
            <p><strong>Role:</strong> Innovations, Entrepreneurship, Skill Development, Placements, Automation, Consultancy</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Developer Section</h2>
        <div className="developer-grid">
          {developers.map((dev, index) => (
            <div key={index} className="developer-card">
              <img src={dev.image} alt={dev.name} className="developer-photo" />
              <div className="developer-info">
                <p><strong>Name:</strong> {dev.name}</p>
                <p><strong>Role:</strong> {dev.role}</p>
                <p><strong>Email:</strong> {dev.email}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Visits Section */}
      <section className="about-section">
        <h2>Our Visits</h2>
        <div className="visit-grid">
          {visits.map((visit, index) => (
            <div key={index} className="visit-card">
              <img src={visit.image} alt={`Visit ${index + 1}`} className="visit-photo" />
              <p className="visit-caption">{visit.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="about-footer">
        <Link to="/" className="back-home">← Back to Home</Link>
      </footer>

      <Footer />
    </div>
  );
};

export default AboutPage;
