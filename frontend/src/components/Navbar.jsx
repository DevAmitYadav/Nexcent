import React from 'react';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">
            <img
              src="https://storage.googleapis.com/a1aa/image/23Sk9PlK0A9cE_sroqBEVhoTbrr2HlcOJa5E90rhmYM.jpg"
              alt="Company logo with green and white geometric shapes"
            />
            <span>Nexcent</span>
          </a>
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/service">Service</a>
          <a href="/feature">Feature</a>
          <a href="/product">Product</a>
          <a href="/testimonial">Testimonial</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="nav-actions">
          <a href="/login">Login</a>
          <a href="register" className="signup">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
