import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Stay Connected</h2>
        <p className="footer-description">
          Join our community and stay updated with the latest news and offers!
        </p>
        <div className="social-icons">
          <a href="#" className="social-icon">🌐</a>
          <a href="#" className="social-icon">📧</a>
          <a href="#" className="social-icon">📞</a>
        </div>
      </div>
      <div className="footer-shape"></div>
    </footer>
  );
};

export default Footer;