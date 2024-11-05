// src/Pages/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';  // Separate CSS for login

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box glass-effect">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
};

export default Login;