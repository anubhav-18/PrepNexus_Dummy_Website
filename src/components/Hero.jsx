// removed duplicate React import

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Typing effect helper
function useTypingBubbles(messages, typingSpeed = 30, delayBetween = 500) {
  const [displayed, setDisplayed] = useState(Array(messages.length).fill(""));
  const [current, setCurrent] = useState(0);
  const isMounted = React.useRef(true);
  const charIdxRef = React.useRef(0);
  useEffect(() => {
    isMounted.current = true;
    setDisplayed(Array(messages.length).fill(""));
    setCurrent(0);
    function typeMessage(msgIdx) {
      if (!isMounted.current || msgIdx >= messages.length) return;
      charIdxRef.current = 0;
      function typeChar() {
        if (!isMounted.current) return;
        setDisplayed((prev) => {
          const arr = [...prev];
          arr[msgIdx] = messages[msgIdx].slice(0, charIdxRef.current + 1);
          return arr;
        });
        if (charIdxRef.current < messages[msgIdx].length - 1) {
          charIdxRef.current++;
          setTimeout(typeChar, typingSpeed);
        } else {
          setTimeout(() => {
            setCurrent((c) => c + 1);
            typeMessage(msgIdx + 1);
          }, delayBetween);
        }
      }
      typeChar();
    }
    setTimeout(() => typeMessage(0), 400);
    return () => { isMounted.current = false; };
    // eslint-disable-next-line
  }, [messages, typingSpeed, delayBetween]);
  return { displayed, current };
}
// ...existing code...

const Hero = ({ onShowAuth }) => {
  const heroRef = useRef();
  const textRef = useRef();
  const buttonsRef = useRef();

  useEffect(() => {
    // GSAP entrance animations
    const tl = gsap.timeline();
    tl.from(textRef.current, { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" })
      .from(buttonsRef.current, { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4");
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="container hero-content">
        <div className="hero-text" ref={textRef}>
          <h1>
             Your Personal AI Tutor for JEE & NEET
          </h1>
          <p className="ai-desc">
            PrepNexus adapts to your strengths, weaknesses, and schedule. Get personalized mocks, instant doubt solving, and AI-crafted study plans — all in one app.
          </p>
          <div className="hero-buttons" ref={buttonsRef}>
            <a href="#download" className="btn btn-primary">
              <span>Start Free Trial</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#demo" className="btn btn-outline">
              <span>Watch Demo</span>
              <i className="fas fa-play"></i>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="achievement-showcase">
            {/* Floating Achievement Cards */}
            <div className="achievement-card rank-card">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-content">
                <h4>AIR 1-100</h4>
                <p>Students Achieved</p>
                <div className="achievement-number">2,847</div>
              </div>
            </div>
            
            <div className="achievement-card improvement-card">
              <div className="achievement-icon">📈</div>
              <div className="achievement-content">
                <h4>Score Boost</h4>
                <p>Average Improvement</p>
                <div className="achievement-number">+127</div>
              </div>
            </div>
            
            <div className="achievement-card time-card">
              <div className="achievement-icon">⚡</div>
              <div className="achievement-content">
                <h4>Study Time</h4>
                <p>Reduced by</p>
                <div className="achievement-number">40%</div>
              </div>
            </div>
            
            {/* Central Success Visualization */}
            <div className="success-center">
              <div className="success-ring">
                <div className="success-percentage">95%</div>
                <div className="success-label">Success Rate</div>
              </div>
              <div className="floating-elements">
                <span className="float-element">📚</span>
                <span className="float-element">🎯</span>
                <span className="float-element">⭐</span>
                <span className="float-element">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default Hero;

