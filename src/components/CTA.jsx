import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";


const CTA = () => {
  const statsRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const statEls = statsRef.current.querySelectorAll('.stat-number');
    const endValues = [50, 4.8, 95];
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
          <div className="cta-badge">✨ Start Your AI-Powered Prep Journey Today</div>
          <h2>Start Your AI-Powered Prep Journey Today</h2>
          <p>Don’t just prepare harder. Prepare smarter — with your personal AI tutor.</p>
          <div className="app-download">
            <a href="#" className="download-btn google-play">
              <div className="download-icon-container">
                <svg className="download-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#EA4335"/>
                  <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#FBBC04"/>
                  <path d="M20.16 10.81C20.5 11.08 20.5 12.92 20.16 13.19L17.89 14.54L15.46 12.11L17.89 9.68L20.16 10.81Z" fill="#4285F4"/>
                  <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="#34A853"/>
                </svg>
              </div>
              <div className="download-text">
                <span className="download-label">GET IT ON</span>
                <span className="download-store">Google Play</span>
              </div>
            </a>
            <a href="#" className="download-btn app-store">
              <div className="download-icon-container">
                <svg className="download-icon" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.85997 6.88C10.15 6.86 11.36 7.75 12.11 7.75C12.86 7.75 14.28 6.68 15.84 6.84C16.53 6.87 18.47 7.15 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="black"/>
                </svg>
              </div>
              <div className="download-text">
                <span className="download-label">Download on the</span>
                <span className="download-store">App Store</span>
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
