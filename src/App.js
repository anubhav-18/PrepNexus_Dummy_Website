

import './App.css';
import './DotGrid.css';
import './styles.css';
import DotGrid from './DotGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProgressDashboard from './components/ProgressDashboard';
import Monitoring from './components/Monitoring';
import TestSeries from './components/TestSeries';
import HowItWorks from './components/HowItWorks';
import Subjects from './components/Subjects';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Auth from './components/Auth';
import { useEffect, useState } from 'react';
import { revealOnScroll } from './components/ScrollReveal';

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
function App() {
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    // Animate all main sections on scroll
    revealOnScroll('section, .features, .ai-monitoring, .test-series, .how-it-works, .subjects, .testimonials, .cta', { stagger: true });

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
    <div className="App" style={{ minHeight: '100vh', background: '#f1f5f9', position: 'relative', overflow: 'hidden' }}>
      {showAuth ? (
        <Auth onBackToMain={() => setShowAuth(false)} />
      ) : (
        <>
          {/* Animated DotGrid Background */}
          <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
            <DotGrid
              dotSize={4}
              gap={17}
              baseColor="#d1d5db"
              activeColor="#1e293b"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>

          {/* Main Content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Navbar />
            <Hero onShowAuth={() => setShowAuth(true)} />
            <Features />
            <ProgressDashboard />
            <Monitoring />
            <TestSeries />
            <HowItWorks />
            <Subjects />
            <Testimonials />
            <CTA />
            <Footer />
            <BackToTop />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
