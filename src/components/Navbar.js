// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <img src={process.env.PUBLIC_URL + '/images/farmpulse.png'} alt="FarmPulse Logo" className="navbar-logo" />
        <h1 className="navbar-name">FarmPulse</h1>
      </div>
      {!isMobile && (
        <nav className="navbar-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      )}
      <div className="navbar-buttons">
        <Link to="/signup">
          <button className="login-signup">Login/Signup</button>
        </Link>
        {isMobile && (
          <button className="mobile-menu-button">☰</button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
