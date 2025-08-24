import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const CTA = () => {
  const statsRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const statEls = statsRef.current.querySelectorAll('.stat-number');
    const endValues = [50000, 4.8, 95];
    const suffixes = ["K+", "", "%"];
    statEls.forEach((el, i) => {
      gsap.fromTo(el, { innerText: 0 }, {
        innerText: endValues[i],
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          once: true
        },
        snap: { innerText: 1 },
        onUpdate: function () {
          if (i === 0) {
            el.innerText = Math.floor(el.innerText).toLocaleString() + "K+";
          } else if (i === 1) {
            el.innerText = (+el.innerText).toFixed(1);
          } else {
            el.innerText = Math.floor(el.innerText) + "%";
          }
        }
      });
    });
  }, []);

  return (
    <section id="download" className="cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-badge">🎉 Get Started Today</div>
          <h2>Join thousands of successful students</h2>
          <p>Start your AI-powered preparation journey today and transform your exam results with personalized learning.</p>
          <div className="app-download">
            <a href="#" className="download-btn">
              <i className="fab fa-google-play download-icon"></i>
              <div className="download-text">
                <strong>Get it on</strong>
                <small>Google Play</small>
              </div>
            </a>
            <a href="#" className="download-btn">
              <i className="fab fa-apple download-icon"></i>
              <div className="download-text">
                <strong>Download on</strong>
                <small>App Store</small>
              </div>
            </a>
          </div>
          <div className="cta-stats" ref={statsRef}>
            <div className="stat">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Downloads</div>
            </div>
            <div className="stat">
              <div className="stat-number">4.8</div>
              <div className="stat-label">Rating</div>
            </div>
            <div className="stat">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
