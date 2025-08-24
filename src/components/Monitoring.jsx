import React from "react";

const Monitoring = () => (
  <section id="monitoring" className="ai-monitoring">
    <div className="container">
      <div className="monitoring-content">
        <div className="monitoring-text">
          <div className="section-badge">🔍 Real-time Analysis</div>
          <h2>Analyzing your performance...</h2>
          <p>Our advanced AI system continuously analyzes your performance, learning patterns, and progress to provide personalized insights and recommendations.</p>
          <div className="monitoring-features">
            <div className="monitoring-feature">
              <div className="feature-check">✓</div>
              <div>
                <h4>Performance Tracking</h4>
                <p>Real-time monitoring of your scores, accuracy, and time management across all subjects and topics.</p>
              </div>
            </div>
            <div className="monitoring-feature">
              <div className="feature-check">✓</div>
              <div>
                <h4>Weak Area Detection</h4>
                <p>AI automatically identifies topics where you need more practice and creates focused study plans.</p>
              </div>
            </div>
            <div className="monitoring-feature">
              <div className="feature-check">✓</div>
              <div>
                <h4>Adaptive Content</h4>
                <p>Content difficulty and study material adapt based on your progress and learning speed.</p>
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
