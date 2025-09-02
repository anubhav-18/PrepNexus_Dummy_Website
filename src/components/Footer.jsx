import React from "react";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '20px'
          }}>
            <div style={{
              position: 'relative',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
              borderRadius: '16px',
              padding: '8px',
              transition: 'all 0.3s ease'
            }}>
              <img 
                src="/images/ic_launcher.png" 
                alt="PrepNexus Logo" 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  filter: 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.3))',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.filter = 'drop-shadow(0 6px 20px rgba(59, 130, 246, 0.5)) brightness(1.1)';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.filter = 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.3))';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))';
                }}
              />
            </div>
            <span className="logo-text" style={{
              fontSize: '2rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #1e40af, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.5px'
            }}>PrepNexus</span>
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
