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
          <p>PrepNexus — AI that learns with you, for you.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Features</h4>
          <a href="#features">AI Doubt Solver</a>
          <a href="#features">Personalized Mocks</a>
          <a href="#features">Smart Analytics</a>
          <a href="#features">AI Study Planner</a>
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
          <a href="#help">Help Center</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
      <div className="footer-bottom">
  <p>&copy; 2025 PrepNexus. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
