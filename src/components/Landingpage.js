// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Landingpage.css'; // Styling for the landing page

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <h2>"Cultivating a sustainable future"</h2>
          <Link to="/signup"> {/* Add Link to navigate to the signup page */}
            <button className="cta-btn" style={{ fontWeight: 'normal' }}>Get Started</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
