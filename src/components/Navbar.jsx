// removed duplicate React import


import React, { useEffect, useRef } from "react";

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
          <span className="logo-icon" role="img" aria-label="brain">🧠</span>
          <span className="logo-text">PrepNexus</span>
        </div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#monitoring">AI Monitor</a></li>
          <li><a href="#tests">Test Series</a></li>
          <li><a href="#subjects">Subjects</a></li>
          <li><a href="#testimonials">Reviews</a></li>
          <li><a href="#download" className="nav-cta">Get App</a></li>
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
