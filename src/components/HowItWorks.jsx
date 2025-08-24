import React from "react";

const HowItWorks = () => (
  <section className="how-it-works">
    <div className="container">
      <div className="section-header">
        <div className="section-badge">⚡ How It Works</div>
        <h2 >Our intelligent system works in three simple steps</h2>
        <p>Maximize your JEE/NEET preparation efficiency with AI-powered learning</p>
      </div>
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Analyze</h3>
            <p>Take our comprehensive diagnostic test. AI analyzes your current level across all subjects and identifies your unique learning profile.</p>
          </div>
          <div className="step-icon">📊</div>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Personalize</h3>
            <p>Get a custom study plan created by AI based on your strengths, weaknesses, available time, and target exam date. Adaptive and flexible.</p>
          </div>
          <div className="step-icon">🎯</div>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Optimize</h3>
            <p>AI tracks your progress in real-time, adjusts difficulty levels, recommends topics to study, and ensures optimal preparation strategy.</p>
          </div>
          <div className="step-icon">🚀</div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
