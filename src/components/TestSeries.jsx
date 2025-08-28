import React from "react";

const TestSeries = () => (
  <section id="tests" className="test-series">
    <div className="container">
      <div className="section-header">
        <div className="section-badge">📝 Mocks That Adapt to You</div>
        <h2>Mocks That Adapt to You</h2>
        <p>No two students ever get the same test. Every mock is personalized to your level.</p>
      </div>
      <div className="test-grid">
        <div className="test-card">
          <div className="test-header">
            <div className="test-badge full-length">Adaptive</div>
            <div className="test-icon">🎯</div>
          </div>
          <h3>Unique adaptive mocks</h3>
          <p>Tailored difficulty based on your performance — every test is unique.</p>
          <div className="test-stats">
            <div className="test-stat">
              <div className="number">180</div>
              <div className="label">Minutes</div>
            </div>
            <div className="test-stat">
              <div className="number">75</div>
              <div className="label">Adaptive count</div>
            </div>
            <div className="test-stat">
              <div className="number">AI</div>
              <div className="label">Personalized</div>
            </div>
          </div>
        </div>
        <div className="test-card">
          <div className="test-header">
            <div className="test-badge neet">Focused</div>
            <div className="test-icon">🏥</div>
          </div>
          <h3>Chapter & topic tests</h3>
          <p>Practice specific chapters or topics with targeted sets built by AI.</p>
          <div className="test-stats">
            <div className="test-stat">
              <div className="number">60</div>
              <div className="label">Minutes</div>
            </div>
            <div className="test-stat">
              <div className="number">15–40</div>
              <div className="label">Questions</div>
            </div>
            <div className="test-stat">
              <div className="number">AI</div>
              <div className="label">Targeted</div>
            </div>
          </div>
        </div>
        <div className="test-card">
          <div className="test-header">
            <div className="test-badge subject">Weekly</div>
            <div className="test-icon">📚</div>
          </div>
          <h3>Common & scholarship tests</h3>
          <p>Weekly practice + leaderboard, and monthly PST scholarship tests.</p>
          <div className="test-stats">
            <div className="test-stat">
              <div className="number">90</div>
              <div className="label">Minutes</div>
            </div>
            <div className="test-stat">
              <div className="number">Varies</div>
              <div className="label">Questions</div>
            </div>
            <div className="test-stat">
              <div className="number">PST</div>
              <div className="label">Scholarship</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestSeries;
