import React from "react";

const HowItWorks = () => (
  <section className="how-it-works">
    <div className="container">
      <div className="section-header">
        <h2>Our intelligent system works in three simple steps</h2>
        <p>Maximize your JEE/NEET preparation efficiency with AI-powered learning</p>
      </div>
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Analyze</h3>
            <p>Take a quick diagnostic test.</p>
          </div>
          <div className="step-icon">📊</div>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Personalize</h3>
            <p>Get a custom prep roadmap built by AI.</p>
          </div>
          <div className="step-icon">🎯</div>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Guide</h3>
            <p>Track progress, get daily AI recommendations, and stay on course.</p>
          </div>
          <div className="step-icon">🚀</div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
