import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // CSS for styling the navbar

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <img src={process.env.PUBLIC_URL + '/images/farmpulse.png'} alt="FarmPulse Logo" className="navbar-logo" />
        <h1 className="navbar-name">FarmPulse</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="navbar-buttons">
        <Link to="/login">
          <button className="login-signup">Login</button>
        </Link>
        <Link to="/signup">
          <button className="login-signup">Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
