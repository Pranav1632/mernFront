import React, { useState } from 'react';
import './ContactPage.css';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://mernback-tlij.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong');
      }
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setStatus('Server error. Please try again later.');
    }
  };

  return (
    <div className="contact-page">
      <Navbar />

      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Have questions or suggestions? We'd love to hear from you.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {status && <p className="status-message">{status}</p>}
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
