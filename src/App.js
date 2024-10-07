// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/Landingpage';
import Resources from './Pages/Resources';
import Community from './Pages/Community';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';  // Correct login import
import Signup from './Pages/Signup';  // Correct signup import

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />  {/* Login route */}
          <Route path="/signup" element={<Signup />} />  {/* Signup route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
