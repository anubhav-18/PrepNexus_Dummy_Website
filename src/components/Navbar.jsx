
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 40) {
        navRef.current.classList.add("scrolled");
      } else {
        navRef.current.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="nav-container">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="logo-container" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <img 
                src="/images/PREPZY TRANSPARENT.png" 
                alt="PrepNexus Logo" 
                className="logo-image"
                style={{
                  width: '48px',
                  height: '48px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              />
              <span className="logo-text" style={{
                fontSize: '1.6rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #1e40af, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.5px'
              }}>PrepNexus</span>
            </div>
          </Link>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><Link to="/#features" onClick={() => setIsMobileMenuOpen(false)}>Features</Link></li>
          <li><Link to="/#monitoring" onClick={() => setIsMobileMenuOpen(false)}>AI Tutor</Link></li>
          <li><Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link></li>
          <li><Link to="/#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Reviews</Link></li>
          <li><Link to="/#schools" onClick={() => setIsMobileMenuOpen(false)}>For Schools</Link></li>
          <li><Link to="/#download" className="nav-cta" onClick={() => setIsMobileMenuOpen(false)}>Start Free Trial</Link></li>
        </ul>
        <div 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
