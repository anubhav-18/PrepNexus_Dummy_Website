import React from 'react';
import DotGrid from '../DotGrid';

const PageWrapper = ({ children, className = '', style = {} }) => {
  return (
    <div 
      className={className}
      style={{
        minHeight: '100vh',
        background: '#F1F0E4',
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
    >
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
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
