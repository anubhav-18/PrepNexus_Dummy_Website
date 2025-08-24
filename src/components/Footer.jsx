import React from "react";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">🧠</span>
            <span className="logo-text">PrepNexus</span>
          </div>
          <p>Transforming education with artificial intelligence. Personalized learning for every student.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Features</h4>
          <a href="#features">AI Monitoring</a>
          <a href="#features">Adaptive Tests</a>
          <a href="#features">Personalized Plans</a>
          <a href="#features">24/7 AI Tutor</a>
        </div>
        <div className="footer-section">
          <h4>Subjects</h4>
          <a href="#subjects">Physics</a>
          <a href="#subjects">Chemistry</a>
          <a href="#subjects">Mathematics</a>
          <a href="#subjects">Biology</a>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
      <div className="footer-bottom">
  <p>&copy; 2025 PrepNexus. All rights reserved. Made with ❤️ for students.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
