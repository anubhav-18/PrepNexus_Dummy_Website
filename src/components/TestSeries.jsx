import React from "react";

const TestSeries = () => (
  <section id="tests" className="test-series">
    <div className="container">
      <div className="section-header">
        <div className="section-badge">📝 Test Series</div>
        <h2>Practice with AI-powered test series</h2>
        <p>Adaptive tests that help you prepare effectively for JEE and NEET exams</p>
      </div>
      <div className="test-grid">
        <div className="test-card">
          <div className="test-header">
            <div className="test-badge full-length">Full-length</div>
            <div className="test-icon">🎯</div>
          </div>
          <h3>JEE Mock Test</h3>
          <p>Full-length mock test with AI-powered question selection based on your preparation level.</p>
          <div className="test-stats">
            <div className="test-stat">
              <div className="number">180</div>
              <div className="label">Minutes</div>
            </div>
            <div className="test-stat">
              <div className="number">75</div>
              <div className="label">Questions</div>
            </div>
            <div className="test-stat">
              <div className="number">300</div>
              <div className="label">Marks</div>
            </div>
          </div>
        </div>
        <div className="test-card">
          <div className="test-header">
            <div className="test-badge neet">NEET</div>
            <div className="test-icon">🏥</div>
          </div>
          <h3>NEET Practice</h3>
          <p>Specialized NEET test with emphasis on Biology concepts and medical entrance patterns.</p>
          <div className="test-stats">
            <div className="test-stat">
              <div className="number">180</div>
              <div className="label">Minutes</div>
            </div>
            <div className="test-stat">
              <div className="number">180</div>
              <div className="label">Questions</div>
            </div>
            <div className="test-stat">
              <div className="number">720</div>
              <div className="label">Marks</div>
            </div>
          </div>
        </div>
        <div className="test-card">
          <div className="test-header">
            <div className="test-badge subject">Subject-wise</div>
            <div className="test-icon">📚</div>
          </div>
          <h3>Chapter Tests</h3>
          <p>Individual subject tests for focused practice in Physics, Chemistry, Mathematics, and Biology.</p>
          <div className="test-stats">
            <div className="test-stat">
              <div className="number">60</div>
              <div className="label">Minutes</div>
            </div>
            <div className="test-stat">
              <div className="number">25</div>
              <div className="label">Questions</div>
            </div>
            <div className="test-stat">
              <div className="number">100</div>
              <div className="label">Marks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestSeries;
