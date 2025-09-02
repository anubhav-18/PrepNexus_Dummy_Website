import React from "react";

const Monitoring = () => (
  <section id="monitoring" className="ai-monitoring">
    <div className="container">
      <div className="monitoring-content">
        <div className="monitoring-text">
          <h2>Learn Smarter with AI Insights</h2>
          <p>Our AI continuously analyzes your performance and guides you with actionable feedback.</p>
          <div className="monitoring-features">
            <div className="monitoring-feature">
              <div className="feature-check">✓</div>
              <div>
                <h4>“You’re strong in Mechanics but need practice in Organic Chemistry.”</h4>
                <p>We’ll create a focused practice set for Organic Chemistry today.</p>
              </div>
            </div>
            <div className="monitoring-feature">
              <div className="feature-check">✓</div>
              <div>
                <h4>“You solve Biology fast but often miss Genetics questions.”</h4>
                <p>Try this Genetics revision pack to improve accuracy.</p>
              </div>
            </div>
            <div className="monitoring-feature">
              <div className="feature-check">✓</div>
              <div>
                <h4>“Accuracy is improving; time management needs work.”</h4>
                <p>Practice timed quizzes to build speed without losing accuracy.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="monitoring-visual">
          <div className="ai-dashboard">
            <div className="dashboard-header">
              <div className="ai-avatar">🤖</div>
              <div>
                <h4>AI Analysis</h4>
                <p>Real-time performance tracking</p>
              </div>
            </div>
            <div className="progress-bars">
              <div className="progress-item">
                <div className="progress-label">
                  <span>Physics</span>
                  <span className="score">85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill physics" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-label">
                  <span>Chemistry</span>
                  <span className="score">72%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill chemistry" style={{width: '72%'}}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-label">
                  <span>Mathematics</span>
                  <span className="score">90%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill maths" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-label">
                  <span>Biology</span>
                  <span className="score">68%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill biology" style={{width: '68%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Monitoring;
