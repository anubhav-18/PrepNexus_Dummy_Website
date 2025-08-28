import React from "react";
import { 
  FaComments, 
  FaBrain, 
  FaChartPie, 
  FaRoute, 
  FaRobot, 
  FaWallet,
  FaArrowRight
} from "react-icons/fa";

const Features = () => (
  <section id="features" className="features">
    <div className="container">
      <div className="section-header">
        <div className="section-badge">⚡ Smarter Learning, Powered by AI</div>
        <h2 className="section-title">Smarter Learning, Powered by AI</h2>
        <p className="section-subtitle">Everything you need for JEE & NEET — personalized and adaptive</p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
                                           <div className="feature-icon">
              <FaComments style={{ fontSize: '2rem', color: '#f5f5f5' }} />
            </div>
          <h3>AI Doubt Solver</h3>
          <p>Ask anything, get instant step-by-step explanations.</p>
          <div className="feature-arrow">
            <FaArrowRight style={{ fontSize: '1.2rem', color: '#f5f5f5' }} />
          </div>
        </div>
        <div className="feature-card">
                                           <div className="feature-icon">
              <FaBrain style={{ fontSize: '2rem', color: '#f5f5f5' }} />
            </div>
          <h3>Personalized Mocks</h3>
          <p>Every test is unique, tailored to your level.</p>
          <div className="feature-arrow">
            <FaArrowRight style={{ fontSize: '1.2rem', color: '#f5f5f5' }} />
          </div>
        </div>
        <div className="feature-card">
                                           <div className="feature-icon">
              <FaChartPie style={{ fontSize: '2rem', color: '#f5f5f5' }} />
            </div>
          <h3>Smart Analytics</h3>
          <p>See your strengths, weaknesses, and focus topics.</p>
          <div className="feature-arrow">
            <FaArrowRight style={{ fontSize: '1.2rem', color: '#f5f5f5' }} />
          </div>
        </div>
        <div className="feature-card">
                     <div className="feature-icon">
             <FaRoute style={{ fontSize: '2rem', color: '#f5f5f5' }} />
           </div>
          <h3>AI Study Planner</h3>
          <p>Daily study & revision schedule, created just for you.</p>
          <div className="feature-arrow">
            <FaArrowRight style={{ fontSize: '1.2rem', color: '#f5f5f5' }} />
          </div>
        </div>
        <div className="feature-card">
                     <div className="feature-icon">
             <FaRobot style={{ fontSize: '2rem', color: '#f5f5f5' }} />
           </div>
          <h3>24/7 Study Buddy</h3>
          <p>Your AI tutor is always awake — even at 3 AM.</p>
          <div className="feature-arrow">
            <FaArrowRight style={{ fontSize: '1.2rem', color: '#f5f5f5' }} />
          </div>
        </div>
        <div className="feature-card">
                     <div className="feature-icon">
             <FaWallet style={{ fontSize: '2rem', color: '#f5f5f5' }} />
           </div>
          <h3>Affordable for All</h3>
          <p>Quality prep shouldn’t be expensive. We keep it student-first.</p>
          <div className="feature-arrow">
            <FaArrowRight style={{ fontSize: '1.2rem', color: '#f5f5f5' }} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
