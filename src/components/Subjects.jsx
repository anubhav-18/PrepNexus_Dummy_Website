import React from "react";

const Subjects = () => (
  <section id="subjects" className="subjects">
    <div className="container">
      <div className="section-header">
        <div className="section-badge">📚 Subjects</div>
        <h2>Comprehensive coverage of all JEE and NEET subjects</h2>
        <p>AI-powered learning modules and practice questions for complete preparation</p>
      </div>
      <div className="subjects-grid">
        <div className="subject-card physics">
          <div className="subject-icon">⚛️</div>
          <h3>Physics</h3>
          <p>Master mechanics, thermodynamics, electromagnetism, and modern physics with conceptual clarity and problem-solving techniques.</p>
          <div className="subject-topics">
            <span>Mechanics</span>
            <span>Thermodynamics</span>
            <span>Electromagnetism</span>
            <span>Modern Physics</span>
          </div>
        </div>
        <div className="subject-card chemistry">
          <div className="subject-icon">🧪</div>
          <h3>Chemistry</h3>
          <p>Comprehensive coverage of organic, inorganic, and physical chemistry with reaction mechanisms and molecular understanding.</p>
          <div className="subject-topics">
            <span>Organic</span>
            <span>Inorganic</span>
            <span>Physical</span>
            <span>Reactions</span>
          </div>
        </div>
        <div className="subject-card maths">
          <div className="subject-icon">🔢</div>
          <h3>Mathematics</h3>
          <p>Advanced mathematics including calculus, algebra, geometry, and statistics with step-by-step problem-solving approaches.</p>
          <div className="subject-topics">
            <span>Calculus</span>
            <span>Algebra</span>
            <span>Geometry</span>
            <span>Statistics</span>
          </div>
        </div>
        <div className="subject-card biology">
          <div className="subject-icon">🧬</div>
          <h3>Biology</h3>
          <p>Complete NEET biology syllabus covering botany, zoology, genetics, ecology, and human physiology with detailed explanations.</p>
          <div className="subject-topics">
            <span>Botany</span>
            <span>Zoology</span>
            <span>Genetics</span>
            <span>Physiology</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Subjects;
