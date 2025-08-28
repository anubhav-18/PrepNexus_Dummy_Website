import React from "react";

const Subjects = () => (
  <section id="subjects" className="subjects">
    <div className="container">
      <div className="section-header">
        <div className="section-badge">📚 Complete JEE & NEET Coverage, AI-Curated</div>
        <h2>Complete JEE & NEET Coverage, AI-Curated</h2>
        <p>Physics, Chemistry, Mathematics, and Biology — curated with AI for maximum retention</p>
      </div>
      <div className="subjects-grid">
        <div className="subject-card physics">
          <div className="subject-icon">⚛️</div>
          <h3>Physics</h3>
          <p>Mechanics, Thermodynamics, Modern Physics & more.</p>
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
          <p>Organic, Inorganic, and Physical Chemistry made simpler.</p>
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
          <p>Algebra, Calculus, Geometry, Probability, Statistics.</p>
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
          <p>Botany, Zoology, Genetics, Ecology, Human Physiology.</p>
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
