import React, { useState, useEffect } from 'react';
import DotGrid from '../DotGrid';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProgressDashboard from '../components/ProgressDashboard';
import Monitoring from '../components/Monitoring';
import TestSeries from '../components/TestSeries';
import HowItWorks from '../components/HowItWorks';
import Subjects from '../components/Subjects';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import StudentPricing from '../components/StudentPricing';

import Footer from '../components/Footer';
import Auth from '../components/Auth';
import { revealOnScroll } from '../components/ScrollReveal';

function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        right: 24,
        bottom: 32,
        zIndex: 9999,
        background: 'rgba(59,130,246,0.9)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: 48,
        height: 48,
        fontSize: 24,
        boxShadow: '0 4px 16px rgba(59,130,246,0.2)',
        cursor: 'pointer',
        display: window.scrollY > 200 ? 'block' : 'none',
        transition: 'opacity 0.3s',
        opacity: window.scrollY > 200 ? 1 : 0
      }}
      aria-label="Back to top"
      id="backToTopBtn"
    >
      ↑
    </button>
  );
}

const HomePage = () => {
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    // Animate main sections on scroll with better performance
    revealOnScroll('.features', { stagger: true });
    revealOnScroll('.ai-monitoring');
    revealOnScroll('.test-series');
    revealOnScroll('.how-it-works');
    revealOnScroll('.subjects');
    revealOnScroll('.testimonials');
    revealOnScroll('.student-pricing', { stagger: true });
    revealOnScroll('.cta');

    // Show/hide Back to Top button
    const handleScroll = () => {
      const btn = document.getElementById('backToTopBtn');
      if (btn) {
        if (window.scrollY > 200) {
          btn.style.display = 'block';
          btn.style.opacity = 1;
        } else {
          btn.style.opacity = 0;
          setTimeout(() => { btn.style.display = 'none'; }, 300);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App" style={{ minHeight: '100vh', background: '#f2f2f2', position: 'relative', overflow: 'hidden' }}>
      {showAuth ? (
        <Auth onBackToMain={() => setShowAuth(false)} />
      ) : (
        <>
          {/* Animated DotGrid Background */}
          <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
            <DotGrid
              dotSize={4}
              gap={20}
              baseColor="#d1d5db"
              activeColor="#1e293b"
              proximity={120}
              shockRadius={250}
              shockStrength={4}
              resistance={750}
              returnDuration={1.3}
            />
          </div>

          {/* Main Content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Navbar />
            <Hero onShowAuth={() => setShowAuth(true)} />
            <Features />
           {/*  <ProgressDashboard /> */}
            <Monitoring />
            <TestSeries />
            <HowItWorks />
            <Subjects />
            <Testimonials />
            <StudentPricing />
            <CTA />
            <Footer />
            <BackToTop />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
