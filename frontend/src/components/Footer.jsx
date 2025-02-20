import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Logo & Social Icons */}
          <div className="footer-section footer-logo-section">
            <div className="footer-logo">
              <img
                src="https://storage.googleapis.com/a1aa/image/Jr63SiVxx1_HjrexrQQu_2BLQMkB7eqAWBV7iuoq1-M.jpg"
                alt="Nexcent Logo"
              />
              <span>Nexcent</span>
            </div>
            <p>Copyright © 2020 Nexcent ltd. All rights reserved</p>
            <div className="footer-icons">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-dribbble"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help center</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="footer-section">
            <h3>Stay up to date</h3>
            <div className="footer-subscribe">
              <input type="email" placeholder="Your email address" />
              <button><i className="fas fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
