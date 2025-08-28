import React from 'react';
import PageWrapper from './PageWrapper';
import Navbar from './Navbar';
import Footer from './Footer';

// Example of how to use PageWrapper for future pages
const PageExample = () => {
  return (
    <PageWrapper>
      <Navbar />
      
      {/* Your page content goes here */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px 20px',
        minHeight: 'calc(100vh - 200px)' // Adjust based on navbar/footer height
      }}>
        <h1 style={{
          background: 'linear-gradient(135deg, #1e293b, #334155)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800,
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          Your Page Title
        </h1>
        
        <p style={{
          color: '#475569',
          fontSize: '1.1rem',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto 32px auto'
        }}>
          Your page description goes here. This is an example of how to use the PageWrapper component.
        </p>
        
        {/* Add your page content here */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ color: '#1e293b', marginBottom: '16px' }}>
            Content Section
          </h2>
          <p style={{ color: '#374151', lineHeight: 1.6 }}>
            This is where your main content goes. The PageWrapper automatically provides:
            <br />• Animated dot grid background
            <br />• Proper z-index layering
            <br />• Consistent styling across all pages
            <br />• Responsive design
          </p>
        </div>
      </div>
      
      <Footer />
    </PageWrapper>
  );
};

export default PageExample;
