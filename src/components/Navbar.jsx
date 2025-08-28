
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);

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
            <span className="logo-icon" role="img" aria-label="brain">🧠</span>
            <span className="logo-text">PrepNexus</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#monitoring">AI Tutor</a></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><a href="#testimonials">Reviews</a></li>
          <li><a href="#schools">For Schools</a></li>
          <li><a href="#download" className="nav-cta">Start Free Trial</a></li>
        </ul>
        <div className="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
